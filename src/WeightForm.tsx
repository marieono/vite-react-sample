import { Box, TextField, InputAdornment, Button, Stack } from "@mui/material"
import { addDoc, collection } from "firebase/firestore"
import { useForm, SubmitHandler } from "react-hook-form"
import { getDateText } from "./utils"
import { db } from "./firebase"
import type { WeightRecord } from "./types"

const height = 300

const WeightForm = () => {
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors, isValid },
  } = useForm<WeightRecord>({ mode: "onChange" })

  const onSubmit: SubmitHandler<WeightRecord> = async (data) => {
    try {
      await addDoc(collection(db, "weight-records"), data)
      resetField("name")
      setValue("date", getDateText(new Date()))
      resetField("weight")
    } catch (e) {
      alert(`FireStore への書き込み中にエラーが発生しました: ${e}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ height: `${height}px` }} />
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: `${height}px`,
          padding: "20px 15px 10px",
          boxShadow: "0 0 10px #ccc",
          background: "#fff",
        }}
      >
        <Stack spacing={1}>
          <TextField
            size="small"
            label="名前"
            {...register("name", {
              required: "入力してください。",
            })}
            error={errors.name != null}
            helperText={errors.name?.message ?? " "}
          />
          <TextField
            size="small"
            label="測定日"
            type="date"
            defaultValue={getDateText(new Date())}
            {...register("date", {
              required: "入力してください。",
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "日付を正しく入力してください。",
              },
            })}
            error={errors.date != null}
            helperText={errors.date?.message ?? " "}
          />
          <TextField
            size="small"
            label="体重"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            {...register("weight", {
              required: "入力してください。",
              valueAsNumber: true,
              validate: (value) =>
                !isNaN(value) || "半角数字で入力してください。",
            })}
            error={errors.weight != null}
            helperText={errors.weight?.message ?? " "}
          />
          <Button variant="contained" type="submit" disabled={!isValid}>
            保存
          </Button>
        </Stack>
      </Box>
    </form>
  )
}

export default WeightForm
