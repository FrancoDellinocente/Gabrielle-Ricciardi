import { Routes, Route } from 'react-router-dom'
// componentes
import Home from '../Home/Home'
import { Fragment } from 'react'
import OurStory from '../OurStory/OurStory'
import Visit from '../Visit/Visit'
import Wines from '../Wines/wines'
import WineDetail from '../WineDetail/WineDetail'


const AppRouter = () => {
  return (
    <Fragment>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/story' element={<OurStory />} />
            <Route exact path='/visit' element={<Visit />} />
            <Route exact path='/wines' element={<Wines />} />
            <Route path="wineDetail">
                <Route path=":parametro" element={<WineDetail  />} />
            </Route>
        </Routes>  
    </Fragment>
    )
}

export default AppRouter