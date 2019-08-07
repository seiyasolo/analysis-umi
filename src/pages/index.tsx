import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Input, DatePicker, Select } from 'antd';
const Option = Select.Option;
export default function () {
  return (
    <div>
      <Input placeholder={'fsad'} />
      <DatePicker style={{ marginTop: '20px' }} />
      <Select style={{ marginTop: '20px' }}>
        <Option value={1} >1</Option>
        <Option value={2}>2</Option>
      </Select>
    </div>
  );
}
