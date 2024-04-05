import React from 'react'

// 리스트 렌더링 :
// - JSX 내부에서 반복적으로 렌더링하는 요소에 대한 반복 처리
// - JSX 안에서는 for 혹은 while 과 같은 반복문을 사용할 수 없음
// - 리스트의 각종 메서드를 활용

interface Human {
    name: string;
    age: number;
    job: string;
}

function ListItem ({ name, age, job }: Human) {

    return (
        <div>
            <h1>이름 : {name}</h1>
            <h4>나이 : {age}</h4>
            <h4>직업 : {job}</h4>
        </div>
    )

}

export default function ListRendering() {

    const humans: Human[] = [
        {name: '홍길동', age: 20, job: '학생'},
        {name: '김철수', age: 30, job: '개발자'},
        {name: '이영희', age: 28, job: '경찰'},
        {name: '박민수', age: 12, job: '학생'}
    ];

    // humans.forEach((item, index) => {
    //     <ListItem name={item.name} age={item.age} job={item.job} />
    //! }); => undefined 형태

    // humans.map((item, index) => {
    //     return <ListItem name={item.name} age={item.age} job={item.job} />
    //! }) => [ListItem, ListItem, ListItem, ListItem] 형태

    return (
        <>
            {/* 배열을 JSX에 반환하면 배열의 각 요소를 하나씩 꺼내와서 렌더링 */}
            {/* {['요소1', '요소2', '요소3']} */}

            {/* {humans.forEach((item, index) => {
                <ListItem name={item.name} age={item.age} job={item.job} />
            })} */}

            {humans.map((item, index) => {
                //? return <ListItem name={item.name} age={item.age} job={item.job} />
                // = 동일한 식
                return <ListItem {...item} />
            })}

            {humans.map(item => <ListItem {...item} />)}


            {/* <ListItem name='홍길동' age={20} job='학생' />
            <ListItem name='김철수' age={30} job='개발자' />
            <ListItem name='이영희' age={28} job='경찰' />
            <ListItem name='박민수' age={12} job='학생' /> */}
        </>
    )
}
