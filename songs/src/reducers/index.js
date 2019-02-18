import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duaration: '4:05' },
    { title: 'Macarena', duaration: '2:30' },
    { title: 'All Star', duaration: '3:15' },
    { title: 'I Want it That Way', duaration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
