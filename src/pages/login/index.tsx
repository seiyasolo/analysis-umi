import React from 'react';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
import { Input, DatePicker, Select, Form, Button } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
export default function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.loginform}>
                <img className={styles.logo} src={require('../../assets/Analysisb.png')} />
                <Form>
                    <FormItem
                        label={`Username`}
                        {...formItemLayout}
                    >
                        <Input></Input>
                    </FormItem>
                    <FormItem
                        label={`Password`}
                        {...formItemLayout}
                    >
                        <Input type="password"></Input>
                    </FormItem>
                    <FormItem
                        {...tailFormItemLayout}
                    >
                        <Button type="primary" block>Login</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    );
}
