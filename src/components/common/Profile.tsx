/* eslint-disable @typescript-eslint/no-unused-vars */
import { Add, Email, Phone, Place } from '@mui/icons-material';
import { Box, Stack, Typography } from '@pankod/refine-mui';


import CustomButton from './CustomButton';
import { useNavigate,useParams } from '@pankod/refine-react-router-v6';

import { useGetIdentity,useShow } from "@pankod/refine-core";


function checkImage(url: any) {
  let img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const DefaultAvatar = "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"

const Profile = ( ) => {

  const navigate = useNavigate()
  const { data: user } = useGetIdentity();
  const  { email } = useParams()

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#404446">Profile</Typography>

      <Box
        mt="10px"
        borderRadius="15px"
        padding="20px"
        bgcolor="#FCFCFC"
      >
       <CustomButton
          color='#fcfcfc'
          backgroundColor='#475be8'
          title='Update Profile'
          icon={<Add />}
          handleClick={() => navigate(`/my-profile/edit/${user?.email}`)}
        />
       
        <Box
          sx={{
            display: 'flex',
            marginTop: '20px',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2.5,
          }}
        >
          <img
            src={user?.avatar ? user.avatar : DefaultAvatar}
            width={340}
            height={320}
            alt="abstract"
            className="my_profile-bg"
          />
          <Box
            flex={1}
            sx={{ marginTop: { md: '58px' }, marginLeft: { xs: '20px', md: '0px' } }}
          >
            <Box flex={1} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap="20px">
           

              <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between" gap="30px">
                <Stack direction="column">
                  <Typography fontSize={22} fontWeight={600} color="#11142D">{user?.name}</Typography>
                  <Typography fontSize={16} color="#808191">Gender: {user?.user_metadata.gender}</Typography>
                  <Typography fontSize={16} color="#808191">Age: {user?.user_metadata.age}</Typography>
                  <Typography fontSize={16} color="#808191">Job: {user?.user_metadata.job} </Typography>
                  <br/>
                  <Typography fontSize={16} color="#11142D">Weight: {user?.user_metadata.weight}</Typography>
                  <Typography fontSize={16} color="#11142D">Height: {user?.user_metadata.height}</Typography>
                </Stack>

                <Stack direction="column" gap="10px">
                  <Stack gap="15px">
                    <Typography fontSize={14} fontWeight={500} color="#808191">Body Size</Typography>
                    <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                      <Place sx={{ color: '#11142D' }} />
                      <Typography fontSize={14} color="#11142D">Waist: 80cm</Typography>
                      <Typography fontSize={14} color="#11142D">Chest: 102cm</Typography>
                      <Typography fontSize={14} color="#11142D">Shoulder: 120cm</Typography>
                      <Typography fontSize={14} color="#11142D">Biceps: 40cm</Typography>
                      
                    </Box>
                  </Stack>


                  <Stack direction="row" flexWrap="wrap" gap="20px" pb={4}>
                    <Stack gap="15px">
                      <Typography fontSize={14} fontWeight={500} color="#808191">Disease</Typography>
                      <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                        <Place sx={{ color: '#11142D' }} />
                        <Typography fontSize={14} color="#11142D">{user?.user_metadata.illness}</Typography>
                      </Box>
                    </Stack>
                  </Stack>


                  <Stack direction="row" flexWrap="wrap" gap="20px" pb={4}>
                    <Stack gap="15px">
                      <Typography fontSize={14} fontWeight={500} color="#808191">Drugs</Typography>
                      <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                        <Place sx={{ color: '#11142D' }} />
                        <Typography fontSize={14} color="#11142D">{user?.user_metadata.medications}</Typography>
                        <Typography fontSize={14} color="#11142D"></Typography>
                      </Box>
                    </Stack>
                  </Stack>

                  <Stack direction="row" flexWrap="wrap" gap="20px" pb={4}>
                    <Stack flex={1} gap="15px">
                      <Typography fontSize={14} fontWeight={500} color="#808191">Phone Number</Typography>
                      <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                        <Phone sx={{ color: '#11142D' }} />
                        <Typography fontSize={14} color="#11142D" noWrap>+{user?.user_metadata.phone}</Typography>
                      </Box>
                    </Stack>

                    <Stack flex={1} gap="15px">
                      <Typography fontSize={14} fontWeight={500} color="#808191">Email</Typography>
                      <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                        <Email sx={{ color: '#11142D' }} />
                        <Typography fontSize={14} color="#11142D">{user?.email}</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Profile;