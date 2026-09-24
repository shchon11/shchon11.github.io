const organizations = {
  hanyang: {
    image: 'assets/logos/hanyang.svg', square: true, name: 'Hanyang University', period: 'MAR 2021 — PRESENT',
    en: { title: 'Automotive Engineering × Software', text: 'B.S. student in Automotive Engineering, with a double major in Automotive Software. My work connects sensing, learning, control and the systems beneath them.' },
    ko: { title: '미래자동차공학 × 자동차 소프트웨어', text: '한양대학교 미래자동차공학과 학사과정에 재학 중이며 자동차 소프트웨어를 복수전공합니다. 센서, 학습, 제어와 이를 뒷받침하는 시스템을 함께 다룹니다.' },
    url: 'https://www.hanyang.ac.kr/', related: '#background'
  },
  ircv: {
    image: 'assets/logos/ircv.png', name: 'IRCV Lab', period: 'FEB 2026 — PRESENT',
    en: { title: 'Undergraduate Research Intern', text: 'At the Intelligent Robotics and Computer Vision Laboratory, advised by Prof. Soonmin Hwang. Research and engineering span RAW perception, Data Machine sensor integration, and T-Car data infrastructure.' },
    ko: { title: '학부 연구 인턴', text: '황순민 교수님의 지능형 로보틱스 및 컴퓨터비전 연구실에서 연구합니다. RAW 인지, Data Machine 센서 통합, T-Car 데이터 인프라를 다룹니다.' },
    url: 'https://ircv.hanyang.ac.kr/', related: '#datamachine'
  },
  lg: {
    image: 'assets/logos/lg-electronics.png', name: 'LG Electronics', period: 'SEP 2025 — PRESENT',
    en: { title: 'Industry-Academia Scholar', text: 'Selected for the LG Electronics industry-academia scholarship program, beginning September 2025.' },
    ko: { title: 'LG전자 산학장학생', text: '2025년 9월부터 LG전자 산학장학생으로 선발되어 활동하고 있습니다.' },
    url: 'https://www.lge.co.kr/company', related: '#background'
  },
  miru: {
    image: 'assets/logos/miru.png', square: true, name: 'MiRu', period: 'SEP — DEC 2025',
    en: { title: '2nd President', text: 'Served as the second president of Hanyang’s automotive software club. Hands-on work includes the ChaChaPing EV competition lane-perception and control stack and autonomous-racing development.' },
    ko: { title: 'MiRu 제2대 회장', text: '한양대학교 자동차 소프트웨어 동아리 MiRu의 제2대 회장을 맡았습니다. 차차핑 팀의 EV 대회 차선 인지·제어 스택과 자율주행 레이싱 개발에 참여했습니다.' },
    url: 'https://github.com/MiRuAE', related: '#competitions'
  },
  race: {
    image: 'assets/logos/race.png', name: 'RACE', period: '2026',
    en: { title: 'Perception & SLAM', text: 'Developing camera–LiDAR cone perception, graph SLAM, simulation and integrated planning/control for Formula Student Korea 2026 with the RACE team.' },
    ko: { title: '인지 및 SLAM', text: 'RACE 팀에서 2026 Formula Student Korea를 위한 카메라·LiDAR 콘 인지, 그래프 SLAM, 시뮬레이션 및 계획·제어 통합을 개발합니다.' },
    url: 'https://www.racehanyang.com/', related: '#formula'
  }
};

const organizationDialog = document.querySelector('#organization-viewer');
let activeOrganization;
const isKorean = () => document.documentElement.lang === 'ko';

function renderOrganization() {
  if (!activeOrganization) return;
  const record = organizations[activeOrganization];
  const copy = record[isKorean() ? 'ko' : 'en'];
  const mark = organizationDialog.querySelector('.organization-mark');
  mark.src = record.image;
  mark.alt = record.name;
  mark.classList.toggle('square', Boolean(record.square));
  organizationDialog.querySelector('.organization-period').textContent = record.period;
  organizationDialog.querySelector('h2').textContent = copy.title;
  organizationDialog.querySelector('.organization-description').textContent = copy.text;
  const links = organizationDialog.querySelector('.organization-links');
  links.replaceChildren();
  const related = document.createElement('a');
  related.href = record.related;
  related.textContent = isKorean() ? '관련 이력 살펴보기 ↓' : 'Explore the related work ↓';
  related.addEventListener('click', () => { activeFilter = 'all'; filterWork(); organizationDialog.close(); });
  const external = document.createElement('a');
  external.href = record.url;
  external.target = '_blank';
  external.rel = 'noopener noreferrer';
  external.textContent = `${record.name} ↗`;
  links.append(related, external);
}

document.querySelectorAll('[data-organization]').forEach(button => {
  button.addEventListener('click', () => {
    activeOrganization = button.dataset.organization;
    renderOrganization();
    organizationDialog.showModal();
  });
});
organizationDialog.querySelector('.viewer-close').addEventListener('click', () => organizationDialog.close());
organizationDialog.addEventListener('click', event => {
  if (event.target !== organizationDialog) return;
  const rect = organizationDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) organizationDialog.close();
});

