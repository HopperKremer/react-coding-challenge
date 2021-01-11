import React, { useState } from "react";
import {SearchBox} from '../components/search-box/search-box.component'
import { CardList } from "../components/card-list/card-list.component";
const Series = (props) => {

    const [searchField, setSearchField] = useState('')
    const [yearSearchField, setYearSearchField] = useState(0)

    // const [series, setSeries] = useState(props.series)
    const [filteredSeries, setFilteredSeries] = useState(props.series)

    const onTitleSearchChange = (event) => {
        console.log(event.target.value)
        setSearchField(event.target.value)
        setFilteredSeries(props.series.filter((serie) =>
        serie.title.toLowerCase().includes(searchField)
        ))    
    }
    const onYearSearchChange = (event) => {
        console.log(event.target.value)
        setYearSearchField(event.target.value)
        setFilteredSeries(props.series.filter((serie) =>
        serie.releaseYear == yearSearchField
        ))    
    }


    return ( 
        <div>
            <h1 style={{display: "inline"}} >Series: </h1>
            <SearchBox onSearchChange = {onTitleSearchChange} placeholder="Search by title" />
            <SearchBox onSearchChange = {onYearSearchChange} placeholder="Search by year" />
            <CardList items={filteredSeries}/>
        </div>
     );
}
 
export default Series;