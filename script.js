const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  fullscreen: "true",
  primary: "html5",
  stretching: "uniform",
  aspectratio: "16:9",
  renderCaptionsNatively: false,
  autostart: false,
  abouttext: "Github",
  aboutlink: "https://github.com/Foilz",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
  },

  advertising: {
    client: "vast",
    schedule: {
      myAds: {
        offset: "pre",
        tag: "https://syndication.exdynsrv.com/splash.php?idzone=4648050"
      }
    }
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Sprite Fright - Open Movie by Blender Studio",
      description: "You're Watching",
      image: "https://i.ytimg.com/vi/_cMxraX_5RE/maxresdefault.jpg",
      sources: [
        {
          file: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
          type: "hls",
          label: "Live Stream",
          default: true
        }
      ],
      captions: [
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BBengali%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Bangla",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BEnglish%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "English",
          kind: "captions",
          default: true
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BGerman%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "German",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BHungarian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Hungarian",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BItalian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Italian",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BMalayalam%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Malayalam",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BPortugu%C3%AAs%20(Portugal)%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Portuguese",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BRussian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Russian",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BSpanish%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Spanish",
          kind: "captions"
        }
      ],
      tracks: [
        {
          file:
            "https://raw.githubusercontent.com/Foilz/jwplayer/main/mosaic.vtt",
          kind: "thumbnails"
        }
      ]
    }
  ]
});

playerInstance.on("ready", function () {
  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);
});
