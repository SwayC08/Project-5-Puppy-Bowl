
const DeletePlayer = (props) => {

    const { players, setPlayers, removeById, setRemoveById } = props;
    
    // Fetch response from API to delete player (by id #   ex. 1480)
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
            setPlayers([...players, translatedData])
            // setPlayers([translatedData])
            
        } catch (error) {
            console.log(error); 
        }
}
    return(
        <div>
        {/* Delete Player */}
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