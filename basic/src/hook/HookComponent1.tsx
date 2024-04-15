import React, { useEffect, useState } from 'react'

//! Hook 함수
// - react 에서 컴포넌트 상태와 생명주기에 따른 기능을 수행할 수 있도록 해주는 특별한 함수
// - use 로 시작하는 함수

// - hook 함수의 종류 - 
// 1. useState : 컴포넌트의 상태 관리를 가능하게해주는 함수, 상태 생성, 업데이트, 값에 접근
// 2. useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 하는 함수, 
//                (렌더링 : mount(첫번째) , update(다시 렌더링) , unmount(화면에서 사라지는)) 단계에서 수행하는 함수
// 3. useRef : DOM 요소에 직접 접근하기 위한 함수, 렌더링 사이에 값을 기억하는 함수
// 4. useContext : 컴포넌트 트리 상에서 전역적으로 상태를 공유하고자 할 때 사용하는 함수 , 상태를 만드는 작업
// 5. useReducer : 상태 로직을 관리하는 함수, 상태 업데이트 로직을 컴포넌트 외부로 옮길 수 있게하여 코드관리를 조금 더 수월하게 해줌
// 6. useCallback : 메모리 내에서 함수를 재사용할 수 있도록 하는 함수, 렌더링 없이 특정 함수를 다시 호출할 수 있도록 해줌
// 7. useMemo : 메모리에 계산된 값(함수의 결과)을 저장하여 함수 재실행 없이 사용할 수 있도록 하는 함수

// - 훅 함수는 반드시 컴포넌트의 코드 블럭에 존재해야함
// - 만약 컴포넌트의 코드 블럭 외에 존재하고 싶다면 그 코드블럭은 반드시 훅 함수여야함
// const [count, setCount] = useState<number>(0);

export default function HookComponent1() {
  
  //? 임의의 배열 만들기
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);

  const addCount = () => {
    // const [count, setCount] = useState<number>(0);
    setCount(count + 1)
  };

  const reverseFlag = () => {
    setFlag(!flag)
  };
  
  // useEffect :
  // - 컴포넌트의 생명주기에 따라 특정 함수를 수행하도록 하는 훅 함수
  // - useEffect(실행할 함수, 스코프할 상태 배열);
  // - 개발자 모드에서는 mount - unmount 가 한번 실행되면서 테스트 후 다시 정상 실행

  // Component mount 시에만 실행 _ 첫번째만 수행해라!
  useEffect(() => {
    console.log('useEffect');
  }, []);

  // 스코프할 상태 배열을 지정하지 않으면 모든 상태가 변경될 때마다 실행됨
  useEffect(() => {
    // 스코프할 상태 배열을 지정하지 않은 effect 에서 상태를 변경하면 무한 실행됨
    // setFlag(!flag);
    
    console.log('useEffect');
  });

  // 스코프할 상태 배열에 상태를 지정하면 지정한 상태가 변경될 때 마다 실행됨
  useEffect(() => {
    // 스코프할 상태 벼열에 지정한 상태를 해당 effect 에서 변경하면 무한 실행됨
    // setCount(count + 1);

    console.log('count 가 변경됨');
    console.log(count);
  }, [count]);

  // 스코프할 상태 배열에 두 개 이상의 상태를 지정할 수 있음 (배열에 포함된 상태 중 하나라도 변경되면 effect 가 실행됨)
  useEffect(()=> {
    console.log('count 또는 flag가 변경됨');
    console.log(count);
    console.log(flag);
  }, [count, flag]);

  const SubComponent = () => {

    // 전달한 콜백 함수의 return 으로 컴포넌트가 unmount 시 실행할 함수를 반환 할 수 있음
    // 상태 스코드와 연결하여 작업할 필요가 없음
    useEffect (() => {
    console.log('mount시 실행');
    return () => {
      console.log('unmount시 실행')
    }
  }, []);

    return <h1>SubComponent</h1>
  };
  

  return (
  <div>
    {flag && count}  
    {count}  
    {flag && <SubComponent />} 
    <button onClick={addCount}>+</button>
    <button onClick={reverseFlag}>!</button>
  </div>
  );
}
