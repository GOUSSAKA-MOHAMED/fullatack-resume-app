import React from "react";
import {useState} from "react";
import "./Edit.css"
import { useNavigate } from "react-router-dom";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';

function Edit() {
  // link image 
  const profilePIcDefault =
  "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  }


  // input field usestate
  const [FirstName , setName] = useState(" ");
  const [LastName , setLastName] = useState(" ");
  const [Zip , setZip] = useState(" ");
  const [img , setimg] = useState(profilePIcDefault);
  const [City , setCity] = useState(" ");
  const [State , setState] = useState(" ");
  const [date , setdate] = useState(" ");
  const [Email , setEmail] = useState(" ");
  const [Phone , setPhone] = useState(" ");
  const [info ,setInfo ] = useState(" ");
  const [Job ,setJob ] = useState(" ");
  const [Employer ,setEmployer ] = useState(" ");
  const [School ,setSchool ] = useState(" ");
  const [Location ,setLocation ] = useState(" ");
  const [Field ,setField ] = useState(" ");

  //convert img

  const fileReader = (e) =>{
    const reader = new FileReader()
    if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (event) => {
        setimg(event.target.result)
    }
}

  console.log(img)
  // form submit localStorage

  const handlesubmit = (e)=>{
    e.preventDefault()

    localStorage.setItem('First Name',FirstName)
    localStorage.setItem('LastName',LastName)
    localStorage.setItem('Zip',Zip)
    localStorage.setItem('City',City)
    localStorage.setItem('State',State)
    localStorage.setItem('Job',Job)
    localStorage.setItem('date',date)
    localStorage.setItem('Email',Email)
    localStorage.setItem('Phone',Phone)
    localStorage.setItem('info',info)
    localStorage.setItem('Employer',Employer)
    localStorage.setItem('School',School)
    localStorage.setItem('Location',Location)
    localStorage.setItem('Field',Field)
    localStorage.setItem('img', img)
  } 


  return (
    <div className="about">
      <div className="editing_form">
        <div className="profile_section">
          <p>Select Profile Picture :</p>
          <img src={ profilePIcDefault} alt="profile_pic" className="img_thumbnail" height={150} width={150} onChange={(e)=>setimg(e.target.value)} value={img} />
        </div>
        <div className="chese_img">
          <input className="form_controll" type="file" id="formFile" name="file"  onChange={fileReader} />
        </div>
      </div>
      <div className="input_form">
        <div >
          <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>setName(e.target.value)} value={FirstName} />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>setLastName(e.target.value)} value={LastName}/>
          <TextField id="outlined-basic" label="Zip code" variant="outlined" onChange={(e)=>setZip(e.target.value)} value={Zip}/>
        </div>
        <div>
          <TextField id="outlined-basic" label="City" variant="outlined" onChange={(e)=>setCity(e.target.value)} value={City}/>
          <TextField id="outlined-basic" label="State" variant="outlined" onChange={(e)=>setState(e.target.value)} value={State}/>
          <TextField id="outlined-basic"  type="date" onChange={(e)=>setdate(e.target.value)} value={date}/>
        </div>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" onChange={(e)=>setEmail(e.target.value)} value={Email}/>
          <TextField id="standard-number" label="Phone Number" type="number" InputLabelProps={{shrink: true}} variant="standard" onChange={(e)=>setPhone(e.target.value)} value={Phone}/>
        </div>
        <div>
          <TextareaAutosize aria-label="empty textarea" placeholder="Enter your Info" style={{ width: 600,height:200,marginLeft:20 }} onChange={(e)=>setInfo(e.target.value)} value={info}/>
        </div>

        <div>
          <TextField id="filled-textarea" label=" JOB TITLE" placeholder="Placeholder" multiline variant="filled" onChange={(e)=>setJob(e.target.value)} value={Job}/>
          <TextField id="filled-textarea" label=" EMPLOYER" placeholder="Placeholder" multiline variant="filled" onChange={(e)=>setEmployer(e.target.value)} value={Employer}/>
          <TextField id="filled-textarea" label=" SCHOOL NAME" placeholder="univercity of california" multiline variant="filled" onChange={(e)=>setSchool(e.target.value)} value={School} />
        </div>
       
       <div>
       <TextField id="filled-textarea" label=" SCHOOL LOCATION" placeholder="san francisco" multiline variant="filled" onChange={(e)=>setLocation(e.target.value)} value={Location}/>
        <TextField id="filled-textarea" label=" Field of Study" placeholder="Information technology" multiline variant="filled" onChange={(e)=>setField(e.target.value)} value={Field}/>
       </div>
        <button type="submit" onClick={(e) => {
          handlesubmit(e)
          handleClick()
        }}>submit</button>
      </div>
    </div>
  );
}

export default Edit;

