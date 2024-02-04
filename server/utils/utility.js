// utility.js
export const isValidPassword = (password) => {
  // Add your password validation logic here
  // For example, requiring at least one special character
  return /[!@#$%^&*(),.?":{}|<>]/.test(password);
};
