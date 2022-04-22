import React from 'react';
import {TextInput, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import tw from 'twrnc';

const bodyTw = tw`
  items-center
  justify-center
  flex
  flex-row
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
  rounded
  w-64
  z-0
`;

const body__searchInputIconTw = tw`
  -mr-10
  text-[#1DB954]
  z-1
`;

const body__searchIconButtonTw = tw`
  ml-2
  text-neutral-900
`;

const Body = () => {
  return (
    <View style={bodyTw}>
      <View style={body__searchBarTw}>
        <View style={body__customTextInputTw}>
          <FontAwesome5
            style={body__searchInputIconTw}
            name="spotify"
            size={24}
          />
          <TextInput style={body__searchInputTw} placeholder="playlist id" />
        </View>
        <FontAwesome
          style={body__searchIconButtonTw}
          name="search"
          size={24}
          onPress={() => console.log('search!')}
        />
      </View>
    </View>
  );
};

export default Body;
