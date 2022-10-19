import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import {Form, Col, Row, Input, Button} from 'antd'
import axios from 'axios'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'antd-button-color/dist/css/style.css'; // or 'antd-button-color/dist/css/style.less'

function UpdateCustomer() {

  const params = useParams();
  const location = useLocation();

  const [form] = Form.useForm();
      
  console.log('params', params.id, location.state)


  const submit = (values) =>{

    console.log(values)

    let newData = {companyName: values.companyName,
      contactName: values.contactName,
      contactTitle: values.contactTitle,
      address: {

        street: values.street,
        city: values.city,
        region: values.region,
        postalCode: values.postalCode,
        country: values.country,
        phone: values.phone


      }
    
    }

    axios.put(`https://northwind.vercel.app/api/customers/${params.id}`, newData)
    .then(res=> console.log('RES', res.data))

}




useEffect(() => {

  form.setFieldsValue(
    {companyName: location.state.companyName,
      contactName: location.state.contactName,
      contactTitle: location.state.contactTitle,
      street: location.state.address.street,
      city: location.state.address.city,
      region: location.state.address.region,
      postalCode: location.state.address.postalCode,
      country: location.state.address.country,
      phone: location.state.address.phone

    
    }
  );
  
}, [])




return (


<Form

    layout='vertical'
    onFinish={submit}

    form={form}
    
>

    <Row gutter={24}>

        <Col span={12}>

            <Form.Item
            label='Company Name'
            name='companyName'
            
            rules={[
                {
                  required: true,
                  message: 'Please input a company name!',
                },
                {max: 150, message: 'Please enter less than 150 characters!'}
              ]}>

            <Input/>

            </Form.Item>

            
        
        
        </Col>

    </Row>


    <Row gutter={24}>


    <Col span={12}>

      <Form.Item
      label='Contact Name'
      name='contactName'

      rules={[
        {
          required: true,
          message: 'Please input a contact name!',
        }
      ]}>

      <Input/>


      </Form.Item>

    </Col>


    <Col span={12}>

    <Form.Item
    label='Contact Title'
    name='contactTitle'
    rules={[
      {
        required: true,
        message: 'Please input a company name!',
      }
    ]}>

    <Input/>


    </Form.Item>

    </Col>

    </Row>

    <Row gutter={24}>

      <Col span={12}>

      <Form.Item
      label='Street'
      name='street'
      rules={[
        {
          required: true,
          message: 'Please input a street name!',
        }
      ]}>

      <Input/>


      </Form.Item>
        
      </Col>

      <Col span={12}>

      <Form.Item
      label='City'
      name='city'
      rules={[
        {
          required: true,
          message: 'Please input a city name!',
        }
      ]}>

      <Input/>


      </Form.Item>


      
      
      </Col>


      <Col span={12}>

      <Form.Item
      label='Region'
      name='region'
      rules={[
        {
          required: true,
          message: 'Please input a region name!',
        }
      ]}>

      <Input/>


      </Form.Item>
      
      </Col>


      <Col span={12}>

      <Form.Item
      label='Postal Code'
      name='postalCode'
      rules={[
        {
          required: true,
          message: 'Please input a postal code!',
        }
      ]}>

      <Input/>


      </Form.Item>
      
      </Col>

      <Col span={12}>

      <Form.Item
      label='Country'
      name='country'
      rules={[
        {
          required: true,
          message: 'Please input a country name!',
        }
      ]}>

      <Input/>


      </Form.Item>
      
      </Col>

      <Col span={12}>

      <Form.Item
      label='Phone Number'
      name='phone'
      rules={[
        {
          required: true,
          message: 'Please input a phone number!',
        }
      ]}>

      <Input/>


      </Form.Item>
      
      </Col>

  

    </Row>
    

    <Button type="success" htmlType="submit">
      Update Customer
    </Button>


</Form>

)
  
}

export default UpdateCustomer