import React, {useState} from "react";
import styles from "../styles/SearchBox.module.css";
import data from "../../webscrap/placeholder.json"

export default function SearchBox(props) {
    const [maj1, setMaj1] = useState('');
    const [maj2, setMaj2] = useState('');
    const [majArr1, setMajArr1] = useState([]);
    const [majArr2, setMajArr2] = useState([]);
    const [result, setResult] = useState([]);


    const handleChangeMaj1 = (event) => {
        setMaj1(event.target.value);
        setMajArr1(maj1 in data ? data[maj1]["courses"] : []);
    }

    const handleChangeMaj2 = (event) => {
        setMaj2(event.target.value);
        setMajArr2(maj2 in data ? data[maj2]["courses"] : []);
        if (maj2 in data) {
            findCrossList();
        }
    }

    const findCrossList = () => {
        var sol = majArr1.filter(o => majArr2.some(({courseSubject, courseCode, courseName, description, requisites, credits}) => o.courseName === courseName ));
        setResult(sol);
    }

    const handleSub = (event) => {
        props.onCrossList(maj1, maj2, result);
        console.log("clicked");
        event.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSub}>
            <br></br>
            <label className="labelText">Major 1: </label>
            <input type = "text" placeholder = "ie Math" value={maj1} onChange={handleChangeMaj1} required className='box'></input>
            <br></br>
            <br></br>
            <br></br>
            <label className="labelText">Major 2: </label>
            <input type = "text" placeholder = "ie. Computer Science" value={maj2} onChange={handleChangeMaj2} required className='box'></input>
            <button type="submit" className="button">Cross list!</button>
        </form>
        </div>
    );

}