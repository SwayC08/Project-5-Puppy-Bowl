import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = (props) => {

    const { id } = useParams();
    const { playerProps } = props;
    const selectedPlayer = playerProps[id];

    return (
        <div className="Bio">
            <div className="stats">
                <p>ID: {selectedPlayer.id}</p>
                <p>Name: {selectedPlayer.name}</p>
                <p>Breed: {selectedPlayer.breed}</p> 
                <p>Status: {props.playerProps[id].status}</p>
                {/* <button onClick={ cycle }>Next Player</button> */}
                <Link to="/"><button>Back</button></Link>
            </div>
            <p>{ <img className="Profile-Photo" src={selectedPlayer.imageUrl}/> }</p>
        </div>
    )
}

export default Profile;