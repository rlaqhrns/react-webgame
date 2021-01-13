const path = require('path');

module.exports ={
    name: 'word-relay-setting', //어떤것에대한 설정인지 이름
    mode: 'development', //실서비스 : production
    devtool: 'eval', //빠르게 하겠다(?)
    resolve: {
        extensions: ['.js','.jsx'] //확장자 자동으로 찾아준다
    },
    //entry, output 중요!!!
    entry: {
        //app: ['./client.jsx','WordRelay.jsx'], //이 두개의 파일을 합치겠다
        app: ['./client'], //'WordRelay.jsx'를 client.jsx가 참조함으로 이렇게만 넣어도 된다.
    }, //입력

    module:{
        rules:[{
            test: /\.jsx?/, //js랑 jsx파일에 룰을 적용하겠다.
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react' ],
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), //이 폴더에
        filename: 'app.js', //이 이름으로
    },//출력
};