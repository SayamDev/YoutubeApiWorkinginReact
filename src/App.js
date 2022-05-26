
import './App.css';
import { useState, useEffect } from 'react';


const fetchYoutube = async (setter) => {
  const youtubePlaylist = "https://www.googleapis.com/youtube/v3/playlistItems";
  const res = await fetch(`${youtubePlaylist}?part=snippet&playlistId=PLeCKLji5NOeFY6uStgXxaB0mS-tivpJ2t&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
  const data = await res.json();
  setter(data);
}

const App = () => {
const [youtubeData, setyoutubeData] = useState([])

useEffect(()=> {
  fetchYoutube(setyoutubeData)
},[])
console.log(youtubeData)

  return (
    <>
     <h1>Calming Videos</h1>
     {youtubeData.items.map(({ id, snippet = {} }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
            return (
              <li key={id} className="card">
                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                  <p>
                    <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                  </p>
                  <h3>{ title }</h3>
                </a>
              </li>
            )
          })}
    </>

  )

}

export default App;



//WORKS
// fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLeCKLji5NOeFY6uStgXxaB0mS-tivpJ2t&maxResults=50&key=AIzaSyCfGlVkn3YQVBZ9MJ0JiWumcrJNQJLmP_E")
// .then((data) => {
//   return data.json()
  
// }).then((result)=> {
//   console.log(result)
// })


//works2
// const youtubePlaylist = "https://www.googleapis.com/youtube/v3/playlistItems";
// fetch(`${youtubePlaylist}?part=snippet&playlistId=PLeCKLji5NOeFY6uStgXxaB0mS-tivpJ2t&maxResults=50&key=AIzaSyCfGlVkn3YQVBZ9MJ0JiWumcrJNQJLmP_E`)
// .then((result) => {
//  return result.json()
 
// }).then((data)=> {
//  data.map(videos)
 
 
 
// })



// const fetchYoutube = async ({setData}) => {
  
  
//   const youtubePlaylist = "https://www.googleapis.com/youtube/v3/playlistItems";
//   const res = await fetch(`${youtubePlaylist}?part=snippet&playlistId=PLeCKLji5NOeFY6uStgXxaB0mS-tivpJ2t&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
//   const data = await res.json();
//   setData(data);

  
// }

// const App = () => {

//   const [data, setData] = useState({})

// 
//   return (
//     <div>

    
//     <button onClick={setData}>click</button>      
//     </div>
//   );
// }

// export default App;