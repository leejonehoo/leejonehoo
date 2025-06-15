console.log("이정호 포트폴리오 페이지에 오신 것을 환영합니다!");

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