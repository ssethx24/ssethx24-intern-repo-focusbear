import React, { useEffect, useState } from 'react';
import HelloWorld from './components/HelloWorld';
import UserForm from './components/UserForm'; 
import { testPostRequest } from './api/testapi';

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const params = { title: 'foo', body: 'bar', userId: 1 };

    testPostRequest(params)
      .then(data => setApiResponse(data))
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Focus Bear</h1>

      <HelloWorld name="Focus Bear" />

      <section style={{ marginTop: '2rem' }}>
        <h2>Formik + Yup User Form</h2>
        <UserForm />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>API Response (POST request)</h2>
        <pre>{apiResponse ? JSON.stringify(apiResponse, null, 2) : 'Loading...'}</pre>
      </section>
    </div>
  );
}

export default App;
