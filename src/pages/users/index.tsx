import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Input, DatePicker, Select } from 'antd';
const Option = Select.Option;
export default function User() {
    localStorage.setItem('TOKEN', '21');
    return (
        <div>
            <Input placeholder={'fsad'} />
        </div>
    );
}
