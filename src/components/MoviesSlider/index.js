import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const settings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const MoviesSlider = props => {
  const {moviesList} = props

  const getActionMoviesSlider = () => {
    const filteredActionMovies = moviesList.filter(
      each => each.categoryId === 'ACTION',
    )

    return (
      <div className="action-container">
        <h1 className="actionMovies">Action Movies</h1>
        <Slider {...settings}>
          {filteredActionMovies.map(each => (
            <MovieItem key={each.id} item={each} />
          ))}
        </Slider>
      </div>
    )
  }

  const getComedyMoviesSlider = () => {
    const filteredActionMovies = moviesList.filter(
      each => each.categoryId === 'COMEDY',
    )

    return (
      <div>
        <h1 className="actionMovies">Comedy Movies</h1>
        <Slider {...settings}>
          {filteredActionMovies.map(each => (
            <MovieItem key={each.id} item={each} />
          ))}
        </Slider>
      </div>
    )
  }

  return (
    <div>
      {getActionMoviesSlider()}
      {getComedyMoviesSlider()}
    </div>
  )
}

export default MoviesSlider
