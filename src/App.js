import './App.css';
import Header from "./components/header.component";
import Todo from './components/todo.component';
import InProgress from './components/inprogress.component';
import Completed from './components/completed.component';
import Item from './components/item';

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Todo />
        <InProgress />
       {/* <Completed /> */}
      </div>
    </div>
  );
}

export default App;
