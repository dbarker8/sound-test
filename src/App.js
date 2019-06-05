import React, { Component } from "react";
let { soundManager } = require("soundmanager2");

const audioUrl = "https://lingomastery.s3.amazonaws.com/audio/A0rvqIm27.mp3";
const min = 10;
const sec = 2.2;
const msToPlayFrom = min * 60 * 1000 + sec * 1000;

class App extends Component {
  playSound() {
    let sound = soundManager.createSound({
      id: "mySound",
      url: audioUrl,
      autoLoad: true,
      autoPlay: false,
      onload: function() {
        this.play({
          position: msToPlayFrom
        });
      },
      volume: 50
    });
  }

  playSoundAudioApi() {
    this.sound = new Audio(audioUrl);
    this.sound.currentTime = msToPlayFrom / 1000;
    this.sound.play();
  }

  render() {
    return (
      <div>
        <p>
          firefox is accurate and starts at the word "cometí", while chrome
          starts earlier at "preparando"{" "}
        </p>

        <button onClick={this.playSound} style={{ marginRight: 20 }}>
          Play
        </button>
        <button onClick={this.playSoundAudioApi.bind(this)}>
          Play using html audio
        </button>
      </div>
    );
  }
}

export default App;
