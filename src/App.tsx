import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { useState } from 'react';
import PictureCard from './components/Picture/PictureCard';


const pictureList = [
  {
    id: "a",
    author: "Zwaddi",
    imgSrc: "https://unsplash.com/photos/YvYBOSiBJE8",
  },
  {
    id: "b",
    author: "Lukas Schweizer",
    imgSrc: "https://unsplash.com/photos/9VWOr22LhVI",
  },
  {
    id: "c",
    author: "Kenneth Thewissen",
    imgSrc: "https://unsplash.com/photos/D76DklsG-5U",
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
        <PictureCard picture={picture} setPictureId={setPictureId} pictureList={pictureList} />

      </div>

    </>
  )
}

export default App;
