import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { //props are from video_list
  //({video}) => is the same as (props) => and const video = props.video;

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //onVideoSelect comes from VideoList.
    //Whenever <li> is clicked, call onVideoSelect function.
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left video-item">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
