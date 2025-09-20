import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-amber-950 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-amber-950 hover:bg-amber-900',
              card: 'shadow-lg',
              headerTitle: 'text-amber-950',
              headerSubtitle: 'text-gray-600'
            }
          }}
        />
      </div>
    </div>
  );
};

export default SignUpPage;