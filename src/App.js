import React, { Component } from 'react';
import Form from './components/Form';
import YolNowTemplate from './components/YolNowTemplate';
import Palette from './components/Palette';
import ContentItemList from './components/ContentItemList';
import MakeKey from './components/MakeKey';
import MakeKeyItem from './components/MakeKeyItem';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6']; // 선택가능한 색

class App extends Component {
  
  id = 0; // 배열 렌더링을 위한 키 값 - 컴포넌트가 리렌더링 될 때 효율적으로 작동시키기 위해 사용
  nickname = 'Yol';

  state = { // 초기 값
    input: '',
    nickname: '',
    contents: [      
      // (시간)아이디 : 내용
    ],
    color: '#343a40',
    time: ''
  }   

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    // 현재 입력값, 시간(YYYY-MM-DD HH:mm:ss) 24시간 방식
    const { input, contents, color } = this.state;
    const time = new Date()
    /*
    const nowTime = time.getFullYear() + '-' + (time.getMonth() + 1).toString().padStart(2, '0') + '-' 
                    + time.getDate().toString().padStart(2, '0') + ' ' + time.getHours().toString().padStart(2, '0') + ':' 
                    + time.getMinutes().toString().padStart(2, '0') + ':' + time.getSeconds().toString().padStart(2, '0');    
    */
    
    const nowTime = time.getHours().toString().padStart(2, '0') + ':' 
                    + time.getMinutes().toString().padStart(2, '0') + ':' + time.getSeconds().toString().padStart(2, '0');

    this.setState({
      input: '', // 입력창 비우기
      // 배열에 추가
      // concat 을 사용하는 이유 - 보통 push 를 많이 사용하는데 reate state 에서의 push 는 값이 추가되어도 가르키고 있는 배열은 같기 때문에 비교를 할 수 없음
      // 최적화를 하게 될 때, 배열을 비교하여 리렌더링을 방지하게 되는데 push 사용 시 최적화를 할 수 없게됨
      contents: contents.concat({
        id: this.id++,
        nickname: this.nickname,        
        text: input,
        color,
        time: nowTime
      })      
    });    
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleSelectColor = (color) => {
    // 현재 선택된 색으로 변경
    this.setState({
      color
    })
  }

  render() {

    const { input, contents, color, time } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleSelectColor,
    } = this;        

    return (      
      <YolNowTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}   
          time={time}    
        />
      )}
        palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
        )}
      >
        <ContentItemList contents={contents}/>     
        <MakeKey>
          <MakeKeyItem />
        </MakeKey>
      </YolNowTemplate>                        
    );
  }
}

export default App;
