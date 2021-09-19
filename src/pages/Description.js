import React from 'react'

function Description(props) {
    return (
        <>
            <div className="description_container">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <h1>{props.title}</h1>
                            <p>{props.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;