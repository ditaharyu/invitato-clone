import React, { useEffect, useRef, useState } from 'react';
import { Button, Image } from '@chakra-ui/react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-new-gr-c-s-check-loaded'?: string;
    'data-gr-ext-installed'?: string;
  }
}

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Set initial state to true for autoplay
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio.mp3" autoPlay />
      <Button
        aria-label={isPlaying ? 'Pause' : 'Play'}
        onClick={togglePlay}
        mr={2}
        position="fixed"
        display="flex"
        left="4rem"
        bottom="1rem"
        borderRadius="50%"
        width="20px"
        height="40px"
        padding="0"
        zIndex="20"
        backgroundColor="#997a5e"
        alignItems="center"
        justifyContent="center">
        {isPlaying ? 
          <Image width={4} src="/music.png" alt="play" filter="invert(100%)" /> 
          : <Image width={4} src="/mute.png"  alt="pause" filter="invert(100%)" />}
      </Button>
    </>
  );
};

export default AudioPlayer;
