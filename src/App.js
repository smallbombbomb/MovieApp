import React, {
  Component
} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render : ComponentWillMount() => render() => componentDidMount()
  //Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() -> render() -> compoment


  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _rendermovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie
      title = {
        movie.title_english
      }
      poster = {
        movie.medium_cover_image
      }
      key = {
        movie.id
      }
      genres = {
        movie.genres
      }
      synopsis = {
        movie.synopsis
      }
      />
    })
    return movies
  }
  // asynchronous는 이전작업이 끝나야 다음작업 시작하는 형태가 X
  _getMovies = async () => {
    //await모드 : callapi가 끝나기를 기다림, return상관없이
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?quality=3Dsort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    return ( 
      <div className = "App" > {
        this.state.movies ? this._rendermovies() : 'Loading'
      } 
      </div>
    );
  }
}

export default App;