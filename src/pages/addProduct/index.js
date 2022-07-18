import React, { useEffect } from "react";
import { notification } from 'antd';
import RenderForm from "components/RenderForm";
import data from 'utils/db.json';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'store/products/action';

const AddProduct = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productsList);

  useEffect(() => {
    if (productsList.hasError) {
      notification.error({
        message: 'خطا!',
        description: 'خطایی رخ داده است',
        duration: 4
      });
    }
  }, [productsList.hasError])

  const onFinish = (values) => {
    const url = data[1].createurl;
    return dispatch(getProducts({ values, url }));
  }

  return (
    <RenderForm onFinish={onFinish} data={data[1]} />
  )
}
export default AddProduct;