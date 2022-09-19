// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers


const scale = (num, in_min, in_max, out_min, out_max) =>
  ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

export default scale;