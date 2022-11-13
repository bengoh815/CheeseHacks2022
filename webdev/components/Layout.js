import NavBar from "../src/navBar/NavBar";
const layout = ({children}) => {
    return (  
        <div className="content">
            <NavBar/>
            {children}
        </div>

    );
}
 
export default layout;