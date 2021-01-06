import React from 'react';
import stream_thumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDecription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,

} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={stream_thumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUserName numberOfLines={1}>TIAGO - WEB DEVELOPER</StreamUserName>
          </StreamHeader>

          <StreamDecription numberOfLines={1}>Twitch App - UI clone</StreamDecription>

          <StreamCategory numberOfLines={1}>Technology & Science</StreamCategory>
        </StreamRow>

      <TagRow>
        <TagView>
          <TagText>React Native</TagText>
        </TagView>
        <TagView>
          <TagText>Expo</TagText>
        </TagView>
      </TagRow>
      </StreamColumn>
    </StreamContainer>
  )
  return (
   <List>
     <StreamItem/>
     <StreamItem/>
     <StreamItem/>
     <StreamItem/>
   </List>
  );
};

export default StreamList;
