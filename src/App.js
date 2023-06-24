import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Layouts/Header';
import { Login } from './Components/Auth/Login';
import { Footer } from './Components/Layouts/Footer';
import { Products } from './Components/products/Products';


function App() {
  return (
    <div className="App">
    
    <Header/>
    <Login/>
    {/* <Products/> */}
    <Footer/>

    </div>
  );
}

export default App;
