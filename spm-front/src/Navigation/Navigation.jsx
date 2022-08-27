import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

function Navigation() {
    return (
        <Routes>
            <Route path='/' element={<div>Navigation</div>} />
            <Route path='/test' element={<div>test</div>} />
        </Routes>
    )
}

export default Navigation