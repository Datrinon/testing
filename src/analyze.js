export function analyze(array) {
  let statistics = {};
  let avg = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  
  statistics["length"] = array.length;
  
  if (array.length === 0) {
    statistics["average"] = null;
    statistics["min"] = null;
    statistics["max"] = null;
    return statistics;
  }

  array.forEach(elem => {
    if (elem < min) {
      min = elem;
    } 

    if (elem > max) {
      max = elem;
    }

    avg += elem;
  });

  avg /= array.length;

  statistics["average"] = avg;
  statistics["min"] = min;
  statistics["max"] = max;

  return statistics;
}