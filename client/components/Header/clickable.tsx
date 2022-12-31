import styled from 'styled-components';
import { observer } from 'mobx-react';
import Image from 'next/image';
import NavLink from '../NavLink';
import sunIcon from '../../assets/icons/sun.svg';
import { store } from '../../store';
import { useLang } from '../../store/lang';

export const Clickable = observer(() => {
  const lang = useLang();

  return (
    <>
      <NavMenu>
        <NavLink href="/" name={lang.profile} />
        <NavLink href="/chat" name={lang.chat} />
        <NavLink href="/about" name={lang.about} />
      </NavMenu>
      <Buttons>
        <ThemeButton onClick={store.changeTheme}>
          <Image src={sunIcon.src} alt="" width={18} height={18} />
        </ThemeButton>
        <LangsWrapper>
          <Langs isDark={store.isDark} onClick={store.changeLang}>
            {store.lang.toUpperCase()}
          </Langs>
        </LangsWrapper>
      </Buttons>
    </>
  );
});

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const ThemeButton = styled.button`
  width: 3em;
  height: 3em;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  transition: ease-in-out 0.3s;
  border-radius: 50%;

  &:hover {
    background-color: #ddd;
    box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2) inset;
  }
`;

const LangsWrapper = styled.div`
  width: 3em;
  text-align: center;
`;

const Langs = styled.p<{ isDark?: boolean }>`
  color: ${props =>
    props.isDark
      ? 'var(--dark-theme-text-color)'
      : 'var(--light-theme-text-color)'};
  transition: ease-in-out 0.3s;

  &:hover {
    letter-spacing: 0.1em;
  }

  @media (max-width: 580px) {
    margin: 0;
  }
`;