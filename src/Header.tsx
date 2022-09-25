import { Box, useTheme } from "@mui/material"

const Header = () => {
  const { palette } = useTheme()
  return (
    <Box sx={{ padding: "10px", background: palette.primary.main }}>
      <h1
        css={{
          textAlign: "center",
          margin: 0,
          fontSize: "20px",
          lineHeight: 1.5,
          color: "#fff",
        }}
      >
        体重管理アプリ
      </h1>
    </Box>
  )
}

export default Header
