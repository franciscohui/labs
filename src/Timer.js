import React from "react";
import "./Timer.css";

export default function Timer() {
  let timeInterval;
  let flashInterval;
  let timeRemaining;

  function startTimer(initialTime) {
    timeRemaining = (initialTime - 1) * 60;
    timeInterval = setInterval(function() {
      decreaseTime();
    }, 1000);
  }

  function decreaseTime() {
    if (timeRemaining <= 0) {
      stopTimer();
    } else {
      timeRemaining -= 1;
      displayTime(timeRemaining)
      // console.log("Time Remaining " + timeRemaining);
    }
  }

  function displayTime(timeRemaining){
    const minutesRemaining = Math.round(timeRemaining / 60);
    const secondsRemaining = timeRemaining % 60;
    const timeRemainingReadable = minutesRemaining + ":" + secondsRemaining
    const timeElement = document.getElementById('remainingTime');
    timeElement.innerHTML = timeRemainingReadable;
    console.log(timeRemainingReadable);
  }

  function displayMessage(message){
    const messageElement = document.getElementById('remainingTime');
    messageElement.innerHTML = message;
  }

  function stopTimer() {
    clearInterval(timeInterval);
    flashInterval = setInterval(flash, 1500);
    displayMessage("00:00")
    console.log("Time's up");
  }

  function flash() {
    const flashElement = document.getElementById("remainingTime");
    flashElement.style.color =
      flashElement.style.color === "plum"
        ? "rosybrown"
        : "plum";
  }

  function setColor(color){
    const elementBackground = document.getElementById('remainingTime');
    elementBackground.style.color = color;
  }

  function resetTimer() {
    displayMessage("00:00");
    setColor("rosybrown");
    clearInterval(timeInterval);
    clearInterval(flashInterval);
  }

  return (
    <div className="timer">
      <div className="time-container">
        <div id="remainingTime">00:00</div>
        <div className="button-row">
          <button onClick={() => startTimer(5)}>5 min</button>
          <button onClick={() => startTimer(45)}>45 min</button>
          <button onClick={resetTimer}>RESET</button>
        </div>
      </div>
    </div>
  );
}
