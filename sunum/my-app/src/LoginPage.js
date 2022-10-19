import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Row, Col, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { IsLoggedContext } from './IsLoggedContext';

const LoginPage = () => {

  const navigate = useNavigate();

  const {isLogged, setIsLogged} = useContext(IsLoggedContext)


  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    if(values.email == 'dgpays@mail.com' && values.password == '123'){
      setIsLogged(true)
      navigate("/customers")
      
    }

    console.log('Wrong credentials!!')
  
  };
  return (


    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{width: '300px'}}
      >



        <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your E-mail!',
            type: "email"
          },
        ]}
        
        >
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="E-mail" />

        </Form.Item>


        <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
      
     

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>


      
    </Form>
    
    

    



    
    
  );
};
export default LoginPage;