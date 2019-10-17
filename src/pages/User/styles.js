import styled, { keyframes } from "styled-components";

export const Profile = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #e34c26;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const Card = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    margin-left: 5px;
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    text-align: center;
    svg {
      margin-right: 10px;
    }
  }
`;

export const Github = styled.a`
  color: #77dd77 !important;
  margin-top: 15px;
  border-style: dashed;
  border-radius: 10px;
  padding: 0 15px;
  margin-left: 10px;
  a {
    margin-left: 3px;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  svg {
    margin-left: 10px;
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

export const Loading = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
