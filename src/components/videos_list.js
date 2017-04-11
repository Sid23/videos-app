import React from 'react';
import VideoItem from './video_item'

const VideosList = (props) => {
    const VideoItems = props.videos.map((video) => {
        //.map bind a function for each element into array. video is the parameter to pass at VideoItem component
        // video is the actual element (placeholder)
        return (
            // props.onVideoSelect is the function passed by app.js which set the current video, each video mast handle onChange event
            <VideoItem video={video} onVideoSelect={props.onVideoSelect} key={video.etag} />
        );
    });

    return(
        <div className="list">
            <ul className="list-group">
                {VideoItems}
            </ul>
        </div>
    );
}

export default VideosList;