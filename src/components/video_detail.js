import React from 'react';

// {video} just pull-up the video property from props E6 syntax
const VideoDetail = ({video}) => {
    // if video is nul write loading instead show error, this may happen especially
    // everytime the app.js loads (videos set empty in its constructor)
    if(!video)
        return <div>Loading....</div>;

    const Url = 'https://www.youtube.com/embed/' + video.id.videoId;

    return (
        <div className="display">
            <div className="video">
                <iframe src={Url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <hr />
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;