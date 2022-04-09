import React, {Component}  from "react";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Products from "./components/products";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import { Route , Switch } from "react-router-dom";
class App extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/products" component={Products}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/" component={Landing}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}
export default App ;