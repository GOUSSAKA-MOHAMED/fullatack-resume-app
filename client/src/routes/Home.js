import React from "react";
import "./Sign.css";
import { useNavigate } from "react-router-dom";
import img from "../routes/Stock-Image-Study-Group.webp"
import DoneAllIcon from '@mui/icons-material/DoneAll';

function Home() {
  // send user to resume with button
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  }

  return (
    <>
      <div className="home_page">
        <h1>Create your professional CV</h1>
        <p>Fill out the form, upload your resume in minutes. </p>
        <button onClick={handleClick} >create cv</button>
      </div>

      <div className="landing_page">
        <div className="left_landing">
          <img src={img} alt="" />
        </div>
        <div className="right_landing">
          <div className="flex_1">
            <div style={{fontSize:"44px"}}>
            CV vs Resume: Key Differences to Choose Between the Two
            </div>
            <div>
              where prospects become contacts. CTAs could ask visitors to subscribe, download, fill out a form, share on social media, and more -- but, overall, CTAs are necessary for getting your audiences more engaged with your offering. To generate leads, CTAs should be bold and eye-catching, but most importantly, they need to effectively communicate value.
            </div>
          
              <div >
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
        </div>
      </div>

    </>
  );
}

export default Home;
