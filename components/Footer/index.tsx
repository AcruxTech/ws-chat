import { observer } from "mobx-react";
import { Content } from "../Content";
import { useLang } from "../../store/lang";
import { store } from "../../store";
import styled from "styled-components";

export const Footer = observer(() => {
  const lang = useLang();

  return (
    <FooterWrapper isDark={store.isDark}>
      <FooterContent>
        <DateParagraph>{lang.footerRights}</DateParagraph>
      </FooterContent>
    </FooterWrapper>
  );
});

const FooterWrapper = styled.footer<{ isDark?: boolean }>`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isDark
      ? "var(--dark-theme2-bg-color)"
      : "var(--light-theme2-bg-color)"};
  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const FooterContent = styled(Content)`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 410px) {
    flex-direction: column;
  }
`;

const DateParagraph = styled.p`
  color: gray;
  margin: 0;
  span {
    color: #000;
  }
  @media (prefers-color-scheme: dark) {
    span {
      color: #fff;
    }
  }

  @media (max-width: 410px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;
