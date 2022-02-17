const throtle = (func, delay = 20) => {
  let block = false;

  return (...args) => {
    if (!block) {
      func(...args);
      block = true;
      setTimeout(() => {
        if (block) {
          block = false;
        }
      }, delay);
    }
  };
};

export default throtle;
