"use client";

import { useState, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  title: string;
  subtitle: string;
}

export default function VideoPlayer({
  src,
  title,
  subtitle,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Remettre au début
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
      <div className="aspect-square bg-zinc-900 flex items-center justify-center relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleVideoEnd}
        >
          <source src={src} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        {/* Bouton Play/Pause personnalisé */}
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors z-10"
            aria-label="Lire la vidéo"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <svg
                className="w-10 h-10 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}

        {/* Overlay pour pause */}
        {isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 bg-transparent z-10 cursor-pointer"
            aria-label="Mettre en pause"
          />
        )}
      </div>

      {/* Légende */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
        <p className="text-white font-semibold">{title}</p>
        <p className="text-zinc-300 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
