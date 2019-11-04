import React, {useState} from 'react'
function Form({queryData}){
    const [query,setQuery] = useState({
        city : '', country : ''
    });
    const handleChange = (e)=>{
        setQuery({
            ...query,[e.target.name] : e.target.value
        });
    };

    const sendQuery = (e) => {
        e.preventDefault();
        queryData(query);
    };

    return (
        <form onSubmit={sendQuery}>
            <div className="input-field col s12">
                <input type="text" name="city" id="city" onChange={handleChange}/>
                <label htmlFor="city">
                    Ciudad:
                </label>
            </div>
            <div className="input-field col s12">
                <select name="country" id="country" onChange={handleChange}>
                    <option value="">Seleccione un pais ...</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    className="waves-effect wave-light btn-large btn-block yellow accent-4"
                    value="Buscar Clima"/>
            </div>

        </form>
    );
}
export default Form

