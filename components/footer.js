import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      2024.02.06 Kwanghyuk Moon
      <br />
      Thanks to &copy; {new Date().getFullYear()} Takuya Matsuyama. All Rights
      Reserved.
    </Box>
  )
}

export default Footer
