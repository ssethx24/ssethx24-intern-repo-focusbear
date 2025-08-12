// src/components/HelloWorld.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HelloWorld({ name }) {
  const { t } = useTranslation();

  // Use the "helloName" translation key from i18n.js
  return <h1>{t('helloName', { name })}</h1>;
}
