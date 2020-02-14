const inRange = (start, end, value) => {
  return (start <= value && value <= end) || (end <= value && value <= start);
};

module.exports = inRange;
