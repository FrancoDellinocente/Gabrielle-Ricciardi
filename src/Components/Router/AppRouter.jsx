import { Routes, Route } from 'react-router-dom'
// componentes
import Home from '../Home/Home'
import { Fragment } from 'react'
// import Navbar from '../Navbar/Navbar'


const AppRouter = () => {
  return (
    <Fragment>
        <Routes>

            <Route exact path='/' element={<Home />} />
        </Routes>  
    </Fragment>
    )
}

export default AppRouter