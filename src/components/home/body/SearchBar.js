import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import tw from 'twrnc';

const searchBarTw = tw`
  flex
  flex-row
  items-center
  ml-2
  py-2
`;

const searchBar__inputTw = tw`
  border-2
  border-[#1DB954]/70
  border-solid
  ml-2
  pl-8
  py-2
  text-center
  rounded
  w-64
  z-0
`;

const searchBar__inputIconTw = tw`
  -mr-10
  text-[#1DB954]
  z-1
`;

const SearchBar = ({onSearchHandler}) => {
  const [playlistId, setPlaylistId] = useState('37i9dQZF1DWYlCv3D85m6m');

  return (
    <View style={searchBarTw}>
      <FontAwesome5 style={searchBar__inputIconTw} name="spotify" size={24} />
      <TextInput
        style={searchBar__inputTw}
        onChangeText={setPlaylistId}
        onSubmitEditing={async () => onSearchHandler(playlistId)}
        placeholder="playlist id"
        value={playlistId}
      />
    </View>
  );
};

SearchBar.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
};

export default SearchBar;
