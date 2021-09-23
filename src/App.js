import './App.css'
import  { Profiler } from './component/Profile/Profile'
import { Header } from './component/Header/Header'
import { Navbar } from './component/navBar/Navbar'
import  Dialogs  from './component/Dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom' 

  
function App(props) {

	return (
    <BrowserRouter>
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="venom">
	<Route path='/dialogs' render={ () => <Dialogs state={props.state.messagePage} />}/>
    <Route path='/profiler' render={ () => <Profiler state={props.state.profilePage} />}/>			
			</div>
		</div>
    </BrowserRouter>
	)
}

export default App
 
