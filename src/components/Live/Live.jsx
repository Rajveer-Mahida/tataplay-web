/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import channelsData from "../../staticData/config.json";
import LivePlayer from "./LivePlayer";
import axios from "axios";

const Live = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [epgData, setEpgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ck, setCk] = useState([]);

  const getData = async () => {
    channelsData.map((item) => {
      if (item.channel_id == atob(id)) {
        setData(item);
      }
    });

    // Clear key Fetch
    channelsData.map((item) => {
      if (item.channel_id === atob(id) && item.key[0]) {
        setCk(item.key[0].split(":"));
      }
    });

    // EPG Fetch
    let reqOptions = {
      url: `/channels/${atob(id)}`,
      method: "GET",
      headers: {
        platform: "WEB",
      },
    };

    let response = await axios.request(reqOptions);
    setEpgData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div className='hero h-screen w-full bg-slate-950 text-white'>
          <div className='loading loading-ring loading-lg'></div>
        </div>
      ) : (
        data.channel_url  && <LivePlayer data={data} ck={ck} showData={epgData} />
      )}
    </>
  );
};

export default Live;
