import { useEffect, useState } from "react";
import ChannelCard from "../ChannelCard/ChannelCard";
import channelsData from "../../staticData/config.json";

const Home = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [visibleChannels, setVisibleChannels] = useState(80);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genre, setGenre] = useState([]);

  const visibleChannelSlice = channels.slice(0, visibleChannels);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    const filteredChannels = channelsData.filter((channel) =>
      channel.channel_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setChannels(filteredChannels);
  };

  const handleGenreChange = (event) => {
    const newSelectedGenre = event.target.value;
    setSelectedGenre(newSelectedGenre);
    const filteredChannels = channelsData.filter((channel) =>
      channel.channel_genre.toLowerCase().includes(newSelectedGenre.toLowerCase())
    );
    setChannels(filteredChannels);
  };

  const loadData = () => {
    setVisibleChannels((prevVisibleChannels) => prevVisibleChannels + 80);
    setLoading(false);
  };

  const getGenre = () => {
    const genre = channelsData.map((item) => item.channel_genre);
    const uniqueGenre = [...new Set(genre)];
    setGenre(uniqueGenre);
  };

  useEffect(() => {
    setChannels(channelsData);
    getGenre();
    setLoading(false);
    setTimeout(() => {
      setPageLoading(false);
    }, 500);
    // setPageLoading(false);
  }, []);

  return (
    <>
      {pageLoading ? (
        <div className='hero h-screen w-full bg-slate-950 text-white'>
          <span className='loading loading-ring  loading-lg'></span>
        </div>
      ) : (
        <div>
          {/* Navbar  */}
          <div className='mx-auto   min-h-screen  bg-[url("/mobile.svg")] lg:bg-[url("/desktop.svg")] bg-fixed bg-no-repeat bg-cover'>
            <div className='navbar text-[#ecf53e] flex-col'>
              <div className='navbar-center w-full'>
                <a className='btn btn-ghost text-xl font-bold tracking-wider w-full bg-gray-700/40 rounded-lg  '>
                  TATAPLAY LIVE AND CATCHUP
                </a>
              </div>
            </div>

            {/* Search Bar  */}
            <div className='form-control flex md:flex-row lg:flex-row justify-center items-center '>
              <div className='p-4 w-full lg:max-w-96'>
                <input
                  type='text'
                  className='input input-bordered bg-gray-800 text-white w-full'
                  placeholder='Search Channel...'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              {/* Genre Filter  */}
              <div className='p-4 w-full lg:max-w-56  '>
                <select
                  value={selectedGenre}
                  onChange={handleGenreChange}
                  className='select select-accent select-bordered  bg-gray-900 text-white w-full'
                >
                  <option value=''>All Genre</option>
                  {genre.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cards  */}
            {visibleChannelSlice.length > 0 && (
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2 p-5'>
                {visibleChannelSlice.map((item) => (
                  <ChannelCard key={item.channel_id} item={item} />
                ))}
              </div>
            )}

            {/* LoadMore Button */}
            {!loading && visibleChannels < channels.length && (
              <div className='text-center pb-5'>
                <button className='btn btn-primary' onClick={loadData}>
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
