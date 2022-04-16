import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

const App = () => {
  return (
    <View style={tw`bg-blue-100`}>
      <Text style={tw.style('text-md')}>Hello</Text>
    </View>
  );
};

export default App;
