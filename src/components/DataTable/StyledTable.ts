import styled from "styled-components";

export const TableWrapper = styled.table`
  min-width: 80%;
  border-collapse: collapse;
  text-align: left;
`;

export const THeadWrapper = styled.thead`
  color: gray;
`;

export const THWrapper = styled.th`
  padding: 5px 10px;
  border-bottom: 1px solid gray;
  :not(:last-child) {
    border-right: 1px solid gray;
  }
`;
export const TRowWrapper = styled.tr``;
export const TDWrapper = styled.td`
  padding: 5px 10px;
  border-bottom: 1px solid gray;
  :not(:last-child) {
    border-right: 1px solid gray;
  }
`;
export const TBodyWrapper = styled.tbody``;
