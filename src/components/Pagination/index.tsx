import { PaginationWrapper, PItemWrapper } from "./StyledPagination";

interface PaginationProps {
  currentPage: number;
  numPages: number;
  numItems: number;
  dispatchChangeItem: (pageSelected: number) => void;
}

const Pagination = function ({
  currentPage,
  numPages,
  numItems,
  dispatchChangeItem,
}: PaginationProps) {
  const RenderItem = (idx: number, text?: string) => {
    return (
      <PItemWrapper
        onClick={() => dispatchChangeItem(idx)}
        className={idx === currentPage ? "active" : ""}
      >
        {text || idx}
      </PItemWrapper>
    );
  };

  if (numPages <= 2) return <></>;
  let content: any = "";
  if (numPages <= numItems) {
    content = Array.from(Array(numPages).keys()).map((i: number) =>
      RenderItem(i + 1)
    );
  } else {
    content = (
      <>
        {currentPage > 1 && RenderItem(currentPage - 1, "previous")}
        {currentPage > 1 && RenderItem(currentPage - 1)}
        {RenderItem(currentPage)}
        {currentPage + 1 <= numPages && RenderItem(currentPage + 1)}
        {currentPage + 2 <= numPages && RenderItem(currentPage + 2)}
        {currentPage + 2 <= numPages && RenderItem(currentPage + 1, "next")}
      </>
    );
  }

  return <PaginationWrapper>{content}</PaginationWrapper>;
};

export default Pagination;
