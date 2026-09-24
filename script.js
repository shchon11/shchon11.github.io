const korean = {
  skip: '본문으로 이동', navAwards: '대회·수상', navWork: '프로젝트', navCV: '이력', navContact: '연락',
  competitionLabel: '트랙에서 준비하고, 대회에서 검증하다.', grandPrize: '대상<span>.</span>',
  evName: '제4회 국제 대학생 EV<br>자율주행 경진대회', evDetail: '대회 준비 및 참가, 대상 수상.',
  ninth: '9위<span>.</span>', iccasDetail: '자율주행 레이싱 대회 준비 및 참가.', eventInfo: '대회 안내',
  fskName: 'Formula Student Korea<br>자율주행 부문', fskDetail: '시뮬레이터와 자율주행 알고리즘 개발, 대회 준비.', viewStack: '자율주행 스택 보기',
  heroLabel: 'PERCEPTION, LEARNING & AUTONOMY', heroStatement: '센서의 신호에서<br>자율적인 움직임까지.',
  heroBio: '기계가 세상을 인식하는 방법을 연구하고, 인식을 행동으로 연결하는 시스템을 만듭니다.',
  heroRole: '학부 연구 인턴', hanyang: '한양대학교', download: 'CV 다운로드',
  heroBottom: 'RAW 영상 인지 / 로봇 학습 / 자율주행 시스템', explore: '프로젝트 살펴보기',
  aboutLabel: '연구를 잇는 질문', aboutLead: '좋은 자율주행의 시작은<br><em>신호를 이해하는 것.</em>',
  aboutBody: '한양대학교 미래자동차공학과 학사과정에 재학 중이며, 황순민 교수님의 지능형 로보틱스 및 컴퓨터비전 연구실(IRCV Lab)에서 학부 인턴으로 연구하고 있습니다. RAW 영상 인지, 센서 보정, 학습 기반 자율주행을 다룹니다.',
  aboutMethod: '데이터를 수집하고, 실패를 이해하고, 시스템을 만든 뒤, 실제로 무엇이 달라졌는지 검증하는 전 과정에 관심이 있습니다.',
  workLabel: '주요 프로젝트', workNote: 'RESEARCH ↔ ENGINEERING', simCaption: '실제 시뮬레이터 화면', simStatus: '시뮬레이션 연구',
  f1Body: 'GPU 병렬 시뮬레이터와 LiDAR 기반 주행 정책을 개발합니다. DAgger와 PPO로 짧은 경로 계획을 학습하고, iLQR 제어기가 이를 조향과 속도 명령으로 변환합니다.',
  f1Stat1: '보정에 활용한 실차 기록', f1Stat2: '곡률 제어점 + 목표 속도', f1Limit: '정책 성능은 시뮬레이션에서 검증했으며, 실차 전이는 아직 검증하지 않았습니다.',
  viewProject: '프로젝트 보기', ongoing: '진행 중인 연구', rawTitle: 'RGB가 되기 전에.', rawSub: 'RAW / ISP와 객체 검출',
  rawBody: '영상 처리 단계와 사전학습 표현이 객체 검출에 미치는 영향을 연구합니다. 통제된 실험과 함께, 동일 RAW 영상의 여러 렌더링 결과를 비교하는 자동 라벨링 도구를 개발합니다.',
  rawLimit: '진행 중인 연구이며, 연결된 코드는 자동 라벨링 프로토타입입니다.', viewCode: '코드 살펴보기', tooling: '센서 인프라', sensorTitle: '모델이 쓸 수 있는 데이터.', sensorSub: '다중 카메라 수집 및 보정',
  sensorBody: 'FLIR 카메라 스트리밍, 동기 수집, 내·외부 파라미터 보정, RAW/RGB 변환 도구를 개발합니다. 카메라 하드웨어와 ROS 기록을 인지 모델이 사용할 수 있는 데이터셋으로 연결합니다.',
  sensorLimit: '8대 카메라의 ROS 2 구성과 PTP, nuScenes 형식 변환 도구를 포함합니다.',
  fsBody: '2026 Formula Student Korea를 위한 시뮬레이터 및 알고리즘 개발입니다. ROS 2와 Gazebo를 기반으로 콘 인지, SLAM, 로컬·글로벌 경로 계획, 제어를 연결합니다.', fsType: '자율주행 시스템',
  tcarTitle: 'T-Car 신호등 인지', tcarBody: '신호등 검출과 7가지 상태 분류를 결합한 2단계 파이프라인입니다. 데이터 준비부터 모델 학습까지의 워크플로를 구성합니다.', tcarType: '주행 환경 인지',
  clipTitle: '사건 직전의 순간까지.', clipBody: '이벤트 전후의 ROS 2 데이터를 함께 저장하는 클립 레코더입니다. 놓치기 쉬운 주행 실패의 순간을 분석 가능한 데이터로 남깁니다.', clipType: '데이터 수집 도구',
  allRepos: 'GitHub에서 전체 저장소 보기', backgroundLabel: '학력 및 경험', internDate: '2026.02 — 현재', internTitle: '학부 연구 인턴',
  internDesc: '지능형 로보틱스 및 컴퓨터비전 연구실<br>지도교수: 황순민 교수', eduDate: '2021.03 — 현재', eduTitle: '미래자동차공학과 학사과정', eduDesc: '학사과정 재학 중',
  toolkitLabel: '주로 사용하는 도구', skillLearning: '학습 및 비전', skillRobotics: '로보틱스 및 시뮬레이션', skillSystems: '시스템 및 데이터', downloadFull: '영문 CV 다운로드',
  nowLabel: '앞으로의 질문', exploring: '현재 탐색 중인 연구 방향', nowTitle: '한 번의 교정이<br>로봇의 능력이 될 수 있을까?',
  nowBody: '양팔 조작을 위한 VLA(비전·언어·행동) 모델에 관심을 갖고 있습니다. 검증된 언어 교정을 학습 데이터로 축적하면, 로봇이 이후에는 같은 개입 없이 성공할 수 있을지 탐색합니다.',
  nowStatus: '시뮬레이션을 기반으로 구체화 중인 연구 방향입니다.', contactLabel: 'LET’S CONNECT', contactSub: '연구, 로보틱스, 그리고 움직이는 것들.', contactTitle: '다음의 가능성을<br>함께 만들어요.', updated: '2026년 9월 업데이트', backTop: '맨 위로'
};

const translatable = [...document.querySelectorAll('[data-i18n]')];
const english = Object.fromEntries(translatable.map(node => [node.dataset.i18n, node.innerHTML]));
const languageButton = document.querySelector('.language');

function setLanguage(language) {
  const isKorean = language === 'ko';
  const dictionary = isKorean ? korean : english;
  translatable.forEach(node => {
    const value = dictionary[node.dataset.i18n];
    if (value !== undefined) node.innerHTML = value;
  });
  document.documentElement.lang = isKorean ? 'ko' : 'en';
  languageButton.innerHTML = `${isKorean ? 'EN' : 'KR'} <span aria-hidden="true">↗</span>`;
  languageButton.setAttribute('aria-label', isKorean ? 'Switch to English' : '한국어로 보기');
  languageButton.setAttribute('aria-pressed', String(isKorean));
  try { localStorage.setItem('cv-language', language); } catch { /* Storage is optional. */ }
}

languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'ko' : 'en'));
try { if (localStorage.getItem('cv-language') === 'ko') setLanguage('ko'); } catch { /* Default to English. */ }
