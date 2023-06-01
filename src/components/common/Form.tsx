/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from 'react'
import { Box, Typography, FormControl, FormControlLabel, FormHelperText, RadioGroup, TextField, Radio, Stack, Select, MenuItem, Button } from '@pankod/refine-mui'

import { supabaseClient } from 'utility'

import { FormProps } from 'interfaces/common'
import CustomButton from './CustomButton'

import { useGetIdentity } from "@pankod/refine-core";

function Form({ type, handleFormSubmit, onFinishHandler, studentImage, handleImageChange, formLoading }: FormProps) {

  const [fullname, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [jobActivity, setJobActivity] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [gender, setGender] = useState("")
  const [illness, setIlness] = useState("")
  const [medications, setMedications] = useState("")
  const [age, setAge] = useState("")
  const [goal, setGoal] = useState("")



  const { data: user } = useGetIdentity();

  const email = user?.email


  handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
    
    event.preventDefault()

    const updatedData = {
      fullname,
      phone,
      jobActivity,
      weight,
      height,
      gender,
      illness,
      medications,
      age,
      goal
    };
    console.log(updatedData)
    try {
  

      // Mevcut verileri güncelleyin
      const updatedUser = { ...user, ...updatedData };

      const { error: updateError } = await supabaseClient.auth.updateUser({
        data: updatedData

      })
      

      if (updateError) {
        console.error('Kullanıcı güncelleme hatası:', updateError.message );
      } else {
        console.log('Kullanıcı güncellendi:', updatedUser);
      }


    } catch (error: any) {
      console.error('Kullanıcı bilgilerini alma hatası:', error.message);
    }
  };


  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">{type} a Profile</Typography>



      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc" >
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}
          onSubmit={handleFormSubmit}>

          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, margin: '10px 0',
              fontSize: 16, color: '#11142d'
            }}>
              Enter your full name
            </FormHelperText>

            <TextField
              fullWidth
              required
              id='outlined-basic'
              color='info'
              variant='outlined'
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, margin: '10px 0',
              fontSize: 16, color: '#11142d'
            }}>
              Your email
            </FormHelperText>

            <TextField
              fullWidth
              disabled
              value={user?.email}
              id='outlined-basic'
              color='info'
              variant='outlined'
            />
          </FormControl>

          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, margin: '10px 0',
              fontSize: 16, color: '#11142d'
            }}>
              Enter Phone Number
            </FormHelperText>

            <TextField
              fullWidth
              required
              type='number'
              id='outlined-basic'
              color='info'
              variant='outlined'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}

            />
          </FormControl>

          <Stack direction="row" gap={4} >
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
              }}>
                What is the activity level at your job?
              </FormHelperText>

              <Select
                variant='outlined' color='info'
                displayEmpty required
                inputProps={{ 'aria-label': 'Without label' }}
                value={jobActivity}
                onChange={(e) => setJobActivity(e.target.value)}

              >
                <MenuItem value="Less Active"> Less active( I work at a desk, I usually sit)</MenuItem>
                <MenuItem value="Normal Degree"> Normal degree of activity ( walking, etc.)</MenuItem>
                <MenuItem value="highly Active"> Highly active (Heavy duty, load carrying)</MenuItem>
              </Select>

            </FormControl>

            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0',
                fontSize: 16, color: '#11142d'
              }}>
                Enter your Age
              </FormHelperText>
              <TextField
                fullWidth
                required
                id='outlined-basic'
                color='info'
                variant='outlined'
                type='number'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>
          </Stack>

          <Stack direction="row" gap={6} >
            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0',
                fontSize: 16, color: '#11142d'
              }}>
                Enter your Weight
              </FormHelperText>
              <TextField
                fullWidth
                type='number'
                required
                id='outlined-basic'
                color='info'
                value={weight}
                variant='outlined'
                onChange={(e) => setWeight(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0',
                fontSize: 16, color: '#11142d'
              }}>
                Enter your Height
              </FormHelperText>
              <TextField
                fullWidth
                required
                value={height}
                id='outlined-basic'
                color='info'
                variant='outlined'
                type='number'
                onChange={(e) => setHeight(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0',
                fontSize: 16, color: '#11142d'
              }}>
                Gender
              </FormHelperText>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>


          </Stack>

          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, margin: '10px 0',
              fontSize: 16, color: '#11142d'
            }}>
              Do you have any illness?
            </FormHelperText>

            <TextField
              fullWidth

              type='string'
              id='outlined-basic'
              color='info'
              value={illness}
              variant='outlined'
              onChange={(e) => setIlness(e.target.value)}

            />
          </FormControl>

          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, margin: '10px 0',
              fontSize: 16, color: '#11142d'
            }}>
              Are there any medications that you take regularly ?
            </FormHelperText>

            <TextField
              fullWidth

              type='string'
              id='outlined-basic'
              color='info'
              value={medications}
              variant='outlined'
              onChange={(e) => setMedications(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, margin: '10px 0',
              fontSize: 16, color: '#11142d'
            }}>
              What is your goal ?
            </FormHelperText>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="loseWeight"
              value={goal}
              name="radio-buttons-group"
              onChange={(e) => setGoal(e.target.value)}
            >
              <FormControlLabel value="Just burn fat and lose weight." control={<Radio />} label="Just burn fat and lose weight." />
              <FormControlLabel value="Gaining strength and muscle." control={<Radio />} label="Gaining strength and muscle ." />
            </RadioGroup>
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">Current Body Photo</Typography>

              <Button component="label" sx={{
                width: 'fit-content', color: '#2ed480', textTransform: 'capitalize', fontSize: 16
              }}>
                Upload *
                <input hidden accept="image/*" type='file' onChange={(e) => {

                  // @ts-ignore

                  handleImageChange(e.target.files[0])

                }} />
              </Button>
            </Stack>
            <Typography fontSize={14} color="#808191" sx={{
              wordBreak: 'break-all'
            }}>{studentImage?.name}</Typography>
          </Stack>

          <CustomButton
            type='submit' color='#fcfcfc'

            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor='#475be8'
          />


        </form>
      </Box>

    </Box>



  )
}

export default Form