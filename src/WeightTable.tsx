import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

const WeightTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>名前</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>日付</TableCell>
          <TableCell sx={{ fontWeight: "bold" }} align="right">
            体重
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Yuto</TableCell>
          <TableCell>2022-09-20</TableCell>
          <TableCell align="right">60kg</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Yuto</TableCell>
          <TableCell>2022-09-20</TableCell>
          <TableCell align="right">60kg</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default WeightTable
