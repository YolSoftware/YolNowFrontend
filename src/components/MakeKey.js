import React from 'react';
import './MakeKey.css';

const MakeKey = ({ onMakeKey }) => {
    return(
        <div className="onMakeKey-form">
            <div className="create-button" onClick={onMakeKey}>
                키 생성
            </div>
            <div className="view-key"></div>
        </div>
    )
}

export default MakeKey;