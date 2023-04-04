import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items }) => {
  return (
    <>
      <ul className={css['ImageGallery']}>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.array,
};
