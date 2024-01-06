import { inputValidations } from 'globals/view/inputValidations';
import { useInput } from 'globals/view/useInput';

const useContactUsController = () => {
  const textValidator = (msg: string) => (name: string) => {
    if (!inputValidations.minLength(name)) {
      return msg;
    }

    return null;
  };

  const emailValidator = (email: string) => {
    if (!email) {
      return null;
    }

    if (!inputValidations.email(email)) {
      return 'The email is not valid';
    }

    return null;
  };

  const nameInput = useInput(textValidator('The name is required'));
  const emailInput = useInput(emailValidator);
  const messageInput = useInput(textValidator('The message is required'));

  const formHasError = Boolean(
    nameInput.validation(nameInput.value) ||
      emailInput.validation(emailInput.value) ||
      messageInput.validation(messageInput.value)
  );

  const reset = () => {
    nameInput.reset();
    emailInput.reset();
    messageInput.reset();
  };

  const startValidateForm = () =>{
    nameInput.startValidation();
    emailInput.startValidation();
    messageInput.startValidation();
  }

  const onSubmit = () => {
    startValidateForm();
    if (formHasError) {
      return;
    }

    // TODO: submit form

    reset();
  };

  return {
    nameInput,
    emailInput,
    messageInput,
    onSubmit,
    reset,
  };
};

export default useContactUsController;
