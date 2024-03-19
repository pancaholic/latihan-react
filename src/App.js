import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import ClickFunction from './components/ClickFunction';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';




function App() {
  return (
    <div className="App">
      {/* <Greet name="Panca" roleName="Manager">
        <p>This is Children Props</p>
      </Greet> */}
      {/* <Greet name="Stella" roleName="Director">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Halid" roleName="Salesman"/> */}
      {/* <Welcome name="Panca" roleName="Manager"/> */}
      {/* <Welcome name="Stella" roleName="Director"/> */}
      {/* <Welcome name="Halid" roleName="Salesman"/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <ClickFunction/>
      <ClassClick/>
      <EventBind/> */}
      <ParentComponent/>
      
    </div>
  );
}

export default App;
