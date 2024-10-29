// components/shared/CountdownTimer.tsx
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDateTime: Date | undefined;
}

const CountdownTimer = ({ targetDateTime }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (!targetDateTime || !(targetDateTime instanceof Date)) {
      console.error("Invalid targetDateTime:", targetDateTime);
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDateTime.getTime() - now;
      setTimeLeft(difference);
    };

    calculateTimeLeft();
    const timerId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerId);
  }, [targetDateTime]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="text-lg font-medium text-primary-foreground">
      {formatTime(timeLeft)}
    </div>
  );
};

export default CountdownTimer;
