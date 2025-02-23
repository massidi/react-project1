import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {

    const {technos,handlDeleteItem} = props
    return (
        <div className="techno-list">
            <h1>All Technology</h1>

            <div>
                {
                    technos.map(techno =>
                        <TechnoItem key={techno.id} techno={techno} handlDeleteItem={handlDeleteItem}/>,
                    )
                }

            </div>
        </div>
    )
}