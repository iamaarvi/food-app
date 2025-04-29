import React from 'react'
import "tailwindcss";
import Header from './components/Header';
import Body from './components/Body';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Body />
    </div>
  )
}

export default App
