import React, {useState} from "react";
import styles from "../styles/SearchBox.module.css";

export default function SearchBox(props) {
    const [maj1, setMaj1] = useState('');
    const [maj2, setMaj2] = useState('');

    const handleChangeMaj1 = (event) => {
        setMaj1(event.target.value);
    }

    const handleChangeMaj2 = (event) => {
        setMaj2(event.target.value);
    }

    const handleSub = (event) => {
        props.onCrossList1(maj1);
        props.onCrossList2(maj2);
        event.preventDefault();
    }


    return (
        <div>
            <form className={styles} onSubmit={handleSub}>
            <label>Major 1: </label>
            <input type = "text" placeholder = "ie Math" value={maj1} onChange={handleChangeMaj1} required></input>
            <label>Major 2: </label>
            <input type = "text" placeholder = "ie. Computer Science" value={maj2} onChange={handleChangeMaj2} required></input>
            <button type="submit">Cross list!</button>
        </form>
        </div>
    );

}