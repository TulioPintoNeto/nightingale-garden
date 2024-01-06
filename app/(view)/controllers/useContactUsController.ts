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
      if (!inputValidations.email(email)) {
        return 'The email is not valid';
      }

      return null;
    };

    const nameInput = useInput(textValidator('The name is required'));
    const emailInput = useInput(emailValidator);
    const messageInput = useInput(textValidator('The message is required'));

    const reset = () => {
        nameInput.reset();
        emailInput.reset();
        messageInput.reset();
    };

    return {
      nameInput,
      emailInput,
      messageInput,
      reset,
    };
};

export default useContactUsController;
