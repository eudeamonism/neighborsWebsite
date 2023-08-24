import { Button } from '@chakra-ui/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

const ReactCloudinary = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'neighbors',
    },
  });

  const myImage = cld.image(`neighbors/models`);

  const deleteHandler = () => {
    cld.api.deleteResources('models')
  };

  myImage.resize(fill().width(60).height(60));
  return (
    <div>
      Sample Image <AdvancedImage cldImg={myImage} />
      <Button
        colorScheme="red"
        mt="5"
        variant="outline"
        onClick={deleteHandler}
      >
        Delete
      </Button>
    </div>
  );
};

export default ReactCloudinary;
