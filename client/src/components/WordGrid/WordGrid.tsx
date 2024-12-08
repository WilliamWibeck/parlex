import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

type Props = {};

const WordGrid = ({ rows }) => {
  const columns = [
    { field: "french", headerName: "French", width: "90" },
    { field: "english", headerName: "English", width: "90" },
    { field: "category", headerName: "Category", width: "90" },
    { field: "example", headerName: "Example", width: "90" },
    { field: "difficulty", headerName: "Difficulty", width: "90" },
  ];

  return (
    <Box>
      <DataGrid
        columns={columns}
        rows={rows}
        sx={{ color: "white" }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      ></DataGrid>
    </Box>
  );
};

export default WordGrid;
