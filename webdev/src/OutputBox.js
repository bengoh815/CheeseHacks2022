
export default function OutputBox(props) {
    // TODO make sure object.courseName is correct
    return (
        <div>
            {props.text.map(function(d, idx){
                return (<li key={idx}>{d.courseName}</li>)
            })}
        </div>
    );
}