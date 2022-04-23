import React, {useState} from 'react';
import {View} from 'react-native';
import tw from 'twrnc';

import PlaylistView from './PlaylistView';
import SearchBar from './SearchBar';
import {getSpotifyPlaylist} from '../../../webServices/spotify';

const bodyTw = tw`
  items-center
  justify-center
  flex
  flex-col
  pt-20
  w-96
`;

const sampleData = {
  description: 'One in a million!',
  id: '37i9dQZF1DWYlCv3D85m6m',
  logoUrl: 'https://i.scdn.co/image/ab67706f000000035f5636ba80cdc67d1b691417',
  name: 'This Is TWICE',
  tracks: {
    items: [
      {
        track: {
          album: {
            name: 'Just be yourself',
          },
          duration_ms: 200213,
          name: 'Just be yourself',
        },
      },
      {
        track: {
          album: {
            name: '#TWICE4 (Japanese ver.)',
          },
          duration_ms: 209400,
          name: "I CAN'T STOP ME - Japanese ver.",
        },
      },
      {
        track: {
          album: {
            name: '#TWICE4 (Japanese ver.)',
          },
          duration_ms: 207280,
          name: 'CRY FOR ME - Japanese ver.',
        },
      },
      {
        track: {
          album: {
            name: '#TWICE4 (Japanese ver.)',
          },
          duration_ms: 213546,
          name: 'Alcohol-Free - Japanese ver.',
        },
      },
      {
        track: {
          album: {
            name: '#TWICE4 (Japanese ver.)',
          },
          duration_ms: 196706,
          name: 'SCIENTIST - Japanese ver.',
        },
      },
      {
        track: {
          album: {
            name: 'Twenty-Five Twenty-One OST Part 6',
          },
          duration_ms: 251517,
          name: 'Stardust love song',
        },
      },
      {
        track: {
          album: {
            name: 'Doughnut',
          },
          duration_ms: 263680,
          name: 'Doughnut',
        },
      },
      {
        track: {
          album: {
            name: 'Doughnut',
          },
          duration_ms: 211213,
          name: 'Wonderful Day',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 194600,
          name: 'SCIENTIST',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 219386,
          name: 'MOONLIGHT',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 176160,
          name: 'ICON',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 211426,
          name: 'CRUEL',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 187933,
          name: 'REAL YOU',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 191253,
          name: 'F.I.L.A (Fall In Love Again)',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 170560,
          name: 'LAST WALTZ',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 187800,
          name: 'ESPRESSO',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 180613,
          name: 'REWIND',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 217213,
          name: 'CACTUS',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 205466,
          name: 'PUSH & PULL (JIHYO, SANA, DAHYUN)',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 183213,
          name: 'HELLO (NAYEON, MOMO, CHAEYOUNG)',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 198453,
          name: '1, 3, 2 (JEONGYEON, MINA, TZUYU)',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 195053,
          name: 'CANDY',
        },
      },
      {
        track: {
          album: {
            name: 'Formula of Love: O+T=<3',
          },
          duration_ms: 208780,
          name: 'SCIENTIST - R3HAB Remix',
        },
      },
      {
        track: {
          album: {
            name: 'The Feels',
          },
          duration_ms: 198053,
          name: 'The Feels',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 182680,
          name: 'Perfect World',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 223666,
          name: 'BETTER',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 231233,
          name: 'Good at Love',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 220240,
          name: 'Fanfare',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 227746,
          name: 'Kura Kura',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 227653,
          name: 'Four-leaf Clover',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 210953,
          name: 'In the summer',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 241746,
          name: 'PIECES OF LOVE',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 197353,
          name: 'Thank you, Family',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 259693,
          name: 'PROMISE',
        },
      },
      {
        track: {
          album: {
            name: 'Perfect World',
          },
          duration_ms: 182680,
          name: 'Perfect World',
        },
      },
      {
        track: {
          album: {
            name: 'Taste of Love',
          },
          duration_ms: 210573,
          name: 'Alcohol-Free',
        },
      },
      {
        track: {
          album: {
            name: 'Taste of Love',
          },
          duration_ms: 182946,
          name: 'First Time',
        },
      },
      {
        track: {
          album: {
            name: 'Taste of Love',
          },
          duration_ms: 163333,
          name: 'Scandal',
        },
      },
      {
        track: {
          album: {
            name: 'Taste of Love',
          },
          duration_ms: 147320,
          name: 'Conversation',
        },
      },
      {
        track: {
          album: {
            name: 'Taste of Love',
          },
          duration_ms: 166666,
          name: 'Baby Blue Love',
        },
      },
      {
        track: {
          album: {
            name: 'Taste of Love',
          },
          duration_ms: 173133,
          name: 'SOS',
        },
      },
      {
        track: {
          album: {
            name: 'Kura Kura',
          },
          duration_ms: 227746,
          name: 'Kura Kura',
        },
      },
      {
        track: {
          album: {
            name: 'CRY FOR ME',
          },
          duration_ms: 204167,
          name: 'CRY FOR ME',
        },
      },
      {
        track: {
          album: {
            name: 'BETTER',
          },
          duration_ms: 223666,
          name: 'BETTER',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 205493,
          name: "I CAN'T STOP ME",
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 179320,
          name: 'HELL IN HEAVEN',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 214240,
          name: 'UP NO MORE',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 179586,
          name: 'DO WHAT WE LIKE',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 208133,
          name: 'BRING IT BACK',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 196946,
          name: 'BELIEVER',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 193573,
          name: 'QUEEN',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 181520,
          name: 'GO HARD',
        },
      },
      {
        track: {
          album: {
            name: "I CAN'T STOP ME (English Version)",
          },
          duration_ms: 205484,
          name: "I CAN'T STOP ME - English Version",
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 209480,
          name: 'SHOT CLOCK',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 171053,
          name: 'HANDLE IT',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 198866,
          name: 'DEPEND ON YOU',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 247360,
          name: 'SAY SOMETHING',
        },
      },
      {
        track: {
          album: {
            name: 'Eyes wide open',
          },
          duration_ms: 218533,
          name: 'BEHIND THE MASK',
        },
      },
      {
        track: {
          album: {
            name: 'STUCK IN MY HEAD (Japanese ver.)',
          },
          duration_ms: 179266,
          name: 'STUCK IN MY HEAD - Japanese ver.',
        },
      },
      {
        track: {
          album: {
            name: 'MORE & MORE',
          },
          duration_ms: 199653,
          name: 'MORE & MORE',
        },
      },
      {
        track: {
          album: {
            name: 'MORE & MORE',
          },
          duration_ms: 225400,
          name: 'OXYGEN',
        },
      },
      {
        track: {
          album: {
            name: 'MORE & MORE',
          },
          duration_ms: 193466,
          name: 'FIREWORK',
        },
      },
      {
        track: {
          album: {
            name: 'MORE & MORE',
          },
          duration_ms: 186706,
          name: 'MAKE ME GO',
        },
      },
      {
        track: {
          album: {
            name: 'MORE & MORE',
          },
          duration_ms: 168893,
          name: 'SHADOW',
        },
      },
      {
        track: {
          album: {
            name: 'MORE & MORE',
          },
          duration_ms: 173346,
          name: "DON'T CALL ME AGAIN",
        },
      },
      {
        track: {
          album: {
            name: 'MORE & MORE',
          },
          duration_ms: 191986,
          name: 'SWEET SUMMER DAY',
        },
      },
      {
        track: {
          album: {
            name: 'Feel Special',
          },
          duration_ms: 206868,
          name: 'Feel Special',
        },
      },
      {
        track: {
          album: {
            name: 'FANCY YOU',
          },
          duration_ms: 213885,
          name: 'FANCY',
        },
      },
      {
        track: {
          album: {
            name: 'Summer Nights',
          },
          duration_ms: 208238,
          name: 'What is Love?',
        },
      },
      {
        track: {
          album: {
            name: 'Twicecoaster:lane1',
          },
          duration_ms: 212990,
          name: 'TT',
        },
      },
      {
        track: {
          album: {
            name: 'Twicetagram',
          },
          duration_ms: 207824,
          name: 'Likey',
        },
      },
      {
        track: {
          album: {
            name: 'Page Two',
          },
          duration_ms: 208862,
          name: 'CHEER UP',
        },
      },
      {
        track: {
          album: {
            name: 'Summer Nights',
          },
          duration_ms: 180809,
          name: 'Dance The Night Away',
        },
      },
      {
        track: {
          album: {
            name: 'YES or YES',
          },
          duration_ms: 237685,
          name: 'YES or YES',
        },
      },
      {
        track: {
          album: {
            name: 'The Story Begins',
          },
          duration_ms: 215091,
          name: 'Like Ooh-Ahh',
        },
      },
      {
        track: {
          album: {
            name: 'Merry & Happy',
          },
          duration_ms: 186895,
          name: 'Heart Shaker',
        },
      },
      {
        track: {
          album: {
            name: 'SIGNAL',
          },
          duration_ms: 196687,
          name: 'Signal',
        },
      },
      {
        track: {
          album: {
            name: 'Twicecoaster : Lane 2',
          },
          duration_ms: 195753,
          name: 'Knock Knock',
        },
      },
      {
        track: {
          album: {
            name: 'BDZ',
          },
          duration_ms: 197800,
          name: 'BDZ',
        },
      },
      {
        track: {
          album: {
            name: 'Fake & True',
          },
          duration_ms: 219625,
          name: 'Fake & True',
        },
      },
      {
        track: {
          album: {
            name: 'Candy Pop',
          },
          duration_ms: 202010,
          name: 'Candy Pop',
        },
      },
      {
        track: {
          album: {
            name: 'Breakthrough',
          },
          duration_ms: 217650,
          name: 'Breakthrough',
        },
      },
      {
        track: {
          album: {
            name: 'Page Two',
          },
          duration_ms: 202629,
          name: 'Touchdown',
        },
      },
      {
        track: {
          album: {
            name: 'Feel Special',
          },
          duration_ms: 186970,
          name: 'GET LOUD',
        },
      },
      {
        track: {
          album: {
            name: 'BDZ',
          },
          duration_ms: 211799,
          name: 'Wake Me Up',
        },
      },
      {
        track: {
          album: {
            name: 'Feel Special',
          },
          duration_ms: 191228,
          name: 'LOVE FOOLISH',
        },
      },
      {
        track: {
          album: {
            name: '#TWICE',
          },
          duration_ms: 212989,
          name: 'TT - Japanese ver.',
        },
      },
      {
        track: {
          album: {
            name: 'Feel Special',
          },
          duration_ms: 193995,
          name: 'TRICK IT',
        },
      },
      {
        track: {
          album: {
            name: 'Twicetagram',
          },
          duration_ms: 198033,
          name: 'Turtle',
        },
      },
      {
        track: {
          album: {
            name: 'BDZ',
          },
          duration_ms: 183000,
          name: 'One More Time',
        },
      },
      {
        track: {
          album: {
            name: 'Summer Nights',
          },
          duration_ms: 186285,
          name: 'CHILLAX',
        },
      },
      {
        track: {
          album: {
            name: 'BDZ',
          },
          duration_ms: 203815,
          name: 'I WANT YOU BACK',
        },
      },
      {
        track: {
          album: {
            name: 'Twicecoaster:lane1',
          },
          duration_ms: 175256,
          name: 'One In A Million',
        },
      },
      {
        track: {
          album: {
            name: 'Twicecoaster:lane1',
          },
          duration_ms: 210626,
          name: 'Jelly Jelly',
        },
      },
      {
        track: {
          album: {
            name: 'Twicecoaster:lane1',
          },
          duration_ms: 175200,
          name: '1 To 10',
        },
      },
      {
        track: {
          album: {
            name: 'Feel Special',
          },
          duration_ms: 177086,
          name: 'RAINBOW',
        },
      },
      {
        track: {
          album: {
            name: 'The year of "YES"',
          },
          duration_ms: 210450,
          name: '올해 제일 잘한 일 The Best Thing I Ever Did',
        },
      },
      {
        track: {
          album: {
            name: 'HAPPY HAPPY',
          },
          duration_ms: 206973,
          name: 'HAPPY HAPPY',
        },
      },
      {
        track: {
          album: {
            name: 'YES or YES',
          },
          duration_ms: 212871,
          name: 'SAY YOU LOVE ME',
        },
      },
      {
        track: {
          album: {
            name: 'FANCY YOU',
          },
          duration_ms: 158637,
          name: 'GIRLS LIKE US',
        },
      },
    ],
    total: 101,
  },
};

const Body = () => {
  const [playlist, setPlaylist] = useState(sampleData);

  const onSearchHandler = async playlistId => {
    const fetchedPlaylist = await getSpotifyPlaylist(playlistId);
    const logoUrl = fetchedPlaylist.images[0].url;

    delete fetchedPlaylist.images;

    setPlaylist({
      ...fetchedPlaylist,
      logoUrl,
    });
  };

  return (
    <View style={bodyTw}>
      <SearchBar onSearchHandler={onSearchHandler} />
      {playlist && <PlaylistView playlist={playlist} />}
    </View>
  );
};

export default Body;
