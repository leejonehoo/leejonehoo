테마활용하지 않고 개인용 테마를 스스로 만들었습니다.
 자기 이력 홈페이지에는 나의 얼굴 사진과 학번, 이름, 희망직무와 영어 이름, 나이를 소개 박스에 넣었고
 나의 스킬칸에는 javascript(숙련도 2점), Python(숙련도 1점), C Language(숙련도 3점), c++(숙련도 1점)
 나의 프로젝트 칸에는 야옹이와 수프, AI 웹 챗봇(예정), 스위스 D-day, 포트폴리오 사이트, PR게임(예정)을 추가했습니다.
 기능 추가는 2가지로 1번쨰 기능으로는
1) 기능 제목
My Skills 숙련도 토글 버튼
2) 설명
My Skills옆의 숙련도 토글 버튼을 누르면 각 언어에 대한 숙련도가 별로 표시되며, 다시 누르면 별이 사라집니다.
3) 코드 위치
HTML: index.html
<button onclick="toggleSkills()">숙련도 토글</button>
JS: script.js
function toggleSkills() {
  const levels = document.querySelectorAll('.level');
  levels.forEach(level => {
    if (level.style.display === 'block') {
      level.style.display = 'none';
    } else {
      level.style.display = 'block';
    }
  });
}
CSS: style.css
.level {
  display: none;
  ...
}
4) 코드 설명
.level 클래스를 가진 별표 표시를 모두 선택하여 display 속성을 block ↔ none으로 번갈아 바꿔줍니다.
스타일에서는 .level 기본값을 display: none으로 숨겨 두었다가, JS로 보여주거나 감춥니다.
또 projects 옆에 있는 프로젝트 소개글 토글을 누르면 프로젝트에 대한 소개가 나오고 다시 클릭하면 사라집니다.

기능 2번쨰로는
1) 기능 제목
Projects 소개글 토글 버튼
2) 설명
Projects옆의 프로젝트 소개 토글 버튼을 누르면 각 프로젝트에 대한 소개글이 나타나고, 다시 누르면 사라집니다.
3) 코드 위치
HTML: index.html
<button onclick="toggleProjects()">프로젝트 소개 토글</button>
...
<p id="desc1" style="display: none;">...</p>
<p id="desc2" style="display: none;">...</p>
...
JS: script.js
function toggleProjects() {
  for (let i = 1; i <= 5; i++) {
    const desc = document.getElementById('desc' + i);
    if (desc.style.display === 'none') {
      desc.style.display = 'block';
    } else {
      desc.style.display = 'none';
    }
  }
}
CSS: (별도 스타일 지정 없이 inline 스타일 사용)
4) 코드 설명
id="desc1" ~ desc5인 <p> 태그들이 각 프로젝트 설명을 포함하고 있고 처음에는 display: none으로 숨겨져 있습니다.
toggleProjects() 함수는 이 설명 요소들의 display 속성을 반복문으로 순회하며 none ↔ block으로 전환합니다.



github 주소: https://github.com/leejonehoo/leejonehoo
