import React from 'react'
import EventComponent from '../../interaction/EventComponent';

// export function InputBox2 () {

//     const label = '이메일';
//     const type = 'text';
//     const placeholder = '이메일 주소를 입력해주세요.';

//   return (
//     <div className="input-box">
//                             <div className="input-label label">{label}</div>
//                             <div className="input-content-box">
//                                 <input className="input" type={type} placeholder={placeholder} />
//                                 <div className="input-disable-button">이메일 인증</div>
//                             </div>
//                             <div className="input-message"></div>
//                         </div>
//   )
// }




export interface InputBoxProps {
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    buttonTitle?: string;
}

export default function InputBox({ label, type, placeholder, buttonTitle }: InputBoxProps) {
    return (
        <div className="input-box">
            <EventComponent />
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input
                    className="input"
                    type={type}
                    placeholder={placeholder}
                />
                { buttonTitle &&
                <div className="input-disable-button"> {buttonTitle}
                </div>
                }
            </div>
            <div className="input-message"></div>
        </div>
    );
}