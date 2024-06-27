// App.tsx
import React from 'react';
import Router from './router/Router';
import { AuthProvider } from './providers/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
