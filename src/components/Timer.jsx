import React, { useEffect, useState } from "react";
import { getRemainingTime } from "./utility/timerLogic";
import { FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa";

const initialValues = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Timer = ({ timestamp }) => {
  const [timeLeft, setTimeLeft] = useState(initialValues);

  useEffect(() => {
    const intervalLog = setInterval(() => {
      updateTimeLeft(timestamp);
    }, 1000);
    return () => clearInterval(intervalLog);
  }, [timestamp]);

  const updateTimeLeft = (countdown) => {
    setTimeLeft(getRemainingTime(countdown));

    const flipObjects = document.getElementsByTagName("h1");
    console.log();

    handleFlip(flipObjects[3]);
    if (timeLeft.seconds == 59) handleFlip(flipObjects[2]);
    if (timeLeft.minutes == 59 && timeLeft.seconds == 59)
      handleFlip(flipObjects[1]);
    if (
      timeLeft.hours == 23 &&
      timeLeft.minutes == 59 &&
      timeLeft.seconds == 59
    )
      handleFlip(flipObjects[0]);
  };

  const handleFlip = (flipObject) => {
    flipObject.className = "flip";
    setTimeout(() => {
      flipObject.className = "";
    }, 900);
  };

  return (
    <main className="time">
      <img src="/bg-stars.svg" alt="" className="stars" />
      <h3>WE'RE LAUNCHING SOON</h3>
      <div className="main-container">
        <div className="wrapper">
          <div className="timer-container">
            <h1>{timeLeft.days}</h1>
            <h5>DAYS</h5>
          </div>
          <div className="container2"></div>
        </div>
        <div className="wrapper">
          <div className="timer-container">
            <h1>{timeLeft.hours}</h1>
            <h5>HOURS</h5>
          </div>
          <div className="container2"></div>
        </div>
        <div className="wrapper">
          <div className="timer-container">
            <h1>{timeLeft.minutes}</h1>
            <h5>MINUTES</h5>
          </div>
          <div className="container2"></div>
        </div>
        <div className="wrapper">
          <div className="timer-container">
            <h1>{timeLeft.seconds}</h1>
            <h5>SECONDS</h5>
          </div>
          <div className="container2"></div>
        </div>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook className="fb" />
        </a>
        <a href="https://www.pinterest.com/" target="_blank">
          <FaPinterest className="pt" />
        </a>
        <a href="https://www.instagram.com/jlb_me/" target="_blank">
          <FaInstagram className="ig" />
        </a>
      </div>
      <img src="/pattern-hills.svg" alt="" className="hills" />
    </main>
  );
};

export default Timer;
