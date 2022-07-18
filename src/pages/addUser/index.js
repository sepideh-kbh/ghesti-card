import React, { useEffect } from "react";
import { notification } from 'antd';
import RenderForm from "components/RenderForm";
import data from 'utils/db.json';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/users/action';

const AddUser = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(state => state.usersList);

  useEffect(() => {
    if (usersList.hasError) {
      notification.error({
        message: 'خطا',
        description: 'خطایی رخ داده است',
        duration: 4
      });
    }
  }, [usersList.hasError])

  const onFinish = (values) => {
    const url = data[0].createurl;
    return dispatch(getUsers({ values, url }));
  }

  return (
    <RenderForm onFinish={onFinish} data={data[0]} />
  )
}
export default AddUser;