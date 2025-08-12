// src/App.js
import React, { useEffect, useState } from 'react';
import HelloWorld from './components/HelloWorld';
import UserForm from './components/UserForm';
import { testPostRequest } from './api/testapi';
import { useTranslation, Trans } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const { t, i18n } = useTranslation();

  const name = 'Aarav';
  const itemCount = 2;

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
    <main style={{ fontFamily: 'system-ui', padding: '2rem' }}>
      {/* i18next translation examples */}
      <h1>{t('welcome', { name })}</h1>
      <p>{t('description')}</p>

      {/* pluralization */}
      <p>{t('item_count', { count: itemCount })}</p>

      {/* Example of <Trans> for rich content if needed */}
      <p><Trans i18nKey="description" /></p>

      {/* Language switcher buttons */}
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
        <button onClick={() => changeLanguage('es')} style={{ marginLeft: '0.5rem' }}>🇪🇸 Español</button>
      </div>

      {/* OR use separate component */}
      {/* <LanguageSwitcher /> */}

      {/* Existing HelloWorld component */}
      <section style={{ marginTop: '2rem' }}>
        <HelloWorld name="Focus Bear" />
      </section>

      {/* UserForm component */}
      <section style={{ marginTop: '2rem' }}>
        <h2>{t('formTitle')}</h2>
        <UserForm />
      </section>

      {/* API Response */}
      <section style={{ marginTop: '2rem' }}>
        <h2>{t('apiResponse')}</h2>
        <pre>{apiResponse ? JSON.stringify(apiResponse, null, 2) : 'Loading...'}</pre>
      </section>
    </main>
  );
}
