/** fat arrow function에서 함수의 바디가 한 줄일 경우 
 * return과 { }까지도 생략이 가능하다. 
 */

const capitalize = name => name[0].toUpperCase() + name.slice(1);
const formatUser = name => `${capitalize(name)} is logged in`;
console.log(formatUser("tae"));