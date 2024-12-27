import React, { useEffect, useState } from "react";
import Albums from "./components/Albums";
function App(){
  const [albums,setAlbums] = useState([]);
  const fetAlbums = () =>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>res.json())
    .then((data)=>setAlbums(data))
  }
  useEffect(()=>{
    fetAlbums();
    return () =>{
      console.log("unmounted")
    };

  },[]);
  return (
   <Albums albums={albums}/>
  )
}
export default App;
