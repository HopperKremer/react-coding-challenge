import { Link } from "react-router-dom";

const Movies = (props) => {
    return ( 
        <div>
            <Link className="option" exact to="/">
          home
        </Link>
            
            Movies:
            <br/>
            <ul>
                {props.movies.map(m => <li>{m.title}</li>)}
            </ul>
        </div>
     );
}
 
export default Movies;