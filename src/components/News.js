import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps={
     country:'in',
     pageSize:8,
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
  }
  constructor(){
    super();
      this.state = {
        articles:[],
        loading:true,
        page:1,
        totalResults:0,
    }
 }
 async updateNews(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c160be20836540a5a7ec333c821de014&page=1&pageSize=${this.props.pageSize}`;
  {this.setState({loading:true})}
  let data=await fetch(url);
  let parsedData=await data.json()
  console.log(parsedData);
  this.setState({
    articles:parsedData.articles,
    totalResults:parsedData.totalResults,
    loading:false,
  })
 }
async componentDidMount(){
    this.updateNews();
 }
handlePrevClick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c160be20836540a5a7ec333c821de014&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    {this.setState({loading:true})}
    let data=await fetch(url);
    let parsedData=await data.json()
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
    })
 }
 handleRightClick= async()=>{    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c160be20836540a5a7ec333c821de014&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parsedData=await data.json()
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
    })
 }
 fetchMoreData = async() => {
   this.setState({page:this.state.page+1})
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c160be20836540a5a7ec333c821de014&page=1&pageSize=${this.props.pageSize}`;
   let data=await fetch(url);
   let parsedData=await data.json()
   console.log(parsedData);
   this.setState({
     articles:this.state.articles.concat(parsedData.articles),
     totalResults:parsedData.totalResults,
   })
  };
  render() {
    return (
      <div className='container my=3'>
        <h1 className='text-center' style={{margin:'40px 0px'}}>NewsMaster - Top Stories.</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><Spinner/></h4>}>
        <div className="container"> 
        <div className="row">
        { this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,50):""}
               ImageUrl={element.urlToImage?element.urlToImage:"https://www.cricbuzz.com/a/img/v1/595x396/i1/c253504/after-scoring-an-important-33.jpg"} 
               newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source["name"]}></NewsItem>
           </div>
          })
        }
        </div>
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}
