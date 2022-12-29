import { Content } from '../Content';
import { observer } from 'mobx-react';
import { useLang } from '../../store/lang';
import styled from 'styled-components';
import defaultAvatar from '../../assets/images/default-avatar.jpg';
import { store } from '../../store';

export const ProfileCard = observer(() => {
  const member: any = undefined;
  const lang = useLang();
  const chats = [];

  return (
    <Wrapper>
      <Card isDark={store.isDark}>
        <Photo>
          <Image src={defaultAvatar.src} alt="" />
        </Photo>
        <Data>
          <Name>AcruxTech</Name>
          <Description>Это я это я это я</Description>
        </Data>
      </Card>
      <Chats>
        {chats.map((item, index) => (
          <div key={index}>eeee</div>
        ))}
      </Chats>
    </Wrapper>
  );
});

const Wrapper = styled(Content)`
  margin-top: 120px;
  width: 100vw;
`;

const Card = styled.div<{ isDark?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.isDark
      ? 'var(--dark-theme2-bg-color)'
      : 'var(--light-theme2-bg-color)'};
  color: ${props =>
    props.isDark
      ? 'var(--dark-theme-text-color)'
      : 'var(--light-theme-text-color)'};
  border-radius: 10px;
  overflow: hidden;

  @media screen and (min-width: 1380px) {
    flex-direction: row;
    height: 500px;
  }
`;

const Photo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1380px) {
    width: 49%;
  }
`;

const Image = styled.img`
  margin: 0;
  z-index: 1;
  object-fit: cover;
  width: 150px;
  height: 150px;
  @media screen and (min-width: 1380px) {
    width: 250px;
    height: 250px;
  }
`;

const Data = styled.div`
  width: 95%;
  height: 100%;
  padding: 1em 0;
  gap: 1em;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  @media screen and (min-width: 1380px) {
    width: 49%;
  }
`;

const Name = styled.p`
  font-size: 3em;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.p`
  font-size: calc(12px + 0.5vw);
  margin-top: 0.5em;
  margin: 0;
`;

const Chats = styled.div``;
