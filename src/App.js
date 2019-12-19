import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
//Render : ComponentWillMount() => render() => componentDidMount()
//Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() -> render() -> compoment
  state = {
    greeting: "Hello!",
    Movies: [
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
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        Movies: [
          //...this.state.Movies삭제시 새코드만 남음 
          //새 컨텐츠 추가 방식 : facebook, instartgram
          ...this.state.Movies,{
            title: "남한산성",
            poster:"https://image.chosun.com/sitedata/image/201709/22/2017092200602_0.jpg"
          }
        ]
      })
    }, 5000)
  }
  render(){
  return (
    <div className="App">
      {this.state.greeting}
      {this.state.Movies.map((movie, index) => {
       return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
    
    </div>
  );
}
}

export default App;
