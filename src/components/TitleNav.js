import { Link } from "react-router-dom";

const TitleNav = () => {
    return (
        <nav className="Nav">
            <p className="title"> &#128054;  &#127923;</p>
            <div>
                <Link to="/" className="home" >
                    <button>Home</button>
                </Link>
                {/* <button onClick={ cycle }> Next Player </button> */}
            </div>
        </nav>
    )
}

export default TitleNav;