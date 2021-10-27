const path = require('path'); // 파일의 경로를 쉽게 핸들링할 수 있는 부품
module.exports = {
  entry: './src/index.js', // 입력 파일
  output: {
    // 출력 파일
    path: path.resolve(__dirname, 'dist'), // __dirname은 현재 webpack.config.js 파일이 있는 위치를 말한다. 그리고 그 경로의 dist폴더에 결과물을 넣겠다. 라는 뜻이다.
    filename: 'main.js', // 그 dist 폴더에 main.js 파일로 지정한다
  },
};
