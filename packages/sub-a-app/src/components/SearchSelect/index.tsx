import React from 'react';
import type { FC } from 'react'
import type { SelectProps } from 'antd';
import { Select,Button } from 'antd';
const { Option } = Select;

export type SearchSelectProps = SelectProps


const SearchSelect: FC<SearchSelectProps> = (props) => {
  const {} = props;
  return  <Button>1</Button>
}

export default SearchSelect
