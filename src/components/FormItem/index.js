import React from "react";
import { Form, Input, Radio } from 'antd';
import PropTypes from "prop-types";

const sizingProps = {
  wrapperCol: { xs: 24 },
  labelCol: { xs: 24 }
};
const FormItem = ({formItemProps, inputProps, children}) => {
  const renderInputByType = {
    text: <Input {...inputProps} />,
    pass: <Input.Password {...inputProps} />,
    radio: (
      <Radio.Group {...inputProps}>
        {children.map(item => (
          <Radio key={item.value} value={item.value}>{item.name}</Radio>
        ))}
      </Radio.Group>
    )
  };

    return (
      <Form.Item data-testid='FormItem' {...sizingProps} {...formItemProps}>
        {renderInputByType[inputProps?.type]}
      </Form.Item>
    )
}

FormItem.propTypes = {
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
  children: PropTypes.array
}

export default FormItem;