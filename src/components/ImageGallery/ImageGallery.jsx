import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { getImages } from 'helpers/api';

import { BsBox2Heart, BsHeartbreak } from 'react-icons/bs';
import { Gallery } from './ImageGallery.styled';


import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { AnimatePresence } from 'framer-motion';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved'
}

export const ImageGallery = ({ openLarge, query }) => {
    const [photos, setPhotos] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);

    const searchText = useRef(query);

    useEffect(() => {
        if (!query) return;

        async function fetchData() {
            if (searchText.current !== query) {

                setStatus(STATUS.PENDING);
                searchText.current = query;

                try {
                    const images = await getImages(query, 1);
                    setPhotos(images.hits);
                    setStatus(STATUS.RESOLVED);
                    setMaxPage(Math.ceil(images.totalHits / 12));
                    setCurrentPage(1);
                } catch (e) {
                    setStatus(STATUS.REJECTED);
                }
            } else if (currentPage > 1) {
                try {
                    const images = await getImages(query, currentPage);
                    setPhotos((prevPhotos) => [...prevPhotos, ...images.hits]);
                    setStatus(STATUS.RESOLVED);
                } catch (e) {
                    setStatus(STATUS.REJECTED);
                }
            }

        }
        fetchData();
    }, [currentPage, query])

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    }

    const getLargeImage = e => {
        if (e.target === e.currentTarget) {
            return;
        }
        const currentImage = e.target.closest('img').dataset.large;
        openLarge(currentImage)
    }

    if (status === STATUS.IDLE) {
        return (<>
            <Notification message="Inspire yourself"
                icon={<BsBox2Heart />} />
        </>)
    } else if (status === STATUS.PENDING) {
        return (<>
            <Loader />
        </>)
    } else if (status === STATUS.RESOLVED) {
        return (
            <>
                {photos.length > 0 ?
                    (<>
                        <Gallery onClick={getLargeImage}>{photos.map((photo) =>
                            <AnimatePresence  key={photo.id} mode='wait' initial={true}>
                                <ImageGalleryItem

                                    link={photo.webformatURL}
                                    large={photo.largeImageURL}
                                    title={photo.tags}
                                />
                            </AnimatePresence>)}
                        </Gallery>
                        {currentPage !== maxPage && <Button loadMore={loadMore} />}
                    </>
                    )
                    : (<Notification
                        message="No matches found"
                        icon={<BsHeartbreak />}
                    />)}
            </>
        )
    } else if (status === STATUS.REJECTED) {
        return (
            <>
                <Notification
                    message="Something went wrong"
                    icon={<BsHeartbreak />} />
            </>
        )
    }
}

ImageGallery.propTypes = {
    openLarge: PropTypes.func.isRequired,
    query: PropTypes.string
}