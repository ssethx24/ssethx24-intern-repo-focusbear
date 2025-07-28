import React, { useEffect, useState } from 'react';
import HelloWorld from './components/HelloWorld';
import { testPostRequest } from './api/testapi';

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    // Example params to send in the POST request
    const params = { title: 'foo', body: 'bar', userId: 1 };

    testPostRequest(params)
      .then(data => setApiResponse(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <HelloWorld name="Focus Bear" />
      <div>
        <h3>API Response:</h3>
        <pre>{apiResponse ? JSON.stringify(apiResponse, null, 2) : 'Loading...'}</pre>
      </div>
    </div>
  );
}

export default App; 