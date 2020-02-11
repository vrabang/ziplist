
const testNums = [1, 2, 3];
const testLetters = ['a', 'b', 'c'];

function ziplist(list, list1) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i], list1[i]);
  }
  return result;
}

console.log(ziplist(testLetters, testNums));

function zipListTheSimpleWay(list, list1) {
  const result = _.flatten(_.zip(list, list1));
  return result;
}

console.log(zipListTheSimpleWay(testLetters, testNums));
