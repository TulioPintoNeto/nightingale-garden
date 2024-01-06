import React from 'react';
import styles from './styles.module.scss';
import { useInput } from 'globals/view/useInput';
import CN from 'classnames';

type InputProps = {
  id: string;
  inputControls: ReturnType<typeof useInput>;
  placeholder: string;
  type: string;
};

type TextAreaProps = Omit<InputProps, 'type'>;

function TextAreaInput({ id, inputControls, placeholder }: TextAreaProps) {
  return (
    <textarea
      aria-invalid={Boolean(inputControls.error)}
      aria-describedby={`${id}-msg`}
      className={CN({ [styles.error]: Boolean(inputControls.error) })}
      id={id}
      onBlur={() => inputControls.startValidation()}
      onChange={(e) => inputControls.onChange(e.target.value)}
      placeholder={placeholder}
      rows={8}
      value={inputControls.value}
    />
  );
}

export function Input({ type, id, inputControls, placeholder }: InputProps) {
  if (type === 'textarea') {
    return (
      <TextAreaInput
        id={id}
        inputControls={inputControls}
        placeholder={placeholder}
      />
    );
  }

  return (
    <input
      aria-invalid={Boolean(inputControls.error)}
      aria-describedby={`${id}-msg`}
      className={CN({ [styles.error]: Boolean(inputControls.error) })}
      id={id}
      placeholder={placeholder}
      onBlur={() => inputControls.startValidation()}
      onChange={(e) => inputControls.onChange(e.target.value)}
      type={type}
      value={inputControls.value}
    />
  );
}
