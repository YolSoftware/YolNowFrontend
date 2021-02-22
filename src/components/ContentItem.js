import React, { Component } from 'react';
import './ContentItem.css';

class ContentItem extends Component {
    render() {
        const { nickname, text, color, time } = this.props;
        // nickname = 현재 사용자 닉네임
        // text = 입력된 내용
        // color = 현재 선택된 색
        // time = 입력당시 시간
        // props = 어떠한 값을 컴포넌트에게 전달해줘야 할 때 사용
        return (
            <div className="content-item">
                <div style={{ color }} className='content-text'>
                    <div>({time}) {nickname} : {text}</div>
                </div>
            </div>
        )
    }
}

export default ContentItem;