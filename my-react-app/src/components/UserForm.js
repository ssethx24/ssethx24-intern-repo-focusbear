import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Formik + Yup User Form</h2>

      {/* Name Field */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Name:</label><br />
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: 'red', fontSize: '0.9rem' }}>{formik.errors.name}</div>
        )}
      </div>

      {/* Email Field */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email:</label><br />
        <input
          id="email"
          name="email"
          type="email"  // ✅ HTML5 validation
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red', fontSize: '0.9rem' }}>{formik.errors.email}</div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!formik.isValid || !formik.dirty}  // ✅ Disabled if invalid or untouched
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
