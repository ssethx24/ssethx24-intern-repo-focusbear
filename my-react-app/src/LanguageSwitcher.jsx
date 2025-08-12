import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { t } = useTranslation();

  const change = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
      <span>{t('change_language')}:</span>
      <button onClick={() => change('en')}>English</button>
      <button onClick={() => change('es')}>Español</button>
    </div>
  );
}
        