import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;

