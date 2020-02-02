import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../../FormsControls/FormsControls';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder='Название города' name='name' type='text' component={Input}/>
      <button type='submit'>Отправить запрос</button>
    </form>
  )
}
const ReduxForm = reduxForm({
  form:'cityForm'
})(Form)

const CityForm = (props)=>{
  //передать функцию из пропс
  const onSubmit =(formData)=>{console.log(formData)}
  return <ReduxForm onSubmit={onSubmit} />
}
export { CityForm };
