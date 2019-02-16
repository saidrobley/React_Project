import axios from 'axios';

const KEY = 'AIzaSyAq-liSV628qB3QmQCINzFXyI8avdi1skA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
