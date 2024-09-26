//<서문>//
/**
 * 조건문이란 조건문 또는 반복문 할때 사용한다.
 * 일반적으로 코드는 위에서 아래로 실행 되는데 제어문을 사용하여 이를 인위적으로 제어 할 수 있다.
 * 코드 실행 을 조작하는것이기 코드 실행 순서를 이해하는데 방해가 된다. => JS 에선 이를 보완 하기 위해 여러 고차 함수를 제공하고 있다.
 */

//<블록문>//
/**
 * 블록문
 * -> 0개이상의 문이 묶여있는 블록을 뜻함
 * -> 블록문은 하나의 실행 단위로 인식한다. -> 종결성 을 포함하고 있어 ; 을 안붙여도 된다.
 * -> 블록문 자체 는 단독 사용 가능하나 보통 함수 정의 또는 제어문에 사용한다.
 */

{
  console.log("블록문");
}

//<조건문>//
/**
 * 조건문
 * 주어진 조건식의 평가에 따라 코드블록을 실행한다.
 *
 * if else 문
 * -> if ..else 문과 if ...else if 문이 있다
 * -> if ..else 문경우 조건식이 참일 경우 if 코드 블록 코드를 거짓 일경우 else 코드 블록 을 실행시킨다.
 * -> if ..else if 문 if 와 else if 에 각각 조건식을 입력 할 수 있으며 조건식 의 평가가 참일 경우 하위 코드블록을 실행 시킨다.
 * -> if, else 는 2벝 사용 할수 없지만 else if 는 여러번 사용 가능하다.
 * -> else, else if 는 옵션이다.
 * -> if 문은 삼함연산자로 대체 할수 있다.
 * -> 조건문은 boolean 값으로만 평가 된다 -> boolean 값이 아닐경우 암묵적 형변환이 이루어진다.
 *
 * swich 문
 * -> 주어진 조건식을 평가하여 그값에 일치하는 표현식을 갖는 case 문을 실행 시킨다.
 * -> 만약 어떠한 case 문에도 해당 되지 않는다면 default 문이 실행된다. -> default 문은 옵션이다.
 * -> if else 는 논리적 참, 거짓으로 실행할 코드 블록 선택, switch 는 다양한 상황에 따라 코드 실행.
 * -> 만약 case 문에 break 를 실행 시키지 않는다면 case 문에 해당 되어 코드를 실행 되어도 다음 case 문을 실행 시킨다. => 원하는 값이 안나올수 있음
 * -> default 문에는 break 를 생략하는것이 일반적이다. => default 실행후 switch 문은 종료된다.
 */

var name = "joon";

if (name === "joon") {
  console.log("joon");
} else if (name === "shim") {
  console.log("shim");
} else {
  console.log("누구야");
}

switch (name) {
  case "joon":
    console.log("joon");
    break;
  case "jshim":
    console.log("joon");
    break;
  default:
    console.log("누구야");
}

//<반복문>//
/**
 * 반복문은 조건식 평가가 평가가 참일경우 코드 블록 실행 이후 조건식을 다시 평가하여 참일경우 다시 실행시킨다. => 거짓일 경우 종료
 *
 * for 문
 * -> 조건식이 거짓으로 평가 될때까지 코드 블록을 실행 시킨다.
 * -> for(변수 선언문 또는 할당문; 조건식; 증감식){} 으로 그성되어 있다. => 선언문, 할당문, 조건식, 증감식은 옵션이다.
 * -> 아무런 옵션을 안넣을경우 무한 반복 된다.
 *
 * while 문
 * -> 조건식이 평가 값이 참일 경우 코드 블록을 실행 시킨다. => 평가값이 boolean 타입이 아닐경우 암묵적 형변환을 하여 평가한다.
 * -> 조건식이 평가 값이 true 경우 무한루프에 빠진다.
 * -> if 조건문과 break 문을 사용하여 코드 블록 실행을 중지 시킬수 있다.
 * -> while 문은 반복의 횟수가 정확하지 않을때 사용한다.
 *
 * do ..while 문
 * -> 코드 블록을 실행 시킨 후 조건문을 평가한다.
 * -> 조건문으 평가 하지 않고 코드 블록을 1회 실행시킨다.
 */

for (let i = 0; i < 6; i++) {
  console.log(i + 1);
}

let count = 0;

while (count < 3) {
  console.log(count + 1);
  count++;
}

do {
  console.log(count + 1);
  count++;
} while (count < 6);

//<break 문>//
/**
 * -> break 문은 레이블 문, 반복문, swiatch 문의 코드 블록을 탈출 시키니다.
 * -> 위 문 이외에 break 문을 사용할경우 문법 오류가 발생한다.
 * -> 더이상 반복을 사용하는것이 불필요할때 사용한다.
 * ** => 레이블 문이란 식별자가 붙은 문을 뜻한다.
 */

foo: console.log("joon"); // 레이블문, 중첩 for문 을 탈출 할때 유용하지만 코드 흐름을 파악하기 어렵게 만들기 때문에 권장하지 않는다.

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]]`);
  }
}
console.log("Done!");

//<continue 문>//
/*
 * -> continue 문은 반복문의 현지점을 중단하고 증감식으로 실행 흐름을 이동시킨다.
 */
const str = "Hello world";
const search = "l";
let searchCount = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] !== search) continue;
  searchCount++;
}
console.log(searchCount);

let searchCount2 = 0;

// if 문을 사용해 더욱더 간편하고 가독성 좋게 할수있다. => 단 내부에 if 조건이 복잡해지거나 코드가 길어진다면 continue 를 사용하는것이 가돇겅에 좋다.
for (let i = 0; i < str.length; i++) {
  if (str[i] === search) searchCount2++;
}

console.log(searchCount2);
