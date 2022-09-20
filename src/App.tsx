import { Form, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import styles from './app.module.less';

const App: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <div className={styles.app}>
      <Form
        form={form}
        initialValues={{ port: 4000 }}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Form.Item label="Port" name="port">
          <InputNumber placeholder="4000" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
