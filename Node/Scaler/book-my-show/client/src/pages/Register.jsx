import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { registerUser } from '../api/users';

const Register = () => {

    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            const res = await registerUser(values);
            console.log(res);
        } catch (err) {
            console.error('Registration failed:', err);
        }
    };


    return (
        <main className='register-container'>
            <section className="top-section">
                <h1>Register To BookMyShow</h1>
            </section>
            <section className="bottom-section">
                <Form
                    onFinish={onFinish}
                    layout='vertical'
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        htmlFor='name'
                        className='d-block'
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input id='name' type="text" placeholder='Enter you name' />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        htmlFor='email'
                        className='d-block'
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input id='email' type="text" placeholder='Enter you email' />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        htmlFor='password'
                        className='d-block'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input id='password' type="password" placeholder='Enter you password' />
                    </Form.Item>

                    <Form.Item className='d-block' style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit" style={{ fontSize: '1rem', fontWeight: '600px' }}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <p>Already a User? <Link to="/login">Login</Link></p>
            </section>
        </main>
    )
}

export default Register
