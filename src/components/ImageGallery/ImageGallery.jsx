import React, { Component } from 'react';
import { getImages } from 'services/feath';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  state = {
    images: 0,
    loading: false,
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const searchText = this.props.searchText;
    const page = this.props.page;
    if (prevProps.searchText !== searchText) {
      this.setState({ loading: true });
      getImages(searchText, page)
        .then(({ hits }) => {
          this.setState({ images: hits });
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    } else if (prevProps.page !== page) {
      this.setState({ loading: true });
      getImages(searchText, page)
        .then(({ hits }) => {
          this.setState(({ images }) => ({ images: [...images, ...hits] }));
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  };

  render() {
    const { loading, images, error } = this.state;
    return (
      <>
        {error && <h1>{error.message}</h1>}
        {loading && <Loader />}
        {images.length > 0 && (
          <ul className={css['ImageGallery']}>
            {images.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
            <Button click={this.props.hendelClick} />
          </ul>
        )}

        {images.length === 0 && <h1>{this.props.searchText} не знайдено</h1>}
      </>
    );
  }
}
ImageGallery.propTypes = {
  searchText: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
