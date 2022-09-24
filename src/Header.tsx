import { useTheme } from "@mui/material"
import { Box } from "@mui/system"

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
        掲示板
      </h1>
    </Box>
  )
}

export default Header
