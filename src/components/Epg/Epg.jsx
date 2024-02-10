import { useEffect, useState } from "react";
import axios from "axios";
import EpgCard from "../EpgCard/EpgCard";
import { Link, useParams } from "react-router-dom";
import { todayDate, getPastDate } from "../../hooks/util";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Epg = () => {
  const [epgData, setEpgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(todayDate()); // Default to today's date

  let { id } = useParams();

  const getData = async (id, date) => {
    try {
      let reqOptions = {
        url: `/schedule?date=${date}`,
        method: "POST",
        headers: {
          platform: "web",
          "Content-Type": "application/json",
          referer: "https://watch.tataplay.com/",
          origin: "https://watch.tataplay.com",
        },
        data: JSON.stringify({
          id: atob(id),
        }),
      };
      let response = await axios.request(reqOptions);
      setEpgData(response.data.data.epg);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching epg data: ", error);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
    getData(id, selectedDate);
  }, [id, selectedDate]);

  return (
    <>
      {loading ? (
        <div className='hero h-screen w-full bg-slate-950 text-white'>
          <div className='loading loading-ring loading-lg'></div>
        </div>
      ) : (
        <div className='mx-auto p-8 select-none bg-[url("/mobile.svg")] lg:bg-[url("/desktop.svg")] bg-cover bg-fixed  bg-no-repeat min-h-screen'>
          <div>
            <h1 className='lg:text-xl text-sm font-bold bg-gray-900 text-[#dddd46]  p-2 text-center mb-5 rounded-lg uppercase '>
              PROGRAMS OF {epgData && [0].channelName} ON {selectedDate}
            </h1>
            <div className='flex justify-between'>
              <Link to={`/`}>
                <button className='btn mb-5 border-none rounded-lg bg-transparent  text-white hover:text-black'>
                  <FaArrowLeft /> Back
                </button>{" "}
              </Link>
              <Link to={`/watch/${id}/live`}>
                <button className='btn bg-transparent hover:bg-slate-50 text-white hover:text-black'>
                  LIVE 🔴 <FaArrowRight />
                </button>
              </Link>
            </div>
            <select
              value={selectedDate}
              onChange={handleDateChange}
              className='select select-accent mb-5 select-sm lg:select-md w-full max-w-full sm:max-w-xs bg-gray-900 text-white  ml-auto flex items-center justify-center '
            >
              {[...Array(8)].map((_, index) => (
                <option key={index} value={getPastDate(index)} className='text-center font-semibold'>
                  {getPastDate(index)}
                </option>
              ))}
            </select>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative   '>
            {epgData && epgData.map((item, index) => <EpgCard key={index} item={item} channelId={id} />)}
          </div>
          <div className='text-sm font-bold tracking-wide rounded-md bg-slate-950 p-3 mt-3  text-[#fff]  text-center select-none '>
            <p>&copy; 2024 | MADE WITH ❤️‍🔥 </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Epg;
