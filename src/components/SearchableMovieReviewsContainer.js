import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

class SearchableMovieReviewsContainer extends Component {

  constructor() {
     super();

     this.state = {
       reviews: [],
       searchTerm: ''
     };
   }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${URL}${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }));
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value })
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <h1> Search Movie Reviews </h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.searchTerm} type='text' id='search-term'/>
          <input type='submit' />
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}

export default SearchableMovieReviewsContainer
