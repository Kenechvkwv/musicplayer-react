import React, { useState } from 'react';

function Playlist({ playlist, onSelectSong }) {

  const [currentSong, setCurrentSong] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle clicking a song
  const handleSongSelect = (song, index) => {
    setCurrentSong({ name: song.name, artist: song.artist_name, date: song.releasedate });

    if (onSelectSong) {
      onSelectSong(song, index);
    }

    // add state to button
    setActiveButton(index);
  };

  // Calculate total duration in seconds
  const totalDuration = playlist?.results?.reduce((sum, song) => sum + song.duration, 0) || 0;
  //  Convert to minutes:seconds
  const totalMinutes = Math.floor(totalDuration / 60);
  const totalSeconds = String(totalDuration % 60).padStart(2, '0');


  return (
    <>
      <div className="block bg-white/50 h-full w-full rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="">
            <span className="block text-2xl font-bold">{currentSong.name ? currentSong.name : 'Selected song'}</span>
            <span className="block text-sm text-light">{currentSong.artist} [{currentSong.date ? currentSong.date : 'Null'}]</span>
          </p>

          <p className="text-right">
            <span className="block text-2xl font-bold">{totalMinutes}min : {totalSeconds}sec</span>
            <span className="block text-sm text-light">{playlist?.results?.length} Songs</span>
          </p>
        </div>
        <div className="block md:h-[40vh] h-[20vh] overflow-y-auto">

          <ul className="list-none p-0 m-0 w-[90%] space-y-2">

            {playlist?.results?.map((song, index) => {
              const minutes = Math.floor(song.duration / 60);
              const seconds = String(song.duration % 60).padStart(2, '0');
              return (
                <li
                  key={song.id}
                  onClick={() => handleSongSelect(song, index)} // pass index to Player
                  className={`rounded-lg p-2 w-full flex items-center justify-between cursor-pointer transition duration-300 transform hover:scale-105 ${activeButton === index ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  <p className="text-sm">
                    <span>{index + 1}</span> <span>{song.name} - {song.artist_name}</span>
                  </p>
                  <p>{minutes}:{seconds}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div >
    </>
  )
}

export default Playlist
