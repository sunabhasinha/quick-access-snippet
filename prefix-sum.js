//Prefix Sum Brute
const prefix_brute = (arr) => {
  const n = arr.length;
  const result = new Array(n);
  result[0] = arr[0];
  for (let i = 1; i < n; i++) result[i] = result[i - 1] + arr[i];

  return result;
};

//Prefix Sum Optimized
const prefix_optimized = (arr) =>
  arr.reduce((prev, curr, ind) => [...prev, curr + (prev[ind - 1] || 0)], []);

//Prefix Sum [i, j]
pf[j] - pf[i-1];

//Prefix Sum [0, i]
pf[i];
