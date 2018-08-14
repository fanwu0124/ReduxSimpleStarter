import React from 'react';

const VideoList = (props) => { //props contains 'videos' from App's state
  return (
    <ul className="col-md-4 list-group">
      { props.videos.length }
    </ul>
  );
};

export default VideoList;
