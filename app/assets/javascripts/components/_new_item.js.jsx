const NewPost = (props) => {
  let formFields = {}

  //passing our event (e) as an argument will clear the fields after form submission

  return(
    <div>
    <input ref={input => formFields.message = input} placeholder='Enter the post'/>
    <button onClick={ () => props.handleFormSubmit(formFields.message.value)}>Submit</button>
    </div>
  )

}
