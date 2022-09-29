import logo from './logo.svg';
import './App.css';
import Exercise from './Components/Exercise/Exercise';

function App() {
  return (
    <div className="App">
      <Exercise></Exercise>
      <h3>Ques: How does react work?</h3>
      <h4>Ans: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h4>
      <h3>Ques: What is difference between props and states?</h3>
      <h4>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h4>
      <h3>What is the work responsibility of useeffect withouth load data?</h3>
      <h4>Ans: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</h4>
    </div>
  );
}

export default App;
