import React from 'react';
function Result({data}){
    const k = 273.15;
    const {name,main} = data;
    if(!name) return null;
    let title = (Object.entries(data).length === 0 && data.constructor === Object)
                ? 'Resultado del clima'
                : `Clima en ${name} / ${data.sys.country}`;

    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{title}</h2>
                <p className="temperatura"> Temp : {parseInt(main.temp_min - k, 10)} <span>&#x2103;</span> </p>
                <p> Min temp : {parseInt(main.temp_min - k, 10)} <span>&#x2103;</span> </p>
                <p> Max temp : {parseInt(main.temp_max - k, 10)} <span>&#x2103;</span> </p>
            </div>
        </div>
    );
}
export default Result;