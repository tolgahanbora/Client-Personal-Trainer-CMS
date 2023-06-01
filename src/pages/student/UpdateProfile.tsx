/* eslint-disable no-const-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useState}  from 'react'
import {useGetIdentity} from '@pankod/refine-core'
import { FieldValues, useForm } from '@pankod/refine-react-hook-form'
import { useNavigate } from '@pankod/refine-react-router-v6'

import Form from 'components/common/Form'

function CreateProfile() {

const navigate = useNavigate()
const {data: user} = useGetIdentity()
const [studentImage, setStudentImage] = useState({name: '', url: ''})  
const {refineCore: {onFinish, formLoading}} = useForm()

const handleImageChange = (file: File) => {
  const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result as string);
    fileReader.readAsDataURL(readFile);
  });

  reader(file).then((result: string) => setStudentImage({ name: file?.name, url: result }));
};

const onFinishHandler = async (data: FieldValues) => {
  
  await onFinish({ ...data, photo: studentImage.url, email: user.email })
};

const handleFormSubmit = async (data: FieldValues) => {
  // İşlemlerinizi burada gerçekleştirin.
  // Örneğin, form verilerini bir API'ye göndermek gibi.
  console.log(data);
};


  return (
    <Form 
      type='Edit'

      onFinish={onFinish}
      formLoading={formLoading}
      handleFormSubmit={handleFormSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      studentImage={studentImage} />
  )
}

export default CreateProfile