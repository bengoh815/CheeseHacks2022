export default function Box() {
    return (<div>
        <form action = "/someurl" method = "get">
            <h1>
                Cross Listed Subject Searcher: 
            </h1>
            <div className = "field">
                <label for = "major">Major 1:</label>
                <input type = "text" id = "major" placeholder = "Enter your first major"></input>
            </div>
            <div className = "field">
                <label for = "major">Major 2:</label>
                <input type = "text" id = "major" placeholder = "Enter your second major"></input>
            </div>


        </form>
    </div>);
}