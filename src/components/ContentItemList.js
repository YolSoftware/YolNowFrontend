import React, { Component } from 'react';
import ContentItem from './ContentItem';

class ContentItemList extends Component {
    // 컴포넌트가 리렌더링을 할 지 말지 정해줌
    // this.props.contents 와 nextProps.contents 가 다른 경우에만 리렌더링함
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.contents !== nextProps.contents;
    }

    render() {
        const { contents } = this.props;
        
        const contentList = contents.map(
            ({id, text, color, time, nickname}) => (
                <ContentItem
                    id={id}
                    text={text}
                    color={color}
                    key={id}
                    time={time}
                    nickname={nickname}
                />
            )
        );

        return (
            <div>
                {contentList}
            </div>
        )
    }
}

export default ContentItemList;