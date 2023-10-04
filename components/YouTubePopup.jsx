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
import {AiFillCloseCircle} from 'react-icons/ai'

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

  const closeYouTube = (event)=>{
    // event.target.closeVideo();
    onClose()
  }
  return (
    <div className=''>
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="popup z-10" >
      <AiFillCloseCircle onClick={onClose} className=" cursor-pointer text-red-600 text-lg" size={50} />
        <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={closeYouTube} />
        
      </div>
    </Modal>
    </div>
  );
};

export default YouTubePopup;
