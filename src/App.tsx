import { Button, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import styles from './app.module.less';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [port, setPort] = useState<number | null>(4000);

  return (
    <div className={styles.app}>
      <InputNumber
        placeholder="4000"
        value={port}
        onChange={(e) => setPort(e)}
      />
      <div>{count}</div>
      <Button
        onClick={() => {
          setCount((e) => e + 1);
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default App;
