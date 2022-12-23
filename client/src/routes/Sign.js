import React , {useState} from "react";
import { MdOutlineDomainVerification } from "react-icons/md";
import image from "../routes/image.png"
import { useNavigate } from "react-router-dom";
import "./Sign.css"
import axios from 'axios'

function Sign() {

  const [formData, setFormData] = useState({
    email:'',
    password: ""
  })

  // Submit Form
  const onSubmit = async (e) => {
    e.preventDefault()

    // axios to relate front with back
    const {data} = await axios.post("http://localhost:5000/login-user", {
      ...formData
    })

    if (data.status === "ok") {
      alert(data.message)
      handleSubmit()
    }
    else{
      alert(data.error)
    }
    
  }

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

// redirect to about
  const nav = useNavigate();
  const handleSubmit = () => {
    nav("/about");
  }

// redirect to Signup
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Signup");
  }

  return (
    <div className="signin">

      <div className="left_signin">
        <h1>pleased to see you again</h1>
        <p>sign un to unlock all of lqcode features</p>
        <div className="flex_1">
          <div>
            < MdOutlineDomainVerification className="icon_1"/>
            <p>master usefull skills</p>
          </div>
          <div>
            < MdOutlineDomainVerification className="icon_1"/>
            <p>improve learning outcomes</p>
          </div>
          <div>
            < MdOutlineDomainVerification className="icon_1"/>
            <p>share your knowledge</p>
          </div>
        </div>
        <img src={image} alt="" className="image"   />
      </div>

      <div className="right_signin">
        <form onSubmit={onSubmit} >
          <h1 className="center_log">sign in</h1>

          <label htmlFor="email">email :</label>
          <input required id="email" placeholder="email" type="email" name="email" onChange={onChange} value={formData.email} 	 />

          <label htmlFor="password">password :</label>
          <input  id="password" placeholder="password" name="password" type="password" required onChange={onChange} value={formData.password} />
          
          <button className="button_signup" >sign in</button>

          <span style={{display:"flex",justifyContent:"end", fontSize:"13px", marginTop:"20px" , cursor:"pointer"}}>elready have account? 
            <span style={{ color:"blue"}} onClick={handleClick } >sign up</span>
          </span>
        </form>
      </div>

    </div>
  );
}

export default Sign;
