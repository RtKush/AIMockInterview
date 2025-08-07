// import { SignUp } from "@clerk/clerk-react";

// export const SignUpPage = () => {
//   return <SignUp path="/signup" />;
// };


import { SignUp } from "@clerk/clerk-react";

export const SignUpPage = () => {
  return <SignUp redirectUrl="/generate" />;
};