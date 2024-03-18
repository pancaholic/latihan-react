import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Panca" roleName="Manager">
        <p>This is Children Props</p>
      </Greet>
      <Greet name="Stella" roleName="Director">
        <button>Action</button>
      </Greet>
      <Greet name="Halid" roleName="Salesman"/>
      <Welcome name="Panca" roleName="Manager"/>
      <Welcome name="Stella" roleName="Director"/>
      <Welcome name="Halid" roleName="Salesman"/>
      <Hello/>
    </div>
  );
}

export default App;
