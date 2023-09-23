import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import Header from "../Header";

import "./index.css";

const Iwaitservies = () => {
  const [value, setValue] = useState(new Date());
  const [value1, setValue1] = useState(new Date());

  return (
    <>
    <Header/>
    <div className="iWait-ser-main-container">
      <div className="iWait-ser-work-home">
        <div className="iWait-ser-work-background">
          <h1 className="iWait-ser-work-heading">I Wait</h1>
          <p className="iWait-ser-work-description">
            A platform designed to meet your waiting needs
          </p>
        </div>

        <div className="iWait-ser-container-heading">
          <p className="iWait-ser-heding">
            At iwait, we provide a unique line-waiting service that saves you
            time and frustration. Whether it's waiting in long queues at
            embassies, consulates, or during events like Black Friday, our
            dedicated staff is here to help. you can easily book our
            line-waiting service, choose the date and location, and we'll
            allocate one of our experienced staff members to take your place in
            the line.
          </p>
        </div>

        <div className="iwet-watch-container">
          <div className="iner-watch-container">
            <div className="iwait-watch-bun-container">
              <button className="terms-buton-black">I Wait Service</button>
              <button className="terms-buton-trans">I Chair Service</button>
            </div>

            <div className="watch-main-container">
              <p className="watch-des">
                Choose date and time to fix your I Wait service
              </p>
              <div className="date-cont">
                <DateTimePicker onChange={setValue} value={value} />
                <p className="watch-des color-black">To</p>
                <DateTimePicker onChange={setValue1} value={value1} />
              </div>
            </div>

          </div>
        </div>

        <div className="how-it-work-container">
          <h1 className="iWait-ser-work-heading">How It Works</h1>
          <div className="div-row-modi">
              <span className="span-color-modi">Book an iWating Service: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div> 

            <div className="div-row-modi">
              <span className="span-color-modi">Choose The Date And Place: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div>

            <div className="div-row-modi">
              <span className="span-color-modi">Staf Allocation: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div>

            <div className="div-row-modi">
              <span className="span-color-modi">Notification And Updates: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div>

            <div className="div-row-modi">
              <span className="span-color-modi">Why Choose Us: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div>

            <div className="div-row-modi">
              <span className="span-color-modi">Converince: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div>

            <div className="div-row-modi">
              <span className="span-color-modi">Professinal Staff: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div>

            <div className="div-row-modi">
              <span className="span-color-modi">Secure Booking: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div>

            <div className="div-row-modi">
              <span className="span-color-modi">First of its Kinds: </span>
              <p className="condi-des-ichair">
                You agree to use the rented chairs responsibly and for their
                intended purpose. Any damages, loss, or excessive wear and tear
                may result in additional charges.
              </p>
            </div>

        </div>
      </div>
    </div>
    </>
  );
};
export default Iwaitservies;
