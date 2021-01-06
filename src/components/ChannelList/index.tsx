import React from 'react';
import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
 } from './styles';

const ChannelList: React.FC = () => {
  const ChannelList = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar/>
        <Column>
        <Username>Tiago Rodrigues</Username>
        <Info>30 news vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle/>
      </RightSide>

    </ChannelContainer>
  );
  return (
    <List>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
      <ChannelList/>
    </List>
  );
};

export default ChannelList;
