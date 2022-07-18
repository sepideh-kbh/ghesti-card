import React from "react";
import { Space, Row, Col, Form, Button, Typography } from "antd";
import FormItem from '../FormItem';
import PropTypes from "prop-types";

const genderOptions = [
  { name: 'مرد', value: 'male' },
  { name: 'زن', value: 'female' },
];

const RenderForm = ({ formRef, onFinish, data }) => {
  return (
    <Space align='center' size='middle' data-testid='RenderForm'>
      <Row>
        <Col xs={24}>
          <Typography.Title
            level={3}
            data-testid='RenderForm__Title'>
            {data?.titleform}
          </Typography.Title>
          <Form
            ref={formRef}
            onFinish={onFinish}
            name={data.form}
          >
            {data.field.map(item => (
              <FormItem
                key={item.name}
                formItemProps={{
                  name: item.name,
                  label: item.title,
                  key: item.name
                }}
                inputProps={{
                  type: item.type,
                  placeholder: item.title,
                }}
                children={item.type === 'radio' ? genderOptions : []}
              />
            ))}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                ثبت
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Space>
  )
}

RenderForm.propTypes = {
  formRef: PropTypes.object,
  onFinish: PropTypes.func,
  data: PropTypes.object
}

export default RenderForm;