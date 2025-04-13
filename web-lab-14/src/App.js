import logo from './logo.svg';
import './App.css';
import Form from './components/form';

function App() {
  return (
    <>
    <img src="pic1.jpg" alt="sky" width="300px" height="200px"/><br/><br/>
    <img src={require("./images/2.JPG")} alt="building" width="300px" height="200px"/><br/><br/>
    <Form/><br/><br/>
    </>
  );
}

export default App;
