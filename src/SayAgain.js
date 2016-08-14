// @flow
import React from 'react';

const SayAgain = (props: { message: string }) => {
  return (
    <div>
      <p>{props.message}</p>
      <p>{props.message}</p>
    </div>
  );
}

export default SayAgain
