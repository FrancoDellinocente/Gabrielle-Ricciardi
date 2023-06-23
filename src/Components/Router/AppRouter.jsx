import { Routes, Route } from 'react-router-dom'
// componentes
import Home from '../Home/Home'
// import Navbar from '../Navbar/Navbar'


const AppRouter = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home />} />
    </Routes>
  )
}

export default AppRouter