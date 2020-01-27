const requriedField = (value)=>{
  if (value) {
    return undefined
  } 
  return 'Field is requiried'
  
}
const maxLength20 = (value)=>{
  if (value.length>20) {
    return undefined
  } 
  return 'Field good' 
  
}
export {requriedField};