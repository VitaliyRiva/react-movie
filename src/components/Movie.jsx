import React from 'react';

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imbdID: id,
        Type: type,
        Poster: image
    } = props

    return <div id={id} className="movies">
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    {
                        image === 'N/A' ?
                            <img src={`https://designshack.net/wp-content/uploads/placehold.jpg`} alt={title}/> :
                            <img src={image} alt={title}/>
                    }

                        <span className="card-title">{title}</span>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-content">
                    <div>{year} Год</div>
                    <div>Тип: {type}</div>
                </div>
            </div>
        </div>
    </div>
}

export {Movie};
