import { Link } from "react-router-dom"

const Home = () => {
    return ( 
        <div>
            HOME
      <br />
      <Link className="option" exact to="/series">
        Series
      </Link>
      <Link className="option" exact to="/movies">
        Movies
      </Link> 
        </div>
     );
}
 
export default Home;