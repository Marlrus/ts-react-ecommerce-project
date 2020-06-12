import React from 'react';

import {
   FormInputContainer,
   FormInputLabel,
   GroupContainer,
} from './form-input.styles';

interface FormInputProps {
   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   label?: string;
   name: string;
   type: string;
   value: string;
   required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
   handleChange,
   label,
   ...otherProps
}) => (
   <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
         <FormInputLabel
            className={otherProps.value.length ? 'shrink' : ''}
         >
            {label}
         </FormInputLabel>
      ) : null}
   </GroupContainer>
);

export default FormInput;
