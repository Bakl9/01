import './App.css';
import { Content } from './component/Profile/Profile'
import { Header } from './component/Header/Header'
import { Navbar } from './component/navBar/Navbar'
import { Dialogs } from './component/Dialogs/Dialogs';




  
function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      {/* <Content/> */}
      <Dialogs/>
    </div>
  );
}
  
export default App;
  
