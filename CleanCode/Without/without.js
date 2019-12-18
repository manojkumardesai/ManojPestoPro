

function without(withoutTheseValues, actualList) {
  let filteredList =  actualList.filter((memberOfActualList) => {
      return !withoutTheseValues.includes(memberOfActualList);
  });
  return filteredList;


}

console.log(without ([1,2],[1,2,1,3,4]));
console.log(without([0], [-0]).length); // include method fails here
console.log(without([1, 2], [1, 2, 1, 3, 4]));
