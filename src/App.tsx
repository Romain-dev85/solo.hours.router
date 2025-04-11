import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { useState } from 'react';
import PictureCard from './components/Picture/PictureCard';


const pictureList = [
  {
    id: "a",
    author: "Zwaddi",
    imgSrc: "https://images.unsplash.com/12/sun-trees.jpg?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "b",
    author: "Lukas Schweizer",
    imgSrc: "https://images.unsplash.com/12/green.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "c",
    author: "Kenneth Thewissen",
    imgSrc: "https://images.unsplash.com/12/till-the-cows-come-home.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function App() {
  const [pictureId, setPictureId] = useState("a");

  const picture = pictureList.find((picture) => picture.id === pictureId);

  if (picture == null)
    <p>invalid picture</p>

  return (
    <>

      <Header />
      <Outlet />
      <div className='appclass'>
        {pictureList.map((picture) => (
          <PictureCard
            key={picture.id}
            picture={picture}
            setPictureId={setPictureId}
            pictureList={pictureList}
          />
        ))}
      </div>

    </>
  )
}

export default App;
