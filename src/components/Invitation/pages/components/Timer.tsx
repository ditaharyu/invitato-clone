import React, { useEffect, useState, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';

const CountdownTimer = (): JSX.Element => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  
  const countdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const nextYear = yyyy + 1;
    const dayMonth = "02/26/";
    let event = dayMonth + yyyy;

    const currentDate = mm + "/" + dd + "/" + yyyy;
    if (currentDate > event) {
      event = dayMonth + nextYear;
    }

    const countDown = new Date(event).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        if (countdownRef.current) {
          countdownRef.current.style.display = "none";
        }
      } else {
        setDays(Math.floor(distance / day));
        setHours(Math.floor((distance % day) / hour));
        setMinutes(Math.floor((distance % hour) / minute));
        setSeconds(Math.floor((distance % minute) / second));
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <Box>
      <Box id="countdown" ref={countdownRef}>
        <ul>
          <li>
            <Text fontFamily="Butler" fontWeight="800" fontSize="22px">{days}</Text>
            <Text fontFamily="Newsreader" fontWeight="100" fontStyle="italic" fontSize="12px">Days</Text>
          </li>
          <li>
            <Text fontFamily="Butler" fontWeight="800" fontSize="22px">{hours}</Text>
            <Text fontFamily="Newsreader" fontWeight="100" fontStyle="italic" fontSize="12px">Hours</Text>
          </li>
          <li>
            <Text fontFamily="Butler" fontWeight="800" fontSize="22px">{minutes}</Text>
            <Text fontFamily="Newsreader" fontWeight="100" fontStyle="italic" fontSize="12px">Minutes</Text>
          </li>
          <li>
            <Text fontFamily="Butler" fontWeight="800" fontSize="22px">{seconds}</Text>
            <Text fontFamily="Newsreader" fontWeight="100" fontStyle="italic" fontSize="12px">Seconds</Text>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default CountdownTimer;
