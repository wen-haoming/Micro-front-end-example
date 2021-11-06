import styles from './index.less';
import {Button} from 'antd'
export default function IndexPage() {
  return (
    <div>
      <Button>123</Button>
      <h1 className={styles.title}>sub-a-app</h1>
    </div>
  );
}
