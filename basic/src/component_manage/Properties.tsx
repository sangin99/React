import React from 'react'

// Properties (속성)
// - 부모 컴포넌트(호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *({객체})*
// - 부모 컴포넌트에서는 HTML 과 동일한 방식 (속성명=데이터)로 전달
// - 자식 컴포넌트에서는 JS 의 매개변수 방식으로 받음
// - 전달할 수 있는 데이터는 JS 로 표현할 수 있는 모든 형태

//? 객체 타입 만들기 _ (1번 형태 관련)
interface Props {
    title: string;
    content: string;
    nickname?: string;   //선택형: ?
}

function Child ({ title, content, nickname="비공개" }: Props) {

    //! 1번 형태
    // props ={
    //     title:'제목1'
    //     content:'내용1'
    // }

    //! 2번 형태
    // const title = props.title;
    // const content = props.content;
    
    //! 3번 형태
    // const { title, content } = props;        //? props를 파괴해서 title, content 를 가져온다 _ es6+ 6.dis~
                                                //? > Child () 안으로 넣는다

    return (
        <div>
            {/* <h1>{props.title}</h1> */}
            <h1>{title}</h1>
            {/* <p>{props.content}</p> */}
            <p>{content}</p>
            
            <h4>{nickname}</h4>
        </div>
    )
}

//? Properties 요소(컴포넌트)에서 Child 를 호출하기
export default function Properties() {
  return (
    <>
        <Child title='제목1' content='내용1' nickname='라라' />
        <Child title='국제인구 이동' content='보도자료' />
        <Child title='외국인 지역별 통계' content='안녕하세요 외국인이에요!'/>
    </>
  )
}
