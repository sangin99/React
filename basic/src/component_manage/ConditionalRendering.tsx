import React from 'react'

// 조건부 렌더링 : 
// - 상황(조건)에 따라서 결과를 다르게 렌더링하려 할 때 사용하는 방법
// - if , && , ? : 을 사용하는 방법이 존재함 _ ? :(삼항연산)

function IfComponent({ number }: { number: number }) {    //!임의로 객체이름 number . 타입 number 로 지정
    // if 문을 이용한 조건부 렌더링
    // - 함수(컴포넌트 함수) 내부에서 return 을 다르게 주는 방법

    //? ex) number 가 양수면 number 값을 h1 이면서 빨간색으로 표시
    if (number > 0) return (
        <h1 style={{color:'red'}}>{number}</h1>
    )
    //? 양수가 아니면  number 값을 h3 이면서 파란색으로 표시
//        else return (
//        <h3 style={{color:'blue'}}>{number}</h3>
//    )
    //? number가 음수이면 number 값을 h3 이면서 파란색으로 표시
    else if (number < 0) return (
        <h3 style={{color:'blue'}}>{number}</h3>
    ) 
    //? 0 이면 number 값을 h2 이면서 초록색으로 표시
    else return (
        <h2 style={{color: 'green'}}>{number}</h2>
    )
}

function AndComponent ({ number }: { number: number }) {
    // && 연산자를 이용한 조건부 렌더링
    // - JSX 내부(return 안)에서 상황(조건)에 따라 렌더링 여부를 결정하고 싶을 때 사용

    //? ex) 만약 number 가 양수면 '양수' 를 렌더링
    // 일반적인 형태로 표현: if (number > 0) return '양수';
    //? 양수가 아니면 '양수가 아님' 을 렌더링
    // if (number <= 0) return '양수가 아님';
    // if (!(number > 0)) return '양수가 아님';
    return (
        <h1>
            { number > 0 && '양수' }
            { number <= 0 && '양수가 아님 '}
            {/* { number >0 || '양수가 아님' }   */} 
        </h1>
    )
}

function ThreeTermComponent ({number}: {number: number}) {
    // 삼항 연산자(? :) 를 이용한 조건부 렌더링
    // JSX 내부에서(return 안) 상황(조건)에 따라서 서로 다른 렌더링을 하고 싶을 때 사용

    // ex) number가 양수면 '양수' , 음수면 '음수' , 0 이면 '영'
    return (
        <h1>
            {/* {number > 0 && '양수'} */}
            {/* {number < 0 && '음수'} */}
            {/* {number === 0 && '영'} */}
            { number > 0 ? '양수' : number < 0 ? '음수' : '영' }  {/* 삼항 연산자를 두 번 사용한다 */}
        </h1>
    )
}

//!==========================값을 넣어보자!!!=============================!//
export default function ConditionalRendering() {
    return (
    <>
        <IfComponent number={1} />
        <IfComponent number={-1} />
        <IfComponent number={0} />

        <AndComponent number={1} />
        <AndComponent number={0} />

        <ThreeTermComponent number={1} />
        <ThreeTermComponent number={0} />
        <ThreeTermComponent number={-1} />
    </>
    )
}