import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

const headerTw = tw`
  items-center
  flex
  flex-row
  justify-between
`;

const header__titleTw = tw`
  flex-1
`;

const header__titleMainTw = tw`
  text-4xl
`;

const header__titleSubTw = tw`
  text-2xl
  mx-4
`;

const Header = () => {
  return (
    <View style={headerTw}>
      <View style={header__titleTw}>
        <Text style={header__titleMainTw}>Kupya</Text>
        <Text style={header__titleSubTw}>by Patrick</Text>
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
  );
};

export default Header;
