"use client";

import React, { useRef } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import useVideoPlayer from "@/src/hooks/useVideoPlayer";

const CustomVideoPlayer = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <>
      <div className="flex flex-col items-center gap-3 border-t-white border-t pt-4">
        <p className="text-2xl">Custom Video Player</p>

        <div className="video-wrapper relative">
          <video
            src={
              "https://cdn-useast1.kapwing.com/final_63d3f9c055bb0f005d667707_399902.mp4"
            }
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
            onClick={togglePlay}
          />
          <div className="controls">
            <div className="actions">
              <button onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <AiFillPlayCircle size={24} />
                ) : (
                  <AiFillPauseCircle size={24} />
                )}
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
            <select
              className="velocity"
              value={playerState.speed}
              onChange={(e) => handleVideoSpeed(e)}
            >
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
            <button className="mute-btn" onClick={toggleMute}>
              {!playerState.isMuted ? <FaVolumeMute /> : <GoUnmute />}
            </button>
          </div>
          <button onClick={togglePlay} className="absolute top-1/2">
            {!playerState.isPlaying ? <AiFillPlayCircle size={48} /> : null}
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomVideoPlayer;
