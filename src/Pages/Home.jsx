import React from "react";
import Navbar2 from "../Components/Navbar2";
import Moto from "../Components/Moto";
import Footer from "../Components/Footer";
import img from "../Assets/bgImgHome.svg";
import truck from "../Assets/truck.svg";

const Home = () => {
  return (
    <>
      {/* <-----------------Navbar-----------------> */}
      <Navbar2 />
      {/* <-----------------Home Background-----------------> */}
      {/* <-----------------Truck Image Part-----------------> */}
      <div className="home">
        <div className="redBack">
          <div className="blueBack">
            <h2 className="truckTxt">A fleet capable of much more than you’d think</h2>
            <p className="smlTruckTxt">
              With a diverse range of utes, trucks and semi-trailers, Swift
              Transport is capable of much more than you'd think. Combine our
              versatile fleet wth our industry leading technology and 'can-do'
              attitude for a winning logistics partnership with your
              organization.
            </p>
            <p className="smlTruckTxt2"><u>WHYSWIFT</u></p>
          </div>
          <img src={truck} alt="truck" />
        </div>
      </div>
      {/* <-----------------Moto-----------------> */}
      <Moto />
      {/* <-----------------Footer-----------------> */}
      <Footer />
    </>
  );
};

export default Home;
