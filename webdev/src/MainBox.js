import React, { useState } from "react";
import SearchBox from "./SearchBox";
import OutputBox from "./OutputBox";
import data from "../../webscrap/placeholder.json"
import Router from 'next/router'

export default class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            major1: '',
            major2: '',
            output: [],
        };
    }

    handleSubmit = (value1, value2) => {
        const firstArray = data[value1]["courses"];
        const secondArray = data[value2]["courses"];
        var result = firstArray.filter(o => secondArray.some(({courseSubject, courseCode, courseName, description, requisites, credits}) => o.courseName === courseName ));

        this.setState({
            major1: value1,
            major2: value2,
            output: result,
        }, updater);
    }

    updater() {
        
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