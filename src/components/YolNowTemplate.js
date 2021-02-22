import React from 'react';
import './YolNowTemplate.css';

const YolNowTemplate = ({ form, palette, children }) => {
    // form = 입력창, palette = 글자 색 목록, children = 대화 창
    return (
        <main className="yol-now-template">
            <div className="title">
                Yol Now
            </div>
            <section className="children-wrapper">
                {children}
            </section>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
        </main>
    )
}

export default YolNowTemplate;