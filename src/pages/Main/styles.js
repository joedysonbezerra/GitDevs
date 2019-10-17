import styled, { keyframes, css } from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  background: #24292e;
  border: 0;
  padding: 0 5px;
  margin-left: 10px;
  border-radius: 10px;

  display: flex;

  h1 {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
  }
  svg {
    margin-left: 7px;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  color: #000;

  li {
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 3px;
    }

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      svg {
        margin-left: 7px;
      }
    }
  }
`;
