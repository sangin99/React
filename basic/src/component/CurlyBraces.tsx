import React from 'react'

export default function CurlyBraces() {

    // Curly Braces :
    // - JSX 에서 자바스크립트를 작성하는 방법
    // - JSX 안에 { }로 영역을 지정하고 그 안에 자바스크립트를 작성

    const title = 'Curly Braces';

    // 1. 요소의 컨텐츠에 자바스크립트 표현식을 쓰고자 할 때
    // 2. 주석 처리 - JSX 에서는 HTML 이 아니라 HTML 주석이 적용 X : {/* */}
    // 3. JSX 에서 스타일을 인라인 스타일로 지정할 때
    //   - JSX 에서는 인라인 스타일을 문자열로 표현 X , 객체로 표현 O

  return (
    // <div>10 + 20 title</div>
    <div style={{ color : 'red' }}>{10 + 20} {title}</div>
  )
}

