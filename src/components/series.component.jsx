import { Link } from "react-router-dom";
const Series = (props) => {
    return ( 
        <div>
            Series:
            <br/>
            <Link className="option" exact to="/">
          home
        </Link>
            {props.series.map(m => <li>{m.title}</li>)}
        </div>
     );
}
 
export default Series;