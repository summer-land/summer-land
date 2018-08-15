import React, { Component } from 'react';

import Booker from "./Booker";
import Loader from "./Loader";

import axios from "axios";

const endpoint = "http://ec2-18-191-219-27.us-east-2.compute.amazonaws.com:3000/booksites";

class Finder extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            accesstoken:this.props.accesstoken,
            searchterm:'',
            startdate:'',
            enddate:'',
            numoccupants:'',
            desirednightsstayed:'',
            response:null,
            searching:false
        }

        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render(){
        const { searchterm, startdate, enddate, numoccupants, desirednightsstayed, accesstoken, response, params, searching } = this.state;
        console.log(searching);
        return(
        <div>
            <div className="Finder">
            { !searching
            ? <div id="finder-area">
              <h2>Find a campsite!</h2>
              <form>
                  <div className="input-wrapper">
                    <span>key Term</span>
                    <input
                        name="searchterm"
                        type="text"
                        onChange={this.onChange}
                        placeholder="Place or Keyword"
                        value={searchterm}
                    />
                  </div>
                  <div className="input-wrapper">
                    <span>Start and End Date</span>
                    <input
                        name="startdate"
                        type="text"
                        onChange={this.onChange}
                        placeholder="Start (mm/dd/yyyy)"
                        value={startdate}
                    />
                    <input
                        name="enddate"
                        type="text"
                        onChange={this.onChange}
                        placeholder="End (mm/dd/yyyy)"
                        value={enddate}
                    />
                  </div>
                  <div className="input-wrapper">
                    <span>People</span>
                    <input
                        name="numoccupants"
                        type="text"
                        onChange={this.onChange}
                        placeholder="# people"
                        value={numoccupants}
                    />
                  </div>
                  <div className="input-wrapper">
                    <span>Nights</span>
                    <input
                        name="desirednightsstayed"
                        type="text"
                        onChange={this.onChange}
                        placeholder="Desired # of Nights"
                        value={desirednightsstayed}
                    />
                  </div>
                  <button className="submit-button bttn"
                    onClick={this.onClick}
                    type="button"
                  >
                    Find Sites
                  </button>
              </form>
            </div>
            : <Loader /> }
          </div>
        <div>
            { response ?
                <Booker
                    rsp={response}
                    params={params}
                />
            : null
            }
        </div>
        </div>
        );
    }

    onClick(){        
        let params = {
            accesstoken:this.state.accesstoken,
            searchterm:this.state.searchterm,
            startdate:this.state.startdate,
            enddate:this.state.enddate,
            numoccupants:this.state.numoccupants,
            desirednightsstayed:this.state.desirednightsstayed,
        };

        let searching = true;
        axios( { method: 'POST',
            url:endpoint,
            data: JSON.stringify(params),
            config : {headers: { 
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept,  application/json",
                "Content-Type": 'application/json'
            }}
        }).then( (rsp) => {
            let data = rsp.data;
            this.setState( {response: data, params:params, searching:false} );
        }).catch( error => {
            searching = false;
            this.setState({searching:false})
            console.log( error.response )
        });
        this.setState({searching:searching});
    }
    
    onChange(event){
      this.setState({ [event.target.name] : event.target.value});
    }

}

export default Finder;


