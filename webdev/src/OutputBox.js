import styles from "../styles/OutputBox.module.css"

export default function OutputBox(props) {
    return (
        <div className={styles.box}>
            <ul>
                {props.text.map(function(d, idx){
                    return (<li key={idx}>{d.courseSubject} {d.courseCode} {d.courseName}</li>)
                })}
            </ul>
        </div>
    );
}