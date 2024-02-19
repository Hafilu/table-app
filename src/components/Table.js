import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";
import { Button, MenuItem, Pagination, Select } from "@mui/material";
import "./Table.css";
import { EditNoteOutlined } from "@mui/icons-material";

function createData(
  id,
  shopifyNumber,
  date,
  status,
  customer,
  email,
  country,
  shipping,
  source,
  orderType
) {
  return {
    id,
    shopifyNumber,
    date,
    status,
    customer,
    email,
    country,
    shipping,
    source,
    orderType,
  };
}

const rows = [
  createData(
    1003,
    262,
    "2022-01-03",
    "Pending",
    "Alice Johnson",
    "alice.johnson@example.com",
    "UK",
    "Standard",
    "Online",
    "Regular"
  ),
  createData(
    1004,
    159,
    "2022-01-04",
    "Shipped",
    "Bob Miller",
    "bob.miller@example.com",
    "Germany",
    "Express",
    "In-store",
    "Priority"
  ),
  createData(
    1005,
    356,
    "2022-01-05",
    "Shipped",
    "Eva Davis",
    "eva.davis@example.com",
    "Australia",
    "Free",
    "Online",
    "Standard"
  ),
  createData(
    1006,
    408,
    "2022-01-06",
    "Pending",
    "Michael Brown",
    "michael.brown@example.com",
    "France",
    "Express",
    "In-store",
    "Rush"
  ),
  createData(
    1007,
    237,
    "2022-01-07",
    "Shipped",
    "Sophie Wilson",
    "sophie.wilson@example.com",
    "Spain",
    "Standard",
    "Online",
    "Regular"
  ),
  createData(
    1008,
    375,
    "2022-01-08",
    "Pending",
    "Daniel Lee",
    "daniel.lee@example.com",
    "Japan",
    "Express",
    "In-store",
    "Priority"
  ),
  createData(
    1009,
    518,
    "2022-01-09",
    "Shipped",
    "Olivia Turner",
    "olivia.turner@example.com",
    "Brazil",
    "Free",
    "Online",
    "Standard"
  ),
  createData(
    1010,
    392,
    "2022-01-10",
    "Shipped",
    "William Garcia",
    "william.garcia@example.com",
    "India",
    "Express",
    "In-store",
    "Rush"
  ),
  createData(
    1011,
    318,
    "2022-01-11",
    "Pending",
    "Ava Robinson",
    "ava.robinson@example.com",
    "South Africa",
    "Standard",
    "Online",
    "Regular"
  ),
  createData(
    1012,
    360,
    "2022-01-12",
    "Pending",
    "Mia Martinez",
    "mia.martinez@example.com",
    "Mexico",
    "Express",
    "In-store",
    "Priority"
  ),
  createData(
    1013,
    437,
    "2022-01-13",
    "Shipped",
    "James Hernandez",
    "james.hernandez@example.com",
    "Russia",
    "Free",
    "Online",
    "Standard"
  ),
  createData(
    1014,
    290,
    "2022-01-14",
    "Shipped",
    "Emma Stewart",
    "emma.stewart@example.com",
    "China",
    "Express",
    "In-store",
    "Rush"
  ),
  createData(
    1015,
    215,
    "2022-01-15",
    "Pending",
    "Noah Morris",
    "noah.morris@example.com",
    "Argentina",
    "Standard",
    "Online",
    "Regular"
  ),
  createData(
    1016,
    185,
    "2022-01-16",
    "Pending",
    "Chloe King",
    "chloe.king@example.com",
    "Italy",
    "Express",
    "In-store",
    "Priority"
  ),
  createData(
    1017,
    460,
    "2022-01-17",
    "Shipped",
    "Liam Fisher",
    "liam.fisher@example.com",
    "Netherlands",
    "Free",
    "Online",
    "Standard"
  ),
  createData(
    1018,
    390,
    "2022-01-18",
    "Pending",
    "Aria Adams",
    "aria.adams@example.com",
    "New Zealand",
    "Express",
    "In-store",
    "Rush"
  ),
  createData(
    1019,
    275,
    "2022-01-19",
    "Shipped",
    "Logan Turner",
    "logan.turner@example.com",
    "Portugal",
    "Standard",
    "Online",
    "Regular"
  ),
  createData(
    1020,
    340,
    "2022-01-20",
    "Shipped",
    "Aiden Robinson",
    "aiden.robinson@example.com",
    "Sweden",
    "Express",
    "In-store",
    "Priority"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "shopify",
    numeric: true,
    disablePadding: false,
    label: "SHOPIFY#",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "DATE",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "STATUS",
  },
  {
    id: "customer",
    numeric: true,
    disablePadding: false,
    label: "CUSTOMER",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "EMAIL",
  },
  {
    id: "country",
    numeric: true,
    disablePadding: false,
    label: "COUNTRY",
  },
  {
    id: "shipping",
    numeric: true,
    disablePadding: false,
    label: "SHIPPING",
  },
  {
    id: "source",
    numeric: true,
    disablePadding: false,
    label: "SOURCE",
  },
  {
    id: "orderType",
    numeric: true,
    disablePadding: false,
    label: "ORDER TYPE",
  },
  {},
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  const handleDispatchSelected = () => {
    console.log("Dispatching selected items:", numSelected);
  };

  return (
    <div className="table-head">
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        <Typography
          className="table-title"
          variant="h6"
          id="tableTitle"
          component="div"
          fontWeight="bold"
        >
          Product Summery
        </Typography>

        <Typography sx={{ paddingInline: "10px" }} fontWeight="bold">
          Show
        </Typography>
        <Select
          label="Show"
          defaultValue={10}
          onChange={(event) => {
            console.log("Show:", event.target.value);
          }}
          sx={{ width: "160px", height: "37px" }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>

        <Button
          variant="contained"
          onClick={handleDispatchSelected}
          className="dispatch-btn"
        >
          Dispatch Selected
        </Button>

        <Pagination count={8} shape="rounded" />
      </Toolbar>
    </div>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />

        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.shopifyNumber}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left">{row.customer}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.country}</TableCell>
                    <TableCell align="left">{row.shipping}</TableCell>
                    <TableCell align="left">{row.source}</TableCell>
                    <TableCell align="left">{row.orderType}</TableCell>
                    <TableCell align="left">
                      <IconButton aria-label="edit">
                        <EditNoteOutlined />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
