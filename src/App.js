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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import InlineStyling from './components/InlineStyling';
import './components/appStyle.css';
import styles from './components/appStyle.module.css';


function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
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
      {/* <ParentComponent/>
      <UserGreeting/>  */}
      {/* <NameList/> */}
      {/* <Stylesheets primary= {false}/> */}
      {/* <InlineStyling/> */}
      
    </div>
  );
}

export default App;
