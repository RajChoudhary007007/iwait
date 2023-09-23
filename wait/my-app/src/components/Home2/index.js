import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import withus5 from "../../Assest/withus5.png";
import withus3 from "../../Assest/withus3.png";
import withus4 from "../../Assest/withus4.png";
import withus1 from "../../Assest/withus1.png";
import withus6 from "../../Assest/withus6.png";
import withus7 from "../../Assest/withus7.png";
import Header from "../Header";

import "./index.css";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Home = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDdi5PRTgJHX2V1MXNY2miatJPRcDPWgz4",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
     <Header />
    <div className="new-home-main-container">
      <div className="new-home">
        <div className="new-home-background">
          <h1 className="new-home-heading">Your time is our priority!</h1>
          <p className="new-home-description">
            A platform designed to meet your waiting needs
          </p>
          <button type="button" className="book-a-waiter">
            Book a Waiter
          </button>
        </div>

        <div className="lower-background">
          <p className="new-home-description des-color">
            A platform designed to meet your waiting needs
          </p>
          <button type="button" className="book-a-waiter btn-color">
            Get Started
          </button>
        </div>

        <div className="sec-lower-background">
          <div className="serch-container">
            <div className="searching-main-con">
              <input
                className="search-input11"
                placeholder="Quick Search"
                type="search"
              />
              <input
                className="search-input12"
                placeholder="Post Code"
                type="search"
              />
            </div>
            <div className="second-con">
              <input
                className="search-input13"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>

          <div className="map-container">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>

          <div className="work-with-us-container">
            <h1 className="work-with-us-heading">Work With Us</h1>
            <div className="width-set">
              <div className="work-with-us-mini">
                <div className="border-radius">
                  <img src={withus5} />
                </div>
                <p className="new-home-description des-color font-sizeing">
                  Get affordable Uber Auto rides with no haggling. Request Uber
                  Auto and ride comfortably around your city.Get affordable Uber
                  Auto rides with no haggling. Request Uber Auto and ride
                  comfortably around your city.
                </p>
                <button className="get-started" type="button">
                  Get Started
                </button>

                <div className="border-radius">
                  <img src={withus1} />
                </div>
                <p className="new-home-description des-color font-sizeing">
                  Elevate your waiting experience with our affordable chair
                  rental service. Simply hire one of our comfortable chairs for
                  as long as you need, ensuring a seat during your wait. We
                  offer convenient delivery and collection options to make it
                  hassle-free for you.
                </p>
                <button className="get-started" type="button">
                  Get Started
                </button>
              </div>

              <div className="work-with-us-mini">
                <div className="border-radius">
                  <img src={withus4} />
                </div>
                <p className="new-home-description des-color font-sizeing">
                  Book Rentals to save time with one car and driver for your
                  multi-stop trips. Book Rentals to save time with one car and
                  driver for your multi-stop trips. Book Rentals to save time
                  with one car and driver for your multi-stop trips.
                </p>
                <button className="get-started" type="button">
                  Get Started
                </button>

                <div className="border-radius">
                  <img src={withus3} />
                </div>
                <p className="new-home-description des-color font-sizeing">
                  Book Intercity to head outstation anytime in convenient and
                  affordable cars.Book Intercity to head outstation anytime in
                  convenient and affordable cars.Book Intercity to head
                  outstation anytime in convenient and affordable cars.
                </p>
                <button className="get-started" type="button">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div>
            <button type="button" className="book-a-waiter btn-color">
              More Services
            </button>
          </div>

          <div className="low-foo-container">
            <p className="new-home-description des-color font-sizeing">
              Book Rentals to save time with one car and driver for your
            </p>
            <div className="div-row-main-con">
              <div className="div-row">
                <img src={withus7} />
                <p className="new-home-description des-color font-sizeing">
                  With every safety feature and every standard in our Community
                  Guidelines, we're committed to helping to create a safe
                  environment for our users.
                </p>
              </div>
              <div className="div-row">
                <img src={withus6} />
                <p className="new-home-description des-color font-sizeing">
                  With every safety feature and every standard in our Community
                  Guidelines, we're committed to helping to create a safe
                  environment for our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default React.memo(Home);
