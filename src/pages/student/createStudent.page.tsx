import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
const CreateStudent = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const onFinish = async (values: any) => {

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/students', {
                ...values
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data) {
                message.success('Registration successful!');
                form.resetFields();
                // You might want to redirect user or store token here
                // if your API returns an auth token
                // localStorage.setItem('token', response.data.token);
            }
        } catch (error) {

            console.error('Registration error:', error);
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error('Please fix the errors in the form.');
    };
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <Card title="Register" bordered={true}>
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    requiredMark={true}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter your name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="rollNo"
                        label="Roll No"
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter your Roll No"
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email',
                                message: 'Please enter a valid email!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Enter your email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="class"
                        label="class"
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter your class"
                        />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter your Address"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default CreateStudent