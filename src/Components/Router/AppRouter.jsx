import { Routes, Route } from 'react-router-dom'
// componentes
import Home from '../Home/Home'
import { Fragment } from 'react'
import OurStory from '../OurStory/OurStory'
import Visit from '../Visit/Visit'


const AppRouter = () => {
  return (
    <Fragment>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/story' element={<OurStory />} />
            <Route exact path='/visit' element={<Visit />} />
        </Routes>  
    </Fragment>
    )
}

export default AppRouter