import { observer } from 'mobx-react';
import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { store } from '../../store';
import { Footer } from '../Footer';
import { Header } from '../Header';

type IProps = {
  children: ReactNode;
};

export const Page = observer((props: IProps) => {
  return (
    <PageWrapper isDark={store.isDark}>
      <Head>
        <title>BetterWeb</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container isDark={store.isDark}>{props.children}</Container>
      <Footer />
    </PageWrapper>
  );
});

const PageWrapper = styled.div<{ isDark?: boolean }>`
  min-width: 100%;
  background: ${props =>
    props.isDark
      ? 'var(--dark-theme-bg-color)'
      : 'var(--light-theme-bg-color)'};
`;

const Container = styled.main<{isDark?: boolean}>`
  min-height: calc(100vh - 100px);
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: ${props => props.isDark ? "var(--dark-theme-text-color)" : "var(--light-theme-text-color)"};
`;
