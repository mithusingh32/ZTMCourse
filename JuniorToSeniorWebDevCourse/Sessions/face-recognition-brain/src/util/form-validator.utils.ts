import { Dispatch, SetStateAction } from 'react';
import validator from 'validator';

export const validatePassword = (
  value: string,
  setPasswordError: Dispatch<SetStateAction<boolean>>,
  setPassword: Dispatch<SetStateAction<string>>,
) => {
  if (
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    }  || value === '')
  ) {
    setPasswordError(false);
  } else {
    setPasswordError(true);
  }

  setPassword(value);
};

export const validateReEntryOfPassword = (
  password1: string,
  password2: string,
  setReEntryPassword: Dispatch<SetStateAction<string>>,
  setPasswordReEntryError: Dispatch<SetStateAction<boolean>>,
) => {
  console.log(password2)
  if (password2 == '' || password1 === password2) setPasswordReEntryError(false)
  else setPasswordReEntryError(true)
  setReEntryPassword(password2);
};
