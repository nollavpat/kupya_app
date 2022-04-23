import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';

import Body from './body/Body';
import Header from './Header';

const homeTw = tw`
  bg-neutral-100
  items-center
  flex
  px-8
  py-4
`;

const home__headerTw = tw`
  flex-1
`;

const home_bodyTw = tw`
  flex-1
`;

const Home = () => {
  return (
    <View style={homeTw}>
      <Header style={home__headerTw} />
      <Body style={home_bodyTw} />
    </View>
  );
};

export default Home;
