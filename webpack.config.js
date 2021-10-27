const path = require('path'); // 파일의 경로를 쉽게 핸들링할 수 있는 부품
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // default값은 production이다. development의 코드들은 정교하지만 production의 코드들은 간단하다.
  entry: {
    // 입력값이 여러개일 경우 object로 감싸준다
    index: './src/index.js', // 입력 파일
    about: './src/about.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 어떤 파일들에게 적용시킬 것인가?
        use: [
          // 어떤 것을 적용시킬 것인가?
          'style-loader', // css요소들을 style태그로 집어넣어주는 loader
          'css-loader', // css 파일들을 웹팩으로 갖고오는 loader
          // 뒤쪽에 있는 loader가 먼저 실행됨
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 가져와야 하는 html파일
      filename: './index.html', // dist폴더에 무슨 이름으로 생성할지 정한다.
      chunks: ['index'], // 삽입하고 싶은 entry의 파일이름을 문자열로 적는다.
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html', // 가져와야 하는 html파일
      filename: './about.html', // dist폴더에 무슨 이름으로 생성할지 정한다.
      chunks: ['about'], // 삽입하고 싶은 entry의 파일이름을 문자열로 적는다.
    }),
  ],
  output: {
    // 출력 파일
    path: path.resolve(__dirname, 'dist'), // __dirname은 현재 webpack.config.js 파일이 있는 위치를 말한다. 그리고 그 경로의 dist폴더에 결과물을 넣겠다. 라는 뜻이다.
    filename: '[name].js', // 그 dist 폴더에 main.js 파일로 지정한다
    // [name]은 각 입력 파일에 키값이 여기에 들어간다. 즉 npx webpack을 하면 dist폴더에 index.js, about.js가 생성된다.
  },
};
