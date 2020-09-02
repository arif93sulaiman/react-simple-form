import React, {useState} from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleFirstNameInputChange = (e) => {
    //to access event properties asynchronous way
    e.persist()
    setValues((values) => ({
      ...values, 
      firstName: e.target.value
    }))
  }

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(values){
      setShowSuccess(true)
    }
    setSubmitted(true)
  }
   return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="firstName"
          value={values.firstName}
          onChange = {handleFirstNameInputChange}
        />
        {submitted && !values.firstName && <span id="first-name-error">Please enter a first name</span>}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="lastName"
          value={values.lastName}
          onChange ={handleLastNameInputChange}
        />
        {submitted && !values.lastName && <span id="last-name-error">Please enter a last name</span>}

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="email"
          value={values.email}
          onChange ={handleEmailInputChange}
        />
        {submitted && !values.email && <span id="email-error">Please enter an email address</span>}
        <button type="submit">
          Register
        </button>
      </form>
      {showSuccess && <div >Success! Thank you for registering</div>}
    </div>
  );
}

export default App;
