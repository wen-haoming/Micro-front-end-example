import React,{useEffect} from 'React';
import styles from './index.less';
import Buttom from "lib-app/Button"

 function IndexPage() {
    console.log(Buttom)
  return (
    <div>
      <h1 className={styles.title}>sub-b-app</h1>
    </div>
  );
}

export default React.memo(IndexPage)
