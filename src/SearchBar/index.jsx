import {useEffect} from 'react'
import './SearchBar.css'

const SearchBar = ({listMovies, setListMovies}) => {

    useEffect(async () => {
    const  = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsuarios(responseUsuarios.data);
    setLoading(false);
  }, []);
}