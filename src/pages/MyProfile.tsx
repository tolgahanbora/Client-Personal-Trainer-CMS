import { Profile } from 'components'

import {Box, Alert } from '@pankod/refine-mui'

function MyProfile() {
  return (
   <Box>
    <Box>
    <Alert severity="info">If you do not provide personal information, a diet plan and a training program cannot be created.</Alert>
    <Profile  /> 
    </Box>
   </Box>
  )
}

export default MyProfile