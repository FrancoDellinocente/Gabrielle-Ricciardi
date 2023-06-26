import { Routes, Route } from 'react-router-dom'
// componentes
import Home from '../Home/Home'
import { Fragment } from 'react'
import OurStory from '../OurStory/OurStory'


const AppRouter = () => {
  return (
    <Fragment>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/story' element={<OurStory />} />
        </Routes>  
    </Fragment>
    )
}

export default AppRouter