import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <li className={css['ImageGalleryItem']}>
        <img
          src={webformatURL}
          alt="img"
          className={css['ImageGalleryItem-image']}
          onClick={this.onModal}
        />
        {this.state.shownModal && (
          <Modal onClose={this.onModal} image={largeImageURL} />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
};
