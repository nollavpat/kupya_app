import React from 'react';
import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import tw from 'twrnc';

const playlistViewHeaderTw = tw`
  bg-[#121212]/95
  flex
  flex-row
  p-2
  rounded-t
`;

const playlistViewHeader__logoTw = tw`
  h-16
  w-16
`;

const playlistViewHeader__detailsTw = tw`
  ml-4
`;

const playlistViewHeader__detailsNameTw = tw`
  font-bold
  text-2xl
  text-[#fff]
  tracking-wide
`;

const playlistViewHeader__detailsDescriptionTw = tw`
  font-extralight
  text-sm
  text-[#fff]/75
`;

const playlistViewHeader__detailsSummaryTw = tw`
  flex
  flex-row
`;

const playlistViewHeader__detailsTotalSongsTw = tw`
  font-extralight
  text-xs
  text-[#fff]
`;

const playlistViewHeader__detailsTotalDurationTw = tw`
  font-extralight
  text-xs
  text-[#fff]/75
`;

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToHM(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;

  minutes = seconds >= 30 ? minutes + 1 : minutes;

  minutes = minutes % 60;

  hours = hours % 24;

  return `${hours} hr ${padTo2Digits(minutes)} min`;
}

const PlaylistViewHeader = ({
  logoUrl,
  name,
  description,
  totalSongs,
  totalDuration,
}) => {
  return (
    <View style={playlistViewHeaderTw}>
      <Image
        style={playlistViewHeader__logoTw}
        source={{
          uri: logoUrl,
        }}
      />
      <View style={playlistViewHeader__detailsTw}>
        <Text style={playlistViewHeader__detailsNameTw}>{name}</Text>
        <Text style={playlistViewHeader__detailsDescriptionTw}>
          {description}
        </Text>
        <View style={playlistViewHeader__detailsSummaryTw}>
          <Text style={playlistViewHeader__detailsTotalSongsTw}>
            {totalSongs} songs,
          </Text>
          <Text style={playlistViewHeader__detailsTotalDurationTw}>
            {convertMsToHM(totalDuration)}
          </Text>
        </View>
      </View>
    </View>
  );
};

PlaylistViewHeader.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  totalSongs: PropTypes.number.isRequired,
  totalDuration: PropTypes.number.isRequired,
};

export default PlaylistViewHeader;
