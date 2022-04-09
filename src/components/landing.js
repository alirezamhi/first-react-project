import React, { Component } from 'react';

import Banner from "./baner";
import Cards from "./cards";
import Search from "./search";
import Support from "./support";

class landing extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Cards/>
                <Search/>
                <Support/>
            </div>
        );
    }
}

export default landing;