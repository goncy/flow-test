import React, {Component} from 'react';

import Button from './Button';
import SayAgain from './SayAgain';

const App = () => {
  return (
    <div>
      <Button title="Clickeame!" />
      <SayAgain message="Echo!" />
      <SayAgain message="Save the whales!" />
    </div>
  );
};

export default App;
