
export default function OutputBox(props) {
    // TODO make sure object.courseName is correct
    return (
        <div>
            {/* {props.output.map((object) => {
                <p>{object.courseName}</p>
            })} */}
            {props.output}
        </div>
    );
}