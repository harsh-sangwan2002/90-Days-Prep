import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { loginUser } from '../api/users';

const Login = () => {

    const onFinish = async (values) => {
        console.log('Success:', values);
        try {
            const res = await loginUser(values);
            console.log(res);
        } catch (err) {
            console.error('Login failed:', err);
        }
    };


    return (
        <main className='login-container'>
            <section className="top-section">
                <h1>Login To BookMyShow</h1>
            </section>
            <section className="bottom-section">
                <Form
                    onFinish={onFinish}
                    layout='vertical'
                >
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
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <p>New User? <Link to="/register">Register</Link></p>
            </section>
        </main>
    )
}

export default Login
