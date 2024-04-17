import React, { useState } from 'react'
import { create } from 'zustand';

// zustand 패키지(라이브러리) : 
// - react 에서 사용할 수 있는 상태 관리 라이브러리 중 하나
//   + 상태 관리 라이브러리 중 Redux 라이브러리가 현재 가장 많이 사용됨
//      - Redux의 고질적인 문제점 >> 복잡한 코드 구조와 높은 학습 곡선을 요구
// - Zustand 는 단순한 코드 구조와 학습 곡선이 매우 낮음 - ex) useState 사용 수준의 학습 곡선을 요구
// - Redux, MobX 와 같은 타 상태관리 라이브러리들에 비해 가벼움 - 빌드할 때, 패키징 속도 향상 / 빌드 후, 번들의 크기가 작아짐

// zustand 를 이용한 글로벌 상태 선언 방법
// 1. zustand 의 create 함수를 사용하여 store 를 선언
// > store : 상태와 상태 관리 로직을 하나로 묶음 객체
// > store 생성하는 create 함수의 반환 데이터는 훅 함수를 반환(use 라는 이름의 함수명으로 받아야함)

// - create 함수의 매개변수로 set 인자를 받는 콜백 함수를 전달해야함
// - 매개변수로 전달한 콜백 함수는 store 객체를 반환해야 함
// - store 객체는 상태, store 객체를 변경하는 함수가 포함됨
const useStore = create((set) => {
    return {
        zNormal: 0,
        setZNormal: (zNormal: number) => {
            set((state) => {
                return {
                    ...state,
                    zNormal: zNormal,
                }
            })
        } 
    }
});

export default function Zustandlibrary() {
    // useState 를 이용한 상태 선언 방법
    const [normal, setNormal] = useState<number>(0);
    
    // normal 값을 변경하고 싶다?
    const changeNormal = (normal: number) => {
        setNormal(normal);
    }

    // normal 값을 증가하고 싶다?
    const increaseNormal = () => {
        setNormal(normal + 1);
    }

    // normal 값을 감소하고 싶다?
    const decreaseNormal = () => {
        setNormal(normal - 1);
    }

    return (
        <div>
            <div>
                <h4>useState 방식 : {normal}</h4>
                <button onClick={decreaseNormal}>-</button>
                <button onClick={increaseNormal}>+</button>
            </div>
        </div>
    )
}
