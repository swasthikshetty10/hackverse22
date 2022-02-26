import React from 'react'
import DashboardPage from '../src/components/Dashboard/index'
import NavBar from "../src/components/Navbar/navbar"

function Dashboard() {
    return (
        <div className=''>
            <NavBar />
            <DashboardPage />
        </div>
    )
}

export default Dashboard