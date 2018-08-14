import React, { Component } from 'react';

class Finder extends Component {
    constructor(props){
        super();

        this.state = {
            searchterm:'',
            startdate:'',
            enddate:'',
            numoccupants:'',
            desirednightsstayed:'',
        }
    
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render(){
        const { value, onChange } = this.props;
        return(
            <form>
                <input
                    type="text"
                    onChange={onChange}
                    placeHolder="Place or Keyword"
                    value={value}
                />

                <input
                    type="text"
                    onChange={onChange}
                    placeHolder="Date1 (mm/dd/yyyy)"
                    value={value}
                />

                <input
                    type="text"
                    onChange={onChange}
                    placeHolder="Date2 (mm/dd/yyyy)"
                    value={value}
                />

                <input
                    type="text"
                    onChange={onChange}
                    placeHolder="# people"
                    value={value}
                />

                <input
                    type="text"
                    onChange={onChange}
                    placeHolder="Desired # of Nights"
                    value={value}
                />
                <button
                    onclick=
                >
                </button>
            </form>
        );
    }

    onSubmit(){
        return();
    }

    onChange(event){
        this.setState.update({ [event.target.name] : event.target.value});
    }
}

export default Finder;
