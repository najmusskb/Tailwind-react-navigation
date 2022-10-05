import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-3xl'>my name is sakib</h1>
      <p className='text-3xl font-bold underline'>This is noob student</p>
      <Pricing></Pricing>
    </div>
  );
}
export default App;
