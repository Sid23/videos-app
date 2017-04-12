import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// component imports
import SearchBar from './components/search_bar'
import VideosList from './components/videos_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

// read from an environment variable the value of the key to acces YouTube APIs
const API_KEY = '....';

class App extends Component {
  constructor(props) {
    // Parent class constructor, Reract.Component, it ineherits its methods/properties
    super(props);

    // state initialization
    this.state = {
      // list of video objects
      videos: [],
      // video displayed in the frame
      currentVideo: null
    };

    this.videoSearch('prova');
  }

  videoSearch(term) {
    // run the youtube reasearch
    YTSearch(
      // options: api key and word to find, the content of input box in this case
      {key: API_KEY, term: term},
      // callback function that process the results of youtube research, 
      (videos) => {
        // set state variable videos euqual to the videos provided by YouTube
        this.setState({videos: videos, currentVideo: videos[0]});
      }
    );
  }

  func(video) {
    this.setState({currentVideo: video});
  }

  render() {
    //pass this function as parameter in the instantiation, it is possible to get it from props in the constructor
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.currentVideo} />
        <VideosList videos={this.state.videos} onVideoSelect={(video) => this.func(video)} />
      </div>
    );
  }
}

export default App;
