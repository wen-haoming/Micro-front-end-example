import React, { useEffect } from 'react';
import {Spin} from 'antd'
// FormRender
const FormRender =  React.lazy(() => import('mf1/FormRender'))

function IndexPage() {

  return (
    <div style={{width:300,margin:'100px auto'}}>
      <React.Suspense fallback={<Spin spinning/>} >
        <FormRender
          layout="vertical"
          fields={[
            {
              type: 'FormInput',
              required: true,
              props: {
                name: 'username',
                label: '账号',
              },
            },
            {
              type: 'InputPasswrod',
              required: true,
              props: {
                name: 'paaword',
                label: '密码',
              },
            },
            {
              type: 'Submit',
              props: {
                fieldProps: {
                  block: true,
                  text: '登录',
                },
              },
            },
          ]}
        />
      </React.Suspense>
    </div>
  );
}

export default React.memo(IndexPage)
