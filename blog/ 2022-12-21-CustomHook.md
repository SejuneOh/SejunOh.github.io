---
title:  CustomHook
description: How to use CustomHook
authors: june
tags: [React.js, CustomHook, Typescript]
---

--- 

Typescirpt와 React로 프로젝트를 진행하면서 반복적으로 useEffect, useState를 사용하는 코드를 봤습니다.  
같은 로직인데 useState, useEffect를 사용한다면 불필요한 렌더링이 발생하였고, 대안으로 어떤 방식이 있을까 고민했습니다.  
공통적으로 사용하는 로직을 공유하는 방식 중, HoC(고차 컴포넌트)와 CustomHook에 중 Custom Hook 내용을 공유하려고 합니다.  


# Custom Hook이란?

사용자화 Hook 즉, Custom Hook은 컴포넌트 사이에서 공통으로 사용하는 로직을 재사용할 때 사용하는 hook으로  
생태 관련 로직을 재사용하는 방법입니다.  

글의 내용보다는 직접 보고 이해하는 것이 더 빠를 것 같아 예시로 만든, 회원가입에서 Custom Hook을 사용하는 내용을 보겠습니다.

React 공식문서에 따르면, 
- React 사용자화 Hook은 기능보다는 규칙에 가깝다고 하고있습니다.
- 이름 앞에 use를 사용하고, 내부에 Hook을 사용한다면, 사용자화 훅이라고 정의한다고 합니다.

 
## Custom Hook 만들기

**목표**

- input 변화에 따른 state 데이터를 바인딩 Custom Hook으로 만들기
- useCallBack, useMemo 재활용성을 높은 컴포넌트 만들기



### input Tag에서 공통으로 사용하는 로직 구분하기

**공통로직**

- input의 onChage Event 발생 시 state의 이메일, 비밀번호 , 이름을 바인딩한다.
- 독립적인 state이기 때문에, 초기화로 사용되는 사용자 값과, onChage, state를 초기화하는 resest callback 함수를 리턴한다.


```js
import { User } from "./../models/UserModel";
import React, { useCallback, useState } from "react";

const useInput = (
  initValue: Partial<User>
): [
  Partial<User>,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [value, setValue] = useState(initValue);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setValue((prev) => ({ ...prev, [name]: value }));
  }, []);

  const reset = () => {
    setValue(initValue);
  };

  return [value, onChange, reset];
};

export default useInput;

```

1. useState를 사용하여, User 객체를 초기화 하고.
2. onChange 이벤트와 변화에 따른 input 값을 받습니다.
3. onChange useCallback을 사용하여, input name에 맞는 객체를 return 하게 합니다. 
4. User 등록 시, 상태값 초기화를 위한 reset 메소드도 같이 리턴합니다.



### 회원가입 페이지에서 Custom Hook 사용하기
- useInput Hook을 선언하여  user state, onChange, reset을 리턴 받습니다. 
- 회원가입 컴포넌트에서 사용하는 onCreate, onChange를 Props로 전달 하여 사용합니다.

```js
import React, { useCallback, useReducer } from "react";
import RegistUser from "../components/RegistUser";
import UserList from "../components/UserList";
import useInput from "../hooks/useInput";
import { User } from "../models/UserModel";

interface PayloadAction {
  type: string;
  paylaod: User;
}

function reducer(state: Array<User>, action: PayloadAction) {
  switch (action.type) {
    case "Create":
      return [...state, action.paylaod];
    default:
      return state;
  }
}

export default function RegisterPage() {
  const [{ email, password, name }, onChange, reset] = useInput({
    email: "",
    password: "",
    name: "",
  });

  const [state, dispatch] = useReducer(reducer, []);
  const idx = state.length;

  const onCreate = useCallback(() => {
    if (!email || !name || !password) return;
    dispatch({
      type: "Create",
      paylaod: { idx: idx + 1, email, name, password },
    });

    reset();
  }, [email, password, name]);

  return (
    <div>
      <RegistUser onChange={onChange} onCreate={onCreate} />
      <UserList userlist={state} />
    </div>
  );
}

```

### 회원가입 Component에 적용하기

Custom Hook을 이제 회원 가입 Component에 적용하겠습니다.  

- input은 상태값과 이름을 같에가 하여, Custom Hook에서 구별 할 수 있도록 설정합니다.
- props로 onChange 이벤트와, page에서 선언한 onCreate를 함수를 받아 적용합니다.

```js
import React, { ChangeEvent } from "react";

interface RegistUserProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate: () => void;
}

export default function RegistUser({ onChange, onCreate }: RegistUserProps) {
  return (
    <div>
      <label htmlFor="#">email</label>
      <input
        name="email"
        type="text"
        onChange={onChange}
      />
      <label htmlFor="#">비밀번호</label>
      <input
        name="password"
        type="text"
        onChange={onChange}
      />
      <label htmlFor="#">이름</label>
      <input
        name="name"
        type="text"
        onChange={onChange}
      />
      <button onClick={onCreate}>
        회원 가입
      </button>
    </div>
  );
}
```


---

이렇게 input에 onChange에 따른 상태 값에 따라, state가 변경되는 공통로직을 Custom Hook을 개발하여 변경해보았습니다.  
이제 정말... 실제 프로젝트에 적용해봐야 겠습니다!!!  




**참조**
- [React Document](https://ko.reactjs.org/docs/hooks-overview.html#building-your-own-hooks)