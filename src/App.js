import { useEffect, useState } from 'react';
import Axios from "axios";



function App() {
  const [catFact, setCatFact] = useState("");
  {/*fetch("https://catfact.ninja/fact").then((res) => res.json() ).then((data) => {console.log(data)}); */}
  useEffect(() =>{
    Axios.get("https://catfact.ninja/fact").then((res) => {setCatFact(res.data.fact)})
  }, []);
  return (
    <div className="App">
      <button>Generate cat fact</button>
      <p> {catFact} </p>
    </div>
  );
  
}

export default App;
