import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Components/Heading',
};

export const normal = () => <Heading>Notes</Heading>;
export const big = () => <Heading big>Notes</Heading>;
