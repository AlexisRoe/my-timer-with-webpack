import "./app.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Button from "./components/Button";
import { createElement, styled } from "./utils/elements";

// const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const header = Header();

  const timer = Timer();
  const playBtn = Button({ className: "play", innerText: "▶︎" });
  const trashBtn = Button({ className: "trash", innerText: "♼" });
  const counter = createElement("form", {
    className: "time",
  });
  const labelHour = createElement("label", {
    for: "hour",
    innerText: "h",
  });
  const hour = createElement("input", {
    type: "tel",
    name: "hour",
    id: "hour",
    placeholder: "00",
    maxlength: "2",
    pattern: "[0-9][0-9]",
  });
  const labelMin = createElement("label", {
    for: "min",
    innerText: "m",
  });
  const min = createElement("input", {
    type: "tel",
    name: "min",
    id: "min",
    max: "60",
    placeholder: "00",
    maxlength: "2",
    pattern: "[0-9][0-9]",
  });
  const labelSec = createElement("label", {
    for: "sec",
    innerText: "s",
  });
  const sec = createElement("input", {
    type: "tel",
    name: "sec",
    id: "sec",
    max: "60",
    placeholder: "00",
    maxlength: "2",
    pattern: "[0-9][0-9]",
  });

  counter.append(hour, labelHour, min, labelMin, sec, labelSec);
  timer.append(playBtn, trashBtn, counter);

  const container = createElement("div", {
    className: "container",
    children: [header, timer],
  });
  return container;
}

export default App;
