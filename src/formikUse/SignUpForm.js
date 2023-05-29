// import React, { useState } from "react";
// import './sign.css'

// const SignUpForm =()=>{
//     const [user, setUser] = useState({
//         fistName:"" ,
//         lastName:"",
//         password:"",
//         confirmPassword:"",
//         mobileNumber:""
//        });
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // submit form data to backend or validate fields
//       };
//       const onChangeHandler =(e)=>{
//         setUser({...data,[e.target.name]:e.target.value})
//       }
//     return(
//         <div>
//         <form className="signup-form" onSubmit={handleSubmit}>
//       <div className="form-field">
//         <label htmlFor="firstName">First Name</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={firstName}
//           onChange={(e) => onChangeHandler(e)}
//         />
//       </div>
//       <div className="form-field">
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={lastName}
//           onChange={(e) => onChangeHandler(e)}
//         />
//       </div>
//       <div className="form-field">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => onChangeHandler(e)}
//       </div>
//       <div className="form-field">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => onChangeHandler(e)}
//         />
//       </div>
//       <div className="form-field">
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => onChangeHandler(e)}
//         />
//       </div>
//       <div className="form-field">
//         <label htmlFor="mobileNumber">Mobile Number</label>
//         <input
//           type="tel"
//           id="mobileNumber"
//           name="mobileNumber"
//           value={mobileNumber}
//           onChange={(e) => onChangeHandler(e)}
//         />
//       </div>
//       <button type="submit">Sign Up</button>
//     </form>

//         </div>
//     )
// }
// export default SignUpForm