import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
      <>
        <Navbar title="TextUtils" about="About TextUtils"/>
        {/* <div className="container">
          <TextForm heading="Enter the text to analyse"/>
        </div> */}
        <div className='container' >
          <About/>
        </div>
        
      </>
  );
}

export default App;
