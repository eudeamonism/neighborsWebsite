import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Flex, Spinner, Text, Image } from '@chakra-ui/react';
import { retrieveCloudinaryUrl, deletingAssets } from '../redux/actions/complaintActions';
import { useSelector } from 'react-redux';

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const dispatch = useDispatch();
  const complaint = useSelector(state => state.complaint);

  const { imageUrl, loading, publicId } = complaint;
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDNAME,
        uploadPreset: process.env.REACT_APP_PRESET,
      },
      function (error, result) {
        if (!error && result && result.event === 'success') {
          const cloudinaryUrl = result.info.secure_url;
          const delToken = result.info.delete_token;
          const publicId = result.info.public_id;
          const signature = result.info.signature;

          console.log(result);

          try {
            dispatch(
              retrieveCloudinaryUrl(
                cloudinaryUrl,
                delToken,
                publicId,
                signature
              )
            );
          } catch (error) {}
        }
      }
    );
  }, []);

  const deleteHandler = async () => {
    dispatch(deletingAssets(publicId));

  };

  return (
    <Flex gap="2" justify="space-between">
      <Flex direction="column" gap="1">
        <Text fontWeight="medium">Image Upload</Text>
        {imageUrl === '/assets/images/holder.jpg' ? (
          <Button
            size="xs"
            width="60px"
            colorScheme="blue"
            fontFamily="'Inter', sans-serif;"
            variant="outline"
            onClick={() => widgetRef.current.open()}
          >
            {!loading ? 'Upload' : <Spinner size="xs" />}
          </Button>
        ) : null}

        {imageUrl !== '/assets/images/holder.jpg' ? (
          <Button
            size="xs"
            width="60px"
            colorScheme="red"
            fontFamily="'Inter', sans-serif;"
            variant="outline"
            onClick={deleteHandler}
          >
            {!loading ? 'Delete' : <Spinner size="xs" />}
          </Button>
        ) : null}
      </Flex>
      <Image src={imageUrl} boxSize="50px" />
    </Flex>
  );
};

export default UploadWidget;
