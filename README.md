# SMU-TAXI

# 🚖 SMUTAXI 프로젝트

실제 쇼핑 관련 사이트의 기능들을 구현하고자 노력한 프로젝트입니다.

---

## 🚖 SMUTAXIr 앱 실행 방법

### 실행 방법

`yarn dev`를 통해 프로젝트를 시작할 수 있습니다.

### 🚖 SMUTAXI 사용해보기

아래의 링크에서 실제 작동되는 App을 확인할 수 있습니다.

<!-- 추후 배포 링크 추가 예정입니다. -->

[🚖 SMUTAXI 사용해보기](netlify 링크)

---

# 프로젝트 파일 구조

```js

📦src
 ┣ 📂api
 ┃ ┗ 📜user.js
 ┣ 📂assets
 ┃ ┗ 📂fonts
 ┃ ┃ ┣ 📜IBMPlexSansKR-Bold.ttf
 ┃ ┃ ┣ 📜IBMPlexSansKR-ExtraLight.ttf
 ┃ ┃ ┣ 📜IBMPlexSansKR-Light.ttf
 ┃ ┃ ┣ 📜IBMPlexSansKR-Medium.ttf
 ┃ ┃ ┣ 📜IBMPlexSansKR-Regular.ttf
 ┃ ┃ ┣ 📜IBMPlexSansKR-SemiBold.ttf
 ┃ ┃ ┗ 📜IBMPlexSansKR-Thin.ttf
 ┣ 📂components
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📂Faq
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┗ 📜Footer.style.js
 ┃ ┃ ┗ 📂Main
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┗ 📜Footer.style.js
 ┃ ┣ 📂navbar
 ┃ ┃ ┣ 📂Faqs
 ┃ ┃ ┃ ┣ 📜Navbar.jsx
 ┃ ┃ ┃ ┗ 📜Navbar.style.js
 ┃ ┃ ┗ 📂Main
 ┃ ┃ ┃ ┣ 📜Navbar.jsx
 ┃ ┃ ┃ ┗ 📜Navbar.style.js
 ┃ ┗ 📜index.js
 ┣ 📂constants
 ┃ ┣ 📜font.js
 ┃ ┣ 📜path.js
 ┃ ┗ 📜size.js
 ┣ 📂hooks
 ┃ ┗ 📜useInput.js
 ┣ 📂pages
 ┃ ┣ 📂error
 ┃ ┃ ┣ 📜ErrorPage.jsx
 ┃ ┃ ┗ 📜ErrorPage.style.js
 ┃ ┣ 📂faq
 ┃ ┃ ┗ 📜Faq.jsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┗ 📜Home.styled.jsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜FaqLayout.jsx
 ┃ ┃ ┣ 📜MainLayout.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📜.DS_Store
 ┃ ┗ 📜index.js
 ┣ 📂redux
 ┃ ┣ 📂actions
 ┃ ┃ ┗ 📜modalAction.js
 ┃ ┣ 📂slices
 ┃ ┃ ┗ 📜modalSlice.js
 ┃ ┗ 📂store
 ┃ ┃ ┗ 📜store.js
 ┣ 📂utils
 ┃ ┗ 📜date.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜main.jsx
 ┗ 📜theme.jsx
```

---

### Commit Message Convention

`feat`: 기능 추가, 삭제, 변경

`fix`: 버그 수정

`docs`: 문서 추가, 삭제, 변경 - 코드 수정없음

`style`: 코드 형식, 정렬, 주석 등의 변경
(세미콜론 추가 같은 코드 수정이 있으나, 기능에 변동 X)

`refactor`: 코드 리펙토링 (변수명, JS -> TS)

`test`: 테스트 코드 추가, 삭제, 변경 등

`chore`: 위에 해당하지 않는 모든 변경, eg. 빌드 스크립트 수정, 패키지 배포 설정 변경

---

### 🚖 SMUTAXIl 앱 핵심 기능

예시

- [ ] `Products` 클릭 시, 전체 상품 보기 기능
- [ ] `결제하기` 클릭 or 링크로 이동시 로그인 하지 않은 사용자는 Home으로, 로그인 한 사용자는 장바구니 기능 이용 가능! `protectedRoute` 구현, 실제로 로그인하지 않았으면 UI상으로 볼 수 없게 구현
- [ ] `Auth0`를 활용하여 다양한 소셜 로그인 기능 구현
- [ ] `장바구니 기능` 장바구니 클릭시, 실제 장바구니에 담은 제품을 확인 가능, 색상이 다른 제품일 경우에도 구분하여 표기 됨.
- [ ] `제품 별 사이즈` 옵션 기능 추가!
- [ ] `상품 총액, 배송비, 총가격`등 제품별 가격에 맞춰서 유동적으로 계산해주는 기능. 장바구니에서 수량 올릴시 실시간으로 변경이 가능하고, 장바구니에 있는 상품 삭제도 가능
- [ ] 이전에 추가해놓은 장바구니 상품을 `localstorage`를 통해 나중에도 확인 가능.
- [ ] `reducer`, `context`를 활용하여, 비즈니스 로직 구분 및, 기능 구현, 상태 관리
- [ ] 다중 필터 구현, 카테고리 별 분류, 회사명 별 분류, 색상 별 분류, 가격 별 분류, 배송비 여부에 따른 필터링, 금액에 따른 필터링, 필터 전체 초기화 기능등, 여러가지 로직에 따른 분류
- [ ] 이름 오름/내림 차순 정렬, 가격 순 정렬 구현.
- [ ] 제품 `Grid`뷰, `List`뷰 선택해서 이용자가 원하는 상태로 보는 것이 가능
- [ ] 추후 `netlify` 배포 예정
- [ ] 결제 기능 추가예정

---

### 🚖 SMUTAXI 기능 실행 영상!

---

### Trouble Shooting 🛠️

`🚖 SMUTAXI` 프로젝트를 진행하면서 발생한 `버그 수정`, `문제 해결`, 기능 구현시 `어려웠던 점 정리`, `성능 개선`, `작업 효율 향상` 들에 관해 정리한 기록입니다.

[프로젝트를 진행시 배운점들 정리](주소)

---

### 버그 발생시 ☎️

버그 발생시 여기에 연락주시면, 1시간이내에 해결해드리는 최고의 개발자가 있습니다.
<1904vv@gmail.com>
