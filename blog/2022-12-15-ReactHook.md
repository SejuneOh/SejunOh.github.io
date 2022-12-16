---
slug: ReactHook
title: React의 Hook이란?
authors: june
tags: [React, React-Hook, FrontEnd]
---


---

React Hook에 대해서 정확한 개념을 확실히 잡을 수 있는 취지에 블로그 글입니다.

# ReactHook 이란? 

ReactHook은 과거 React에서의 class로 LifeCylce을 관리할 때의 단점을 보안하기 위한 React의 개발 함수입니다.  
즉, React의 상태(state) 생명주기를 연동 할 수 있게 해주는 함수입니다. 


## Hook의 종류
- useState
- useEffect
- useContext
- useReducer
- useCallBack

## Hook의 규칙 
- 최상위 레벨에서만 hook을 요청할 수 있습니다.(반복문이나, 조건문 중첩된 함수에서 호출 할 수 없습니다.)
- React 함수 컴포넌트에서만 hook을 호출 해야합니다. 단, customHook 안에서는 호출 할 수 있습니다.


### useState
useState는 상태 값을 저장하는 변수로 사용하는 hook입니다. 
state값을 직접 할 당 할 수 없고, useState에 같이 선언된 함수를 통해서  
수정할 수 있습니다.

- props와 같이 변동사항이 생길 때, 다시 리렌더링 됩니다.

```js
const [count, setCount] = useState(0);
```


### Effect Hook 
Effect의 훅의 정의는 데이터를 가져오거나 상태값에 따른 부수효과(side-effect)를 정의할 수 있도록 하는 hook 입니다.  
React class의 componentDidMount, componentDidUpdate,componentWillUnmount의 같은 목적으로 만든 hook입니다.  

**특성**
- EffectHook은 DOM에서 렌더링 이후에 호출 됩니다.
- EffectHook은 return을 통해서 해제 할 수 있습니다.
- 여러개의 effect hook을 가질 수 있습니다.(상태값에 따른 side Effect를 정의 할 수 있습니다.)


### useContext
useContext는 컴포넌트를 중첩하지 않아도 React Context를 구독하게 해줍니다.  
중첩 컴포넌트가 있다고 생각해보겠습니다. 부모의 자식한테 props로 전달해야하는 단계가 많을 수록 컴포넌트 사이에 의존성 및 깊이가 길어집니다.  
하지만 useContext를 생성하여 사용하면 필요한 컴포넌트에만 데이터를 전달 할 수 있도록 도와줍니다.  

**주의**  
컨텍스트 사이에 상태값이 변화가 되면 해당 상태를 사용하고있는 모든 컴포넌트는 다시 렌더링 됩니다.  
useMemo Hook을 사용해서 다시 렌더링 되는 경우를 방지해야합니다.  

## useReducer 
복잡한 컴포넌트의 state를 reducer가 관리할 수 있도록 합니다.  
useState의 대체함수로  **(state, action) => newState**와 초기값을 변수로 받고 동작에 대한 상태값을 전달해 줍니다.

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

### useCallBack
메모이제이션 (동일한 연산의 값을 저장하고, 반복작업을 방지하여 프로그램을 빠르게 실행) callBack함수를 반환합니다.  
중복으로 굳이 연산이 반복적으로 작업할 필요가 있을까요?  
useCallBack은 state에 따른, callBack 함수를 리턴합니다.
상태에 따른 의존성을 가지고 변화가 생길 때, 콜백함수를 리턴합니다. 

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```


### useMemo
useCallBack과 비슷한 개념이지만 의존성을 가진 state의 값이 변동이 있을 때,  
메모이제이션 된 값을 반환합니다.  
값이 변화가 없을 경우에는, 저장된 값을 리턴하지만, 상태가 값이 변경되어 왔을 때  연산된 값을 다시 전달합니다.  
단순히 state로 관리되는 컴포넌트는 의존성을 가지기 때문에 상태 값에 따른 변화가 없을 때 렌더링을 제외하기 위해서 사용합니다.

**주의**  
React 공식 사이트에서 최적화를 위해서 사용할 수 있지만, 의미상으로 보장이 되고있다고는 말하고 있지 않습니다.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useRef
프로퍼티로 전달된 인자의 초기화된 객체를 반환합니다.  
tag를 받아 초기화 된 객체를 사용할 수 있습니다. 

```js 
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

---
지금 까지 대표적인 React Hook을 알아봤습니다.  
아직 추가적으로 많은 hook이 있지만 실제 많이 사용하는 hook을 정리했는데요    
많은 도움이 되었으면 좋겠습니다.