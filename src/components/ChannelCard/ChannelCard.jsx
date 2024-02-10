import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ChannelCard = ({ item }) => {
  return (
    <div className='card card-compact flex flex-col rounded-xl justify-center w-44 items-center hover:shadow-2xl mx-auto backdrop-blur-xl pt-5 text-white  transform-gpu hover:scale-105 border-solid border border-white-500  select-none ease-in-out transition  duration-400  '>
      <figure>
        <img
          src={`https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,h_200/${item.channel_logo}`}
          alt={item.channel_name}
          className='h-[100px]'
        />
      </figure>
      <Link to={`/catchup/${btoa(item.channel_id)}`}>
        <div className='card-body flex justify-center hover:cursor-pointer'>
          <div className=' text-white font-bold text-sm p-3 overflow-hidden'>🔴 {item.channel_name}</div>
          <div className='badge badge-ghost  text-black font-semibold text-sm p-3'>
            🎭
            {item.channel_genre.includes("Regional") ? item.channel_genre.replace("Regional", "") : item.channel_genre}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
