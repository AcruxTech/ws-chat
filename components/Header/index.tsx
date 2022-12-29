import { observer } from 'mobx-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { store } from '../../store';
import { Content } from '../Content';
import { Clickable } from './clickable';
import { burgerIcon, closeIcon } from './icons';

export const Header = observer(() => {
  const [matchesMobile, setMatchesMobile] = useState(false);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  useEffect(() => {
    setMatchesMobile(window.matchMedia('(max-width: 580px)').matches);
    window.matchMedia('(max-width: 580px)').addEventListener('change', e => {
      setMatchesMobile(e.matches);
    });
  }, []);

  return (
    <HeaderWrapper isDark={store.isDark}>
      <ContentHeader>
        <Link href="/">
          <Logo isDark={store.isDark}>WsChat</Logo>
        </Link>
        {matchesMobile ? (
          <>
            <MenuIcon
              onClick={() => {
                setMobileMenuOpened(!mobileMenuOpened);
                document.body.classList.toggle('no-scroll');
              }}
            >
              {mobileMenuOpened ? closeIcon : burgerIcon}
            </MenuIcon>
            <ClickableContent isDark={store.isDark} opened={mobileMenuOpened}>
              <Clickable />
            </ClickableContent>
          </>
        ) : (
          <Clickable />
        )}
      </ContentHeader>
    </HeaderWrapper>
  );
});

const HeaderWrapper = styled.header<{ isDark?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  z-index: 2;
  backdrop-filter: blur(7px);
  background-color: ${props =>
    props.isDark
      ? 'var(--dark-theme2-bg-color)'
      : 'var(--light-theme2-bg-color)'};
`;

const ContentHeader = styled(Content)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 580px) {
    padding: 20px;
  }
`;

const Logo = styled.p<{ isDark?: boolean }>`
  color: ${props =>
    props.isDark
      ? 'var(--dark-theme-text-color)'
      : 'var(--light-theme-text-color)'};
  font-family: Montserrat, OpenSans, sans-serif;
  font-weight: 700;
  font-size: 1.75rem;

  @media (max-width: 580px) {
    margin: 0;
  }
`;

const ClickableContent = styled.div<{ isDark?: boolean; opened: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  transform: ${props => (props.opened ? 'none' : 'translateX(-100vw)')};
  transition: transform 0.3s ea;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  will-change: transform, opacity;
  transition: transform 0.4s cubic-bezier(0, 0, 0.3, 1);
  background-color: ${props =>
    props.isDark
      ? 'var(--dark-theme-bg-color)'
      : 'var(--light-theme-bg-color)'};
  z-index: 5;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const MenuIcon = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 6;
  & svg {
    color: #fff;
    @media (prefers-color-scheme: dark) {
      color: #fff;
    }
    width: 100%;
    height: 100%;
  }
`;
const Image = styled.img`
  margin: 0;
  object-fit: cover;
  color: #fff;
  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;
