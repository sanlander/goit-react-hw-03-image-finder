import { Component } from 'react';
import { AppBox } from './App.modules';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { ProgressBar } from 'react-loader-spinner';
import { getImages, MAX_PAGE } from 'services/pixabay-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    textSearch: '',
    page: 1,
    isLoading: false,
    isLoadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { textSearch } = this.state;
    const { page } = this.state;

    if (prevState.textSearch === textSearch && prevState.page === page) return;

    try {
      this.setState({ isLoading: true });

      const images = await getImages(textSearch, page);

      if (images.length === 0) {
        toast.error('No search images!', { autoClose: 2000 });
        return this.setState({
          isLoadMore: false,
          images: [],
        });
      }

      if (prevState.textSearch !== textSearch) {
        this.setState({
          images,
          isLoadMore: true,
        });
        return page === MAX_PAGE && this.setState({ isLoadMore: false });
      }

      this.setState({
        images: [...prevState.images, ...images],
      });
      return page === MAX_PAGE && this.setState({ isLoadMore: false });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleSubmitForm = ({ textSearch }) => {
    this.setState({ textSearch, page: 1 });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <AppBox>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={this.state.images} />

        {this.state.isLoading && (
          <ProgressBar wrapperStyle={{ margin: '0 auto' }} />
        )}

        {this.state.isLoadMore && <Button onClick={this.handleClickLoadMore} />}
        <ToastContainer />
      </AppBox>
    );
  }
}
