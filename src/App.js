import './App.css';
import Website,{Welcome} from './component/Welcome';

function App() {
  return (
    <div className="App">
      <Website name="Fatemeh Madihi" age = "30" />
      <Website name="ali ahmadi" age = "20" />
    </div>
  );
}

export default App;
