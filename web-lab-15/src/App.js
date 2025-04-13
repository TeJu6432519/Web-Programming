import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import StyledButton1 from './components/styleButton_inline';
import StyledButton2 from './components/styleButton_internal';
import StyledButton3 from './components/styledButton_external';
import LifecycleDemo from './components/lifecycle';
import CounterWithState from './components/usestateHook';
import CounterWithReducer from './components/usereducerHook';
import JokeComponent from './components/useeffectHook';
import FocusForm from './components/userefHook';
import { useTheme } from './components/usecontextHook';
import Parent from './components/parent1';
import FormWithState from './components/form-usestate';
import FormWithRef from './components/form-useref';

function App() {
  return (
    <>
    <div className="app-container">
      <Header title="My React App" />
      <div className="content-container">
        <Content />
        <StyledButton1 text="hello"/><br/><br/>
        <StyledButton2 text="hey"/><br/><br/>
        <StyledButton3 text="hi"/><br/><br/>
        <LifecycleDemo/><br/><br/>
        <CounterWithState/><br/><br/>
        <CounterWithReducer/><br/><br/> 
        <JokeComponent/><br/><br/> 
        <FocusForm/><br/><br/> 
        <useTheme/><br/><br/> 
        <Parent/><br/><br/> 
        <FormWithState/><br/><br/> 
        <FormWithRef/>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
