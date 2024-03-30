import React, { useState, useEffect, useRef } from 'react';

// setup a way to make videos suffle in the background
// TODO: locate that video you made for video 2 and put it in the background (it was cool)
// TODO: locate that 3d scene you made for video 2 and put it in the background too (it was also cool)
// TODO: add the video installations from video 2 (those were cool)

const Video = () => {
 
    const playlist = [
    "./videos/ollie.mp4",
    "./videos/00530.mp4",
    "./videos/20210109 big tree fire.mp4",
    "./videos/bs polejam.mp4",
    "./videos/half-cab heel.mp4"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(randomInt(playlist.length));
  const videoRef = useRef();

  useEffect(() => {
    // Set up event listener for when the video ends
    const videoElement = videoRef.current;
    const handleVideoEnd = () => {
      setCurrentVideoIndex(randomInt(playlist.length));
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    // Clean up the event listener when the component unmounts
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentVideoIndex]);

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        src={playlist[currentVideoIndex]}
        type='video/mp4'
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
