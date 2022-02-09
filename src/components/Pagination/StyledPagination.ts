import styled from "styled-components";

export const PaginationWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 10px;
`;
export const PItemWrapper = styled.div`
  padding: 5px 10px;
  background: gray;
  color: white;
  cursor: pointer;

  :hover {
    background-color: black;
  }
  &.active {
    font-weight: bold;
    background-color: black;
  }
`;
