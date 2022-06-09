import { useMemo } from "react";

import useReceipt from "./use-receipt";

const useGetReceiptData = () => {
  const { receipt } = useReceipt();
  const receiptData = useMemo(
    () => receipt.map(({ formattedFinalReceipt }) => formattedFinalReceipt),
    [receipt]
  );

  return { receiptData };
};

export default useGetReceiptData;
