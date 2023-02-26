import {} from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Theme from './Components/theme/Theme'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Theme />
      </BrowserRouter>
    </div>
  );
}
export default App;
