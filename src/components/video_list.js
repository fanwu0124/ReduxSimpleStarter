import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { //props contains 'videos' from App's state
  const videoItems = props.videos.map((video) => { //map works like foreach
    //For each video, create a VideoListItem instance.
    //Pase {video} to props of VideoListItem.
    //Create a <li> for each video.
    //Each video from YouTube API response has a unique etag.
    //Use etag as each <li>'s unique id.
    return <VideoListItem key = {video.etag} video = {video} />;
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
