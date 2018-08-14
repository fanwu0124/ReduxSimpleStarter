import React from 'react';

const VideoList = (props) => { //props is 'videos' from App's state
  return (
    <ul className="col-md-4 list-group">
      { props.videos.length }
    </ul>
  );
};

export default VideoList;
