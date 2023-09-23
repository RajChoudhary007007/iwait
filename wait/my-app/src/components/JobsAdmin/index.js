import React, { useState } from 'react';

import thumb from "../../Assest/thumb.png";
import Vector from "../../Assest/Vector.png";

import HeaderAdmin from "../HeaderAdmin";
import SidebarAdmin from "../SidebarAdmin";

import "./index.css";

const JobsAdmin = () => {
  const [isActive, setIsActive] = useState(true);

  const handlerbtn = () => {
    setIsActive(true)
  }

  const handlerbtn1 = () => {
    setIsActive(false)
  }

  return (
    <>
      <HeaderAdmin />
      <div className="worker-home-container">
        <div className="worker-main-container">
          <SidebarAdmin />
          <div className="worker-home-rigth-container">

            <div className="myjob-main-container iwait-modify-cont">
              <button className={isActive ? "red" : "white"} onClick={handlerbtn}>i Waiter Services</button>
              <button className={!isActive ? "red" : "white"} onClick={handlerbtn1}>i Chair Services</button>
            </div>
             {/* i waiter button */}
            {isActive &&<div className='worker-home-rigth-container'>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="" />
                    <img src={Vector} alt="" />
                    <img src={Vector} alt="" />
                    <img src={Vector} alt="" />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} />
                    <img src={Vector} />
                    <img src={Vector} />
                    <img src={Vector} />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                  </div>
                </div>
              </div>

              <div className="buttom-container">
                <button type="button" className="load-more-btn">Load More...</button>
              </div>

            </div>}

            {/* i chair button */}
            {!isActive &&<div className='worker-home-rigth-container'>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading 
                    here.....................test.....................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="" />
                    <img src={Vector} alt="" />
                    <img src={Vector} alt="" />
                    <img src={Vector} alt="" />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} />
                    <img src={Vector} />
                    <img src={Vector} />
                    <img src={Vector} />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                  </div>
                </div>
              </div>

              <div className="myjob-main-container-item">
                <div className="my-job-description-con">
                  <h1 className="job-sub-heading">
                    Work Heading
                    here..........................................................

                  </h1>
                  <img src={thumb} alt="thumb" className="thumb" />
                </div>

                <div className="my-job-description-con2">
                  <h1 className="job-sub-heading">Time:(time applied for)</h1>
                  <p className="job-sub-description">Posted Time: 10 minutes ago</p>
                </div>

                <p className="job-sub-description">
                  Description of the user
                  here......................................................................................................................................................................
                </p>

                <p className="job-sub-description">
                  ........................................................................................................................(we
                  can keep limitation of description as in one line )
                </p>

                <p className="job-sub-description">
                  Applied: (no of workers applied for this job)
                </p>

                <p className="job-sub-description">
                  Payment: (Verified/Unverified)
                  Spent: $100
                </p>

                <div className="star-cont">
                  <div>
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                    <img src={Vector} alt="vector" />
                  </div>
                </div>
              </div>

              <div className="buttom-container">
                <button type="button" className="load-more-btn">Load More...</button>
              </div>

            </div>}
          </div>
        </div>
      </div>
    </>
  )
}
export default JobsAdmin;
