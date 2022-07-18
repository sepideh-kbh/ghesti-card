import React from 'react';
import { render, screen } from "@testing-library/react";
import data from 'utils/db.json';
import RenderForm from "./index";

const mockOnFinish = jest.fn();

const defaultProps = {
  formRef: jest.fn(), 
  onFinish: mockOnFinish, 
  data: data[0]
};

describe('RenderForm unit tests', () => {
  it('should be rendered correctly', () => {
    render(<RenderForm {...defaultProps} />);
    const renderForm = screen.getByTestId('RenderForm');
    expect(renderForm).toBeInTheDocument();
  });

  it('should render title correctly', () => {
    render(<RenderForm {...defaultProps} />);
    const title = screen.getByTestId('RenderForm__Title');
    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    expect(title.textContent).toBe(data[0].titleform);
  });

  it('should render 3 FormItem components', () => {
    render(<RenderForm {...defaultProps} />);
    const FormItem = screen.getAllByTestId('FormItem');
    expect(FormItem).toHaveLength(3);
  });
});