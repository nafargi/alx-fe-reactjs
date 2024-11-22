import React, {useState} from 'react'


function RegistrationForm() {
   const [formData, setFormData] = useState({
     username: "",
     email: "",
     password: "",
   });

   const [errors, setErrors] = useState("");

   const handleChange = (e) => {  
    const {name, value} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
       }));
     };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setErrors("All fields are mandatory");
      return;

    }
    setErrors("");
    alert("Registration Successful");
};

  return (
    <div style={{ width: "300px", margin: "0 auto", textAlign: "center" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              style={{ width: "100%", padding: "5px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              style={{ width: "100%", padding: "5px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              style={{ width: "100%", padding: "5px" }}
            />
          </label>
        </div>
        {errors && <p style={{ color: "red" }}>{errors}</p>}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
      
    </div>
  )
}

export default RegistrationForm