let activeFilter = 'all';
const filterLabels = {
  en: { all: 'All work', sensing: 'Sensors & data', autonomy: 'Autonomous systems', research: 'RAW research' },
  ko: { all: '전체 프로젝트', sensing: '센서·데이터', autonomy: '자율주행 시스템', research: 'RAW 연구' }
};
function filterWork() {
  document.querySelectorAll('[data-work-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.workFilter === activeFilter)));
  document.querySelectorAll('[data-work-tags]').forEach(block => { block.hidden = activeFilter !== 'all' && !block.dataset.workTags.split(' ').includes(activeFilter); });
  const pair = document.querySelector('.project-pair');
  const visible = [...pair.children].filter(child => !child.hidden).length;
  pair.hidden = visible === 0;
  pair.classList.toggle('single-project', visible === 1);
  document.querySelector('.filter-status').textContent = filterLabels[isKorean() ? 'ko' : 'en'][activeFilter];
}
document.querySelectorAll('[data-work-filter]').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.workFilter; filterWork(); }));
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.getElementById(link.getAttribute('href').slice(1));
  if (target?.closest('[data-work-tags]')?.hidden) {
    activeFilter = 'all';
    filterWork();
  }
});
document.addEventListener('cv:languagechange', () => { renderOrganization(); filterWork(); });
filterWork();

const fieldViewer = document.querySelector('#field-viewer');
const fieldPhoto = fieldViewer.querySelector('img');
const fieldVideo = fieldViewer.querySelector('video');
let fieldFilter = 'all';
let openFieldKey = null;
const filteredMedia = () => fieldMedia.filter(item => fieldFilter === 'all' || item.category === fieldFilter);

function updateFieldCopy() {
  const language = isKorean() ? 'ko' : 'en';
  document.querySelectorAll('[data-field-key]').forEach(card => {
    const item = fieldMedia.find(record => record.key === card.dataset.fieldKey);
    card.querySelector('.field-card-title').textContent = item.title[language];
    card.querySelector('img').alt = item.title[language];
  });
  const count = filteredMedia().length;
  document.querySelector('.field-count').textContent = isKorean() ? `${count}개의 기록` : `${count} moments`;
  if (openFieldKey) {
    const item = fieldMedia.find(record => record.key === openFieldKey);
    fieldViewer.querySelector('h2').textContent = item.title[language];
    fieldViewer.querySelector('.field-viewer-bottom p').textContent = item.caption[language];
    fieldViewer.querySelector('.field-viewer-date').textContent = `${item.date} / ${item.kind === 'video' ? 'FILM' : 'PHOTO'}`;
    fieldPhoto.alt = item.title[language];
    fieldVideo.setAttribute('aria-label', item.title[language]);
    const index = filteredMedia().findIndex(record => record.key === openFieldKey);
    fieldViewer.querySelector('.field-position').textContent = `${index + 1} / ${count}`;
  }
  fieldViewer.querySelector('.field-prev').setAttribute('aria-label', isKorean() ? '이전 기록' : 'Previous item');
  fieldViewer.querySelector('.field-next').setAttribute('aria-label', isKorean() ? '다음 기록' : 'Next item');
}

function showField(key) {
  const item = fieldMedia.find(record => record.key === key);
  if (!item) return;
  openFieldKey = key;
  fieldVideo.pause();
  fieldVideo.removeAttribute('src');
  fieldVideo.load();
  fieldPhoto.hidden = item.kind === 'video';
  fieldVideo.hidden = item.kind !== 'video';
  if (item.kind === 'video') {
    fieldVideo.poster = `assets/field/${item.poster}`;
    fieldVideo.src = `assets/field/${item.file}`;
  } else {
    fieldPhoto.src = `assets/field/${item.file}`;
  }
  updateFieldCopy();
  if (!fieldViewer.open) fieldViewer.showModal();
  if (item.kind === 'video') fieldVideo.play().catch(() => { /* Native play remains available. */ });
}

function stepField(direction) {
  const items = filteredMedia();
  const current = items.findIndex(item => item.key === openFieldKey);
  showField(items[(current + direction + items.length) % items.length].key);
}

document.querySelectorAll('[data-field-key]').forEach(card => card.addEventListener('click', () => showField(card.dataset.fieldKey)));
document.querySelectorAll('[data-field-filter]').forEach(button => button.addEventListener('click', () => {
  fieldFilter = button.dataset.fieldFilter;
  document.querySelectorAll('[data-field-filter]').forEach(control => control.setAttribute('aria-pressed', String(control.dataset.fieldFilter === fieldFilter)));
  document.querySelectorAll('[data-field-category]').forEach(card => { card.hidden = fieldFilter !== 'all' && card.dataset.fieldCategory !== fieldFilter; });
  updateFieldCopy();
}));
fieldViewer.querySelector('.viewer-close').addEventListener('click', () => fieldViewer.close());
fieldViewer.querySelector('.field-prev').addEventListener('click', () => stepField(-1));
fieldViewer.querySelector('.field-next').addEventListener('click', () => stepField(1));
fieldViewer.addEventListener('close', () => {
  fieldVideo.pause();
  fieldVideo.removeAttribute('src');
  fieldVideo.load();
});
fieldViewer.addEventListener('click', event => {
  if (event.target !== fieldViewer) return;
  const rect = fieldViewer.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) fieldViewer.close();
});
fieldViewer.addEventListener('keydown', event => {
  if (event.target === fieldVideo) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    stepField(event.key === 'ArrowRight' ? 1 : -1);
  }
});
document.addEventListener('cv:languagechange', updateFieldCopy);
updateFieldCopy();

const comparison = document.querySelector('.calibration-compare');
const comparisonRange = comparison.querySelector('input');
function updateComparison() {
  comparisonRange.setAttribute('aria-label', isKorean() ? '보정 전후 LiDAR 투영 결과 비교' : 'Compare LiDAR projection before and after calibration');
  comparison.style.setProperty('--split', `${comparisonRange.value}%`);
  comparisonRange.setAttribute('aria-valuetext', isKorean() ? `보정 전 ${comparisonRange.value}% 표시` : `${comparisonRange.value}% previous calibration visible`);
}
comparisonRange.addEventListener('input', updateComparison);
document.addEventListener('cv:languagechange', updateComparison);
updateComparison();
