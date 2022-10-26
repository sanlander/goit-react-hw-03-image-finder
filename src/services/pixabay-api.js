import axios from 'axios';

const URL_API =
  'https://pixabay.com/api/?key=29666264-04a56090f5dead81932f72058&image_type=photo&orientation=horizontal';

const PER_PAGE = 12;
export let MAX_PAGE = null;

export const getImages = async (text, page) => {
  const response = await axios.get(
    `${URL_API}&per_page=${PER_PAGE}&q=${text}&page=${page}`
  );
  MAX_PAGE = Math.ceil(response.data.totalHits / PER_PAGE);

  return response.data.hits;
};
