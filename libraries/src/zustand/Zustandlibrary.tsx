import React, { useState } from 'react'

// zustand 패키지(라이브러리) : 
// - react 에서 사용할 수 있는 상태 관리 라이브러리 중 하나
//   + 상태 관리 라이브러리 중 Redux 라이브러리가 현재 가장 많이 사용됨
//      - Redux의 고질적인 문제점 >> 복잡한 코드 구조와 높은 학습 곡선을 요구
// - Zustand 는 단순한 코드 구조와 학습 곡선이 매우 낮음 - ex) useState 사용 수준의 학습 곡선을 요구
// - Redux, MobX 와 같은 타 상태관리 라이브러리들에 비해 가벼움 - 빌드할 때, 패키징 속도 향상 / 빌드 후, 번들의 크기가 작아짐

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
