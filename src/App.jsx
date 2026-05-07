
import './App.css';
import { Sidebar } from './components/Sidebar'
import { Mainview } from './components/Mainview'

function App() {

  return (
    <div className='grid grid-cols-[1.3fr,6fr]'>
      <Sidebar />
      <Mainview />
    </div>
  )
}

export default App
