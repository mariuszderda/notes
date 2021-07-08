import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Input from './Input';

export default {
  component: Input,
  title: 'Components/Input',
};

export const login = () => <Input placeholder="login" />;
export const search = () => <Input search placeholder="search" />;
