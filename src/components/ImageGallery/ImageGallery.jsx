import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getImages } from 'helpers/api';

import {BsBox2Heart, BsHeartbreak} from 'react-icons/bs';
import { Gallery } from './ImageGallery.styled';


import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';

class ImageGallery extends Component {
    state = {
        photos: null,
        status: 'idle',
        currentPage: 0,
        maxPage: 0,
    }

    static propTypes = {
        openLarge: PropTypes.func.isRequired,
    }

    async componentDidUpdate(prevProps, _) {
        const prevQuery = prevProps.query;
        const newQuery = this.props.query;
        if (prevQuery !== newQuery) {
            this.setState({ status: 'pending' })
            try {
                const images = await getImages(newQuery);
                this.setState({
                    photos: images.hits,
                    status: 'resolved',
                    maxPage: Math.ceil(images.totalHits / 12),
                    currentPage: 1
                })
            } catch (e) {
                this.setState({ status: 'rejected' })
            }
        }
    }

    loadMore = async () => {
        try {
            const images = await getImages(this.props.query, this.state.currentPage + 1);
            this.setState((prevState) => {
                return {
                    photos: [...prevState.photos, ...images.hits],
                    status: 'resolved',
                    currentPage: prevState.currentPage + 1
                }
            })
        } catch (e) {
            this.setState({ status: 'rejected' })
        }
    }

    getLargeImage = e => {
        if (e.target === e.currentTarget) {
            return;
        }
        const currentImage = e.target.closest('img').dataset.large;
        this.props.openLarge(currentImage)
    }

    render() {
        const { photos, status, currentPage, maxPage } = this.state

        if (status === 'idle') {
            return (<>
                <Notification message="Inspire yourself"
                icon={<BsBox2Heart/>}/>
                </>)
        } else if (status ==='pending') {
            return (<>
                <Loader/>
            </>)
        } else if (status === 'resolved') {
            return (
                <>
                  {photos.length > 0 ? 
                    (<><Gallery onClick={this.getLargeImage}>{photos.map((photo) =>
                        <ImageGalleryItem key={photo.id} link={photo.webformatURL} large={photo.largeImageURL} title={photo.tags} />
                    )}
                </Gallery>
                {currentPage !== maxPage && <Button loadMore={this.loadMore} />}
                </>
                )
                 : (<Notification 
                 message="No matches found"
                 icon={<BsHeartbreak/>}
                 />)}
                </>
            ) 
        } else if (status === 'rejected') {
            return (
                <>
                <Notification 
                 message="Something went wrong"
                 icon={<BsHeartbreak/>}/>
                </>
            )
        }
    }
}

export default ImageGallery;