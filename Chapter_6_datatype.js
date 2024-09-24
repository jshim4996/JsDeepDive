//<서문>//
// 데이터 타입이란 값의 종류를 뜻한다.
// JS 에 타입은 원시 타입과 객체타입으로 구분된다.

//<숫자 타입>//
/**
 * JS 다른 프로그래밍 언어와 다르게 64비트 부동소수 형식만을 가지고 있다.
 * 따라서 JS 는 모든 숫자값을 실수형으로 저장한다. => 정수형 코드를 작성 하더라도 모든 데이터를 실수로 처리한다.
 *  정수, 실수, 2진수, 8진수, 10진수, 16진수 값을 참조하면 모두 10진수로 표시 된다.
 */
var binary = 0b01000001; // 2진수
var octal = 0o101; //실수
var hex = 0x41; // 16진수

console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal);
console.log(octal === hex);

console.log(1.0 === 1.0); // true

//숫자 타입은 추가적으로 세가지 값을 표현 할 수있다.
console.log(10 / 0); //Infinity 양의 무한대
console.log(10 / -0); // -Infinity 음의 무한대
console.log(1 * "문자"); // NaN

//<문자 타입>//
/**
 * 문자열 타입은 0개 이상의 문자를 16비트 유니코드로 전세계 대부분의 문자를 표현할 수 있다.
 * 문자열을 따옴표로 묶지 않는다면  JS 는 문자를 토큰으로 인식한다.
 * 템플릿 리터럴 : 백틱으로 개행 하는 문자열로 기존 따옴표 문자열과 다르게 중간 코드 삽입, 줄바꿈 띄어쓰기가 이스케이프 시퀀스를 사용하지 않고도 표현이 가능하다.
 */

const firstName = "joon";
const lastName = "shim";

console.log("My name is" + " " + +firstName + " " + lastName);
console.log(`My name is ${firstName} ${lastName}`);

//<불리언 타입>//
// 참(true), 거짓 (false) 단 두가지 값만이 존재하는 타입이다.
// 조건문 흐름을 제어하는데 많이 사용된다.
var isTest = true;
console.log(isTest);
isTest = false;
console.log(isTest);

//<undefined 타입>//
/**
 * undefined 타입은 undefined값이 유일하다.
 * undefined은 var 키워드로 변수 선언으로 확보된 메모리 공간을 가비지 값이 아닌 초기화 하기 위해 생성된 변서이다.
 * 개발자가 의도적으로 빈값을 undefined 로 생성하는 것 은 지양 해야한다.
 */

var test;
console.log(test);

//<null 타입>//
/**
 * null 타입은 null 값이 유일하다.
 * null 타입은 의도적으로 변수에 값이 없다는것을 표시할때 사용한다.
 * 변수에 null 값을 할당 하는것은 이전에 할당 되어 있던 값을 더이상 사용하디 않겠다는 의미이다.
 * 이전에 참조되어 있던 값은 더이상 참조하는 값이기에 가비지 콜렉터가 삭제한다.
 */

var test1 = "joon";
test1 = null;
console.log(test1);

//<심벌 타입>//
/**
 * 심벌 타입은 ES6에 추가된 타입으로 변경 부가능한 원시 값이다.
 * 심벌은 다른 값과 중복되지 않는다.
 * 심벌은 Symbol 함수로 생성한다.
 * 심벌은 이름의 충돌 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용된디.
 */

var key = Symbol("key");
console.log(typeof key);

var obj = {};
obj[key] = "value";
console.log(obj); // 심볼은 외부에 노츨 되지 않는다.
console.log(obj[key]); // 심볼은 외부에 노츨 되지 않는다.

//<객체 타입>//
// 자바스크립트를 이루고 있는 거의 모든 것이 객체 이다.

//<테이터 타입의 필요성>//
/**
 * 테이터 타입은 메모리 공간을 확보하는데 참조된다.
 * 데이터 타입이 무엇이냐에 따라 데이터를 저장하는 바이트가 달라지고 이에 필요한 메모리 용량이 달라지기에
 * 테이터 타입을 통해 메모리 공간 확보시에 참조가 된다.
 * 참조 시에도 테이터 타입에 선무 메모리 셀을 참조할때 어디까지 메모리 셀을 읽어들일지 참조할수 있다.
 */
/**
 * 테이터 타입에 의한 값의 해석
 * 데이터 타입에 따라 2진수로 저장된 값을 어떻게 해석할지 결정된다.
 */

//<동적 타이핑>//
/**
 * 정적 타이핑 언어는 변수를 선언할때 변수의 타입을 선언해야 한다.
 * 정적 타이핑 언어는 변수 타입에 맞는 값만을 변수에 할당 할 수 있다.
 * 이는 컴파일 시점에서 타입 체크를 수행하여 만약 타입이 맞지 않다면 오류를 발생 시키고 프로그램 실행 자체를 막는 역활을 한다.
 */
/**
 * 자바스크립트는 동적 타이핑 언어 인다.
 * JS 는 변수 선언 시점이 아닌 할당 시점에 데이터 타입이 결정(타입 추론)된다. 그리고 재할당을 통해 데이터 타입이 변경 될 수 있다.
 * 변수가 아닌 데이터에 타입이 지정되어 있다.
 */
/**
 * 통적 타입 언어와 변수
 * 동적 타입의 언어는 유연성을 높지만 신뢰성이 떨어진다.
 * 값에 따라 데이터 타입을 확인 할수 있기에 직접적으로 값을 확인 하기 전까지 타입을 알수 없다.
 * 데이터가 변경 함에 따라 타입이 변하기에 타입 오류가 발생한다면 타입 변경 위치를 찾기 어렵다.
 * 데이터가 언제든 변할수 있기에 역추적하기가 어렵다.
 * 코드는 동작하는것만이 목표가 아닌 개발자를 위한 문서이기도 하다. 즉 가독성 좋은 코드가 좋은 코드이다.
 */
