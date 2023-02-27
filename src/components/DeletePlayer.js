
const DeletePlayer = (props) => {

    const { players, setPlayers, removeById, setRemoveById } = props;

    async function removePlayer (event){
            event.preventDefault();
            try {
                const response = await fetch(
                `https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players/${ removeById }`,
                    {
                        method: 'DELETE',
                    }
                );
                const translatedData = await response.json();    
            } catch (error) {
                console.log(error); 
            }
            let filteredPlayers = players.filter(
                (player)=>{
                    return (player.id != removeById)
                }
            )
            setPlayers(filteredPlayers)
    }

    return(
        <div>
            <form className="Delete" onSubmit ={ removePlayer }  >
                <h3>Remove Player: </h3>
                <span>ID:  
                    <input onChange= {(event)=>{
                            setRemoveById(event.target.value)
                            console.log(event.target.value)
                        }} type="text">
                    </input>
                </span>
                <button type="submit">Delete</button>
            </form> 
        </div> 
    )
}

export default DeletePlayer;