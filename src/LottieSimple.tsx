import Lottie from 'lottie-react-web'
import groovyAnimation from './assets/groovyWalk.json';

interface ILottieProps {
  lottieName: string,
  lottieComponent: JSX.Element | React.ReactNode,
}

const LottieSimple = () => {
  const lottieOptions: ILottieProps[] = [
    {
      lottieName: 'Groove Circle',
      lottieComponent: (
        <div style={{ borderRadius: '100%', boxShadow: '2px 2px 2px #CCC' }}>
          <Lottie
            options={{
              animationData: groovyAnimation,
            }}
          />
        </div>
      )
    },
    {
      lottieName: 'Groove Runner',
      lottieComponent: (
        <div style={{ width: 200, height: 200, background: '#FFD500' }}>
          <Lottie
            options={{
              animationData: groovyAnimation,
            }}
            speed={2}
          />
        </div>
      )
    },
    {
      lottieName: 'Groove Relaxed',
      lottieComponent: (
        <div style={{ width: 200, height: 200, background: 'blue' }}>
          <Lottie
            options={{
              animationData: groovyAnimation,
            }}
            speed={0.2}
          />
        </div>
      )
    },
    {
      lottieName: 'Groove Reversed',
      lottieComponent: (
        <div style={{ width: 200, height: 200, background: 'red' }}>
          <Lottie
            options={{
              animationData: groovyAnimation,
            }}
            direction={-1}
          />
        </div>
      )
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: 0 }}>
      {
        lottieOptions.map((lottie): JSX.Element => (
          <div
            key={`id-${lottie.lottieName}`}
            style={{ width: 200, height: 200, padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            <p style={{ fontWeight: 'bold' }}>
              {lottie.lottieName}
            </p>
            {/* Below we've the most important piece - the Lottie. All other components are just to increment the idea */}
            {lottie.lottieComponent}
          </div>
        ))
      }
    </div>
  );
};

export default LottieSimple;