export default (str, nBins = null) => {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }

  return (nBins) ? ((hash % nBins) + nBins) % nBins : hash; 
};
