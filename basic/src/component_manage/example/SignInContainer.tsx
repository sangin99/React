// SignInContainer.tsx

// SignInContainer 함수형 컴포넌트를 생성
// 해당 컴포넌트는 InputBox 컴포넌트를 2개 포함
// SignInContainer 컴포넌트를 기본 값으로 내보내기 

import React from 'react'
import InputBox, { InputBoxProps } from './InputBox'

import './style.css';
import './common.css';

const InputBoxs: InputBoxProps[] = [
  {
    label: '아이디',
    type: 'text',
    placeholder: '아이디를 입력하세요.',
    buttonTitle: '중복확인'
  },
  {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요.',
  },
  {
    label: '비밀번호 확인',
    type: 'password',
    placeholder: '비밀번호를 입력하세요.',
  },
  {
    label: '이메일',
    type: 'text',
    placeholder: '이메일을 입력하세요.',
    buttonTitle: '이메일 인증'
  },
  {
    label: '인증번호',
    type: 'text',
    placeholder: '인증번호 4자리를 입력하세요.',
    buttonTitle: '인증 확인'
  },
]

export default function SignInContainer() {

  // 위에 만들고, 불러온다  : 리스트 렌더링 작업
  const InputBoxComponents = InputBoxs.map((item, index) => <InputBox key={index} {...item} /> )

  return (
    <>
      {/* <InputBox label='아이디' type='text' placeholder='아이디를 입력하세요.' buttonTitle='중복확인' />
      <InputBox label='비밀번호' type='password' placeholder='비밀번호를 입력하세요.' />
      <InputBox label='비밀번호 확인' type='password' placeholder='비밀번호를 입력하세요.' />
      <InputBox label='이메일' type='text' placeholder='이메일을 입력하세요.' buttonTitle='이메일 인증' />
      <InputBox label='인증번호' type='text' placeholder='인증번호 4자리를 입력하세요.' buttonTitle='인증 확인'/> */}
      {/* 반복작업을 깔끔하게 하기 : for문을 사용할 수 없는 상황에서 ... "리스트렌더링"!! */}
      
      {InputBoxComponents}
    </>
  );
}
