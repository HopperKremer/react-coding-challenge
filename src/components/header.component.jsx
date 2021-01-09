import { Link } from "react-router-dom"

const Header = () => {
    return ( 
        <div>
            <Link className='option' to='/'>home</Link>
            <Link className='option' to='/series'>Series</Link>
            <Link className='option' to='/movies'>Movies</Link>
        </div>
     );
}
 
export default Header;