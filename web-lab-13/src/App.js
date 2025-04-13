import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello_without_JSX';
import Hello2 from './components/Hello_with_JSX';
import Fruit from './components/Fruit_list';
import Inline_CSS from './components/Inline_css'
import SquareSum from './components/Squares_sum'
import Greeting from './components/greeting'
import Day from './components/day'
import Prime from './components/prime'
import Temp from './components/temp'
import Rev from './components/pali'
import Random from './components/random'
import Leap from './components/leapYr'
import UserGreeting from './components/userGreeting'

function App() {
  return (
    <>
    <Hello/><br/>
    <Hello2/><br/>
    <Fruit/><br/><br/>
    <Inline_CSS/>
    <SquareSum/><br/>
    <Greeting isMorning={false}/>
    <Day/>
    <Prime/>
    <Temp/><br/><br/><br/>
    <Rev/>
    <Random/><br/><br/>
    <Leap/><br/><br/>
    <UserGreeting firstName="Abc" lastName=".S"/>
    </>
  );
}

export default App;
