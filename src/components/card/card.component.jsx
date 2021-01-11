import React from 'react'

import "./card.style.css"

export const Card = (props) => (
    <div className="card-container">
        <img
        alt="monster"
        src={props.media.images.['Poster Art'].url}
        />
        <h2>
        {props.media.title} - {props.media.releaseYear}
        </h2>
        <p>
            {props.media.description}
        </p>
    </div>
)