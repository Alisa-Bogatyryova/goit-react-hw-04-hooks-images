import PropTypes from 'prop-types';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, tags } = image;

  return (
    <li id={image.id} onClick={openModal} className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
  }),
};

export default ImageGalleryItem;