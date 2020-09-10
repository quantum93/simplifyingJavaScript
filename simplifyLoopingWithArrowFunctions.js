/** fat arrow function에서 함수의 바디가 한 줄일 경우 
 * return과 { }까지도 생략이 가능하다. 
 */

const capitalize = name => name[0].toUpperCase() + name.slice(1);
const formatUser = name => `${capitalize(name)} is logged in`;
console.log(formatUser("tae"));

/** callback 함수를 인자로 받는 applyCustomGreeting함수, 그리고 
 * callback 함수는 다시 capitalize함수의 결과를 인자로 작업을 한다.
 * 결국 주어진 name문자열의 첫 문자를 대문자로 그걸 다시 callback함수로
 * 보내서 인사말을 출력
*/
const applyCustomGreeting = (name, callback) => callback(capitalize(name));
console.log(applyCustomGreeting('mark', name => `Oh, hi ${name}!`));