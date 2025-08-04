import React, { useState, useEffect } from 'react';

function Player({ currentSong, onNext, onPrev }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const audioElement = document.querySelector('audio');

  const togglePlay = () => {

    if (!currentSong) {
      return;
    }

    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play();
      setIsPlaying(true);
    }

  };

  // Auto-play when currentSong changes
  useEffect(() => {
    if (currentSong && audioElement) {
      audioElement.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Auto-play failed:', error);
          setIsPlaying(false);
        });
    }
  }, [currentSong]);

  const toggleShuffle = () => {
    if (onNext) {
      setIsShuffle(!isShuffle);
      onNext(isShuffle);
    } else if (onPrev) {
      setIsShuffle(!isShuffle);
      onPrev(isShuffle);
    }
  }
  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  }

  const handleEnded = () => {
    if (isRepeat) {
      audioElement.currentTime = 0;
      audioElement.play();
    } else if (isShuffle) {
      onNext(isShuffle);
    } else {
      onNext(true);
    }
  }



  const album_image = currentSong ? currentSong.album_image : './assets/images/f7e16ae6e49d9b88d484406107534e5b.jpg';


  return (
    <>
      <div className="md:h-[40vh] h-[30vh] w-full rounded-lg bg-center bg-cover mb-3" style={{ backgroundImage: `url(${album_image})` }}>
        <audio hidden src={currentSong ? currentSong.audio : ''} onEnded={handleEnded} className="w-full h-full rounded-lg">
          <source src={currentSong ? currentSong.audio : ''} type="audio/mpeg" />
        </audio>
      </div>
      <div className="flex items-center justify-center gap-3 p-4 bg-gray-200 rounded-lg text-gray-500">
        <button onClick={toggleShuffle} id="shuffle" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={isShuffle ? 'text-green-500' : 'text-gray-500'}
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="m18,6h-2.59c-.53,0-1.04.21-1.41.59l-9.41,9.41h-2.59v2h2.59c.53,0,1.04-.21,1.41-.59l9.41-9.41h2.59v3l4-4-4-4v3Z"></path><path d="m18,16h-1.59l-2.71-2.71-1.41,1.41,2.71,2.71c.37.37.89.59,1.41.59h1.59v3l4-4-4-4v3Z"></path><path d="m7.29,9.71l1.41-1.41-1.71-1.71c-.37-.37-.89-.59-1.41-.59h-3.59v2h3.59l1.71,1.71Z"></path>
          </svg>
        </button>

        <button id="previous" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="M17.46 6.11c-.33-.17-.73-.14-1.04.08l-7 5c-.26.19-.42.49-.42.81s.16.63.42.81l7 5c.17.12.38.19.58.19.16 0 .31-.04.46-.11.33-.17.54-.51.54-.89V7c0-.37-.21-.72-.54-.89M16 15.06 11.72 12 16 8.94v6.11ZM6 6h2v12H6z"></path>
          </svg>
        </button>

        <button onClick={togglePlay} id="play" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={isPlaying ? 'text-green-500' : ''}
              fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1M7 8h2v8H7zM14 6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm3 10h-2V8h2z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={isPlaying ? '' : 'text-gray-500'}
              fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.51 18.87a1.002 1.002 0 0 0 1-.01l10-6c.3-.18.49-.51.49-.86s-.18-.68-.49-.86l-10-6a.99.99 0 0 0-1.01-.01c-.31.18-.51.51-.51.87v12c0 .36.19.69.51.87ZM8 7.77 15.06 12 8 16.23z"></path>
            </svg>
          )}
        </button>

        <button id="next" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="m14.58 11.19-7-5c-.31-.22-.71-.25-1.04-.08S6 6.62 6 7v10c0 .37.21.72.54.89.14.07.3.11.46.11.2 0 .41-.06.58-.19l7-5c.26-.19.42-.49.42-.81s-.16-.63-.42-.81M8 15.06V8.95l4.28 3.06L8 15.07ZM16 6h2v12h-2z"></path>
          </svg>
        </button>

        <button onClick={toggleRepeat} id="repeat" type="button" className="w-fit cursor-pointer transition duration-300 transform hover:scale-125">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={isRepeat ? 'text-green-500' : ''}
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="m16,5H7c-1.1,0-2,.9-2,2v5h2v-5h9v3l5-4-5-4v3Z"></path><path d="m17,17h-9v-3l-5,4,5,4v-3h9c1.1,0,2-.9,2-2v-5h-2v5Z"></path>
          </svg>
        </button>
      </div >
    </>
  )
}

export default Player
