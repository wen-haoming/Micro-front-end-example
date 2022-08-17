import { DatePicker, Space } from 'antd';
import React, { FC } from 'react';
import { RangePickerProps } from 'antd/es/date-picker';
const { RangePicker } = DatePicker;

export const DateTimeRangePicker: FC<RangePickerProps> = (props) => {
  return <RangePicker showTime {...props} />;
};
