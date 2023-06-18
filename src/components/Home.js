import React from 'react'
import Nav from './Nav'
import Jumptron from './Jumptron'
// import useFetch from './UseFetch'
import BookList from './BookList'
import data from '../data'
import Footer from './Footer'
function Home() {
    // const {data:books ,isPending,error}=useFetch('http://localhost:7000/books')
  return (
    <>
      <Nav/>
     <Jumptron/>
     {/* {error&&<div>{error}</div>}
      {isPending && <div>Loading .....</div>} */}
      <BookList books= {data} />
      <Footer/>
    </>
  )
}

export default Home
