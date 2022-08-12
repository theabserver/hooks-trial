import './App.css';
import {APIdisplay} from './component/APIdisplay';
import {ToDo} from './component/ToDo'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <APIdisplay />
      </header>
      <section>
        <ToDo />
      </section>
    </div>
  );
}

export default App;
