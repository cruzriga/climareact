import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Result from "./components/Result";

function App() {
  const [city, setCity]       = useState('');
  const [country, setCountry] = useState('');
  const [error, setError]     = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  useEffect(()=>{
    if (city === '' || country ==='')  return;
    const requestApi= async()=>{
      let appid = '4e9384d0aa75055b0cb163134dbb4984';
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appid}`;
      const response = await fetch(url);
      const r = await  response.json();
      setApiResponse(r);
    };
    requestApi();
  },[city,country]);

  const queryData = formData => {
    if(formData.city === '' || formData.country === ''){
      setError(true);
      return;
    }
    setCity(formData.city);
    setCountry(formData.country);
    setError(false);
  }

  // cargar componente condicionado
  let component = (error) ? <Error message = 'Ambos campos son obligatorios'/> : <Result data = {apiResponse} />;
  if(apiResponse.cod === '404') component = <Error message = 'Los datos ingresados no son correctos (ciudad no existe)'/>;
  return (
      <div className="App">
        <Header
          title = "Clima REACT App"
        />
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Form
                  queryData = {queryData}
                />
              </div>
              <div className="col s12 m6">
                {component}
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default App;
