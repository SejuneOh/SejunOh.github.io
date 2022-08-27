---
slug: React-Router-Dom
title: React-Router-Dom을 이용하여 화면 이동 및 Link 스타일하기
authors: june
tags: [React, React-Router-Dom]
---
---

# React-Router-Dom을 이용해보자

오늘은 React를 배우고 공부하면서, 계속 CRA로 프로젝트를 만들고, 컴포넌트를 계속 만드는 것에 지치고 있었다.  
근데 react-router-dom, react-router lib을 알고 나서 이것으로 예제 파일들을 관리하고 싶어졌다.  

일단, 어떤 lib인지, 어떻게 사용하는지 기본부분 만 설명하고, 간단한 예제로 정보를 전달하려고 한다.


## React-Router

react에서 SPA(Single Page Application)를 쉽게 도입할 수 있도록 도와주는 lib로써, 페이지 이동  
관련하여 편하게 지원해주는 lib이다.

일단 ... 설치부터 해보자


- 설치 

```bash
$ npm i react-router-dom
```

설치를 했으면 어떻게 사용하는지 예제를 보자...

```js
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Hello = () => (
  <Link to='/'>to home</Link>
);
const Main = () => (
  <Link to='/hello'>to hello</Link>
);
const App = () => { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/hello" element={<Hello />} /> 
    </Routes>
  </BrowserRouter>
  );
}
```


- import : react-route-dom에서  현재 필요한  BrowserRouter, Route, Routes, Link 녀석들을 가져오자 
- BrowserRouter : 해당 lib을 사용할 app에서 한 한번만 사용한다. 페이지 이동을 위한 router를 사용 위치를 지정해준다.
-  Routes : 페이지 이동을 선언하는 Route를  동작하도록 한다.
-  Route :  props으로  path(url) 사용 경로, element(보여줄 컴포넌트)를 정의한다.(url일치하면 가장 먼저 일치한 route를 보여준다.)
-  Link/ : props to에 적힌 url로  request가 아닌 url 변경 후 컴포넌트를 보여준다.

솔직히 React를 사용하면서, lib 사용하는 방법을 익히는게 더욱 어려운 것 같다.... 여튼 다시 주제로 넘어오면

위와 같은 방식으로 React 컴포넌트를 연습하고 테스트한 내용을 한번에 보여주기 위해서 



```js
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HookSample from './Components/HookSample.tsx';
import ContextSample from './Components/ContextSample.tsx';




// styled components

// styled Link in react-router-dom
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Main = () => {

  return (
    <Container>
      <Ul>
        <StyledLink to="/HookSample">
          <Li>../HookSample.tsx</Li>
        </StyledLink>
        <StyledLink to="/ContextSample">
          <Li>../ContextSample.tsx</Li>
        </StyledLink>
      </Ul>
    </Container>
  )
}


// main page li styled
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/HookSample' element={<HookSample />}></Route>
          <Route path='/ContextSample' element={<ContextSample />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```


이렇게 구현하였다... 기본예제를 바탕으로 만들고 그래도 시간이 조금 많이 걸렸다. 

그래도 확실하게 예제를 보여주는 컴포넌트로 바로바로 이동하니깐 확실히 보기도 만드는 재미도 있었다.

중간에 보면 lib에서 사용하는 \<Link /> 컴포넌트를  스타일하기 위해서 style-components lib을 사용하여

link 효과를 삭제했다.


```js
// styled Link in react-router-dom
const StyledLink = styled(Link)`
  text-decoration: none;
`;
```

이렇게 조금씩 만들면서 실력을 키워보겠다. 솔직히 빨리 늘고싶다... 일단 만들면서 계속 올려보겠다.
