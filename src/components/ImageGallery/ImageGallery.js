import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem openModal={openModal} key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;