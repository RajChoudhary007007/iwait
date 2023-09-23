import image4 from "../../Assest/image4.png";
import image5 from "../../Assest/image5.png";
import Header from "../Header";

import "./index.css";

const Aboutus = () => (
  <>
  <Header/>
  <div className="about-main-container">
    <div className="about-home">
      <div className="background-about">
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">
          At iwait, we believe that waiting should be a stress-free experience
        </p>
      </div>
      <div className="about-iawit">
        <div className="iawit-container">
          <h1 className="iwat-heding">About iwait</h1>
        </div>
        <div className="description-image-container">
          <div className="description">
            <p className="iwat-des">
              <span className="iwait-des-min">Welcome to iwait,</span> where we
              are dedicated to transforming the waiting experience into
              something exceptional. We understand that waiting can often be a
              frustrating and time-consuming part of our daily lives. That's why
              we have created a platform that aims to make your wait as
              effortless, comfortable, and convenient as possible. At iwait, we
              believe that waiting should be a stress-free experience. Our
              mission is to provide innovative solutions that meet your unique
              waiting needs.
            </p>
          </div>
          <div className="image-cont">
            <img className="image4" src={image4} alt="logo" />
          </div>
        </div>

        <div className="await-full-desc">
          <p className="iwat-des">
            Whether it's offering comfortable seating, a waiter to wait in line
            for you, or personalized services, we go the extra mile to ensure
            your satisfaction.With our chair rental service, you can hire a
            chair at an affordable price, giving you a comfortable place to sit
            for as long as you require. We take care of the delivery and
            collection, making the process seamless and hassle-free for you.
          </p>
        </div>

        <div className="description-image-container">
          <div className="image-cont">
            <img className="image4" src={image5} alt="logo" />
          </div>
          <div className="description">
            <p className="iwat-des">
              <span className="iwait-des-min">Our team,</span> Our team is
              comprised of dedicated professionals who are committed to
              enhancing your waiting experience. We prioritize your comfort and
              convenience, aiming to exceed your expectations with every
              interaction.
            </p>
          </div>
        </div>

        <div className="await-full-desc">
          <p className="iwat-des">
            We are passionate about creating a positive impact on your day,
            saving you valuable time and providing peace of mind during your
            wait. Your satisfaction is our utmost priority, and we continually
            strive to deliver outstanding service that leaves you feeling valued
            and cared for.Join us at iwait and let us transform your waiting
            experience. Discover the convenience, comfort, and reliability that
            we offer. Say goodbye to frustrating waits and hello to a new level
            of convenience and efficiency.We look forward to serving you and
            making your wait a truly exceptional one.
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
);
export default Aboutus;
