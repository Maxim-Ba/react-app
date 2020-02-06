import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../../FormsControls/FormsControls';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder='Название города' name='name' type='text' component={Input}/>
      <button disabled={props.queryInProgressCity} type='submit'>Отправить запрос</button>
    </form>
  )
}
const ReduxForm = reduxForm({
  form:'cityForm'
})(Form)

const CityForm = (props)=>{
  const onSubmit =(formData)=>{props.getWetherCityThunk(formData.name)}
  return <ReduxForm onSubmit={onSubmit} queryInProgressCity={props.queryInProgressCity}/>
}
export { CityForm };
