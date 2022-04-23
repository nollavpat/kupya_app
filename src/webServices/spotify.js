import {encode as btoa} from 'base-64';
import queryString from 'query-string';
import {
  SPOTIFY_BASE_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_TOKEN_URL,
} from '@env';

export const getSpotifyPlaylist = async playlistId => {
  const fields =
    'description,id,images,name,tracks.items(track(name,album(name))),tracks.total';
  const url = `${SPOTIFY_BASE_URL}/playlists/${playlistId}?${queryString.stringify(
    {fields},
  )}`;

  const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(
        SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET,
      )}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify({
      grant_type: 'client_credentials',
    }),
  });
  const {access_token: accessToken} = await tokenResponse.json();

  const playlistResponse = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return playlistResponse.json();
};

// export const useSpotifyPlaylist = playlistId => {
//   const fields =
//     'description,id,images,name,tracks.items(track(name,album(name))),tracks.total';
//   const url = new URL(`playlists/${playlistId}`, SPOTIFY_BASE_URL);
//   const tokenFormData = new URLSearchParams();

//   url.searchParams.set('fields', fields);

//   tokenFormData.append('grant_type', 'client_credentials');

//   return useSWR(
//     () => url.href,
//     async () => {
//       const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
//         method: 'POST',
//         headers: {
//           Authorization: btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET),
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: tokenFormData.toString(),
//       });
//       const {access_token: accessToken} = tokenResponse.json();
//       const playlistResponse = await fetch(url.href, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       return playlistResponse.json();
//     },
//   );
// };
