import "./Timer.css";
import { createElement, styled } from "../utils/elements";

function Timer () {
    const timer = createElement ("div", {
        className: "timerContainer"
    })

    const progress = createElement("progress", {
        className: "progress",
        max: "100",
        value: "70",
        id: "progress"
      })

      const titel = createElement("h2", {
          className: "name",
          innerText: "my Timer"
      })

      timer.append(progress, titel)

    return timer;
}

export default Timer;