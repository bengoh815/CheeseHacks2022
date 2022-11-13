import React from "react";
import OutputBox from "./OutputBox";
import data from "../../webscrap/placeholder.json"

export default class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            major1: '',
            major2: '',
            output: [],
        };
    }

    checkCrossList = () => {
        const firstArray = this.state.major1 in data ? data[this.state.major1]["courses"] : [];
        const secondArray = this.state.major2 in data ? data[this.state.major2]["courses"] : [];

        var sol = firstArray.filter(o => secondArray.some(({courseSubject, courseCode, courseName, description, requisites, credits}) => o.courseName === courseName ));
        this.setState({output: sol});
    }

    handleChangeMaj1 = (event) => {
        this.setState({major1: event.target.value});
    }

    handleChangeMaj2 = (event) => {
        this.setState({major2: event.target.value});
        this.checkCrossList();
    }

    handleSubmit = (event) => {
        this.checkCrossList();
        event.preventDefault();
    }


    render () {
        return (
            <div>
                <h1>
                    L&S Cross Listed Course Searcher: 
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <label className="labelText">Major 1: </label>
                    <input type = "text" placeholder = "ie. Math" value={this.state.major1} onChange={this.handleChangeMaj1} required className='box'></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <label className="labelText">Major 2: </label>
                    <input type = "text" placeholder = "ie. Computer Science" value={this.state.major2} onChange={this.handleChangeMaj2} required className='box'></input>
                    <button type="submit" className="button">Cross list!</button>
                </form>
    
                <OutputBox text={this.state.output}/>
            </div>
        );
    }


}