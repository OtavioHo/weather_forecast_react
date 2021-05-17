import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 50px;
`;

export const Button = styled.button`
  padding: 20px;
  border: solid gray;
  background-color: white;

  &:hover {
    text-decoration: underline;
  }
`;
