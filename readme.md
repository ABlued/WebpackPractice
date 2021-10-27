# Webpack이란?

웹팩이란 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler)입니다. 
<br>

![웹펙상세이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfFn2l%2FbtripvOUlMZ%2FmCQfAOEoWt8GdJhlq8eYL0%2Fimg.png)
<br>
<br>

## 모듈 번들러란? 
<br>
웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미합니다. 이와 같은 작업이 필요한 이유는 각각의 모듈마다 같은 이름의 함수, 변수들이 있고 이들이 서로 충돌하지 않기 위해서입니다.
<br>
<br>

## 웹팩 시작 방법
터미널에 다음과 같은 명령어 입력(node.js 설치 필수)
```
npm init 또는 npm init -y
```
그 후로 웹팩 관련 모듈을 설치해야 합니다.
```
npm install -D webpack webpack-cli
```
그 다음 웹팩에게 입력파일과 출력파일을 설정해야합니다.
```
npx webpack --entry ./src/index.js(입력파일) --output-path ./dist(출력폴더)
```

## 웹팩 설정 방법
root폴더에 webpack.config.js 파일 생성

webpack.config.js 파일에다 entry, output 설정(webpack.config.js 참조)

설정이 완료되면 터미널에 웹팩 명령어 입력
```
npx webpack --config webpack.config.js 또는
npx webpack(위 명령어와 같다)
```

## mode 설정 방법

<details>
mode를 통하여 ebpack에 내장된 최적화 기능을 사용할 수 있습니다.

```
module.exports = {
  mode: 'development',
};
```

mode = 'production': 'none' | 'development' | 'production'

<style>
    table{
        border:gray 1px solid
    }
</style>
<table>
    <tr>
        <th>옵션</th>
        <th>설명</th>
    </tr>
    <tr>
        <td>development</td>
        <td>DefinePlugin의 process.env.NODE_ENV를 development로 설정합니다. 모듈과 청크에 유용한 이름을 사용할 수 있습니다.</td>
    </tr>
    <tr>
        <td>production</td>
        <td>DefinePlugin의 process.env.NODE_ENV를 production으로 설정합니다. 모듈과 청크, FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, TerserPlugin 등에 대해 결정적 망글이름(mangled name)을 사용할 수 있습니다.</td>
    </tr>
    <tr>
        <td>none</td>
        <td>기본 최적화 옵션에서 제외</td>
    </tr>
</table>

[자세한 사항은 이곳을 참조](https://webpack.kr/configuration/mode/#root)
</details>


