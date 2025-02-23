import {useState} from "react";

export default function TechnoAdd(props){

    const [techno, setTechno] = useState({
        technoname: '',
        technocategory: '',
        technodescription: ''
    });

    const {handleAddTechno}= props;


function handleSubmit(e){
        e.preventDefault();

    handleAddTechno((techno));

    // Reset the state
    setTechno({

        technoname: '',
        technocategory: '',
        technodescription: '',
    });
}

function handleChange(e){

    const{name,value}= e.target;

    setTechno({...techno,[name]:value})

    // console.log("Handle change",name,value)


}


    return(
        <div className="technoadd">

            <h1>Add Techno</h1>
            <div>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <label htmlFor="Techno-name">Name</label>
                    <br/>
                    <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(e)=>handleChange(e)}/>
                    <br/>
                    <select name="technocategory" id="technocategory" value={techno.technocategory} onChange={(e)=>handleChange(e)} >
                        <option value="">Select a category</option>
                        <option value="front">front</option>
                        <option value="Back">Back</option>
                        <option value="FullStack">FullStack</option>
                    </select>
                    <br/>
                    <label htmlFor="technodescription"></label>
                    <textarea name="technodescription"  cols="30" rows="10"  value={techno.technodescription} onChange={(e)=>handleChange(e)}/> <br/>


                    <input type="submit" className="btn"/>
                </form>
            </div>
        </div>
    )
}