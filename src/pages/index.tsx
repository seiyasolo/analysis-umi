import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Input, DatePicker, Select } from 'antd';
import User from './users';
import Login from './login';
import router from 'umi/router';
const Option = Select.Option;

export default function () {
  localStorage.getItem('TOKEN') ? router.push('/users') : router.push('/login');
  // const View = localStorage.getItem('TOKEN') ? User : Login;
  return null;
}
