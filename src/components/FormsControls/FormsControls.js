import React from 'react';
import style from './FormsControls.module.scss';

const Textarea = ({ input, meta, ...props }) => {
  const isError = meta.touched && meta.error;
  return (
    <div className={style.contactsForm}>
      <textarea className={style.contactsForm__input + ' ' + style.contactsForm__textarea + ' ' + (isError ? style.contactsForm__err : '')} {...input} {...props} />
      {isError && <p className={style.contactsForm__errorText}>{meta.error}</p>}
    </div>
  )
}

const Input = ({ input, meta, ...props }) => {
  const isError = meta.touched && meta.error;
  return (
    <div className={style.contactsForm}>
      <textarea className={style.contactsForm__input + ' ' + (isError ? style.contactsForm__err : '')} {...input} {...props} />
      {isError && <p className={style.contactsForm__errorText}>{meta.error}</p>}
    </div>
  )
}
export { Textarea, Input };