import Lottie from 'lottie-react-web'
import { useState } from 'react';

interface ILottieProps {
  animation: unknown;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieControlled = ({
  animation, loop, autoplay,
}: ILottieProps) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isStopped, setIsStopped] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);
  const [width, setWidth] = useState<number>(100);

  const onPause = (): void => setIsPaused(!isPaused);

  const onStop = (): void => setIsStopped(!isStopped);

  const onIncreaseSpeed = (): void => setSpeed(speed + 1);

  const onDecreaseSpeed = (): void => {
    if (speed === 1) return;
    setSpeed(speed - 1);
  };

  const onIncreaseSize = (): void => {
    if (width === 100) return;
    setWidth(width + 10);
  };

  const onDecreaseSize = (): void => {
    if (width === 10) return;
    setWidth(width - 10);
  };

  return (
    <div style={{ width: 500, height: 500 }}>
      <Lottie
        options={{
          animationData: animation,
          loop: loop || false,
          autoplay: autoplay || false,
        }}
        width={`${(width / 100) * 100}%`}
        speed={speed}
        isStopped={isStopped}
        isPaused={isPaused}
      />
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={onPause}>
          {isPaused ? 'Unpause' : 'Pause'}
        </button>
        <button onClick={onStop}>
          {isStopped ? 'Play' : 'Stop'}
        </button>
        <button onClick={onIncreaseSpeed}>Acelerate</button>
        <button onClick={onDecreaseSpeed}>Decelerate</button>
        <button onClick={onIncreaseSize}>Bigger</button>
        <button onClick={onDecreaseSize}>Smaller</button>
      </div>
    </div>
  );
};

export default LottieControlled;