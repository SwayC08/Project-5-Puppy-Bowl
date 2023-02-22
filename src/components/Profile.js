import { useParams } from "react-router-dom";

const Profile = (props) => {

    const { id } = useParams();
    // console.log(id);
    // console.log(props.playerProps[id].name);
    // const { playerProps } = props;

    return (
        <div>
            <p>Name: {props.playerProps[id].name}</p>
            <p> Status: {props.playerProps[id].status}</p>
            <p> Photo: { <img className="Photos" src={props.playerProps[id].imageUrl}/> }</p>
        </div>
    )
}

export default Profile;