import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.modules';

export const ImageGallery = ({ images }) => {
  return (
    <Ul>
      {images.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </Ul>
  );
};
