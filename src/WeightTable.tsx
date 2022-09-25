import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import { collection } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "./firebase"

type Inputs = {
  name: string
  date: string
  weight: number
}

const WeightTable = () => {
  const [collections, loading, error] = useCollection(
    collection(db, "weight-records")
  )

  const docs = collections?.docs

  if (loading) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>読込中…</Typography>
      </Box>
    )
  }

  if (error != null) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>読み込みに失敗しました。</Typography>
        <Typography>{error.message}</Typography>
      </Box>
    )
  }

  if (docs == null || docs.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>まだ記録がありません。</Typography>
      </Box>
    )
  }

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
        {docs.map((doc) => {
          const weightRecord = doc.data() as Inputs
          return (
            <TableRow key={doc.id}>
              <TableCell>{weightRecord.name}</TableCell>
              <TableCell>{weightRecord.date}</TableCell>
              <TableCell align="right">{weightRecord.weight}kg</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default WeightTable
