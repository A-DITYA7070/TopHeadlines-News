import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {
    let {title,description,ImageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my3'>
        <div className="card">
      <img src={ImageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...
        <span class="badge badge-danger">{!source?"Unknown":source}</span>
        </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {!author?"unKnown":author} on {new Date(date).toTimeString()} </small></p>
        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
      </div>
    )
  }
}
