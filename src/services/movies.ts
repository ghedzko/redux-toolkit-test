import axios from 'axios';

export const getMovies = async()=>{
    const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=433750b3'
    const response = await axios.get(url)
    return response
}