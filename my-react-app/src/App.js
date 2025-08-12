// src/App.js
import { useEffect, useState } from 'react';
import HelloWorld from './components/HelloWorld';
import UserForm from './components/UserForm';
import { testPostRequest } from './api/testapi';
import { useTranslation, Trans } from 'react-i18next';

import UseCallbackDemo from './hooks-demo/UseCallbackDemo';
import UseMemoDemo from './hooks-demo/UseMemoDemo';
import UseEffectDemo from './hooks-demo/UseEffectDemo';

export default function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const { t, i18n } = useTranslation();

  const name = 'Aarav';
  const itemCount = 2;

  useEffect(() => {
    const params = { title: 'foo', body: 'bar', userId: 1 };
    testPostRequest(params)
      .then((data) => setApiResponse(data))
      .catch((err) => console.error('API error:', err));
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
        <button onClick={() => changeLanguage('es')} style={{ marginLeft: '0.5rem' }}>
          🇪🇸 Español
        </button>
      </div>

      {/* HelloWorld */}
      <section style={{ marginTop: '2rem' }}>
        <HelloWorld name="Focus Bear" />
      </section>

      {/* UserForm */}
      <section style={{ marginTop: '2rem' }}>
        <h2>{t('formTitle')}</h2>
        <UserForm />
      </section>

      {/* API Response */}
      <section style={{ marginTop: '2rem' }}>
        <h2>{t('apiResponse')}</h2>
        <pre>{apiResponse ? JSON.stringify(apiResponse, null, 2) : 'Loading...'}</pre>
      </section>

      {/* useCallback demo */}
      <section style={{ marginTop: '2rem' }}>
        <h2>useCallback demo</h2>
        <UseCallbackDemo />
      </section>

      {/* useMemo demo */}
      <section style={{ marginTop: '2rem' }}>
        <h2>useMemo demo</h2>
        <UseMemoDemo />
      </section>

      {/* useEffect demo */}
      <section style={{ marginTop: '2rem' }}>
        <h2>useEffect demo</h2>
        <UseEffectDemo />
      </section>
    </main>
  );
}
