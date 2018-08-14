import React, { Component } from 'react';
//import Finder from "./components/Finder";
import Finder from "./components/Finder";
import axios from "axios";
import './App.css';

const endpoint = "http://ec2-18-191-219-27.us-east-2.compute.amazonaws.com:3000/validatecode";

class App extends Component {
  constructor(props){
    super();
    
    this.state = {
        password:"",
        key:null
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

 render(){
    const { key, password } = this.state;
      return (
        <div className="App">
          <div className="page">
            <h1>SummerLand</h1>
            { key
              ? <div> 
                  <Finder
                    accesstoken={key}
                  />
                </div>
              : <div className="Booker">
                    <p>
                        Welcome to Summerland. A super simple applicaiton that allows you to book a campsite at a national park automatically. If you are here to see how the app works use the code 4444. Otherwise please contact Kevin and Michael at summahsummahland@gmail.com for access codes.
                    </p>
                  <form>
                        <input
                            className="input-area"
                            type="text"
                            name="password"
                            value={password}
                            onChange={this.onChange}
                        />
                      <button className="submit-button bttn"
                              onClick={this.onClick}
                              type="button"
                      >
                        Let's Book a Site
                    </button>
                  </form>
              </div>
            }
            
          </div>
        </div>
      );
  }

  onChange(event){
    this.setState({ [event.target.name]:event.target.value });
  }
  
  onClick(){
      
    let params = JSON.stringify({"password": "summerland"});
    //let params = {password:this.state.password}

    axios({
        method: 'POST',
        url: endpoint,
        data: params,
        config : {headers: { 
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Origin": "http://ec2-18-191-219-27.us-east-2.compute.amazonaws.com:3000/validatecode",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept,  application/json",
                "Content-Type": 'application/json'
            }}
      }).then((rsp) => {
         this.setState({key:rsp.data})
      }).catch((error) => {
          console.log( error.response )
      });
      /*
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://ec2-18-191-219-27.us-east-2.compute.amazonaws.com:3000/validatecode",
        "method": "POST",
        "headers": {
          "Cache-Control": "no-cache",
          "Postman-Token": "ef74191e-cfd6-45e9-8ad9-84387a763a71"
        },
        "data": "{\n\t\"password\":\"summerland\"\n}"
       }
       
       $.ajax(settings).done(function (response) {
        console.log(response);
       });
      */
  }
}

export default App;
