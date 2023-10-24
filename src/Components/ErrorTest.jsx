import React from 'react';

function ErrorTest() {
  const triggerError = () => {
    throw new Error('This is a test error.');
  };

  return (
    <div>
      <h1>Error Test Page</h1>
      <button onClick={triggerError}>Trigger Error</button>
    </div>
  );
}

export default ErrorTest;