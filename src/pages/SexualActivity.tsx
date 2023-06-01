import React from 'react'

import { Box, Stack, Typography } from '@pankod/refine-mui'
import { SplineArea, SexualTrick } from 'components'

function SexualActivity() {
  return (
    
    <Box>
    <Typography fontSize={25} fontWeight={700}>
      Sexual Activity Track
    </Typography>
    <Box mt="20px" display="flex" flexWrap="wrap" gap={2}>

      <Box
        flex={1}
        display="flex"
        bgcolor="#fcfcfc"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        pl={3.5}
        py={2}
        gap={2}
        borderRadius="15px"
        minHeight={"110px"}
        width="fit-content"
      >
        <SplineArea />
        </Box>

        <Box
          flex={1}
          display="flex"
          bgcolor="#fcfcfc"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          pl={{ xs: 1.5, sm: 3.5 }}
          py={{ xs: 1, sm: 2 }}
          gap={2}
          borderRadius="15px"
          minHeight={{ xs: '90px', sm: '110px' }}
          width={"fit-content"}
        >
          <Typography fontSize={15} fontWeight={600}>Exercise for Sexual Performance</Typography>
        </Box>

        </Box>

        <Box mt="20px" display="flex" flexWrap="wrap" gap={2}  >
        <Box
          flex={1}
          display="flex"
          bgcolor="#fcfcfc"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          pl={{ xs: 1.5, sm: 3.5 }}
          py={{ xs: 1, sm: 2 }}
          gap={2}
          borderRadius="15px"
          minHeight={{ xs: '90px', sm: '110px' }}
          width={"fit-content"}
        >
          <SexualTrick />
        </Box>
      </Box>
        </Box>
  )
}

export default SexualActivity