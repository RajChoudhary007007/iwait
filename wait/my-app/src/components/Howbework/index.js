import Group12 from "../../Assest/Group12.png";
import Group14 from "../../Assest/Group14.png";
import Group13 from "../../Assest/Group13.png";
import Group15 from "../../Assest/Group15.png";
import Group16 from "../../Assest/Group16.png";
import Group17 from "../../Assest/Group17.png";
import Group18 from "../../Assest/Group18.png";
import Header from "../Header";

import "./index.css";

const Howbework = () => (
  <>
<Header/>
  <div className="work-main-container">
    <div className="work-home">
      <div className="work-background">
        <h1 className="work-heading">Your time is our priority!</h1>
        <p className="work-description">
          A platform designed to meet your waiting needs
        </p>
        <button type="button" className="book-a-waiter">
          Book a Waiter
        </button>
      </div>

      <div className="work-footer-home">
        <div className="work-container-heading">
          <h1 className="work-heding">How we work</h1>
        </div>

        {/* start cercel */}
        <div className="cercel-container">
          <div className="left-rigth-conatiner">
            <div className="left-work-container">
              <div className="image-work-container">
                <img src={Group12} alt="icon" className="icon" />
              </div>
              <h1 className="cercel-heading">Choose the Date and Location</h1>
              <p className="cercel-description">
                On our website, you'll find an easy-to-use interface that allows
                you to select the desired date for chair hire. You can also
                specify the location where you want the chairs to be delivered.
              </p>
            </div>

            <div className="rigth-work-container">
              <div className="image-work-container">
                <img src={Group14} alt="icon" className="icon" />
              </div>
              <h1 className="cercel-heading">Confirm Your Booking</h1>
              <p className="cercel-description">
                Once you have chosen the date and location, simply proceed to
                the payment section to confirm your booking. We offer secure
                payment options to give you peace of mind.
              </p>
            </div>
          </div>

          <div className="left-rigth-conatiner">
            <div className="left-work-container-bottom">
              <div className="image-work-container">
                <img src={Group13} alt="icon" className="icon" />
              </div>
              <h1 className="cercel-heading">
                Delivery to Your Chosen LocationOn
              </h1>
              <p className="cercel-description">
                the agreed-upon date, our friendly staff will deliver the chairs
                directly to your specified location. We take care of the
                logistics, so you can focus on other important tasks.
              </p>
            </div>

            <div className="rigth-work-container-bottom">
              <div className="image-work-container">
                <img src={Group14} alt="icon" className="icon" />
              </div>
              <h1 className="cercel-heading">Collection by Our Staff</h1>
              <p className="cercel-description">
                When your rental period is complete, our team will coordinate
                the collection of the chairs from the same location. This
                ensures a hassle-free experience for you, allowing you to enjoy
                the convenience of our service.
              </p>
            </div>
          </div>
        </div>
        {/* end cercel */}

        <div className="work-container-heading">
          <h1 className="work-heding new-heading">Why choose us</h1>
        </div>

        <div className="image-container-or-text">
          <div className="container-home">
            <div className="image-container">
              <img src={Group15} alt="image" className="work-image" />
            </div>

            <div className="text-container">
              <h1 className="cercel-heading">Convenience</h1>
              <p className="cercel-description">
                We prioritize the security of your payment information,
                providing a safe and reliable payment experience.Professional
                Delivery and Collection: Our dedicated staff will handle the
                delivery and collection, ensuring a seamless and efficient
                service.
              </p>
            </div>
          </div>

          <div className="container-home">
            <div className="text-container">
              <h1 className="cercel-heading">Quality Chairs</h1>
              <p className="cercel-description">
                We offer comfortable and well-maintained chairs to enhance your
                experience.
              </p>
            </div>

            <div className="image-container">
              <img src={Group16} alt="image" className="work-image" />
            </div>
          </div>

          <div className="container-home">
            <div className="image-container">
              <img src={Group18} alt="image" className="work-image" />
            </div>

            <div className="text-container">
              <h1 className="cercel-heading">Dedicated Customer Support</h1>
              <p className="cercel-description">
                Our friendly customer support team is ready to assist you with
                any inquiries or concerns you may have throughout the
                process.Experience the convenience of our chair hire service and
                let us take care of the logistics. Choose iwait for your next
                important meeting that requires a long wait, gathering, or any
                occasion where comfortable seating is essential.
              </p>
            </div>
          </div>

          <div className="container-home">
            <div className="text-container">
              <h1 className="cercel-heading">Convenience</h1>
              <p className="cercel-description">
                Our online platform allows you to easily choose the date and
                location, giving you full control over the chair hire process.
              </p>
            </div>

            <div className="image-container">
              <img src={Group17} alt="image" className="work-image" />
            </div>
          </div>
        </div>
      </div>
      {/* end-footer-home */}
    </div>
  </div>
  </>
);
export default Howbework;
