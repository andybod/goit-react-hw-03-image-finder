import React, { Component } from 'react';
import { getImages } from 'services/feath';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
// import { Loader } from 'components/Loader/Loader';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
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
        .finally(this.setState({ loading: false }));
    } else if (prevProps.page !== page) {
      this.setState({ loading: true });
      getImages(searchText, page)
        .then(({ hits }) => {
          this.setState(({ images }) => ({ images: [...images, ...hits] }));
        })
        .finally(this.setState({ loading: false }));
    }
  };

  render() {
    return (
      <>
        {this.state.images && (
          <ul className={css['ImageGallery']}>
            {this.state.images.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
            {this.state.loading && <h1>load......</h1>}
            <Button click={this.props.hendelClick} />
          </ul>
        )}
      </>
    );
  }
}
