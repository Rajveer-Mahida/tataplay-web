/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Player from "../Player/Player";
import clearData from "../../staticData/config.json";

const Watch = () => {
  const { id, showid } = useParams();
  const [ck, setCk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    PLAY_URL: "",
    CHANNEL_LOGO: "",
    SHOW_IMAGE: "",
    SHOW_TITLE: "",
    SHOW_DESC: "",
    CONTENT_TYPE: "",
    GENRE: "",
    CHANNEL_ID: "",
    CATCHUP_AVAILABLE: null,
  });

  const getData = async () => {
    try {
    
      let reqOptions = {
        url: `/catchupEpg/${atob(showid)}/?platform=WEB`,
        method: "GET",
        headers: {
          "platform": "web",
          "Content-Type": "application/json",
        },
      };
      let res = await axios.request(reqOptions);
      let response = await res.data.data;

      // Extract the data from the response
      const PLAY_URL = response.detail.dashWidewinePlayUrl;
      const CHANNEL_LOGO = response.meta[0].channelLogo;
      const SHOW_IMAGE = response.meta[0].boxCoverImage;
      const SHOW_TITLE = response.meta[0].title;
      const SHOW_DESC = response.meta[0].description;
      const CONTENT_TYPE = response.meta[0].contentType;
      const GENRE = response.meta[0].primaryGenre;
      const CHANNEL_ID = response.meta[0].channelId;
      const CATCHUP_AVAILABLE = response.meta[0].catchup;

      // Set the state with the obtained data
      setData({
        PLAY_URL,
        CHANNEL_LOGO,
        SHOW_IMAGE,
        SHOW_TITLE,
        SHOW_DESC,
        CONTENT_TYPE,
        GENRE,
        CHANNEL_ID,
        CATCHUP_AVAILABLE,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getClearKeyData = async () => {
    clearData.map((item) => {
      item.channel_id === atob(id) && setCk(item.key[0].split(":"));
    });
  };

  useEffect(() => {
    getData();
    getClearKeyData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [atob(showid)]);

  return (
    <>
      {loading ? (
        <div className='hero h-screen w-full bg-slate-950 text-white'>
          <div className='loading loading-ring loading-lg'></div>
        </div>
      ) : (
        data.PLAY_URL && <Player showData={data} ck={ck} />
      )}
    </>
  );
};

export default Watch;
