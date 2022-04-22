import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={tw`bg-neutral-100 flex flex-col justify-between h-full`}>
      <View style={tw`flex-none mt-8 mx-4`}>
        <View style={tw`flex`}>
          <View>
            <Text style={tw.style('text-4xl')}>Kupya</Text>
            <Text style={tw.style('text-2xl mx-4')}>by Patrick</Text>
            <Icon name="rocket" size={30} />
          </View>
        </View>
      </View>
      <View style={tw`bg-lime-100 grow`}>
        <Text style={tw.style('text-md')}>body</Text>
      </View>
      <View style={tw`bg-teal-100 flex-none`}>
        <Text style={tw.style('text-md')}>footer</Text>
      </View>
    </View>
  );
};

export default App;
