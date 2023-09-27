// import React from "react";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div>
//         <h3>INFORMATION</h3>
//         <div className="smlFoot">About us</div>
//         <div className="smlFoot">Carrers</div>
//         <div className="smlFoot">Driver safety</div>
//         <div className="smlFoot">Contact Us</div>
//         <div className="smlFoot">Terms of use</div>
//         <div className="smlFoot">Privacy Policy</div>
//       </div>
//       <div>
//         <h3>CONTAINER TRANSPORT</h3>
//         <div className="smlFoot">Convenience</div>
//         <div className="smlFoot">Location</div>
//         <div className="smlFoot">Live Unloads</div>
//         <div className="smlFoot">Side Loader Drops</div>
//         <div className="smlFoot">Imports and Exports</div>
//         <div className="smlFoot">50T Onsite Forklift</div>
//         <div className="smlFoot">Oversize, Overweight</div>
//         <div className="smlFoot">Dangerous Goods</div>
//         <div className="smlFoot">24/7 Operations</div>
//         <div className="smlFoot">Company Owned Fleet</div>
//       </div>
//       <div>
//         <h3>Complete warehousing solutions</h3>
//         <div className="smlFoot">Short & Long Term</div>
//         <div className="smlFoot">Indoor & Outdoor Storage</div>
//         <div className="smlFoot">Racked, Dry & Floor Stacked</div>
//         <div className="smlFoot">Distribution</div>
//         <div className="smlFoot">Import, Unpack, Pack, Ship</div>
//         <div className="smlFoot">Sub-Leasing</div>
//         <div className="smlFoot">Secure Facilities</div>
//         <div className="smlFoot">Barcode Scanning</div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import downArrow from "../Assets/downArrow.svg"
import upArrow from "../Assets/upArrow.svg"
import fb from "../Assets/facebook.svg"
import insta from "../Assets/insta.svg"
import x from "../Assets/x.svg"
import linkedin from "../Assets/linkedin.svg"

const Footer = () => {

  const [infoAccordian,setInfoAccordian] = useState(false)
  const [truckAccordian,setTruckAccordian] = useState(false)
  const [transportAccordian,setTransportAccordian] = useState(false)
  return (
    <div>
      <div className="footer">
        <div className="smlFoot">
          <h3>INFORMATION</h3>
          <div>About us</div>
          <div>Carrers</div>
          <div>Driver safety</div>
          <div>Contact Us</div>
          <div>Terms of use</div>
          <div>Privacy Policy</div>
        </div>
        <div className="smlFoot">
          <h3>CONTAINER TRANSPORT</h3>
          <div>Convenience</div>
          <div>Location</div>
          <div>Live Unloads</div>
          <div>Side Loader Drops</div>
          <div>Imports and Exports</div>
          <div>50T Onsite Forklift</div>
          <div>Oversize, Overweight</div>
          <div>Dangerous Goods</div>
          <div>24/7 Operations</div>
          <div>Company Owned Fleet</div>
        </div>
        <div className="smlFoot">
          <h3>Complete warehousing solutions</h3>
          <div>Short & Long Term</div>
          <div>Indoor & Outdoor Storage</div>
          <div>Racked, Dry & Floor Stacked</div>
          <div>Distribution</div>
          <div>Import, Unpack, Pack, Ship</div>
          <div>Sub-Leasing</div>
          <div>Secure Facilities</div>
          <div>Barcode Scanning</div>
        </div>
      </div>
      <div className="mobFooter">
        <div>
          <div>
            <p>INFORMATION</p>
            {infoAccordian ? <img onClick={()=>setInfoAccordian(false)} src={upArrow} /> :<img onClick={()=>setInfoAccordian(true)} src={downArrow} />}
          </div>
          {infoAccordian && <ul className="smlFoot">
            <li>About us</li>
            <li>Carrers</li>
            <li>Driver safety</li>
            <li>Contact Us</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>}
        </div>
        <div>
          <div>
            <p>TAXI & COURIER TRUCKS</p>
            {truckAccordian ? <img onClick={()=>setTruckAccordian(false)} src={upArrow} /> :<img onClick={()=>setTruckAccordian(true)} src={downArrow} />}
          </div>
          {truckAccordian && <ul className="smlFoot">
            <li>Versatile Fleet</li>
            <li>Safety & Training</li>
          </ul>}
        </div>
        <div>
          <div>
            <p>CONTAINER TRANSPORT</p>
            {transportAccordian ? <img onClick={()=>setTransportAccordian(false)} src={upArrow} /> :<img onClick={()=>setTransportAccordian(true)} src={downArrow} />}
          </div>
          {transportAccordian && <ul className="smlFoot">
            <li>Convenience</li>
            <li>Location</li>
            <li>Live Unloads</li>
            <li>Side Loader Drops</li>
            <li>Imports and Exports</li>
            <li>50T Onsite Forklift</li>
            <li>Oversize, Overweight</li>
            <li>Dangerous Goods</li>
            <li>24/7 Operations</li>
            <li>Company Owned Fleet</li>
          </ul>}
        </div>
        <hr className="ruler" />
        <center><b>Social Media</b></center>
        <div className="logos">
          <img src={fb} />
          <img src={x} />
          <img src={insta} />
          <img src={linkedin} />
        </div>
        <hr className="ruler" />
        <center>© 2014 Swift Transport. All rights reserved.</center>
      </div>
    </div>
  );
};

export default Footer;
