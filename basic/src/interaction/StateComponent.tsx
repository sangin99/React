import React, { ChangeEvent, useState } from 'react'

// 상태(status) :
// - 각각의 컴포넌트를 가지는 데이터
// - 컴포넌트의 렌더링 결과에 영향을 미침
// - 컴포넌트는 독립적인 상태를 가질 수 있음
// - 상태가 변경되면 컴포넌트가 리렌더링 됨
export default function StateComponent() {

    // status 선언 :
    // - useState 함수로 함수를 선언할 수 있음
    // - const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);
    //         구조파괴 작업 : destruct

    // count count = 0;
//  `const [count] = useState<number>(0);`
    // ===>변경
    // let count = 0;
    const [count, setCount] = useState<number>(0);
    // let total : number = 0;
    const [total, setTotal] = useState<number>(0);
    // let favorites: string[] = [];
    const [favorites, setFavorites] = useState<string[]>(['사과']);
    const [favorite, setFavorite] = useState<string>('');

    const onCountAddHandler = () => {
        // setCount(count + 1);

        // 상태변수는 반드시 상태변경함수로 변경해야 리렌더링됨
        // count++;  : const 로 지정해서 변경불가능하게 만든다


        // 상태변경 함수를 통해서 함수를 변경한다고 바로 적용되지 않음
        // 리렌더링 된 후 상태변경 함수가 적용됨
//        setCount(count + 1);
//        console.log(count)  // 0+1 = 1
//       setCount(count + 1);
//        console.log(count)  // 0+1 = 1
//        setCount(count + 1);
//        console.log(count)  // 0+1 = 1
            // 예상 값? : 0+1 =1 / 1+1 =2 / 2+1 =3 .. 3이 나온다?
            // X : 작업 중간에 하나하나 작업 되는 것이 아니다. 덮어쓰기의 개념(마지막 식으로 적용)


        // 상태변경 함수에 콜백 함수를 전달하면 해당 콜백 함수는 상태 변경 작업을 누적해야함
       // setCount(count + 1);   //4씩 증가
//        setCount(count => count + 1);
//        setCount(count => count + 1);
//        setCount(count => count + 1);
//        setCount(count + 1);   //1씩 증가

        // 변경된 상태를 사용하고 싶을 때 해결방법, 임시 변수를 사용하여 간접 사용
        const tmp = count + 1;   //간접적으로 작업해서 그 값을 넣어줌
        setCount(tmp + 1);
        setTotal(total + tmp);
    };

    // Input 요소의 값을 가져오고자 할 땐 onChange 이벤트의 .target.value 로 가져옴
    const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // 가져온 .target.value 값을 상태에 지정
        setFavorite(event.target.value);
    };

    const onAddListHandler = () => {
        // 상태가 배열 혹은 객체이면 각각에 대해 요소를 추가, 변경이 일어나도 상태가 변경된 것으로 인식하지 않음(실제 주소 변경 X)
        // 상태가 변경된 것으로 인식하게 하고 싶으면 새로운 배열 혹은 객체를 생성하여 상태를 변경해야 함 (일반적으로 복사해서 변경)

        // //? 복사를 하여 추가하는 방법
        // favorites.push(favorite);  //추가
        // const newFavorites = favorites.map(item => item);   // 배열은 주소를 가지고, 주소를 변경한다.
        // setFavorites(newFavorites);  //변경/출력

        setFavorites([...favorites, favorite]);
        // setFavorites(['사과', favorite]);
        // setFavorites(['사과', '바나나' , favorite]);
        // setFavorites(['사과', '바나나' , '포도' , favorite]);
        setFavorite('');
    };

    return (
    <>
        <button onClick={onCountAddHandler}>+</button>
        <h1>{count}</h1>
        <h1>{total}</h1>

        <hr/>
        
        {/* input 이 만약 상태를 변경하다면 value 로 그 상태를 지정해야 불일치가 발생하지 않음 */}
        <input onChange={onInputHandler} value={favorite                                                           } />
        <button onClick={onAddListHandler}>추가</button>
        <h4>{favorite}</h4>
        <ul>
            {favorites.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </>
    );
}
