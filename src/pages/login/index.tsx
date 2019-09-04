import React, { Component, FormEvent } from 'react';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
import { Input, DatePicker, Select, Form, Button, message } from 'antd';
import { FormComponentProps } from "antd/lib/form/Form";
const Option = Select.Option;
const FormItem = Form.Item;
const FormCreate = Form.create();
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

interface IFormComponentProps extends FormComponentProps {
    // test: string;
}

class Login extends Component<IFormComponentProps> {

    constructor(props: IFormComponentProps) {
        super(props);
    }

    login = (e: FormEvent) => {
        e.preventDefault();
        const { validateFields } = this.props.form;
        // console.log(getFieldsValue())
        validateFields((err, value) => {
            if (!err) {
                if (value.username !== 'admin' && value.password !== '123') {
                    message.error('用户名密码不正确！');
                }
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.login}>
                <div className={styles.loginform}>
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={require('../../assets/Analysis.png')} />
                    </div>
                    <Form onSubmit={this.login}>
                        <FormItem
                            label={`Username`}
                            {...formItemLayout}
                        >
                            {getFieldDecorator('username', {
                                rules: [{ required: true }]
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label={`Password`}
                            {...formItemLayout}
                        >
                            {getFieldDecorator('password', {
                                rules: [{ required: true }]
                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <FormItem
                            {...tailFormItemLayout}
                        >
                            <Button type="primary" block={true} htmlType="submit">Log in</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default FormCreate(Login);
