import './App.css';
import Greet from './Components/Greet';
import Counter from './Components/Counter';
import Message from './Components/Message';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />

      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <Greet name="Aruna" heroName ="Super man"/>
      <Greet name="Priyankara" heroName ="Spider Man"/>
      <Greet name="John" heroName ="Iron Man"/> */}
    </div>
  );
}

export default App;
