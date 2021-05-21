import React, { useState } from 'react';

const LengthText = ({ text, maxLength }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <h2> Hello Length Text</h2>
      <h1>Current state {hidden ? 'true' : 'false'}</h1>
      <span>
        {hidden && text && text.length
          ? `${text.substr(0, maxLength).trim()} ...`
          : text}
        {hidden ? (
          <button onClick={() => setHidden(false)}> read more</button>
        ) : (
          <button onClick={() => setHidden(true)}> read less</button>
        )}
      </span>
    </div>
  );
};

export default LengthText;
