/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import JWPlayer from "@jwplayer/jwplayer-react";
import "../../staticData/KB5zFt7A.js"

import { useEffect } from "react";

const LivePlayer = ({ data, ck,showData }) => {

useEffect(() => {
  document.title = `${data.channel_name} `;
}, []);

  const configDefaults = {
    logo: {
      file: `https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_150,w_150/${data.channel_logo}`,
      position: "top-right",
      hide: true,
    },
    "autostart": false,
    "controls": true,
    "pipIcon": "disabled",
    "abouttext" : "RAJVEER 🚀",
    "aboutlink" : "https://github.com/Rajveer-Mahida/",
    "preload" : "auto",
    "skin": {
      "controlbar": {
        "background": "rgba(0,0,0,0)",
        "icons": "rgba(255,255,255,0.8)",
        "iconsActive": "#FFFFFF",
        "text": "#FFFFFF"
      },
      "menus": {
        "background": "rgba(0,0,0,0.8)",
        "text": "rgba(255,255,255,0.8)",
        "textActive": "#FFFFFF",
      },
      "timeslider": {
        "progress": "#FF0000",
        "rail": "rgba(255,255,255,0.3)"
      },
      "tooltips": {
        "background": "#FFFFFF",
        "text": "#000000"
      }
    },
  };
  const playlist = [
    {
      title: `${showData.meta[0].title}`,
      image: `https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto${showData.meta[0].boxCoverImage}`,
      description: showData.meta[0]?.description,
      file: `${data.channel_url}`,
      drm: {
        clearkey: { key: `${ck[1]}`, keyId: `${ck[0]}` },
        videoRobustness: "SW_SECURE_CRYPTO",
        audioRobustness: "SW_SECURE_CRYPTO",
      },

      logo: {
        file: `https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_150,w_150/${data.channel_logo}`,
        position: "top-right",
        hide: true,
      },
    
    },
  ];

  
  return (
    <div>
      <JWPlayer
        // library='KB5zFt7A.js'
        config={configDefaults}
        playlist={playlist}
        key={"Khpp2dHxlBJHC8MCmLnBuV2jK/DwDnJMniwF6EO9HC/riJ712ZmbHg=="}
      />
    </div>
  );
};

export default LivePlayer;
