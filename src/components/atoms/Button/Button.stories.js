import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  decorators: [withKnobs],
};

export const primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49,100%,58%)',
    Secondary: 'hsl(169,83%,75%)',
    Tertiary: 'hsl(106,47%,64%)',
  };
  const defaultValue = 'Yellow';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Close / save</Button>;
};
export const secondary = () => <Button secondary>Remove</Button>;
