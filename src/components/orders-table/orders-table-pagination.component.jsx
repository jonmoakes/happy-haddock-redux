import { useDispatch } from "react-redux";
import { setChosenPageSize } from "../../store/table/table.action";

import {
  PaginationDiv,
  PageButton,
  PaginationTextDiv,
  PaginationText,
  PaginationInput,
  PaginationSelect,
} from "./orders-table.styles";

import { scrollToTop } from "../../reusable-functions/scroll-to-top";

const OrdersTablePagination = ({
  dataLength,
  rowsLength,
  pageIndex,
  pageOptions,
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageSize,
  setPageSize,
  data,
  rows,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {data.length > 5 && !!rows.length && (
        <PaginationDiv>
          <div>
            <PaginationText>
              Page {pageIndex + 1} Of {pageOptions.length}
            </PaginationText>

            <PageButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              &#10094;&#10094;
            </PageButton>

            <PageButton
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              &#10094;
            </PageButton>
            <PageButton
              onClick={() => {
                nextPage();
                scrollToTop();
              }}
              disabled={!canNextPage}
            >
              &#10095;
            </PageButton>

            <PageButton
              onClick={() => {
                gotoPage(pageCount - 1);
                scrollToTop();
              }}
              disabled={!canNextPage}
            >
              &#10095;&#10095;
            </PageButton>

            <PaginationTextDiv>
              <PaginationText>Or Go To Page: </PaginationText>
              <PaginationInput
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </PaginationTextDiv>

            <div>
              <PaginationSelect
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  dispatch(setChosenPageSize(Number(e.target.value)));
                }}
              >
                {[5, 10, 25, 50, 75, 100, 150, 200].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize} Rows
                  </option>
                ))}
              </PaginationSelect>
            </div>
          </div>
        </PaginationDiv>
      )}
    </>
  );
};

export default OrdersTablePagination;
