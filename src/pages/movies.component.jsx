import React, { useState } from "react";
import {SearchBox} from '../components/search-box/search-box.component'
import { CardList } from "../components/card-list/card-list.component";

const Movies = (props) => {

    const [searchField, setSearchField] = useState('')

    const [filteredMovies, setFilteredMovies] = useState(props.movies)

    const onTitleSearchChange = (event) => {
        console.log(event.target.value)
        setSearchField(event.target.value)
        setFilteredMovies(props.movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchField)
        ))    
    }

    return ( 
        <div>
            <h1 style={{display: "inline"}} >Movies: </h1>
            <SearchBox onSearchChange = {onTitleSearchChange} placeholder="Search by title" />
            <CardList items={filteredMovies}/>
        </div>
     );
}
 
export default Movies;