import { TextAreaProps } from 'antd/es/input';
import { Input } from 'antd';
import type { FC } from 'react';

export const TextArea: FC<TextAreaProps> = (props) => {
  const { allowClear = true } = props;
  return <Input.TextArea allowClear={allowClear} {...props} />;
};
