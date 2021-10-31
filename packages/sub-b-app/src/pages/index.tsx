import React,{useEffect} from 'React';
// const Button = React.lazy(()=> import('mf1/Button') )
import Button from 'mf1/Button'

 function IndexPage() {

  return (
    <div>
      <React.Suspense fallback="loading---">
        <Button/>
      </React.Suspense>
     <h1> 123</h1>
      123
    </div>
  );
}

export default React.memo(IndexPage)
