import { observer } from 'mobx-react';
import styled from 'styled-components';
import { IChat } from '../../types/IChat';

export const ChatItem = observer((props: { chat: IChat }) => {
  return (
    <ChatWrapper>
      <CircleOuter>
        <CircleInner>{props.chat.lastMessage[0]}</CircleInner>
      </CircleOuter>
      <LastMessage>{props.chat.lastMessage}</LastMessage>
    </ChatWrapper>
  );
});

const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 75px;
  border-radius: 10px;
  background-color: #adadad;
`;

const CircleOuter = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  background-color: #eaeaea;
  border-radius: 50%;
`;

const CircleInner = styled.div`
  position: absolute;
  top: 12.5px;
  left: 12.5px;
  width: 50px;
  height: 50px;
  background-color: #dddddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.7em;
  font-weight: 700;
`;

const LastMessage = styled.span``;
