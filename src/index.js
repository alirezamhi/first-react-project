import { render } from "@testing-library/react";
import Reat from "react";
import reactDom from "react-dom";
import style from "./index.css"
 
import App from "./App";
reactDom.render(<App/>,document.getElementById('root'));
