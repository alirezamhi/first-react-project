import react, {Component}  from "react";
import Navbar from "./components/navbar";
import Banner from "./components/baner";
import Cards from "./components/cards";
class App extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <Banner/>
                <Cards/>
            </div>
        )
    }
}
export default App ;