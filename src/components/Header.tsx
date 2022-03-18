import styled from "styled-components";
interface HeaderProp {
  height?: number;
}

const HeaderWrapper = styled.div<HeaderProp>`
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid red;
`;

const Header = ({ themeSwitcher, theme }: any) => {
  return (
    <HeaderWrapper height={60}>
      <h2>Meeting App</h2>
    </HeaderWrapper>
  );
};
export default Header;
