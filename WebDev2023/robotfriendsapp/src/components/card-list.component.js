import Card from "./card.component";

const CardList = ({data, filter}) => {
    // Filter the data based on the filter prop
    // We lowercase everything so the search is case-insensitive 
    const cardArray = data.filter( dt =>  dt.name.toLowerCase().includes(filter) || dt.email.toLowerCase().includes(filter))
        .map(
        rob => {
            // The attributes we create are called props, these can be accessed by the component
            // The key prop is a special prop that React requires for listed component/items
            // It's built in, so if your component has a key prop, it needs to be renamed to something 
            // else
            return <Card id={rob.id} name={rob.name} email={rob.email} key={rob.id}/>
        }
    )
    return (
        <div>
            {/*You can do javascript inside JSX by putting using {} */}
            {cardArray}
        </div>
    );
}

export default CardList
