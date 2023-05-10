import './App.css';
import Greet from './Components/Greet';
import Counter from './Components/Counter';
import Message from './Components/Message';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import ParentComponents from './Components/ParentComponents';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';

function App() {
  return (
    <div className="App">
      <NameList/>
      {/* <UserGreeting/> */}
      {/* <ParentComponents/> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="Aruna" heroName ="Super man"/>
      <Greet name="Priyankara" heroName ="Spider Man"/>
      <Greet name="John" heroName ="Iron Man"/> */}
    </div>
  );
}

export default App;
