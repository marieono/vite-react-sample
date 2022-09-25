import { Box, TextField, InputAdornment, Button } from "@mui/material"
import { getDateText } from "./utils"

const height = 100

const WeightForm = () => {
  return (
    <>
      <Box sx={{ height: `${height}px` }} />
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: `${height}px`,
          padding: "15px 10px",
          boxShadow: "0 0 10px #ccc",
        }}
      >
        <TextField
          sx={{ m: 1, width: "120px" }}
          size="small"
          label="名前"
          helperText=" "
        />
        <TextField
          sx={{ m: 1 }}
          size="small"
          label="測定日"
          type="date"
          defaultValue={getDateText(new Date())}
          helperText=" "
        />
        <TextField
          sx={{ m: 1, width: "100px" }}
          size="small"
          label="体重"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
          helperText=" "
        />
        <Button sx={{ m: 1 }} variant="contained">
          保存
        </Button>
      </Box>
    </>
  )
}

export default WeightForm
