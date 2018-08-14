import React, { Component } from 'react';

class Campsite extends Component {
    constructor(props){
        super();
    }

    render(){
        let { StartDate, EndDate, SiteName, Url } = this.props;
        console.log(this.props);
        return(
            <div className="campsite">
                <div>{SiteName}</div>
                <div>{StartDate} to {EndDate}</div>
                <div className="bookButton">
                    <a className="bttn"
                        onClick={this.onClick}
                        href={Url}
                    >
                        Book this cite.
                    </a>
                </div>
            </div>
        );
    }
}

export default Campsite;