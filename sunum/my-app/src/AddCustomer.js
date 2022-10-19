import React from 'react'
import {Form, Col, Row, Input, Button} from 'antd'
import axios from 'axios'

function AddCustomer() {


    const submit = (values) =>{

        console.log(values)

        axios.post('https://northwind.vercel.app/api/customers', values)
        .then(res=> console.log('RES', res.data))

    }

    
  

  return (
    <>

    <Form

        layout='vertical'
        onFinish={submit}
        
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

        <Button type="primary" htmlType="submit">
          Add Customer
        </Button>


    </Form>
    
    </>
  )
}

export default AddCustomer