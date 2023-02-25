
const NewPlayer = (props) => {
    
    const { players, setPlayers, newPName, setNewPName, newPBreed, setNewPBreed, newPUrl, setNewPUrl} = props;

    // Fetch response from API for new player
    async function newPlayerReq(event){
        event.preventDefault();
        try {
            const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: newPName,
                    breed: newPBreed,
                    imageUrl: newPUrl
                })
            });
            const translatedData = await response.json();
            setPlayers([...players, translatedData.data.newPlayer])
        } catch(error){
            console.log(error);
        }
    }

    return (        
            <form className="Add" onSubmit ={ newPlayerReq }>
                <h3>Add New Player:</h3>
                <span>Name:  
                    <input onChange= {(event)=>{
                            setNewPName(event.target.value)
                        }} type="text">
                    </input>
                </span>
                <span>Breed: 
                    <input onChange= {(event)=>{
                            setNewPBreed(event.target.value)
                        }} type="text">
                    </input>
                </span>
                <span>Url: 
                    <input onChange= {(event)=>{
                            setNewPUrl(event.target.value)
                        }} type="text">
                    </input>
                </span>
                <button type="submit">Submit</button>
            </form>   
    )
}

export default NewPlayer;