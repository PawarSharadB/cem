import React, { ChangeEventHandler } from 'react';
import { TextInputField } from 'evergreen-ui';

export type ITextFieldScreenProps = {
  id?: string;
  label: string;
  required?: boolean;
  description?: string;
  placeholder?: string;
  value?: string;
  onChange: (val: ChangeEventHandler<HTMLInputElement>, label: string) => void;
};

const TextFieldScreen: React.FC<ITextFieldScreenProps> = ({
  id,
  label,
  required = true,
  description,
  placeholder,
  value,
  onChange,
}): JSX.Element => {
  return (
    <div>
      <TextInputField
        onChange={(e: any) => onChange(e, label)}
        id={id}
        label={label}
        value={value}
        required={required}
        description={description}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextFieldScreen;
