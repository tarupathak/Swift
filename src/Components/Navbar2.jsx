// import React from "react";
// import "./Components.css";
// import telephone from "../Assets/telephone.svg";
// import { Link } from "react-router-dom";

// const Navbar2 = () => {
//   return (
//     <>
//       <div className="navbar2">
//         <div className="flexB">
//           <img src={telephone} style={{height: "3vw"}}/>
//           <p>Call Us 1300 779 438</p>
//         </div>
//         <div id="nav1">
//           <Link to="/whySwift">
//             <span className="navItem">
//               <u>WHY SWIFT TRANSPORT</u>
//             </span>
//           </Link>
//           <Link to="/">
//             <span className="navItem">FLEET</span>
//           </Link>
//           <span className="navItem">COMPANY POLICIES</span>
//           <span className="navItem">ABOUT US</span>
//           <span className="navItem">CONTACT US</span>
//         </div>
//         <div id="nav2">
//           <button className="navItem1" id="redBtn">
//             Swift Intermodal
//           </button>
//           <span className="navItem1">Container Transport Solution</span>
//           <span className="navItem1">Complete Warehousing Solution</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar2;


import React, { useState } from "react";
import "./Components.css";
import telephone from "../Assets/telephone.svg";
import { Link } from "react-router-dom";
import phone from "../Assets/call.svg"
import hamburger from "../Assets/hamburger.svg"

const Navbar2 = () => {

  const [navOpen,setNavOpen] = useState(false)

  return (
    <>
      <div className="navbar2">
        <div className="flexB">
          <img src={telephone} style={{height: "3vw"}}/>
          <p>Call Us 1300 779 438</p>
        </div>
        <div id="nav1">
          <Link to="/whySwift">
            <span className="navItem">
              <u>WHY SWIFT TRANSPORT</u>
            </span>
          </Link>
          <Link to="/">
            <span className="navItem">FLEET</span>
          </Link>
          <span className="navItem">COMPANY POLICIES</span>
          <span className="navItem">ABOUT US</span>
          <span className="navItem">CONTACT US</span>
        </div>
        <div id="nav2">
          <button className="navItem1" id="redBtn">
            Swift Intermodal
          </button>
          <span className="navItem1">Container Transport Solution</span>
          <span className="navItem1">Complete Warehousing Solution</span>
        </div>
      </div>
      <div className="mobNav">
        <div>
          <img src={phone} />
          <img onClick={()=>setNavOpen(!navOpen)} src={hamburger} />
        </div>
        {navOpen && <ul className="navList">
          <li><Link to="/whySwift">
              <span>WHY SWIFT TRANSPORT</span>
          </Link></li>
          <li>
            <Link to="/">
              <span>FLEET</span>
            </Link>
          </li>
          <li>COMPANY POLICIES</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>Container Transport Solution</li>
          <li>Complete Warehousing Solution</li>
          <li>
            <button style={{color:"black"}}>
              Swift Intermodal
            </button>
          </li>
        </ul>}
      </div>
    </>
  );
};

export default Navbar2;