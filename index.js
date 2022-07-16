function App() {
  
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  
  const [submitted, setSubmitted] = React.useState(false);
  const [valid, setValid] = React.useState(false);
  
  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }  
  
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }  
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }
  
  const Header = () => {
    const title = "#5 Basic Registration Form";
    return <div class="header h1">{title}</div>;
  };

  const Ref = () => {
    const url = "https://youtu.be/8hU0I8rY4u4";
    return (
      <div class="ref">
        (Ref: <a href={url} target="_blank" rel="noreferrer">
           {url})
        </a>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Ref />
    <div class="container">

      <form className="register-form" onSubmit={handleSubmit} >
        {submitted & valid? <div className="success-message">Success! Thank you for registration!</div> : null}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstname" 
          value={values.firstName} 
          onChange={handleFirstNameInputChange} 
        />
        {submitted && !values.firstName ? <span>Please enter a first name.</span> : null}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastname" 
          value={values.lastName} 
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName ? <span>Please enter a last name.</span> : null }
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email" 
          value={values.email} 
          onChange={ handleEmailInputChange}
        />
        {submitted && !values.email ? <span>Please enter an email address.</span> : null}
        <button class="form-field" type="submit">
          register
        </button>
      </form>
    </div>
      </div>
  );
}

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
