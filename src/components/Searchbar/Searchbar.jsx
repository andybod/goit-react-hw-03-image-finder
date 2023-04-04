import React, { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
export default class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value: value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <header className={css['Searchbar']}>
        <form className={css['SearchForm']} onSubmit={this.handleSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            lavue={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  handleFormSabmit: PropTypes.func,
};
