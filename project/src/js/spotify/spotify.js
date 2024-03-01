// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQChPWsFHDtaC5me9Mq9b91HLJOYEUyyebCgkfcvC1hv_AuHqNKptr-OTc1zwUwM9QbdWJ8dsm7hdS7g25J8-fen2Ja3MgiJv44hjuBNmgiod_FkiY2782m9Bz7GjdH3-H-PrHCsXsP3GJwYbybXjIVj0Wihre4bm33i_RTIDdUMJx_rt7FzYAVQEeaJXNOHnJggfoEGhjVYcm8lqYYlm9BaNlNL_VbyRBNXMqC1OReCLAXTNU5T2_A9HL1_XuPqQ4aX";
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

const tracksUri = [
  "spotify:track:46xFv1St1zTIMy5XrCyDMs",
  "spotify:track:7rnYzAK4JcKvKwWmKXrYH2",
  "spotify:track:1uXVXCwKpz6UGt6A7jCmEZ",
  "spotify:track:4qpX59Ps3wNAOWn4nlfp4m",
  "spotify:track:4bum83xkBTLIxFnDGt23vE",
  "spotify:track:65CgoA4XRhFfUy81vCjjJT",
  "spotify:track:3zQuPetoO9klCYM3cDqFkl",
  "spotify:track:2bCZ39sie3j80NwhUAcDOt",
  "spotify:track:3GfJvIgF32IioeiYx94YBh",
  "spotify:track:48ghGG0Hpg8kN9oG5a2oua",
];

async function createPlaylist(tracksUri) {
  const { id: user_id } = await fetchWebApi("v1/me", "GET");

  const playlist = await fetchWebApi(`v1/users/${user_id}/playlists`, "POST", {
    name: "My recommendation playlist",
    description: "Playlist created by the tutorial on developer.spotify.com",
    public: false,
  });

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(",")}`,
    "POST"
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);
