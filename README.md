# 투두리스트 with TypeScript
## 📖 프로젝트 소개 및 사용 방법

### 프로젝트 소개
해당 프로젝트는 To Do를 등록 및 삭제, 관리가 가능한 투두리스트를 Type Script로 구현한 프로젝트입니다.<br/>
첫 Type Script 프로젝트이며, CRUD 구현 연습 용 프로젝트입니다.
- 현재 Branch의 구현 레벨 : **Level.3( RTK + json-server )<br/>**
- Bundler : **Vite**

### 사용 방법
<img width="450" alt="스크린샷 2024-03-08 오전 9 37 25" src="https://github.com/ketchup0211/TypeScript-ToDoList/assets/69431340/24c20db4-b788-47ad-a14f-231349ae8d66">

#### 새로운 To-Do를 등록하려면 아래의 절차를 따르세요.
<ol>
  <li>상단 바에서 제목과 내용을 입력하세요.</li>
  <li>오른쪽의 추가 버튼을 클릭하세요. <b>Working...🔥</b> 라벨 하단으로 새로운 To-Do가 등록됩니다!</li>
</ol>

#### To-Do를 관리하는 법
<b>Working...🔥</b> 라벨 하단에 있는 To-Do
<ol> 
  <li>'삭제하기' 버튼을 누르면 해당 To-Do가 삭제됩니다.</li>
  <li>'완료' 버튼을 누르면 해당 To-Do가 <b>Done!</b> 라벨 하단으로 이동합니다.</li>
</ol>
<b>Done!</b> 라벨 하단에 있는 To-Do
<ol> 
  <li>'삭제하기' 버튼을 누르면 해당 To-Do가 삭제됩니다.</li>
  <li>'취소' 버튼을 누르면 해당 To-Do가 <b>Working...🔥</b> 라벨 하단으로 이동합니다.</li>
</ol>

---
## 1. 프로젝트가 제공하는 기능
**CRUD with JSON server**
- [x] Todo 항목 추가하기(Create)
- [x] Todo 항목 목록 표시하기(Read)
- [x] Todo 완료 상태 표시 기능(Update)
- [x] Todo 삭제하기(Delete)
      
## 2. 사용한 기술

### 2-1. Redux ToolKit
- redux 관리를 조금 더 간편하게 해주는 redux-toolkit을 사용하였습니다.

### 2-2. JSON server
- 간단한 프로젝트인만큼, 간단하게 사용할 수 있는 데이터 서버인 json-server를 이용하였습니다.

### 2-3. bundler : Vite
- CRA보다 가벼운 vite를 이용해 프로젝트의 무게를 줄였습니다. **가볍다 🎉!**

## 3. 반복 컴포넌트 분리
프로젝트를 진행하며 주로 반복되는 컴포넌트 또는 기능은 아래와 같았습니다.

### To-do list : 라벨에 따라 분리되는 두 개의 To-do list
라벨 및 내부 투두 내역의 isDone 여부를 제외하고는 거의 동일한 구조를 가졌습니다.<br/>
따라서 List.tsx 컴포넌트를 만든 후, props로 `라벨` `필터링 된 투두리스트` `제공하는 함수` 를 넘겨주었습니다.

### API request
json-server에서 CRUD를 구현하다보니, axios 부분과 baseURL이 반복되었습니다.<br/>
따라서 axios.create를 통해 todosAPI를 만들고, 이를 활용하여 `get` `post` `patch` `delete` 함수를 작성하였습니다. 

### Types
코드 전체적으로 타입을 정의할 때 반복적으로 사용되는 타입이 많았습니다. <br/>
따라서 types.ts 파일을 생성하고, 내부에서 타입들을 정의 및 export하여 프로젝트에 쓰이는 타입들을 한 번에 보고 사용할 수 있도록 하였습니다.

## 4. 커밋 룰

### Commit Rule
```
[INIT] 초기 생성 (초기 세팅, git 생성자)
[ADD] 파일 또는 폴더 생성 / 기능 추가
[MOD] 파일 수정
[DEL] 파일 또는 폴더 삭제
[FIX] 버그 수정
[SCRIPT] package.json 등 변경(npm 설치 등)
```

## 5. 폴더 구조
```
📦src
 ┣ 📂apis
 ┃ ┗ 📜APIs.ts
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂commons
 ┃ ┗ 📂units
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ ┣ 📜TodoMain.tsx
 ┃ ┃ ┃ ┃ ┃ 📜Form.tsx
 ┃ ┃ ┃ ┃ ┃ 📜Form.module.css
 ┃ ┃ ┃ ┃ ┃ 📜List.tsx
 ┃ ┃ ┃ ┃ ┗ 📜List.module.css
 ┃ ┃ ┗ 📂layout
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┃ 📜Header.tsx
 ┃ ┃ ┃ ┃ 📜Header.module.css
 ┃ ┃ ┃ ┃ 📜Layout.tsx
 ┃ ┃ ┃ ┗ 📜Layout.module.css
 ┣ 📂pages
 ┃ ┗ 📜Home.tsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.ts
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todoSlice.ts
 ┣ 📂shared
 ┃ ┗ 📜types.ts
 ┣ 📂util
 ┃ ┗ 📜hooks.ts
 ┣ 📜App.tsx
 ┣ 📜GlobalStyle.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
