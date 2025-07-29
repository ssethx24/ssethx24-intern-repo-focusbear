import React, { useEffect, useState } from 'react';
import HelloWorld from './components/HelloWorld';
import UserForm from './components/UserForm';
import { testPostRequest } from './api/testapi';
import { useTranslation } from 'react-i18next';

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const params = { title: 'foo', body: 'bar', userId: 1 };

    testPostRequest(params)
      .then(data => setApiResponse(data))
      .catch(err => console.error('API error:', err));
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{t('title')}</h1>

      <HelloWorld name="Focus Bear" />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
        <button onClick={() => changeLanguage('es')} style={{ marginLeft: '0.5rem' }}>🇪🇸 Español</button>
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t('formTitle')}</h2>
        <UserForm />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t('apiResponse')}</h2>
        <pre>{apiResponse ? JSON.stringify(apiResponse, null, 2) : 'Loading...'}</pre>
      </section>
    </div>
  );
}

export default App;
