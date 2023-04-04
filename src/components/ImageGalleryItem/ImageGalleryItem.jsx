import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { webformatURL } = this.props;
    return (
      <li className={css['ImageGalleryItem']}>
        <img
          src={webformatURL}
          alt="img"
          className={css['ImageGalleryItem-image']}
          onClick={this.onModal}
        />
        {this.state.shownModal && (
          <Modal onClose={this.onModal} image={webformatURL} />
        )}
      </li>
    );
  }
}
