import { useState } from 'react';

export const useInput = (validation: (v: string) => string | null) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const onChange = (newValue: string) => {
        setValue(newValue);
        setError(validation(newValue));
    };

    const reset = () => {
        setValue('');
        setError(null);
    };

    return { error, onChange, reset, value };
};
