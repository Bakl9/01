import './App.css';
import { Content } from './component/Content'
import { Header } from './component/Header'
import { Navbar } from './component/Navbar'

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
