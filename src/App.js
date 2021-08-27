import './App.css';
import { Content } from './component/Profile/Profile'
import { Header } from './component/Header/Header'
import { Navbar } from './component/navBar/Navbar'


function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Content/>
      <Navbar/>
    </div>
  );
}

export default App;
