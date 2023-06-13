import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
      >
        {close => (
          <div className="react-player">
            <div className="button-container">
              <button
                onClick={() => close()}
                className="close-button"
                type="button"
                data-testid="closeButton"
              >
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <div className="react-player-container">
              <ReactPlayer controls width={520} height={320} url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
