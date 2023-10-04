import { useState } from 'react';
import LottieSimple from './LottieSimple';
import LottieControlled from './LottieControlled';
import groovyAnimation from './assets/groovyWalk.json';

type Option = 'Simple' | 'Controlled';

const App = () => {
  const [option, setOption] = useState<Option>('Simple');

  const onChange = (value: Option): void => {
    setOption(value);
  }

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px', margin: 0 }}>
      <div style={{ width: '100%', display: 'flex', gap: '50px', alignItems: 'center', justifyContent: 'center', background: '#CCC' }}>
        <h1 onClick={(): void => onChange('Simple')} style={{ cursor: 'pointer' }}>
          SIMPLE
        </h1>
        <span>|</span>
        <h1 onClick={(): void => onChange('Controlled')} style={{ cursor: 'pointer' }}>
          CONTROLLED
        </h1>
      </div>
      {
        option === 'Simple' ? (
          <LottieSimple />
        ) : (
          <LottieControlled animation={groovyAnimation} loop autoplay />
        )
      }
    </div>
  );
};

export default App;