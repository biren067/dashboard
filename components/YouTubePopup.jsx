// import React from 'react';
// import YouTube from 'react-youtube';

// const YouTubePopup = ({ videoId, onClose }) => {
//   const opts = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   const onReady = (event) => {
//     event.target.playVideo();
//   };

//   return (
//     <div className="popup">
//     Bond
//       <YouTube videoId={videoId} opts={opts} onReady={onReady} />
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default YouTubePopup;
import React from 'react';
import YouTube from 'react-youtube';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const YouTubePopup = ({ isOpen, videoId, onClose }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <>bond{isOpen?'bond1':'bond2'}
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="popup">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </Modal>
    </>
  );
};

export default YouTubePopup;
