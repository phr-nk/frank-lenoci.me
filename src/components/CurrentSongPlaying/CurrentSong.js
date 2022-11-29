import React, { useState, useEffect } from "react";
import "./CurrentSong.css";
import { Buffer } from "buffer";
const querystring = require("query-string");

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_REFESH_TOKEN;

var basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENT_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const ARTIST_GENRE_ENDPOINT = `https://api.spotify.com/v1/artists/`;
const TRACK_ENDPOINT = `https://api.spotify.com/v1/tracks/`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

var play_button = require("../../assets/play_button.png");

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
export const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECENT_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getArtistGenre = async (id) => {
  const { access_token } = await getAccessToken();
  var fetch_endpoint = TRACK_ENDPOINT + id;
  return fetch(fetch_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

function CurrentSong() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [ID, setID] = useState("");
  const [link, setLink] = useState("");
  // Similar to componen tDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    const fetchRecent = async () => {
      const response = await getRecentlyPlayed();
      // convert data to json

      return response;
    };

    fetchRecent()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSong(data.items[0].track.name);
        setArtist(data.items[0].track.artists[0].name);
        setID(data.items[0].track.id);
        setLink(data.items[0].track.external_urls.spotify);
        setImage(data.items[0].track.album.images[0].url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="song-box">
      {song ? (
        <p className="song-content">
          <span className="song-intro-text">
            <b>Here's what I am listening to: </b>
          </span>
          <br></br>
          <img className="song-image" src={image}></img>
          <a target="_blank" rel="noreferrer" href={link}>
            <img className="song-play-button" src={play_button}></img>
          </a>
          <div className="song-text">
            <b>{song}</b>
            <span className="song-name-text">{artist}</span>
          </div>
        </p>
      ) : (
        <p className="song-content">
          <span className="song-intro-text">
            <b>Here's what I am listening to: </b>
          </span>
          No song playing
        </p>
      )}
    </div>
  );
}
export default CurrentSong;
