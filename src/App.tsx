import { useState } from 'react';
import styles from './app.module.less';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((e) => e + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default App;
