import React, { useState, useEffect } from "react";

function Progress({ currentSong }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audioElement = document.querySelector("audio");

    if (!audioElement || !currentSong) return;

    const updateProgress = () => {
      const current = audioElement.currentTime || 0;
      const total = audioElement.duration || 0;

      setCurrentTime(current);
      setDuration(total);

      if (total > 0) {
        setProgress((current / total) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration || 0);
    };

    // Add event listeners
    audioElement.addEventListener("timeupdate", updateProgress);
    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    updateProgress();

    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentSong]);

  // Format time
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e) => {
    const audioElement = document.querySelector("audio");
    if (!audioElement || !duration) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const clickPercentage = clickX / progressBarWidth;
    const newTime = clickPercentage * duration;

    audioElement.currentTime = newTime;
  };

  return (
    <>
      <div className="flex items-center max-w-7xl mx-auto gap-10">
        <div className="flex items-center gap-2 w-full">
          <p className="text-sm">{formatTime(currentTime)}</p>
          <div
            className="bg-gray-500 w-full rounded-lg cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="bg-green-500 py-2 rounded-lg transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm">{formatTime(duration)}</p>
        </div>
        <button
          type="button"
          className="w-fit cursor-pointer transition duration-300 transform hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m6,22h12c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2H6c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2Zm0-18h12v16H6V4Z"></path>
            <path d="m12,11c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm0,6c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"></path>
            <path d="M12 5A2 2 0 1 0 12 9 2 2 0 1 0 12 5z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Progress;
