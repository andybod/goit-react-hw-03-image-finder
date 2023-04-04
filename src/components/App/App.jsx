import Searchbar from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import css from './App.module.css';
import ImageGallery from 'components/ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    inputValue: '',
    page: 1,
  };
  handleFormSabmit = inputValue => {
    this.setState({ inputValue });
  };
  resetPage = () => {
    this.setState({ page: 1 });
  };
  hendelClick = () => {
    this.setState({ page: this.state.page + 1 });
  };
  render() {
    return (
      <div className={css['App']}>
        <Searchbar
          handleFormSabmit={this.handleFormSabmit}
          resetPage={this.resetPage}
        />
        <ImageGallery
          searchText={this.state.inputValue}
          page={this.state.page}
          hendelClick={this.hendelClick}
        />
      </div>
    );
  }
}
