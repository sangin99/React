import axios from 'axios'
import React from 'react'

// axios 패키지(라이브러리) :
// - javascript 에서 사용하는 HTTP 클라이언트 라이브러리
// - 웹 브라우저, Node.js 기반의 환경에서 동작함
// - Ajax, Fetch API 보다 간편함
// - axios api 는 기본적으로 Promise 로 작업을 수행

// - npm i axios
export default function AxiosLibrary() {

  // axios 객체
  // - axios 객체는 http method 에 해당하는 함수들을 포함하고 있음
  // - 각각의 http method 함수는 URL, option 을 매개변수로 받음
  // - 각각의 http method 함수의 결과는 promise 형태로 반환
  axios
  .get(' http://localhost:4190/api/v1/user/email@email.com')
// .get(' http://localhost:4100/api/v1/user/email@email.com.adsdasd') // Request failed with status code 401
// .get(' http://localhost:4190/api/v1/user/email@email.com') // Network Error
  // 각각의 http method 함수 결과를 then 으로 받을 땐 response 객체를 매개변수로 받는 callback 함수를 전달
  .then(response => {
    // response 객체는 status, header, data(body) 를 포함하고 있음
    // then 작업은 status code 가 400, 500번대가 아닌 response 를 받아옴
    console.log(response);
    console.log(response.data);  //데이터가 직접적으로 필요하다? (.data 로 받아오기)
  })
  .catch(error => {
    // 해당 request 에 대해서 request 가 실패하거나 status code가 400, 500 번대이면 catch로 AxiosError 객체를 받아옴
    // response 가 존재하는 에러는 error 객체에 response 가 포함되어 있음
    console.log(error);
  })

  return <div>AxiosLibrary</div>
 
}
