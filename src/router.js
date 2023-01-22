import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Animal from './animal'
import Cities from './cities'
import Snakes from './snakes'
import Nature from './nature'
import Layout from './layout'


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="animal" element={<Animal />}/>
                        <Route path="cities" element={<Cities />}/>
                        <Route path="snakes" element={<Snakes />}/>
                        <Route path="nature" element={<Nature />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
