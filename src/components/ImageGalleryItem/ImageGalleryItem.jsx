import { Li, Img } from './ImageGalleryItem.modules';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;
    return (
      <Li>
        <Img onClick={this.openModal} src={item.webformatURL} alt={item.tags} />

        {isModalOpen && (
          <Modal
            urlImg={item.largeImageURL}
            alt={item.tags}
            onClose={this.closeModal}
          />
        )}
      </Li>
    );
  }
}
