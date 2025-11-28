import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name = "Tanvee";
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <img src="" alt="" />
      <div>
        <h1>Name {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a culpa tempore necessitatibus pariatur adipisci 
           consequuntur alias, dicta repudiandae vel quo placeat autem? Eveniet molestias dolores numquam rem laudantium rerum natus id illo commodi eligendi nihil quisquam hic, officiis ab accusantium minima molestiae asperiores, laboriosam maiores est modi harum dignissimos!</p>
      </div>
    </>
  )
}

export default App
