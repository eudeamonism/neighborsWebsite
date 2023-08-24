import { useState } from 'react';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { Button, Flex } from '@chakra-ui/react';

const ScratchCloudinary = () => {
  const [image, setImage] = useState('');

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'NeighborsApp');

    const result = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/image/upload`,
      formData
    );

    console.log(result);
  };

  const deleteImage = async () => {
    const deleteResult = await axios.post(
      `https://api.cloudinary.com/v1_1/image/destroy -X POST --data 'public_id=sample&timestamp=173719931&api_key=436464676&signature=a788d68f86a6f868af'`
    );
  };

  return (
    <>
      <Flex direction="row">
        <input
          type="file"
          onChange={e => {
            setImage(e.target.files[0]);
          }}
        />
        <Button
          size="xs"
          width="60px"
          colorScheme="cyan"
          variant="outline"
          onClick={uploadImage}
        >
          Submit
        </Button>
      </Flex>
      <Button>Delete</Button>
    </>
  );
};

export default ScratchCloudinary;
