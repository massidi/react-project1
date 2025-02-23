export default function TechnoItem(props) {

    const {techno, handlDeleteItem} = props




    return (
        <div className="card">
            <h2>{techno.technoname}</h2>
            <h3>Category:</h3>
            <p> {techno.technocategory}</p>
            <h3>Description:</h3>
            <p> {techno.technodescription}</p>
            <div className="footer">
                <button className="btn-delete"
                        onClick={(e) => handlDeleteItem(techno.id)}>Delete</button>
            </div>
        </div>
    )
}