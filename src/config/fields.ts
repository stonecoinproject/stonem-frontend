export type IAuthInputField = {
  testID: string,
  type: string,
  label: string,
};

const loginInputFields: IAuthInputField[] = [
  {
    testID: 'email-input',
    type: 'email',
    label: 'Email Address',
  },
  {
    testID: 'password-input',
    type: 'password',
    label: 'Password',
  },
];

const signupInputFields: IAuthInputField[] = [
  {
    testID: 'email-input',
    type: 'email',
    label: 'Email Address',
  },
  {
    testID: 'password-input',
    type: 'password',
    label: 'Password',
  },
  {
    testID: 'password-input-confirm',
    type: 'password',
    label: 'Confirm Password',
  },
];

export default {
  loginInputFields,
  signupInputFields,
};
