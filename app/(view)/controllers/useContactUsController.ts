import { contactEndpoint } from 'data/contactEndpoint';
import { inputValidations } from 'globals/view/inputValidations';
import { useInput } from 'globals/view/useInput';
import { useState } from 'react';

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

const useContactUsController = () => {
  const nameInput = useInput(textValidator('The name is required'));
  const emailInput = useInput(emailValidator);
  const messageInput = useInput(textValidator('The message is required'));
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [failure, setFailure] = useState<boolean>(false);

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

  const resetSuccess = () => setSuccess(false);
  const resetFailure = () => setFailure(false);
  const resetStatus = () => {
    resetSuccess();
    resetFailure();
  };

  const startValidateForm = () => {
    nameInput.startValidation();
    emailInput.startValidation();
    messageInput.startValidation();
  };

  const onSubmit = async () => {
    setLoading(true);
    resetStatus();
    startValidateForm();
    if (formHasError) {
      return;
    }

    try {
      await contactEndpoint({
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      });

      reset();
      setSuccess(true);
    } catch {
      setFailure(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    nameInput,
    emailInput,
    failure,
    loading,
    messageInput,
    onSubmit,
    reset,
    resetFailure,
    resetSuccess,
    success,
  };
};

export default useContactUsController;
