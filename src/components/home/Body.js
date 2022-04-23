import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import tw from 'twrnc';

import {getSpotifyPlaylist} from '../../webServices/spotify';

const bodyTw = tw`
  items-center
  justify-center
  flex
  flex-col
  pt-20
  w-96
`;

const body__searchBarTw = tw`
  flex
  flex-row
  items-center
  ml-2
`;

const body__customTextInputTw = tw`
  items-center
  flex
  flex-row
  py-2
`;

const body__searchInputTw = tw`
  border-2
  border-neutral-900
  border-solid
  ml-2
  pl-8
  py-2
  text-center
  rounded
  w-64
  z-0
`;

const body__searchInputIconTw = tw`
  -mr-10
  text-[#1DB954]
  z-1
`;

const body__playlistInfoTw = tw``;

const Body = () => {
  const [playlistId, setPlaylistId] = useState('37i9dQZF1DWYlCv3D85m6m');
  const onSearchHandler = async () => {
    const playlist = await getSpotifyPlaylist(playlistId);
    console.log(playlist);
  };

  return (
    <View style={bodyTw}>
      <View style={body__searchBarTw}>
        <View style={body__customTextInputTw}>
          <FontAwesome5
            style={body__searchInputIconTw}
            name="spotify"
            size={24}
          />
          <TextInput
            style={body__searchInputTw}
            onChangeText={setPlaylistId}
            onSubmitEditing={onSearchHandler}
            placeholder="playlist id"
            value={playlistId}
          />
        </View>
      </View>
      <View style={body__playlistInfoTw}>
        <Text>hello</Text>
      </View>
    </View>
  );
};

export default Body;
