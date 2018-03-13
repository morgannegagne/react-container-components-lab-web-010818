import React from 'react';

const MovieReviews = ({ reviews }) => {

  const movies = reviews.map(review => {
      return (
        <div className='review'>
            <h3>{review.display_title}</h3>
            <p> {review.summary_short}</p>
            <a href={review.link.url}> {review.link.suggested_link_text} </a>
        </div>
      )
    })
  return <div className="review-list">{movies}</div>;

}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
