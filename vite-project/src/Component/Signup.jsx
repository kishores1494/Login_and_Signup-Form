import React, { useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
        alert("Registration Successful!");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Registration Failed. Try Again!");
      });
  };

  return (
    <div className="bor">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="user">
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your Username"
            autoComplete="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your Password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn1" type="submit">
          Register
        </button>
      </form>

      <h3>Already have an Account?</h3>
      <button className="btn">
        {" "}
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}

export default Signup;

// import React, { useState } from "react";
// import "../Styles/Login.css";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     axios
//       .post("http://localhost:3001/register", { name, email, password })
//       .then((result) => {
//         console.log(result);
//         alert("Registration Successful");
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Registration Failed. Try Again!");
//       });
//   };
//   return (
//     <>
//       <div className="bor">
//         <h2>Signup Form</h2>
//         <form action='/register'   onSubmit={handleSubmit}>
//           <div className="user">
//             <label>User Name</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="User name"
//               autoComplete="username"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your Emailid"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               autoComplete="new-password"
//               placeholder="Enter your Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               placeholder="Enter your Confirm Password"
//               autoComplete="new-password"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//         </form>

//         <button className="btn1" type="button">
//           Register
//         </button>

//         <h3>Already have an Account</h3>
//         <Link to="/login" className="btn" type="button">
//           Login
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Signup;
