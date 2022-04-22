import React from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import tw from 'twrnc';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <View style={tw`bg-neutral-100 flex flex-col h-full py-4`}>
      <View style={tw`flex-1 flex flex-row justify-around`}>
        <View>
          <Text style={tw.style('text-4xl')}>Kupya</Text>
          <Text style={tw.style('text-2xl mx-4')}>by Patrick</Text>
        </View>
        <View>
          <TouchableHighlight>
            <View>
              <FontAwesome
                name="cog"
                size={30}
                onPress={() => console.log('setting pressed')}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View
        style={tw`h-156 w-96 mt-10 self-center border-solid border-2 rounded p-4`}>
        <View style={tw`flex flex-row items-center w-full`}>
          <FontAwesome5
            name="spotify"
            size={24}
            color="#1DB954"
            style={tw`z-0 -mr-8`}
          />
          <TextInput
            placeholder="Playlist id"
            style={tw`grow border-solid border-2 border-neutral-900 rounded py-2 pl-8 z-1`}
          />
          <TouchableHighlight style={tw`ml-2`}>
            <View>
              <FontAwesome
                name="cog"
                size={24}
                onPress={() => console.log('setting pressed')}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View style={tw`bg-teal-100 self-center`}>
        <Text style={tw.style('text-md')}>footer</Text>
      </View>
    </View>
  );
};

export default App;
