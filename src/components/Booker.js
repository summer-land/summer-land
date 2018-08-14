import React, { Component } from 'react';

import Campsite from "./Campsite"

class Booker extends Component {
    constructor(props){
        super();
    }

    render(){
        const { rsp, params} = this.props;
        console.log(this.props);
        console.log("response response response");
        return(
            <div>
                {  (rsp)
                ? <div className="Booker">
                        <div className="parameter-tag-wrapper">
                            { params.searchterm 
                            ? 
                                <div className="parameter-tag">Searchterm:  {params.searchterm}</div>
                            : null
                            }
                            { params.startdate 
                            ? <div className="parameter-tag">Start Date:    {params.startdate}</div>
                            : null
                            }
                            { params.enddate 
                            ? <div className="parameter-tag">End Date: {params.enddate}</div>
                            : null
                            }
                            { params.numoccupants 
                            ? <div className="parameter-tag">People: {params.numoccupants}</div>
                            : null
                            }
                            { params.desirednightsstayed 
                            ? <div className="parameter-tag">Nights:    {params.desirednightsstayed}</div>
                            : null
                            }
                        </div>
                        <div className="campsites">
                            {rsp.map( (item, index) =>
                                    <Campsite
                                        key={index}
                                        StartDate={item.startDate}
                                        EndDate={item.endDate}
                                        SiteName={item.campgroundName}
                                        Url={item.url}
                                    />
                                )
                            }
                        </div>
                            
                    </div>
                    : null
                }
            </div>
        );
    }
}

export default Booker;
