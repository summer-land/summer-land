import React, { Component } from 'react';

import Campsite from "./Campsite"
import axios from 'axios';

import loader from "../assets/loader.gif";


const endpoint = "https://txolc09jb5.execute-api.us-east-2.amazonaws.com/dev/booksites";

class Loader extends Component {
    render(){
        return(
            <div className="Loader">
                <img className="loader-img" src={require ('../assets/loader.gif')}/>
                <h2>Loading... this can take 1-3 minutes to compile results.</h2>
            </div>
        );   
    }

}

export default Loader;
