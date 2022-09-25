import { Box, TextField, InputAdornment, Button, Stack } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { getDateText } from "./utils"

type Inputs = {
  name: string
  date: string
  weight: number
}

const height = 300

const WeightForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
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
          <Button sx={{ m: 1 }} variant="contained" type="submit">
            保存
          </Button>
        </Stack>
      </Box>
    </form>
  )
}

export default WeightForm
