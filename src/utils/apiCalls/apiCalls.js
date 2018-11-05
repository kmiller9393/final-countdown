import key from '../../assets/key';

export const fetchSpacePic = () => {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then(response => response.json())
    .then(spaceData => displayImage(spaceData));

  const displayImage = spaceData => {
    return spaceData.url;
  };
};
