// src/App.js
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HelloWorld from './components/HelloWorld';
import UserForm from './components/UserForm';
import SimpleForm from './components/SimpleForm';

import { testPostRequest } from './api/testapi';
import { useTranslation, Trans } from 'react-i18next';

import UseCallbackDemo from './hooks-demo/UseCallbackDemo';
import UseMemoDemo from './hooks-demo/UseMemoDemo';
import UseEffectDemo from './hooks-demo/UseEffectDemo';

// Redux demo components
import Counter from './components/Counter';
import CounterMessage from './components/CounterMessage';

// Debugging practice components
import BuggyCounter from './bugs/BuggyCounter';
import FixedCounter from './fixed/FixedCounter';

// ---- Home page (your existing content) ----
function HomePage() {
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

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

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

      {/* Form List Demo */}
      <section style={{ marginTop: '2rem' }}>
        <h2>Form List Demo</h2>
        <SimpleForm />
      </section>

      {/* Debugging practice: Buggy vs Fixed counters */}
      <section
        style={{
          marginTop: '2rem',
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}
      >
        <div>
          <BuggyCounter />
        </div>
        <div>
          <FixedCounter />
        </div>
      </section>

      {/* Redux Toolkit demo */}
      <section style={{ marginTop: '2rem' }}>
        <h2>Redux Toolkit demo</h2>
        <Counter />
        <CounterMessage />
      </section>
    </main>
  );
}

// ---- Simple Profile page ----
function ProfilePage() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem' }}>
      <h1>Profile</h1>
      <p>This is your profile page. Add details later.</p>
    </main>
  );
}

// ---- App shell: nav + routes (BrowserRouter is in index.js) ----
export default function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: 12, padding: '12px 16px', borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}


