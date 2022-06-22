import React from "react";
import{Routes, Route} from 'react-router-dom'
import List from "./components/List";
import Update from "./components/Update";
import Navi from "./components/Navi";
import ListItem from "./components/ListItem";


function App() {
    return (
        <React.Fragment>
            <Navi />
            <Routes>
                <Route path ='/' element={<List/>}/>
                <Route path ='/new' element= {<Update/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default App;