import React from 'react'
import Cards from '../../components/cards/Cards'
import Table from '../../components/table/Table'
import './mainDash.css'

const MainDash = () => {
  return (
    <div className='mainDash'>
    <h1>Dashboard</h1>
    <Cards />
    <Table />
    </div>
  )
}

export default MainDash