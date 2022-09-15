import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyname from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
function App() {
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <HelloWorld/>
      <SayMyname nome="Felipe"/>
      <Pessoa 
      nome="Rodrigo" 
      idade="31" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
