import { Box, Typography, useTheme } from "@mui/material"

const Header = () => {
  const { palette } = useTheme()
  return (
    <Box sx={{ padding: "10px", background: palette.primary.main }}>
      <Typography
        component="h1"
        align="center"
        sx={{ color: "#fff", fontWeight: "bold" }}
      >
        体重管理アプリ
      </Typography>
    </Box>
  )
}

export default Header
