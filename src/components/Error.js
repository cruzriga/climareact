import React from 'react';

function Error(props){
    return(
        <div className="card-panel red darken-4 erro col s12">
            {props.message}
        </div>
    );
};

export default Error;