"use strict";(self.webpackChunkdevlog=self.webpackChunkdevlog||[]).push([[8310],{6426:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"CSS,Flex","metadata":{"permalink":"/devlog/blog/CSS,Flex","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-27-Flex.md","source":"@site/blog/2022-09-27-Flex.md","title":"Flex\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uc790","description":"---","date":"2022-09-27T00:00:00.000Z","formattedDate":"2022\ub144 9\uc6d4 27\uc77c","tags":[{"label":"CSS","permalink":"/devlog/blog/tags/css"},{"label":"FLEX","permalink":"/devlog/blog/tags/flex"}],"readingTime":3.355,"hasTruncateMarker":false,"authors":[{"name":"Sejune Oh","title":"Front End Engineer","url":"https://github.com/SejuneOh","imageURL":"https://avatars.githubusercontent.com/u/103201530?s=400&u=69cedf54cc5c427c96728a55d00e995b4dc9b145&v=4","key":"june"}],"frontMatter":{"slug":"CSS,Flex","title":"Flex\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uc790","authors":"june","tags":["CSS","FLEX"]},"nextItem":{"title":"React-Router-Dom \ud65c\uc6a9 \ubc0f Link \ud0dc\uadf8 \uc2a4\ud0c0\uc77c\ud558\uae30","permalink":"/devlog/blog/React-Router-Dom"}},"content":"--- \\n\\n\\n# CSS Flex?\\n\\n- Flex \uc544\uc774\ud15c\uc774 \uc790\uc2e0\uc758 \ucee8\ud14c\uc774\ub108\uc5d0 \ucc28\uc9c0\ud558\ub294 \uacf5\uac04\uc5d0 \ub9de\ucd94\uae30 \uc704\ud55c \uc18d\uc131\\n- Flex\ub294 \ub2e8\ucd95 \uc18d\uc131\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \uc18d\uc131\uc744 \uac16\ub294\ub2e4.\\n  - flex-grow\\n  - flex-shrink\\n  - flex-basis\\n\\n## Flex\uc758 \ud2b9\uc131\\n- \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0, flex\uc758 \uac12\uc740 auto, initial, none, \ub2e8\uc704 \uc5c6\ub294 \uc591\uc218\uc758 \uac12\uc744 \uc0ac\uc6a9 \\n- flex\uc758 \uc544\uc774\ud15c\uc740 \ucee8\ud150\uce20\uc758 \ucd5c\uc18c\ud55c\uc758 \ub113\uc774 \ubbf8\ub9cc\uc73c\ub85c \uc904\uc5b4\ub4e4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\\n  -  \ubcc0\uacbd\uc744 \uc6d0\ud560 \ub54c\ub294, min-height, min-width\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\\n- flex\uc758 \ud55c \uac1c\uc758 \uac12\uc73c\ub85c \uc138 \uac00\uc9c0 \uac12\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \\n  - number type : flex-grow\\n  - length, percentage : flex-basis\\n  - none, auto, initial\\n- flex \uac12\uc774 2\uac1c\uc77c \ub54c\\n  - \uccab \ubc88\uc9f8 \uac12\uc740 number type : flex-grow\\n  - \ub450 \ubc88\uc9f8 \uac12\uc740\\n    - number : flex-shrink\\n    - length, percentage(auto) : flex-basis\\n\\n## Flex Property\\n\\n- initial : \uc544\uc774\ud15c\uc758 \ud06c\uae30\uac00 width, height \uc18d\uc131\uc5d0 \ub530\ub77c \uc815\ud574\uc9d1\ub2c8\ub2e4. \ud50c\ub809\uc2a4 \ucee8\ud14c\uc774\ub108\uc758 \ud06c\uae30\ub97c \ub118\uc9c0 \uc54a\uae30 \uc704\ud574\uc11c \uc904\uc5b4 \ub4e4 \uc218\ub294 \uc788\uc9c0\ub9cc \ub0a8\uc740 \uacf5\uac04\uc744 \ucc44\uc6b0\ub824\uace0 \ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4.\\n  - \uac19\uc740 \ud45c\ud604 = flex: 0 1 auto\\n- auto : initial \uc18d\uc131\uacfc \uac19\uc9c0\ub9cc \ub2e4\ub978\uc810\uc740, \ub0a8\uc740 \uacf5\uac04\uc744 \ucc44\uc6b8\ub824\uace0 \ud560 \uc218 \ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\\n  - \uac19\uc740 \ud45c\ud604 = flex: 1 1 auto\\n- none : width, height\ub294 \uc704\uc640 \uac19\uc774 \uc18d\uc131\uc5d0 \ub530\ub77c \uc815\ud574\uc9d1\ub2c8\ub2e4. \ucee8\ud14c\uc774\ub108\uc640 \ud06c\uae30\uc640 \uc0c1\uad00\uc5c6\uc774 \ubcc0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\\n  - \uac19\uc740 \ud45c\ud604 = flex : 0 0 auto\\n- flex-grow : \\n  - flex-item\uc758 \uc694\uc18c\uac00 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \ucc28\uc9c0\ud558\ub294 \uacf5\uac04\uc758 \uc815\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\\n  - flex-item\ub4e4\uc774 \uac19\uc740 \uac12\uc744 \uac00\uc9c4\ub2e4\uba74, \uac19\uc740 \ud06c\uae30\ub97c \uc9c0\uc815 \ubc1b\uc2b5\ub2c8\ub2e4.\\n- flex-shrink :\\n  - \ucee8\ud14c\uc774\ub108\ubcf4\ub2e4 item\uc758 \uc694\uc18c\uac00 \ud074 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \\n  - \uc124\uc815\uc758 \ud06c\uae30\ub9cc\ud07c item\uc758 \ud06c\uae30\uac00 \ucee4\uc9c8 \ub54c \ucd95\uc18c \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\\n- flex-basis :\\n  - item\uc758 \ucd08\uae30 \ud06c\uae30\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\\n  - box-sizing\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \ucee8\ud150\uce20\uc758 \ubc15\uc2a4\uc758 \ud06c\uae30\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\\n\\n### Flex\ub97c \uc815\ub9ac\ud55c \uc774\uc720\ub294\\n- \ub300\ubd80\ubd84\uc758 \uc815\ub82c\uc740 display: flex \uc18d\uc131\uc744 \uc0ac\uc6a9\ud574\uc11c\uc600\ub2e4\\n- margin, padding\uc744 \uc8fc\ub294 \uc21c\uac04 flex\uc758 \uc911\uc559 \uc815\ub82c\uc774 \ubc00\ub9ac\ub294 \ud604\uc0c1\uc774 \uc788\uc5c8\ub2e4 \\n- item\uc758 \uc0ac\uc774\uc5d0 \uc601\uc5ed\uc744 \uce68\ubc88\ud558\ub294  \ubd80\ubd84\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc218\uc815\ud558\uae30 \uc704\ud574\uc11c flex\ub97c \uacf5\ubd80\ud558\uc600\ub2e4.\\n- header\uc758 \ub85c\uace0, \ud0c0\uc774\ud2c0, \uba54\ub274 \ubd80\ubd84\uc744 \uc0c1\ub300\uc801\uc778 \ud06c\uae30\ub97c \uc9c0\uc815\ud574\uc5ec \uc11c\ub85c\uc758 \uc601\uc5ed\uc744 \uce68\ubc94\ud558\uc9c0 \ubabb\ud558\ub3c4\ub85d \ud558\uc600\ub2e4.\\n  \\n\ud639\uc5ec\ub098, flex\uc758 \ub0a8\ubc1c\ub85c, \ud654\uba74\uc744 \uad6c\ud604\ud558\ub294 \ubd80\ubd84\uc774 \uc788\uc5b4\uc11c, \uc0c8\ub85c\uc6b4 \ubc29\ud5a5\uc73c\ub85c \ud654\uba74 \uad6c\uc131\ud558\ub294 \uc18d\uc131\uc744 \uc815\ub9ac\ud574\uc11c \uc62c\ub9bd\ub2c8\ub2e4.\\n\\n\\n#### \ucc38\uace0\\n[\ucc38\uace0\uc790\ub8cc : MDN \uacf5\uc2dd\uc0ac\uc774\ud2b8](https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis)"},{"id":"React-Router-Dom","metadata":{"permalink":"/devlog/blog/React-Router-Dom","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-31-ReactRouterDom.md","source":"@site/blog/2022-05-31-ReactRouterDom.md","title":"React-Router-Dom \ud65c\uc6a9 \ubc0f Link \ud0dc\uadf8 \uc2a4\ud0c0\uc77c\ud558\uae30","description":"---","date":"2022-05-31T00:00:00.000Z","formattedDate":"2022\ub144 5\uc6d4 31\uc77c","tags":[{"label":"React","permalink":"/devlog/blog/tags/react"},{"label":"React-Router-Dom","permalink":"/devlog/blog/tags/react-router-dom"}],"readingTime":3.765,"hasTruncateMarker":false,"authors":[{"name":"Sejune Oh","title":"Front End Engineer","url":"https://github.com/SejuneOh","imageURL":"https://avatars.githubusercontent.com/u/103201530?s=400&u=69cedf54cc5c427c96728a55d00e995b4dc9b145&v=4","key":"june"}],"frontMatter":{"slug":"React-Router-Dom","title":"React-Router-Dom \ud65c\uc6a9 \ubc0f Link \ud0dc\uadf8 \uc2a4\ud0c0\uc77c\ud558\uae30","authors":"june","tags":["React","React-Router-Dom"]},"prevItem":{"title":"Flex\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uc790","permalink":"/devlog/blog/CSS,Flex"},"nextItem":{"title":"Upstream, DownStream","permalink":"/devlog/blog/Upstream, DownStream"}},"content":"---\\n\\n# React-Router-Dom\uc744 \uc774\uc6a9\ud574\ubcf4\uc790\\n\\n\uc624\ub298\uc740 React\ub97c \ubc30\uc6b0\uace0 \uacf5\ubd80\ud558\uba74\uc11c, \uacc4\uc18d CRA\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uace0, \ucef4\ud3ec\ub10c\ud2b8\ub97c \uacc4\uc18d \ub9cc\ub4dc\ub294 \uac83\uc5d0 \uc9c0\uce58\uace0 \uc788\uc5c8\ub2e4.  \\n\uadfc\ub370 react-router-dom, react-router lib\uc744 \uc54c\uace0 \ub098\uc11c \uc774\uac83\uc73c\ub85c \uc608\uc81c \ud30c\uc77c\ub4e4\uc744 \uad00\ub9ac\ud558\uace0 \uc2f6\uc5b4\uc84c\ub2e4.  \\n\\n\uc77c\ub2e8, \uc5b4\ub5a4 lib\uc778\uc9c0, \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0 \uae30\ubcf8\ubd80\ubd84 \ub9cc \uc124\uba85\ud558\uace0, \uac04\ub2e8\ud55c \uc608\uc81c\ub85c \uc815\ubcf4\ub97c \uc804\ub2ec\ud558\ub824\uace0 \ud55c\ub2e4.\\n\\n\\n## React-Router\\n\\nreact\uc5d0\uc11c SPA(Single Page Application)\ub97c \uc27d\uac8c \ub3c4\uc785\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 lib\ub85c\uc368, \ud398\uc774\uc9c0 \uc774\ub3d9  \\n\uad00\ub828\ud558\uc5ec \ud3b8\ud558\uac8c \uc9c0\uc6d0\ud574\uc8fc\ub294 lib\uc774\ub2e4.\\n\\n\uc77c\ub2e8 ... \uc124\uce58\ubd80\ud130 \ud574\ubcf4\uc790\\n\\n\\n- \uc124\uce58 \\n\\n```bash\\n$ npm i react-router-dom\\n```\\n\\n\uc124\uce58\ub97c \ud588\uc73c\uba74 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0 \uc608\uc81c\ub97c \ubcf4\uc790...\\n\\n```js\\nimport { BrowserRouter, Route, Routes, Link } from \\"react-router-dom\\";\\n\\nconst Hello = () => (\\n  <Link to=\'/\'>to home</Link>\\n);\\nconst Main = () => (\\n  <Link to=\'/hello\'>to hello</Link>\\n);\\nconst App = () => { \\n  return (\\n  <BrowserRouter>\\n    <Routes>\\n      <Route path=\\"/\\" element={<Main />} />\\n      <Route path=\\"/hello\\" element={<Hello />} /> \\n    </Routes>\\n  </BrowserRouter>\\n  );\\n}\\n```\\n\\n\\n- import : react-route-dom\uc5d0\uc11c  \ud604\uc7ac \ud544\uc694\ud55c  BrowserRouter, Route, Routes, Link \ub140\uc11d\ub4e4\uc744 \uac00\uc838\uc624\uc790 \\n- BrowserRouter : \ud574\ub2f9 lib\uc744 \uc0ac\uc6a9\ud560 app\uc5d0\uc11c \ud55c \ud55c\ubc88\ub9cc \uc0ac\uc6a9\ud55c\ub2e4. \ud398\uc774\uc9c0 \uc774\ub3d9\uc744 \uc704\ud55c router\ub97c \uc0ac\uc6a9 \uc704\uce58\ub97c \uc9c0\uc815\ud574\uc900\ub2e4.\\n-  Routes : \ud398\uc774\uc9c0 \uc774\ub3d9\uc744 \uc120\uc5b8\ud558\ub294 Route\ub97c  \ub3d9\uc791\ud558\ub3c4\ub85d \ud55c\ub2e4.\\n-  Route :  props\uc73c\ub85c  path(url) \uc0ac\uc6a9 \uacbd\ub85c, element(\ubcf4\uc5ec\uc904 \ucef4\ud3ec\ub10c\ud2b8)\ub97c \uc815\uc758\ud55c\ub2e4.(url\uc77c\uce58\ud558\uba74 \uac00\uc7a5 \uba3c\uc800 \uc77c\uce58\ud55c route\ub97c \ubcf4\uc5ec\uc900\ub2e4.)\\n-  Link/ : props to\uc5d0 \uc801\ud78c url\ub85c  request\uac00 \uc544\ub2cc url \ubcc0\uacbd \ud6c4 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubcf4\uc5ec\uc900\ub2e4.\\n\\n\uc194\uc9c1\ud788 React\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c, lib \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc775\ud788\ub294\uac8c \ub354\uc6b1 \uc5b4\ub824\uc6b4 \uac83 \uac19\ub2e4.... \uc5ec\ud2bc \ub2e4\uc2dc \uc8fc\uc81c\ub85c \ub118\uc5b4\uc624\uba74\\n\\n\uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c React \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc5f0\uc2b5\ud558\uace0 \ud14c\uc2a4\ud2b8\ud55c \ub0b4\uc6a9\uc744 \ud55c\ubc88\uc5d0 \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud574\uc11c \\n\\n\\n\\n```js\\nimport logo from \'./logo.svg\';\\nimport \'./App.css\';\\nimport styled from \'styled-components\'\\nimport { BrowserRouter, Routes, Route, Link } from \'react-router-dom\'\\nimport HookSample from \'./Components/HookSample.tsx\';\\nimport ContextSample from \'./Components/ContextSample.tsx\';\\n\\n\\n\\n\\n// styled components\\n\\n// styled Link in react-router-dom\\nconst StyledLink = styled(Link)`\\n  text-decoration: none;\\n`;\\n\\nconst Main = () => {\\n\\n  return (\\n    <Container>\\n      <Ul>\\n        <StyledLink to=\\"/HookSample\\">\\n          <Li>../HookSample.tsx</Li>\\n        </StyledLink>\\n        <StyledLink to=\\"/ContextSample\\">\\n          <Li>../ContextSample.tsx</Li>\\n        </StyledLink>\\n      </Ul>\\n    </Container>\\n  )\\n}\\n\\n\\n// main page li styled\\nfunction App() {\\n  return (\\n    <>\\n      <BrowserRouter>\\n        <Routes>\\n          <Route path=\'/\' element={<Main />}></Route>\\n          <Route path=\'/HookSample\' element={<HookSample />}></Route>\\n          <Route path=\'/ContextSample\' element={<ContextSample />}></Route>\\n        </Routes>\\n      </BrowserRouter>\\n    </>\\n  );\\n}\\n\\nexport default App;\\n```\\n\\n\\n\uc774\ub807\uac8c \uad6c\ud604\ud558\uc600\ub2e4... \uae30\ubcf8\uc608\uc81c\ub97c \ubc14\ud0d5\uc73c\ub85c \ub9cc\ub4e4\uace0 \uadf8\ub798\ub3c4 \uc2dc\uac04\uc774 \uc870\uae08 \ub9ce\uc774 \uac78\ub838\ub2e4. \\n\\n\uadf8\ub798\ub3c4 \ud655\uc2e4\ud558\uac8c \uc608\uc81c\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ubc14\ub85c\ubc14\ub85c \uc774\ub3d9\ud558\ub2c8\uae50 \ud655\uc2e4\ud788 \ubcf4\uae30\ub3c4 \ub9cc\ub4dc\ub294 \uc7ac\ubbf8\ub3c4 \uc788\uc5c8\ub2e4.\\n\\n\uc911\uac04\uc5d0 \ubcf4\uba74 lib\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \\\\<Link /> \ucef4\ud3ec\ub10c\ud2b8\ub97c  \uc2a4\ud0c0\uc77c\ud558\uae30 \uc704\ud574\uc11c style-components lib\uc744 \uc0ac\uc6a9\ud558\uc5ec\\n\\nlink \ud6a8\uacfc\ub97c \uc0ad\uc81c\ud588\ub2e4.\\n\\n\\n```js\\n// styled Link in react-router-dom\\nconst StyledLink = styled(Link)`\\n  text-decoration: none;\\n`;\\n```\\n\\n\uc774\ub807\uac8c \uc870\uae08\uc529 \ub9cc\ub4e4\uba74\uc11c \uc2e4\ub825\uc744 \ud0a4\uc6cc\ubcf4\uaca0\ub2e4. \uc194\uc9c1\ud788 \ube68\ub9ac \ub298\uace0\uc2f6\ub2e4... \uc77c\ub2e8 \ub9cc\ub4e4\uba74\uc11c \uacc4\uc18d \uc62c\ub824\ubcf4\uaca0\ub2e4."},{"id":"Upstream, DownStream","metadata":{"permalink":"/devlog/blog/Upstream, DownStream","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-13-UpstreamDownStrea-v2.md","source":"@site/blog/2022-04-13-UpstreamDownStrea-v2.md","title":"Upstream, DownStream","description":"\ud300 \ud504\ub85c\uc81d\ud2b8\ub97c \ud558\uba74\uc11c, \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uac19\uc740 \ud658\uacbd\uc5d0\uc11c \uc18c\uc2a4\uc758 \ubc84\uc804 \uad00\ub9ac\ub97c \ud574\uc57c\ud55c\ub2e4\ub294 \uac83\uc740 \uac70\uc758 \ub300\ubd80\ubd84 \uc54c \uac83\uc785\ub2c8\ub2e4.","date":"2022-04-13T00:00:00.000Z","formattedDate":"2022\ub144 4\uc6d4 13\uc77c","tags":[{"label":"github","permalink":"/devlog/blog/tags/github"},{"label":"git","permalink":"/devlog/blog/tags/git"}],"readingTime":3.555,"hasTruncateMarker":false,"authors":[{"name":"Sejune Oh","title":"Front End Engineer","url":"https://github.com/SejuneOh","imageURL":"https://avatars.githubusercontent.com/u/103201530?s=400&u=69cedf54cc5c427c96728a55d00e995b4dc9b145&v=4","key":"june"}],"frontMatter":{"slug":"Upstream, DownStream","title":"Upstream, DownStream","authors":"june","tags":["github","git"]},"prevItem":{"title":"React-Router-Dom \ud65c\uc6a9 \ubc0f Link \ud0dc\uadf8 \uc2a4\ud0c0\uc77c\ud558\uae30","permalink":"/devlog/blog/React-Router-Dom"}},"content":"\x3c!-- \uc804\ub2ec\ud558\uace0\uc790 \ud558\ub294 \ub0b4\uc6a9 --\x3e\\n\x3c!-- \ub0b4\uc6a9\uc5d0 \ub300\ud55c \uc2e0\ube59\uc131 --\x3e\\n\x3c!--  \uc7a0\uace0 \uc790\ub8cc \uc0ac\uc774\ud2b8 --\x3e\\n\\n\\n\x3c!-- \uc65c \uc774 \uae00\uc744 \uc4f0\uac8c \ub41c \ubaa9\uc801 --\x3e\\n\ud300 \ud504\ub85c\uc81d\ud2b8\ub97c \ud558\uba74\uc11c, \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uac19\uc740 \ud658\uacbd\uc5d0\uc11c \uc18c\uc2a4\uc758 \ubc84\uc804 \uad00\ub9ac\ub97c \ud574\uc57c\ud55c\ub2e4\ub294 \uac83\uc740 \uac70\uc758 \ub300\ubd80\ubd84 \uc54c \uac83\uc785\ub2c8\ub2e4.  \\n\ubaa8\ub4e0 \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\uba74\uc11c Git, Github\ub85c \ubc84\uc804 \uad00\ub9ac \ubc0f \uc18c\uc2a4 \uad00\ub9ac\ub97c \ud558\uc2dc\uba74\uc11c, Repo\uc758 admin\uc5d0\uac8c PR\uc744 \ubcf4\ub0b4\ub294 \uacbd\ud5d8\ub3c4 \ub9ce\uc774 \ud574\ubcf4\uc168\uc744 \uac83\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c upstream, downstream\uc758 \uc774\uc57c\uae30\ub97c \ub4e4\uc5b4 \ubcf4\uc168\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.  \\nrepository \uae30\uc900\uc73c\ub85c \uc0c1\ub300\uc801\uc778 \uac1c\ub150\uc778 \ub450 \ub2e8\uc5b4\uc5d0 \ub300\ud574\uc11c \uc815\uc758\ud55c \ub0b4\uc6a9\uc744 \ud3ec\uc2a4\ud305 \ud558\ub824\uace0 \ud569\ub2c8\ub2e4.\\n\\n---\\n\\n\\n## Git vs Github?\\n\\n\ud574\ub2f9 \ub2e8\uc5b4\uc758 \uac1c\ub150\uc744 \uc54c\uae30 \uc704\ud574\uc11c\ub294 \uc544\ub798\uc758 Git\uacfc Github\uc758 \uac1c\ub150\uc744 \uc774\ud574\ud574\uc57c \ud569\ub2c8\ub2e4.\\n\\n### [Git](https://git-scm.com/)\\n\\n- VSC(Version Control System) : \ubc84\uc804 \uad00\ub9ac\ub97c \ub3c4\uc640\uc8fc\uc2a4\ub294 \uc2dc\uc2a4\ud15c\\n- \uc18c\uc2a4\uc758 \ubc84\uc804 \uad00\ub9ac \ubc0f \uc0ac\uc6a9\uc790\ub4e4\uc758 \ucee4\ubc0b\uacfc \uc218\uc815 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\uc8fc\uace0 \uae30\ub85d\ud55c\ub2e4.\\n- \uad00\ub9ac\ud558\ub294 \ud504\ub85c\uc81d\ud2b8 \ud3f4\ub354\uc5d0\uc11c \uc124\uc815 \ubc0f \uc18c\uc2a4 \uad00\ub9ac\ub97c \ud574\uc900\ub2e4.\\n- \ubcd1\ub82c \uac1c\ubc1c\uc774 \uac00\ub2a5\ud558\ub2e4.(\ub3d9\uc2dc\uc5d0 \ud30c\uc77c \uc218\uc815\uc774 \uac00\ub2a5\ud558\ub2e4)\\n\\n\\n### [Github](https://github.com/)\\n\\n- \uc6d0\uaca9\uc73c\ub85c(\ub124\ud2b8\uc6cc\ud06c)\uc0c1\uc5d0\uc11c \uc18c\uc2a4 Git\uc758 \uae30\ub2a5\uc744 \ud574\uc8fc\ub294 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4.\\n- \uc6d0\uaca9\uc73c\ub85c \uc18c\uc2a4 \uc218\uc815 \ubc0f \ub0b4\uc6a9\uc744 \ucde8\ud569\ud558\uace0, \ub0b4\uc6a9\uc744 \uae30\ub85d\ud574\uc8fc\uace0 \uc18c\uc2a4\ub97c \uc800\uc7a5\ud574\ub294 \uc6f9 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4.\\n- \uc18c\uc2a4 \uad00\ub9ac \ubc0f \uc811\uadfc \uac00\ub2a5\ud55c \ud300\uc6d0 \ubcf4\uc548\ub4f1 \ub9ce\uc740 \uae30\ub2a5\uc744 \uc81c\uacf5\ud574\uc90d\ub2c8\ub2e4.\\n\\n\uc0c1\ub300\uc801\uc73c\ub85c 2\uac1c\ub294 \ube44\uc2b7\ud574\ubcf4\uc774\uc9c0\ub9cc \uac1c\ub150\uc740 \ub2e4\ub985\ub2c8\ub2e4. \uc815\ud655\ud788 \ub9d0\ud574\uc11c\ub294 \ub85c\uceec\uc758 git\uc73c\ub85c \uc791\uc5c5 \ud6c4, \uc791\uc5c5 \ub0b4\uc6a9\uc744 github\uc758 repo\ub85c \ubcf4\ub0b4\ub294 \uac83\uc785\ub2c8\ub2e4.\\n\\n--- \\n\\n## UpStream, DownStream\\n\\n### Upstream\\n\\n- \uc18c\uc2a4\uac00 \ucd5c\uc885\uc801\uc73c\ub85c \uad00\ub9ac\ub418\ub294 Repository\ub97c \ub9d0\ud569\ub2c8\ub2e4.\\n- \ud300\uc6d0, \ub2e4\ub978 \uac1c\ubc1c\uc790\uac00 \uc18c\uc2a4\ub97c \uc218\uc815\ud558\uace0 PR\uc744 \ubcf4\ub0b4\uace0 \ub2e4\ub978 \uc0ac\ub78c\uc774 \uc218\uc815\ud55c \ub0b4\uc6a9\uc744 \ub0b4\ub824 \ubc1b\ub294 \ucd5c\uc0c1\uc704 Repo\uc785\ub2c8\ub2e4.\\n\\n### Downstream\\n\\n- \ud604\uc7ac \ucd5c\uc0c1\uc704 Repo\uc5d0\uc11c \ud558\uc704 Repo \uc989, \uc790\uc2e0\uc774 \uc18c\uc2a4\ub97c \uac1c\ubc1c\ud558\ub294 \ud658\uacbd\uc744 \ub9d0\ud569\ub2c8\ub2e4. \\n- PR\uc744 \ubcf4\ub0b4\uace0, \uac1c\ubc1c \ubc0f \uc18c\uc2a4\ub97c \uad00\ub9ac\ud558\ub294 \ud658\uacbd\uc744 \ub9d0\ud569\ub2c8\ub2e4.\\n\\n\\n### \uc65c \uc0c1\ub300\uc801\uc778 \uac1c\ub150\uc778\uac00\\n\\n1. _\ub0b4\uac00 \ud63c\uc790 \uc2a4\uc2a4\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c github\ub85c \uad00\ub9ac\ud588\uc744 \ub54c_  \\n   upstream: Gihub Repo  \\n   downstream: Local Git \ud658\uacbd\\n\\n\\n2. _\ud611\uc5c5\uc5d0\uc11c \ub2e4\ub978 \uc0ac\ub78c\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c Fork(\uc0c1\ub300\ubc29\uc758 \uc18c\uc2a4\ub97c \uc790\uc2e0\uc758 repo\ub85c)\uc5d0\uc11c \uc791\uc5c5\ud560\ub54c_  \\n   upstream: Fork original repo  \\n   downstream: \uc790\uc2e0\uc758 Oraganization repo\\n\\n\uae30\uc900\uc774 \ub204\uad70\uac00\uc5d0 \ub530\ub978 \uc0c1\ub300\uc801\uc778 \uac1c\ub150\uc774\uae30 \ub54c\ubb38\uc5d0 \uc815\ub9ac\ud558\uba74\uc11c, \uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \ud3ec\uc2a4\ud305\ud558\uba74\uc11c \uacf5\uc720\ud569\ub2c8\ub2e4.  \\n\uac10\uc0ac\ud569\ub2c8\ub2e4.\\n\\n---"}]}')}}]);