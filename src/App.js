import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Felipe";

  const newName = name.toLocaleUpperCase();
  return (
    <div className="App">
      <h1>Teste JSX</h1>
      <p>meu nome é {newName}</p>
      <HelloWorld/>
    </div>
  );
}

export default App;
