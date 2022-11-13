import React, { useState } from "react";
import SearchBox from "./SearchBox";
import OutputBox from "./OutputBox";

export default class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            major1: '',
            major2: '',
        };
    }

    handleSubmit1 = (value) => {
        this.setState({major1: value});
    }

    handleSubmit2 = (value) => {
        this.setState({major2: value});
    }

    render () {
        return (
            <div>
                <h1>
                    Cross Listed Subject Searcher: 
                </h1>
                <SearchBox 
                    onCrossList1={this.handleSubmit1}
                    onCrossList2={this.handleSubmit2}
                />
    
                <OutputBox text={this.state.major1}/>
            </div>
        );
    }


}