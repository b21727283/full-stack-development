import React from 'react'
import {Form, Col, Row, Input, Button} from 'antd'
import axios from 'axios'

function AddCustomer() {


    const submit = (values) =>{

        // form girdileri values.contactName şeklinde alınacak...
        

        console.log(values)

        axios.post('https://northwind.vercel.app/api/customers', values)
        .then(res=> console.log('RES', res.data))



    }

    


    // Form.Item'ın name'i state ismi gibi düşünülebilir...

  return (
    <>

    <Form

        layout='vertical'
        onFinish={submit}
    
    
    >

        <Row gutter={24}>

            <Col span={8}>

                <Form.Item
                label='Company Name'
                name='companyName'
                
                rules={[
                    {
                      required: true,
                      message: 'Please input a company name!',
                    },
                    {max: 30, message: 'Please enter less than 30 characters!'}
                  ]}>

                <Input/>
                </Form.Item>
            
            
            </Col>

            <Col span={8}>

                <Form.Item
                label='Contact Name'
                name='contactName'>

                <Input/>


                </Form.Item>
            
            
            </Col>


            <Col span={8}>

                <Form.Item
                label='Contact Title'
                name='contactTitle'>

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