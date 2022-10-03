import './App.css';
import Header from "./components/header.component";
import Todo from './components/todo.component';
import InProgress from './components/inprogress.component';
import Completed from './components/completed.component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; 
function App() {
  return (
    <div>
      <FontAwesomeIcon icon="fa-duotone fa-arrow-pointer" />
      <Header />
      <div className="main">
        <Todo />
        <InProgress />
       <Completed />
      </div>
    </div>
  );
}

export default App;
