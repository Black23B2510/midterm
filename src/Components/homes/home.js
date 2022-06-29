import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import TopContent from '../leftContent/topContent';
import BottomContent from '../leftContent/bottomContent';
import Advertisement from '../rightContent/advertisement';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[],
      id:" ",
      advertisement:[],
      title:" ",
      content:" ",
      image:" ",
      times:" ",
      comment:"",
      cateiD:" "
    }
  }
  componentDidMount(){
    axios.get("https://628ae9bf667aea3a3e240e01.mockapi.io/news").then(res=>{
      this.setState({news:res.data})
    })
    axios.get("https://628ae9bf667aea3a3e240e01.mockapi.io/advertisement").then(res=>{
      this.setState({advertisement:res.data})
    })
  }
  render() {
    return (
      <div>
        {/* <Header></Header> */}
        <div className='mainContent'>
          <div className='content'>
            <div className='topContent'>
              <div className='left'>
                <h2 className='h2'><i className="fas fa-globe-africa"/> THẾ GIỚI</h2>
              {this.state.news.filter(ne=>((ne.id === "1"))).map((ne)=>(
                <TopContent image={ne.image} title={ne.title} comment={ne.comment} times={ne.times}></TopContent>
              ))}
              </div>
              <div className='right'>
                {this.state.news.filter(ne=>ne.cateiD==="1").map(ne=>(
                  <BottomContent image={ne.image} title={ne.title} comment={ne.comment} times={ne.times} ></BottomContent>
                  ))}
              </div> 
            </div>
            <div className='bottomContent'>
              <div className='left'>
                <h2 className='h2'><i className="fa-solid fa-person-military-pointing"/> QUÂN SỰ-QUỐC PHÒNG</h2>
              {this.state.news.filter(ne=>((ne.id === "4"))).map((ne)=>(
                <TopContent image={ne.image} title={ne.title} comment={ne.comment} times={ne.times}></TopContent>
              ))}
              </div>
              <div className='right'>
                {this.state.news.filter(ne=>ne.cateiD==="2").map(ne=>(
                  <BottomContent image={ne.image} title={ne.title} comment={ne.comment} times={ne.times} ></BottomContent>
                  ))}
              </div> 
            </div>
          </div>
          <div className='advertisement'>
             {this.state.advertisement.map(ad=>(
               <Advertisement image={ad.image}></Advertisement>
             ))}
          </div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default Home;

