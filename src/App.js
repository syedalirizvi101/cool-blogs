import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = "Hello world";
  const likes = 50;
  const person = { name: 'mario', age: 30 };
  return (
    <div className="App">

      {/* Adding a self closing tag for Navbar component */}
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
