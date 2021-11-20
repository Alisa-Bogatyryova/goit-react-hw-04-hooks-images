import { useState, useEffect } from 'react';
import fetchImg from './api/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';


const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = () => {
    const options = {
      query,
      currentPage,
    };

    setIsLoading(true);

    fetchImg(options)
      .then(
        images => setImages(prevState => [...prevState, ...images]),
        setCurrentPage(prevState => prevState + 1),
      )
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  const handleSubmitSearchbar = query => {
    setQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmitSearchbar} />
      <ImageGallery
        query={query}
        images={images}
        currentPage={currentPage}
        error={error}
        isLoading={isLoading}
        fetchImages={fetchImages}
      />
      {isLoading && <Loader />}
        {images.length > 0 && (
          <Button fetchImages={fetchImages} />
        )}
    </>
  );
};

export default App;