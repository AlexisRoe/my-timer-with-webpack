import "./header.css";
import { createElement } from "../utils/elements";
import Button from "./Button";

function Header() {

  const button = Button({className: "plusButton", innerText: "+"})


  const header = createElement("header", {
    className: "header",
    children: [button],
  });
  return header;
}

export default Header;
