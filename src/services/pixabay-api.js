import axios from 'axios';

export const getImages = async (text, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=29666264-04a56090f5dead81932f72058&image_type=photo&orientation=horizontal&per_page=12&q=${text}&page=${page}`
  );

  return response.data.hits;
};
