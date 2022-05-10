// export const signInErrors = {
//     'auth/wrong-password': 'Wrong password',
//     'auth/user-not-found': 'Wrong email or password',
//     'auth/user-disabled': 'Your account is disabled',
//     'auth/invalid-email': 'Invalid email',
// }

// export const signUpErrors = {
//     'auth/email-already-in-use': 'This email is already in use',
//     'auth/weak-password': 'Password must have at least 6 symbols',
//     'auth/invalid-email': 'Invalid email',
// }

export const signInErrors = (error: string): string => {
  switch (error) {
    case 'auth/wrong-password': return 'Wrong password';
    case 'auth/user-not-found': return 'Wrong email or password';
    case 'auth/user-disabled': return 'Your account is disabled';
    case 'auth/invalid-email': return 'Invalid email';
    default: return 'Error';
  }
};

export const signUpErrors = (error: string): string => {
  switch (error) {
    case 'auth/email-already-in-use': return 'This email is already in use';
    case 'auth/weak-password': return 'Password must have at least 6 symbols';
    case 'auth/invalid-email': return 'Invalid email';
    default: return 'Error';
  }
};
