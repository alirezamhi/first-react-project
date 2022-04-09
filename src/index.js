import { render } from "@testing-library/react";
import Reat from "react";
import reactDom from "react-dom";
import style from "./index.css"
import { BrowserRouter } from "react-router-dom";
 
import App from "./App";
reactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,document.getElementById('root'));
