import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const Movies = [
  {
    title:"Frozen",
    poster:"https://dimg.donga.com/wps/NEWS/IMAGE/2019/12/07/98700220.2.jpg"
  },
  {
    title:"Tarzan",
    poster:"http://artinsight.co.kr/n_news/peg/1602/thumb/f8be0142721ccd7ab65153f671d2b049_1fNX6d7qDPKnBmYN5GLh3z.jpg"
  },
  {
    title:"Leon",
    poster:"https://pgnqdrjultom1827145.cdn.ntruss.com/img/71/26/71264bc28b0722d03d662de2e8354c947784734fb7a66df73069f937a60db03b_v1.jpg"
  },
  {
    title:"LalaLand",
    poster:"http://joyposter.cafe24.com//MoF/step/FMV/FMV-308.jpg"
  }
]

class App extends Component {
//Render : ComponentWillMount() => render() => componentDidMount()
//Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() -> render() -> compoment
  state = {
    greeting: "Hello!"
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: "Hello Agian!~"
      })
    }, 5000)
  }
  render(){
  return (
    <div className="App">
      {this.state.greeting}
      {Movies.map((movie, index) => {
       return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
    
    </div>
  );
}
}

export default App;
