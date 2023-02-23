import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = (props) => {

    const { id } = useParams();
    // console.log(id);
    // console.log(props.playerProps[id].name);

    return (
        <div className="Bio">
            <div className="stats">
                <p>ID: {props.playerProps[id].id}</p>
                <p>Name: {props.playerProps[id].name}</p>
                <p>Breed: {props.playerProps[id].breed}</p> 
                <p>Status: {props.playerProps[id].status}</p>
                <Link to="/"><button>Back</button></Link>
            </div>
            <p>{ <img className="Profile-Photo" src={props.playerProps[id].imageUrl}/> }</p>
        </div>
    )
}

export default Profile;