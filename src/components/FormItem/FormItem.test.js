import { render, screen } from "@testing-library/react";
import FormItem from './index';
import { Radio } from 'antd';

const defaultProps = {
  formItemProps: {
    name: 'name',
    label: 'label',
    'data-testid': 'FormItem'
  },
  inputProps: {
    type: 'text',
    placeholder: 'placeholder',
    'data-testid': 'TextInput'
  },
  children: []
};

describe('FormItem unit tests', () => {
  it('should render Form.Item correctly', () => {
    render(<FormItem {...defaultProps} />);
    const formItem = screen.getByTestId('FormItem');
    expect(formItem).toBeInTheDocument();
  });
  it('should render text input whent type prop is "text"', () => {
    render(<FormItem {...defaultProps} />);
    const inputText = screen.getByTestId('TextInput');
    expect(inputText).toBeInTheDocument();
  });
  it('should render radio.group with fix count of childern', () => {
    const radioProps = {
      ...defaultProps,
      inputProps: {
        type: 'radio',
        placeholder: 'placeholder',
        'data-testid': 'RadioGroup',
      },
      children: [
        { name: 'مرد', value: 'male' },
        { name: 'زن', value: 'female' },
      ]
    };
    render(<FormItem {...radioProps} />);
    const radioGroup = screen.getByTestId('RadioGroup');
    expect(radioGroup).toBeInTheDocument();
    expect(radioGroup.children).toHaveLength(2);
  });
});