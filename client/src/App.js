import './App.css';
import React, {useState} from 'react';
import Products from './products';


const App = () => {
  const [search,setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "20d0ed6a";
  const YOUR_APP_KEY = "206426ef8736fb508e7677ee4fe508da	";
  
  function submitHandler(e)  {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
    data =>setData(data.hits)
    )
    console.log(data);
  }

  return (
    <div className="container">
      <center>
      <h2>My Food Recipies App</h2><br/>
      <form>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search food'/><br/><br/>
        <input className="btn btn-primary"type="submit" value="search" onClick={submitHandler} /><br/><br/>
      </form>
      {/* do this operation only if data present else return null */}
      {data.length > 1 ? <Products data={data}/> :null} 
      </center>
    </div>
  );
}

export default App;
