import React, { useState } from 'react';

function Greeting() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h1>Welcome to Focus Bear!</h1>
      <button onClick={() => setShowMessage(true)}>Show Message</button>
      {showMessage && <p>Hello, user! 👋</p>}
    </div>
  );
}

export default Greeting;
