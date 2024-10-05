module.exports = function check(str, bracketsConfig) {
  const openedBracketArr = bracketsConfig.reduce((res,value) => [value[0], ...res],[]);
  const closedBracketArr = bracketsConfig.reduce((res,value) => [value[1], ...res],[]);
  const bracketPairArr = bracketsConfig.map((elem) => elem.reverse());
  const bracketPairObj = bracketPairArr.reduce((acc,item) => {
     return { ...acc,
       [item[0]]: item[1]
     }
   },{});
  let bracketPairMap = new Map(Object.entries(bracketPairObj));
   const arrOgConfigInfo = [];
   arrOgConfigInfo.push(openedBracketArr);
   arrOgConfigInfo.push(closedBracketArr);
   arrOgConfigInfo.push(bracketPairMap);
  
  const stack =[];
  
  for (let i = 0; i < str.length; i++){  
    
    let current = str[i];
  
    if (openedBracketArr.includes(current) != closedBracketArr.includes(current)){
      if (openedBracketArr.includes(current)){
        stack.push(current);
      } else {
        if (bracketPairMap.get(current) === stack[stack.length - 1]){
          stack.pop();
        } else {
          stack.push(current);
        }
      }
    } else {
      if (current != stack[stack.length - 1]){
        stack.push(current);
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}
