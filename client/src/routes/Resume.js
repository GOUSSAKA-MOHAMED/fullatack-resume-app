import {React , useRef} from "react";
import { useReactToPrint } from "react-to-print";
import "./Resume.css";

function Resume() {

  // print cv 
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  return (
    <div className="edit">
        <div className="contact" >
        <div ref={componentRef} className="info_cv">
          <div className="left_div">
            <img
            // The ternary operator is a simplified conditional operator like if / else.
              src={
                localStorage.getItem("img")
                  ? localStorage.getItem("img")
                  : profilePIcDefault
              }
                alt="profile_pic"
                className="img_cv"
                height={200}
                width={200}
            /> 

            <h4>
              First Name :{" "}
              {localStorage.getItem("FirstName")
                ? localStorage.getItem("FirstName")
                : ""}
            </h4> 

            <h4>
              Last Name :{" "}
              {localStorage.getItem("LastName")
                ? localStorage.getItem("LastName")
                : ""}
            </h4> 

            <h4>
              Email :{" "}
              {localStorage.getItem("Email")
                ? localStorage.getItem("Email")
                : ""}
            </h4> 

            { <h4>
              Phone :{" "}
              {localStorage.getItem("Phone")
                ? localStorage.getItem("Phone")
                : ""}
            </h4> }
                        
            <h4>
              Field:{" "}
              {localStorage.getItem("Field")
                ? localStorage.getItem("Field")
                : ""}
            </h4> 

          </div>
          
          <div className="center_div">
            <div className="flex">
              <div>
                <h4>
                  School :{" "}
                  {localStorage.getItem("School")
                  ? localStorage.getItem("School")
                  : ""}
                </h4>
              </div>

              <div>
                { <h4>
                  date :{" "}
                  {localStorage.getItem("date")
                    ? localStorage.getItem("date")
                    : ""}
                </h4>  }
              </div>
            </div>

            <div>
             { <h4>
                info : <br /> {" "}
                {localStorage.getItem("info")
                  ? localStorage.getItem("info")
                  : ""}
              </h4> }

              <div className="butt">
                  <h4>
                  Job :{" "}
                  {localStorage.getItem("Job")
                    ? localStorage.getItem("Job")
                    : ""}
                </h4> 
                
                <h4>
                  Employer :{" "}
                  {localStorage.getItem("Employer")
                    ? localStorage.getItem("Employer")
                    : ""}
                </h4> 
              </div>
            </div> 
          
          </div>

          <div className="right_div">
            
            { <h4>
              Location :{" "}
              {localStorage.getItem("Location")
                ? localStorage.getItem("Location")
                : ""}
            </h4>  }
            
            { <h4>
              Zip Code :{" "}
              {localStorage.getItem("Zip")
                ? localStorage.getItem("Zip")
                : "Zip"}
            </h4>  }

            { <h4>
              City :{" "}
              {localStorage.getItem("City")
                ? localStorage.getItem("City")
                : "City"}
            </h4>  }

            {<h4>
              State :{" "}
              {localStorage.getItem("State")
                ? localStorage.getItem("State")
                : "State"}
            </h4>  }

          </div> 

        </div>
      </div>
      <br />
      <br />
      
      <button onClick={handlePrint} className="print__button">  Print </button> 

    </div>
  
  );
}

export default Resume;
