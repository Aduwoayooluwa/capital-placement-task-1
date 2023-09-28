import React, { useReducer, useState } from 'react';
import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import DropDown from '../ui/dropdown/DropDown';
import TextField from '../ui/input/TextField';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import deleteIcon from '../../assets/icons/cancelIcon.png';
import ChoiceField from '../ui/input/ChoiceField';
import CheckboxComponent from '../ui/others/Checkbox';
import useUpsertForm from '../../hooks/usepsertForm';
import ToastNotification from '../others/ToastNotification';
import { initialFormData } from '../../api/UpsertFormData';
import { initialState } from '../../utils/reducers/personalQuestion';
import { questionReducer } from '../../utils/reducers/questions.reducer';

const data = [
  'Paragraph',
  'Short Answer',
  'Yes/No',
  'Dropdown',
  'Multiple choice',
  'Date',
  'Number',
  'File Upload',
  'Video Question',
];

type QuestionProps = {
  setCreateQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};

const Question = ({ setCreateQuestion }: QuestionProps) => {
  const { mutate, isLoading, error, isError } = useUpsertForm(initialFormData);
  const [state, dispatch] = useReducer(questionReducer, initialState);

  const handleSaveQuestion = () => {
    const formDataPayload = {
      questionType: state.questionType,
      questionText: state.questionText,
      choiceFieldText: state.choiceFieldText,
      maxChoices: state.maxChoices,
      disqualify: state.disqualify,
      otherOption: state.otherOption,
    };

    localStorage.setItem('questonField', JSON.stringify(formDataPayload));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_QUESTION_TEXT', payload: e.target.value });
  };

  const handleChoiceFieldText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_CHOICE_FIELD_TEXT', payload: e.target.value });
  };

  const handleOtherOptions = () => {
    dispatch({ type: 'TOGGLE_OTHER_OPTION' });
  };

  const handleDisqualifyCandidate = () => {
    dispatch({ type: 'TOGGLE_DISQUALIFY' });
  };

  const handleMaxChoices = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_MAX_CHOICES', payload: e.target.value });
  };

  const [questionType, setQuestionType] = useState<string>('Paragraph');

  const handleQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuestionType = e.target.value || 'Paragraph';

    dispatch({ type: 'SET_QUESTION_TYPE', payload: selectedQuestionType });

    setQuestionType(selectedQuestionType.toLowerCase());
  };

  return (
    <Stack borderRadius={'20px'} w={'full'} align={'start'}>
      <Box>
        {isError && (
          <ToastNotification message={error?.response?.data?.title} status={'error'} />
        )}
      </Box>
      <VStack px={'4'} w="full" alignItems={'start'}>
        <Text fontWeight={'semibold'}>Type</Text>
        <DropDown onSelectChange={handleQuestionType} type={data[0]} data={data} />
      </VStack>

      <VStack px={'4'} w="full" alignItems={'start'}>
        <Text fontWeight={'semibold'}>Question</Text>
        <TextField onChange={handleTextChange} placeholder="Type here" />
        {questionType === 'yes/no' && (
          <CheckboxComponent onChange={handleDisqualifyCandidate} label="Disqualify candidate if the answer is no" />
        )}
      </VStack>

      {(questionType === 'dropdown' || questionType === 'multiple choice') && (
        <VStack alignItems={'start'} px="4" w="full">
          <Text fontWeight={'semibold'}>Choice</Text>
          <ChoiceField onChange={handleChoiceFieldText} placeholder="Type here" />
          <CheckboxComponent onChange={handleOtherOptions} label='Enable "Other" option' />
          {questionType === 'multiple choice' && (
            <>
              <Box as="span" mt="7"></Box>
              <Text fontWeight={'semibold'}>Max choice allowed</Text>
              <TextField onChange={handleMaxChoices} placeholder="Enter number of choices allowed here" />
            </>
          )}
        </VStack>
      )}

      <HStack p={'4'} w="full" justify={'space-between'}>
        <HStack cursor={'pointer'} onClick={() => setCreateQuestion(false)}>
          <Image src={deleteIcon} alt="delete icon" />
          <Text fontWeight={'semibold'} textColor="#A80000" fontSize="15px">
            Delete question
          </Text>
        </HStack>
        <PrimaryButton isLoading={isLoading} onClick={() => {
          mutate();
          handleSaveQuestion();
        }} name={isLoading ? 'saving' : 'Save'} />
      </HStack>
    </Stack>
  );
};

export default Question;
