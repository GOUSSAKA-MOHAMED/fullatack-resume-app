import React, { useState } from "react";
// material ui icon
import DoneAllIcon from '@mui/icons-material/DoneAll';
// import img 
import image from "../routes/image.png"
// router methode
import { useNavigate } from "react-router-dom";
// import css link 
import "./Sign.css"
// import axios to comunicate with backend
import axios from 'axios'

function Signup() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email:'',
    password: ""
  })

// Submit Form
const onSubmit = async (e) => {
  e.preventDefault()


  const { data } = await axios.post("http://localhost:5000/register", {
    ...formData
  })
  console.log("data >>", data)


  if (data.status === "ok") {
    alert("sign up successfully")
  }else{
    alert("email elready exist")
  }
}

// router to signup and sign in
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/Sign");
  }

  const onChange = (e) => {
    console.log(formData)
    setFormData({...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className="signin" >
      <div className="left_signin">
        <h1>pleased to see you again</h1>
        <p className="para_left_sign">sign un to unlock all of lqcode features</p>
        <div className="flex_1">
          <div>
            < DoneAllIcon className="icon_1"/>
            <p>master usefull skills</p>
          </div>
          <div>
            < DoneAllIcon className="icon_1"/>
            <p>improve learning outcomes</p>
          </div>
          <div>
            < DoneAllIcon className="icon_1"/>
            <p>share your knowledge</p>
          </div>
        </div>
        <img src={image} alt="" className="image"   />
      </div>

      <div className="right_signin">
        <form onSubmit={onSubmit} >
          <h1 className="center_log">sign up</h1>
          <label htmlFor="FirstName" >First Name :</label>
          <input id="FirstName" name="firstName" onChange={onChange} value={formData.firstName}  required placeholder="First Name" type="text" />

          <label htmlFor="FirstName" >Last Name :</label>
          <input id="LastName" name="lastName" onChange={onChange} value={formData.lastName}  required placeholder="Last Name" type="text" />

          <label htmlFor="email" >email :</label>
          <input id="email" name="email" onChange={onChange} value={formData.email} required placeholder="email" type="email" />

          <label htmlFor="password">password :</label>
          <input id="password"  placeholder="password" onChange={onChange} value={formData.password} type="password" name="password"  required />
          

          <button className="button_signup" >sign up</button>

          <span style={{display:"flex",justifyContent:"end",fontSize:"13px", marginTop:"20px" , cursor:"pointer"}}>elready have account? 
             <span style={{ color:"blue"}} onClick={handleClick} >sign in</span>
             
          </span>

        </form>

      </div>

    </div>
  );
}

export default Signup;
