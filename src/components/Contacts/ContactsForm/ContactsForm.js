import React from 'react';
import style from './contacts__form.module.scss';
import {ButtonContacts} from '../../Buttons/ButtonContacts/ButtonContacts';
import { reduxForm, Field } from 'redux-form';
import { requriedField } from '../../../modules/Validators/formValidations';
import { Textarea, Input } from '../../FormsControls/FormsControls';

class ContactsForm extends React.Component {
  render() {
      return (
        <form className={style.contacts__form} onSubmit={this.props.handleSubmit}>
          <label htmlFor='name' className={style.contacts__label}>Имя</label>
          <Field placeholder='Ваше имя' name='name' type='text' className={style.contacts__input} component={Input} validate={[requriedField,]}/>
          <label htmlFor='email' className={style.contacts__label}>Email</label>
          <Field placeholder={'Электронная почта'} name={'email'} type={'email'} className={style.contacts__input} component={Input} validate={[requriedField,]}/>
          <label htmlFor='number' className={style.contacts__label}>Телефон</label>
          <Field placeholder={'Телефонный номер'} name={'number'} type={'number' }className={style.contacts__input} component={Input}/>
          <label htmlFor='textarea' className={style.contacts__label}>Сообщение</label>
          <Field placeholder={'Напишите ваше сообщение мне'} name={'textarea'}  component={Textarea} validate={[requriedField,]}/>
          <ButtonContacts />
        </form>
      )
  }
}
const ReduxForm = reduxForm({
  form: 'contact'
})(ContactsForm)

const WraperForm = (props)=>{
  const onSubmit = (formData)=>{
  }
  return <ReduxForm onSubmit={onSubmit} />
}

export { WraperForm }