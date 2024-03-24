import './App.css';
import  Homecontainer  from './Container/Homecontainer';
import Navbarcontainer from './Container/Navbarcontainer';


function App() {
  return (
    <div className="App">
      <h1>Readux</h1>
      <Navbarcontainer />
      <Homecontainer />
      
    </div>
  );
}

export default App;
