import { Content } from '../Content';
import { observer } from 'mobx-react';
import { useLang } from '../../store/lang';
import styled from 'styled-components';
import defaultAvatar from '../../assets/images/default-avatar.jpg';
import { store } from '../../store';
import { ChatItem } from '../ChatItem';

export const ProfileCard = observer(() => {
  const member: any = undefined;
  const lang = useLang();
  const chats = [
    {
      id: 'string',
      title: 'string',
      lastMessage: 'string'
    },
    {
      id: 'string',
      title: 'string',
      lastMessage: 'string'
    },
    {
      id: 'string',
      title: 'string',
      lastMessage: 'string'
    }
  ];

  return (
    <Wrapper>
      <Me isDark={store.isDark}>
        <Media>
          <Avatar src={defaultAvatar.src} alt="" />
        </Media>
        <Data>
          <Name>AcruxTech</Name>
          <Description>Это я это я это я</Description>
        </Data>
      </Me>
      <Chats isDark={store.isDark}>
        {chats.map((item, index) => (
          <ChatItem chat={item} key={index} />
        ))}
      </Chats>
    </Wrapper>
  );
});

const Wrapper = styled(Content)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;

const Card = styled.div<{ isDark?: boolean }>`
  width: 48%;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;

  background-color: ${props =>
    props.isDark
      ? 'var(--dark-theme2-bg-color)'
      : 'var(--light-theme2-bg-color)'};
  color: ${props =>
    props.isDark
      ? 'var(--dark-theme-text-color)'
      : 'var(--light-theme-text-color)'};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Me = styled(Card)<{ isDark?: boolean }>``;

const Media = styled.div`
  width: 100%;
  background-image: url('https://oir.mobi/uploads/posts/2022-08/1661353761_1-oir-mobi-p-novogodnii-fon-na-rabochii-stol-vkontakte-1.jpg');
  background-size: contain;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Avatar = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media screen and (min-width: 1380px) {
    width: 250px;
    height: 250px;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
`;

const Name = styled.span`
  font-size: 3em;
  font-weight: 700;
`;

const Description = styled.span`
  font-size: calc(12px + 0.5vw);
`;

const Chats = styled(Card)<{ isDark?: boolean }>`
  padding: 20px;
  gap: 20px;
`;
