import { useState } from "react"
import Navbar from './components/Navbar/Navbar';
import { SelectedPage } from './shared/types'


const App = () => {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
