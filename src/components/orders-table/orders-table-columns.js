import { format } from "date-fns";
import { EmailLink } from "./orders-table.styles";

export const ORDERS_TABLE_COLUMNS = [
  {
    Header: "Order Date",
    accessor: "orderDate",
    Cell: ({ value }) => {
      return format(new Date(value), "dd MMMM yyyy");
    },
  },
  {
    Header: "Order Time",
    accessor: "orderTime",
  },

  {
    Header: "Customer Name",
    accessor: "name",
  },
  {
    Header: "Order Details",
    accessor: "order",
  },
  {
    Header: "Email\n( Tap Address To Email Customer )",
    accessor: "email",
    Cell: ({ value }) => {
      function onEmailClick() {
        window.open(
          `mailto:${value}?Subject=About Your Happy Haddock Order...`
        );
      }
      return <EmailLink onClick={onEmailClick}>{value}</EmailLink>;
    },
  },
  {
    Header: "Phone\n( If Provided )",
    accessor: "phoneNumber",
  },
  {
    Header: "Total Price\n( £ )",
    accessor: "totalPrice",
  },
  {
    Header: "Solaris Apps Cut\n( £ )",
    accessor: "solarisAppsCut",
  },
];

// export const GROUPED_COLUMNS = [
//   {
//     Header: "Order Details",
//     columns: [
//       {
//         Header: "Order Date / Time\nDD/MM/YY",
//         accessor: "orderDateTime",
//       },
//       {
//         Header: "Order Details",
//         accessor: "order",
//       },
//     ],
//   },

//   {
//     Header: "Customer Details",
//     columns: [
//       {
//         Header: "Customer Name",
//         accessor: "name",
//       },
//       {
//         Header: "Email",
//         accessor: "email",
//       },
//       {
//         Header: "Phone\n( If Provided )",
//         accessor: "phoneNumber",
//       },
//     ],
//   },
//   {
//     Header: "Price & Cut",
//     columns: [
//       {
//         Header: "Total Price\n( £ )",
//         accessor: "totalPrice",
//       },
//       {
//         Header: "Solaris Apps Cut\n( £ )",
//         accessor: "solarisAppsCut",
//       },
//     ],
//   },
// ];
