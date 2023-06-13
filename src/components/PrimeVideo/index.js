import MoviesSlider from '../MoviesSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const primePoster =
    'https://assets.ccbp.in/frontend/react-js/prime-video-img.png'

  return (
    <div className="primevideo-container">
      <div className="inner-container">
        <img src={primePoster} alt="prime video" className="primePoster" />
        <div className="slider-container">
          <MoviesSlider moviesList={moviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
