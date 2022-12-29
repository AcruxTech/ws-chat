import { observer } from "mobx-react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { store } from "../../store";

const LinkStyled = styled.a<{ isDark?: boolean; active?: boolean }>`
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  @media (max-width: 580px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const NavLink = observer((props: { href: string; name: string }) => {
  const router = useRouter();

  return (
    <Link href={props.href} passHref legacyBehavior>
      <LinkStyled isDark={store.isDark} active={router.asPath === props.href}>
        {props.name}
      </LinkStyled>
    </Link>
  );
});

export default NavLink;
