import './App.css'
import TripList from "./componet/TripList.jsx";
//import {useState} from "react";


function App() {
    // const [view, setView] = useState(true);
    // console.log(view);

    return (
        <div className="App">
             <TripList/>
            {/*<button onClick={() => {*/}
            {/*    setView(false)*/}
            {/*}}>Hide list</button>*/}
        </div>
    )
}

export default App
