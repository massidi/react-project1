import './css/app.css';
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {v4 as uuidv4} from "uuid";


import Home from "./pages/home";
import Menu from "./components/Menu"
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";

import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
    const [technos, setTechnos] = useState([]);

    const storageKey = "key-technos";

    const [technosStorage, setTechnosStorage] = useLocalStorage(storageKey, []);

    // React.useEffect()

    useEffect(() => {

        setTechnosStorage(technos)

    }, [setTechnosStorage, technos, technosStorage]);



    function handleAddTechno(techno){
        console.log("Handle techno",techno)

        setTechnos([...technos, {...techno, id:uuidv4()}])
     }

     function handlDeleteItem (id){

        setTechnos(technos.filter(techno => techno.id !== id))
     }

    return (
        <>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/add" element={<TechnoAdd  handleAddTechno={handleAddTechno}/>}></Route>
                <Route path="/list" element={<TechnoList technos={technos} handlDeleteItem={handlDeleteItem}/>}></Route>
            </Routes>
        </>


    );
}

export default App;
