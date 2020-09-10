const band = [
  {name:"corbett", instrument:"guitar"},
  {name:"evan", instrument:"guitar"},
  {name:"sean", instrument:"bass"},
  {name:"brett", instrument:"drums"},
];

// 벤드에서 instrument정보만을 뽑아서 instruments배열에 저장
const instruments = []
for(let i=0; i<band.length; i++) {
  const instrument = band[i].instrument;
  instruments.push(instrument);
}

console.log(instruments);

//11과 12라인의 내용을 별도의 함수로 정의하면 약간 가독성을 높일수 있다.
function getInstrument(member) {
  return member.instrument;
}

const instruments2 = []
for(let i =0; i<band.length; i++) {
  instruments2.push(getInstrument(band[i]));
}

console.log(instruments2);

/* map()을 이용하면 아예 loop를 사용하지 않고 해결 가능하다. getInstrument()를 인자로 넣으면
함수의 작동이 아니라 작동의 결과를 사용하게 되므로 error를 발생 */
const instruments3 = band.map(getInstrument);
console.log(instruments3);

// map()에 무기명함수를 아예 집어넣는 방법도 있다. 사실 이게 더 많이 쓰일 것 같다. 
const instruments4 = band.map(member => member.instrument);
console.log(instruments4);

