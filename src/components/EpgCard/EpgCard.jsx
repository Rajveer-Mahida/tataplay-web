import { Link } from "react-router-dom";
import { convertEpochToDateTime } from "../../hooks/util";
import { FaArrowRight } from "react-icons/fa";


/* eslint-disable react/prop-types */
const EpgCard = ({ item, channelId }) => {
  return (
    <>
      <div className='card card-compact w-full border-2 shadow-2xl p-3 text-white backdrop-blur-xl transition-transform transform-gpu hover:scale-105 duration-500  '>
        <figure className='w-50'>
          <img
            className='rounded-lg'
            src={`https://mediaready.videoready.tv/tatasky/image/fetch/f_auto/${item.boxCoverImage}`}
            alt={item.title}
          />
        </figure>
        <div className='card-body'>
          <div className='card-actions justify-start'>
            <div className='badge badge-outline  font-mono sm:line-clamp-1'>
              {item.channelName.includes("Tata Play")
                ? item.channelName.replace("Tata Play", "TPlay")
                : item.channelName}{" "}
            </div>
            <div className='badge  badge-outline font-mono badge-md  line-clamp-1 '>🎭{item.genre}</div>
            <div className='badge  badge-outline font-mono badge-md line-clamp-1 '>
              {item.languages[0]} {item.languages[1]}
            </div>
            {item.epgState == "ON_AIR" && (
              <div className='badge bg-red-200 text-md font-semibold p-3 truncate'>LIVE NOW 🔴</div>
            )}
            <div className='font-semibold line-clamp-1'>
              {item.epgState == "FORWARD" ? "🔔 " : ""}
              {item.epgState == "REVERSE" ? "🔀 " : ""}
              {item.epgState == "ON_AIR" ? "🔴 " : ""}
              {convertEpochToDateTime(item.startTime) + "-" + convertEpochToDateTime(item.endTime)}
            </div>
          </div>

          <h2 className='card-title  text-left'>🔸{item.title}</h2>
          <p className='font-normal md:line-clamp-3 lg:line-clamp-4'>{item.desc}</p>
          {item.catchup && item.epgState === "REVERSE" && (
            <div className='card-actions justify-end'>
              <Link to={`/watch/${channelId}/${btoa(item.id)}`}>
                <button className='btn bg-transparent  text-white hover:text-black'>
                  Watch <FaArrowRight />
                </button>
              </Link>
            </div>
          )}
          {item.epgState === "ON_AIR" && (
            <div className='card-actions justify-end'>
              <Link to={`/watch/${channelId}/live`}>
                <button className='btn bg-transparent  text-white hover:text-black'>
                  Watch <FaArrowRight />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EpgCard;
