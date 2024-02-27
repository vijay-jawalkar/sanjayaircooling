import AllRoutes from './routes/AllRoutes';
import { Header, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className='text-center '>
     <Header/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
