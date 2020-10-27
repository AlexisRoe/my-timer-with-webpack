import "./app.css";
import Header from "./components/Header";
import { createElement, styled } from "./utils/elements";

// const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const container = createElement("div", {
    className: "container",
    children: [],
  });
  return container;
}

export default App;
