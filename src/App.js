import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Components/Movie';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState([]);
  const [search,setSearch] =useState('')
  const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
 
  const searchapi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=%22"
  
  const movieData = async () =>{
    try{
      const getData = await axios.get(apiUrl)
      console.log(getData);

      setMovie(getData.data.results)
    } catch (err){
       console.log(err.message)
    }
  }

  const searchData = async ()=>{
    try {
      const getData  = await axios.get(searchapi + search)
      setMovie(getData.data.results)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    (search === "") ? movieData() : searchData();
  },[search]);
 
  return (
    <div className="container">
    <h1 className="text-center my-3">Movie Search App</h1>
    <input type="text" placeholder="Seach movie...." className="form-control" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <Movie movies={movie}/>
    </div>

  );
}
export default App;