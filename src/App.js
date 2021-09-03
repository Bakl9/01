import './App.css'
import  { Profiler } from './component/Profile/Profile'
import { Header } from './component/Header/Header'
import { Navbar } from './component/navBar/Navbar'
import { Dialogs } from './component/Dialogs/Dialogs'

function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="venom">
				<Dialogs />
			</div>
      {/* <Profiler/> */}
		</div>
	)
}

export default App
