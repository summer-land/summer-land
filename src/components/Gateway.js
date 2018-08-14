import React, { Component } from 'react';

import Campsite from "./Campsite"
import axios from 'axios';

const endpoint = "https://txolc09jb5.execute-api.us-east-2.amazonaws.com/dev/booksites";

class Gateway extends Component {
    constructor(props){
        super();

        this.state = { code:"" }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    render(){
        return(
            <div className="booker">
                <p>
                    Welcome to Summerland. A super simple applicaiton that allows you to book a campsite at a national park automatically. If you are here to see how the app works use the code 4444. Otherwise please contact Kevin and Michael at summahsummahland@gmail.com for access codes.
                </p>
                <form>
                    <input
                        type="text"
                        name="code"
                        value={code}
                        onChange={this.onChange}
                    />
                     <button className="submit-button bttn"
                             onClick={this.onClick}
                             type="button"
                    >
                    Check Token
                  </button>
                </form>
            </div>
        );   
    }

    onChange(event){
        this.setState({ [event.target.name] : event.target.value});
    }

    onClick(){

    }


}

export default Gateway;
