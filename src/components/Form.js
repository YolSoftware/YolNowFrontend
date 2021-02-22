import React from 'react';
import './Form.css';

const Form = ({ value, onChange, onCreate, onKeyPress, color }) => {
    // value = input의 내용
    // onChange = input 내용이 변경 될 때 실행되는 함수
    // onCreate = 버튼이 클릭 될 때 실행 될 함수
    // onKeyPress = 엔터가 눌렸을 때 작동
    // color = 현재 선택된 색
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}} />
            <div className="create-button" onClick={onCreate}>
                입력
            </div>
        </div>
    )
}

export default Form;