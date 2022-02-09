import Button from "components/Button";
import Pagination from "components/Pagination";
import { useMemo, useState } from "react";
import {
  THeadWrapper,
  TableWrapper,
  THWrapper,
  TBodyWrapper,
  TDWrapper,
  TRowWrapper,
} from "./StyledTable";

interface DataTableProps {
  data: any[];
  labels: string[];
}
const DataTable = function ({ data, labels }: DataTableProps) {
  const [current, setCurrent] = useState(1);
  const limit = 10;

  const displayData = useMemo(() => {
    const start = (current - 1) * limit;
    const end = start + limit;
    return data.slice(start, end);
  }, [current, data]);

  const handleChangePage = (page: number) => setCurrent(page);

  return (
    <>
      <TableWrapper>
        <THeadWrapper>
          {labels.map((label: string) => (
            <THWrapper>{label.toUpperCase()}</THWrapper>
          ))}
        </THeadWrapper>
        <TBodyWrapper>
          {displayData.map((item: any) => (
            <TRowWrapper>
              {labels.map((label: string) => (
                <TDWrapper>{item[label]}</TDWrapper>
              ))}
            </TRowWrapper>
          ))}
        </TBodyWrapper>
      </TableWrapper>

      <Button label="Add" />

      <Pagination
        numPages={Math.round(data.length / limit)}
        currentPage={current}
        numItems={7}
        dispatchChangeItem={handleChangePage}
      />
    </>
  );
};

export default DataTable;
