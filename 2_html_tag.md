1. meta viewport

```html
<meta name="viewport" content="witdth=device-width, intial-scale=1.0" />
```

- 애플이 아이폰, 아이패드 등 자사의 모바일 브라우저의 뷰포트(viewport) 크기 조절을 위해 만듦
- iOS 장치(아이폰 운영체제 브라우저 safari)가 널리 사용됨에 따라 사실상 표준처럼 사용되고 있고, 다른 브라우저들도 이 태그를 채택
- viewport 란?
  - 우리말로 보임창, 즉 화면 상의 화상 표시 영역을 뜻함
  - 데스크탑의 뷰포트는 웹브라우저 창(visible area)의 뷰포트와 같음. 사용자가 브라우저 창의 크기를 조절하면서 뷰포트 크기를 조절
  - 모바일 뷰포트는 웹브라우저 창(visible area)보다 크거나 작을 수 있음. 대신 상하좌우로 움직이거나, 더블탭이나 확대/축소를 통해 뷰포트 배율을 변경 가능
- content="witdth=device-width" => 너비를 장치너비로 설정 (추천)

2. meta http-equiv

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
```

- 문서의 초기정보를 나타내는 속성
- 위 예시대로 사용하면 브라우저의 문서모드를 edge로 지정

3. meta name

```html
<meta name="author" content="chocho" />
```

- name="author"
  - 저자 이름
- name="keywords"
  - 문서에 대한 핵심을 쉼표로 분리하여 표시. 문서에 대한 정보를 검색엔진에 제공
- name="description"
  - 사이트에 대한 설명. 검색엔진을 검색 결과와 함께 이 설명을 가져감
- name="generator"
  - 그 문서를 생성하기 위해 사용된 소프트웨어
- name="application-name"
  - 문서를 표시하는 웹 어플리케이션 이름

4. section

```html
<section>
  <article>
    <h1>제목</h1>
    <p>본문</p>
  </article>
</section>
```

- HTML5에 새롭게 추가된 요소로 섹션을 표시
- 내용적 흐름과 구조를 만들기 위해 내용을 나누는 용도
- 같은 성격의 내용, 즉 관련있는 내용을 section 요소로 묶어 표시한다
- 뉴스와 광고 섹션처럼 서로 다른 성격을 지닌 것들을 section 요소로 표시하면 영역 구분이 아주 명확해진다
- 섹션은 독립적인 영역이라 섹션내에도 헤더(header), 푸터(footer)를 둘 수 있다. 섹션마다 나름의 제목 체계를 가질수 있다는 것을 의미하며, 섹션마다 h1 요소를 가질 수 있게 됨
