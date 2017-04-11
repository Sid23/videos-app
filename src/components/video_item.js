import React from 'react';

// this function thake 2 parameters; the video object containing all info and on change event handler
// which set the current video
const VideoItem = ({video, onVideoSelect}) => {
    const ImageUrl = video.snippet.thumbnails.default.url;

    return(
        // onVideoChange handler is defined in App.js
        // onvideoSelect already has a parameter for this reason ()
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={ImageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoItem;