import { Button,Stack } from "@mui/material";

function FilterBar({setFilter}) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ marginBottom: 3 }}
    >
      <Button
        variant="contained"
        onClick={() => setFilter("All")}
      >
        All
      </Button>

      <Button
        variant="contained"
        onClick={() => setFilter("Event")}
      >
        Event
      </Button>

      <Button
        variant="contained"
        onClick={() => setFilter("Result")}
      >
        Result
      </Button>

      <Button
        variant="contained"
        onClick={() => setFilter("Placement")}
      >
        Placement
      </Button>
    </Stack>
  );
}

export default FilterBar;