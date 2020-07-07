import React, {Component} from 'react';

class CountrySelect extends Component{
    constructor(props){
        super(props)
    }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        let arrayOfCountries = this.props.arrayOfCountries;
        let options = arrayOfCountries.map((data) =>
                <option 
                    key={data.id}
                    value={data.name}
                >
                    {data.name}
                </option>
            );
        
            return (
            <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
               
                {options}
           </select>
        )
    }
}

export default CountrySelect;