import { IApi } from 'umi';
import { resolve } from 'path';
import { readFileSync } from 'fs';

export default (api: IApi) => {
  api.onGenerateFiles(() => {
    const content= readFileSync(resolve('./src/.umi/umi.ts'),'utf-8')
    // console.log()
    api.writeTmpFile({
      path: 'index.ts',
      content,
    });
    api.writeTmpFile({
      path: 'umi.ts',
      content: 'import("./index")',
    });
  });
};

