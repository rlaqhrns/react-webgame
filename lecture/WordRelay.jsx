//쪼갠 파일에서 필요로하는 부분 임포트느낌
const React = require('react');
const {Component} = React;

//class WordRelay extends React.Component{ 위의 const {Component} = React; 를 선언함으로써 아래의코드로 변환
class WordRelay extends Component{

    state = {
        text: 'Hello, webpack',
    };
    render(){
        return <h1>{this.state.text}</h1>;
    }
}

//파일을 바깥에서도 쓸 수있게 하는부분
module.exports = WordRelay;