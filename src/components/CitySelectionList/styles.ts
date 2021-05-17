import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
`;

export const Button = styled("button")<{ selected: boolean }>`
  padding: 20px;
  border: solid gray;
  background-color: white;
  background-color: ${(props) => (props.selected ? "gray" : "white")};

  &:hover {
    text-decoration: underline;
  }
`;
