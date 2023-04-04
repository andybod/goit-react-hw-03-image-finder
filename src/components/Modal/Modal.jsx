import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL } = this.props.image;
    return (
      <div className={css['Overlay']} onClick={this.onOverlayClose}>
        <div className={css['Modal']}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};
