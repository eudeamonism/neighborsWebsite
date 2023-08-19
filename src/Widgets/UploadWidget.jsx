import { Button } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDNAME,
        uploadPreset: process.env.REACT_APP_PRESET,
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);



  return (
    <Button
      width="50%"
      colorScheme="blue"
      onClick={() => widgetRef.current.open()}
    >
      Upload
    </Button>
  );
};

export default UploadWidget;
