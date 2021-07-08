import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
// eslint-disable-next-line import/no-extraneous-dependencies
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.notes};
`;

export default {
  component: ButtonIcon,
  title: 'Components/ButtonIcon',
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const bulbButtonActive = () => (
  <div>
    <ButtonIcon active icon={bulbIcon} />
  </div>
);
export const bulbButton = () => <ButtonIcon icon={bulbIcon} />;
export const logoutButton = () => <ButtonIcon icon={logoutIcon} />;
export const penButton = () => <ButtonIcon icon={penIcon} />;
export const plusButton = () => <ButtonIcon icon={plusIcon} />;
export const twitterButton = () => <ButtonIcon icon={twitterIcon} />;
