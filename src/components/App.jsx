import React, { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Container } from './Container/Container';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { AnimatePresence } from 'framer-motion';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [largeImage, setLargeImage] = useState('');

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  }

  const openModal = (url) => {
    setLargeImage(url);
    setIsShowModal(true)
  }

  const closeModal = () => {
    setLargeImage('');
    setIsShowModal(false);
  }

  return (
    <>
      <Searchbar handleSearch={handleSearch} />
      <Container>
        <ImageGallery query={searchText} openLarge={openModal} />
      </Container>
      <AnimatePresence>
        {isShowModal && <Modal closeModal={closeModal} largeImage={largeImage} />}
      </AnimatePresence>
    </>
  );

}
