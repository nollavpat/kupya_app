import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import tw from 'twrnc';

import PlaylistViewHeader from './PlaylistViewHeader';

const playlistViewTw = tw`
  w-96
`;

const PlaylistView = ({playlist}) => {
  const {
    description,
    logoUrl,
    name,
    tracks: {items, total},
  } = playlist;

  const totalDuration = items.reduce(
    (ms_total, item) => ms_total + item.track.duration_ms,
    0,
  );

  return (
    <View style={playlistViewTw}>
      <PlaylistViewHeader
        logoUrl={logoUrl}
        name={name}
        description={description}
        totalSongs={total}
        totalDuration={totalDuration}
      />
    </View>
  );
};

PlaylistView.propTypes = {
  playlist: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    tracks: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          track: PropTypes.shape({
            album: PropTypes.shape({
              name: PropTypes.string.isRequired,
            }).isRequired,
            duration_ms: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
          }).isRequired,
        }),
      ).isRequired,
      total: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PlaylistView;
