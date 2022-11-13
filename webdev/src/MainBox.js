import React, { useState } from "react";
import SearchBox from "./SearchBox";
import OutputBox from "./OutputBox";

export default class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            major1: '',
            major2: '',
            output: [],
        };
    }

    handleSubmit = (value1, value2, result) => {
        this.setState({
            major1: value1,
            major2: value2,
            output: result,
        });
    }


    render () {
        return (
            <div>
                <h1>
                    Cross Listed Subject Searcher: 
                </h1>
                <SearchBox 
                    onCrossList={this.handleSubmit}
                />
    
                <OutputBox text={this.state.output}/>
            </div>
        );
    }


}