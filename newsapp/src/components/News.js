import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
    articles: [],
    loading: false
    }
  }
 async componentDidMount(){
 let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=6d140f11ca964cd6b558af4ee700f5c5";
 let data =  await fetch(url);
 let parseData = await data.json()
 console.log(parseData);
 this.setState({articles: parseData.articles})
  }


  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
         return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url}/>
          </div>
          
        })}
        
          
        </div>
      </div>
    )
  }
}

export default News


