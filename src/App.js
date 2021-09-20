import React from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import imgAPI from './components/services/image-finder-api';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends React.Component {
  state = {
    searchQuery: '',
    page: 1,
    hits: [],
    error: null,
    status: 'idle',
    showModal: false,
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ status: 'pending' });
      imgAPI
        .fetchImg(searchQuery, page)
        .then(hits =>
          this.setState({
            hits,
            page: this.state.page + 1,
            status: 'resolved',
          }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = searchQuery => {
    this.resetState();
    this.setState({ searchQuery });
  };

  resetState = () => {
    this.setState({
      page: 1,
      hits: [],
      error: null,
    });
  };

  handleClickButton = () => {
    // this.setState({ status: 'pending' });

    const { searchQuery, page } = this.state;
    imgAPI
      .fetchImg(searchQuery, page)
      .then(pic =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...pic],
          page: prevState.page + 1,
          status: 'resolved',
        })),
      )
      .then(() =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      );
  };

  openModal = (src, alt) => {
    this.setState({
      showModal: true,
      selectedImage: { src, alt },
    });
  };
  closeModal = () => this.setState({ showModal: false });

  render() {
    const { hits, error, status, showModal, selectedImage } = this.state;

    if (status === 'idle') {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />;
          <ToastContainer position="top-center" autoClose={3000} />
        </>
      );
    }

    if (status === 'pending') {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <h1>{error.message}</h1>;
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery hits={hits} onOpen={this.openModal} />
          {showModal && (
            <Modal image={selectedImage} onClose={this.closeModal} />
          )}
          {this.state.hits.length > 0 && (
            <Button onClick={this.handleClickButton} />
          )}
        </>
      );
    }
  }
}
export default App;
