import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Input, DatePicker, Select } from 'antd';
import User from './users';
import Login from './login';
const Option = Select.Option;
export default function () {
  const View = localStorage.getItem('TOKEN') ? User : Login;
  return (
    // <div>
    //   {/* <Input placeholder={'fsad'} />
    //   <DatePicker style={{ marginTop: '20px' }} />
    //   <Select style={{ marginTop: '20px' }}>
    //     <Option value={1} >1</Option>
    //     <Option value={2}>2</Option>
    //   </Select> */}
    // </div>
    <View />
  );
}
