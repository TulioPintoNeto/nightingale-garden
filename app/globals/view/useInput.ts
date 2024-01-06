import { useState } from 'react';

export const useInput = (validation: (v: string) => string | null) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [validateInput, setValidateInput] = useState<boolean>(false);

  const onChange = (newValue: string) => {
    setValue(newValue);
    if (validateInput) {
      setError(validation(newValue));
    }
  };

  const reset = () => {
    setValue('');
    setError(null);
  };

  const startValidation = () => {
    setValidateInput(true);
    setError(validation(value));
  };

  return { error, onChange, reset, startValidation, validation, value };
};
