import React from "react";
import { FaEye ,FaLink,FaPaperclip} from 'react-icons/fa';
import "./Home.css";

const Home = () => {
    
    return (
        <div className="hero">
        <div className="container">
         <div className="content">
    <div className="col-1">
        <span><h1>This is THE ONE</h1></span>
        <h2><span className="p">The Best Marketing / Landing Page Template</span></h2>
       <p>Qusinque rhomus tempus sem sed ornare .Acnean vivwers ornare dulnec mollis Vestibulum in dul sed velit 
       conssequent Cum soclls naoique ponstius at magins ad parturticol montes.</p><br /><br />
      <div className="">
      <button><FaEye /> Learn More</button>
      <button><FaLink /> Our Privacy</button>
      </div> 
    </div>
    <div className="col-2">
    <div className="form-layout">
     <div className="form-container">
    <h2 className="register">Register Now ,it's Free</h2>
   <h4>Complete The Below Form to get instance access</h4>
                                
   <form action="">
      <input type="text"placeholder="Email" required />
       < input type=" text"placeholder ="User Name" required/>
        <input type="text" placeholder=" Password" required />
      <input type="text" placeholder="Confirm Password" required />    
        </form>
     </div>
                            
    <div className="form-footer">
    <p><input type="checkbox"></input>
     <span className="primary-color">Terms & Conditions</span>
    <button><FaPaperclip /> Register</button>
    </p>
     </div>
     </div>
     </div>
    </div>
    </div>    
    </div>
    )
  }

 export default Home;