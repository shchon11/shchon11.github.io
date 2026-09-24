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

Object.assign(korean, {
  heroReelLabel: 'F1TENTH 시뮬레이터',
  heroReelCaption: '가상 차량 위에서 작동하는 센서와 제어 코드.',
  heroReelScope: '시뮬레이션 · 스크립트 기반 기준 주행기',
  alsoFormula: 'Formula Student 주행 영상도 보기',
  policyCaption: '학습한 정책이 직접 달리는 장면.',
  policyScope: '25초 주행 기록입니다. 5.125초의 충돌과 리셋을 포함하며, 성능 비교를 위한 벤치마크 영상은 아닙니다.',
  galleryConsole: '주행 콘솔의 전체 화면', galleryEditor: '직접 구성하는 주행 환경', galleryTracks: '학습할 트랙을 더 다양하게',
  formulaStatus: '개발 과정 영상', formulaTitle: '콘을 인식하고,<br>주행 경로를 만들다.',
  formulaScope: '시뮬레이션 스택의 RViz 기록입니다. 실제 대회 주행이 아닌 개발 과정의 영상입니다.',
  trackCaption: '트랙 주행: 인지 → 계획 → 제어', trackScope: '개발 주행 기록에서 발췌한 30초 영상.',
  skidpadSummary: '스키드패드 개발 주행 영상 보기 <span aria-hidden="true">＋</span>',
  skidpadCaption: '스키드패드 시뮬레이션 · 65초 원본 기록 전체.',
  calibrationCaption: '원본 → 왜곡 보정 → 유효 영역 크롭',
  confusionCaption: '7가지 신호 상태를 구분하는 분류기', trafficTitle: '신호를 읽는 모델.',
  confusionScope: '기록된 학습 실행의 정규화 혼동 행렬입니다. 클래스별 평가 결과이며 실제 도로에서의 신뢰도를 나타내는 수치는 아닙니다.',
  closeImage: '닫기 ×', heroScholar: 'LG전자 산학장학생',
  scholarDate: '2025.09 — 현재', scholarTitle: 'LG전자 산학장학생', scholarDesc: '산학장학 프로그램 선발'
});

Object.assign(korean, {
  evDetail: '차차핑 팀 · 1/10 부문 대상. 대회를 위한 차선 인지와 제어를 개발했습니다.',
  iccasDetail: '대회 스택의 적응형 차선·웨이포인트 추종과 IMU·주행계 인터페이스를 개발했습니다.',
  eduDesc: '자동차 소프트웨어 복수전공 · 학사과정 재학 중',
  aboutBody: '한양대학교 미래자동차공학과·자동차 소프트웨어를 공부하며, 황순민 교수님의 IRCV Lab에서 학부 인턴으로 연구하고 있습니다. RAW 영상 검출 연구, 실차 센서·데이터 인프라, 자율주행 레이싱을 다루고, 자동차 소프트웨어 동아리 MiRu의 제2대 회장을 맡았습니다.',
  dmImage: '16대 카메라 취득 리그의 실제 화면', dmStatus: '실제 하드웨어 통합', dmTitle: '센서를 연결하고,<br>데이터를 지키다.',
  dmBody: '실차 데이터 취득을 위한 센서 플랫폼을 구축합니다. 가시광·열화상 카메라, LiDAR, GNSS를 연결하고, 개별 장치 도구를 기동·녹화·미리보기·검증의 하나의 흐름으로 통합했습니다.',
  dmStatCameras: '가시광 + 열화상 카메라', dmStatRate: '통합 테스트에서의 카메라 취득 주기',
  dmGpu: 'CUDA/NPP 디모자이킹과 nvJPEG 인코딩으로 CPU 병목 해소.',
  dmQuality: '녹화 후 프레임 ID·타임스탬프·영상 멈춤·GNSS 품질 진단.',
  dmTiming: '카메라 노출 시각 보정, GPIO 트리거와 호스트 PPS/PTP 검증.',
  dmScope: '2026년 9월 19일 통합 테스트에서 해당 구성의 카메라 드랍 없이 기록했습니다. 전체 센서의 위상 동기화는 진행 중입니다.',
  dmCode: '통합 취득 플랫폼과 진단 도구',
  racePerception: '카메라 기반 콘 인지', raceLidar: 'LiDAR와 콘 랜드마크', raceCar: 'RACE 팀의 Formula Student 차량',
  fsBody: 'RACE 팀에서 인지와 SLAM을 담당합니다. 2026 Formula Student Korea를 위해 카메라·LiDAR 콘 인지, g2o 그래프 SLAM, 센서 시뮬레이션, 로컬·글로벌 경로 계획, 레이싱라인과 제어를 개발·통합했습니다.',
  rawSub: 'RIFT · DriveRAW · ISP 단계별 연구',
  rawBody: '학습 기반 RAW 검출 전처리와 데이터셋·ISP·사전학습 조건을 통제한 실험을 주도합니다. RAW/RGB 페어 취득, 주석 도구, MMDetection 기반 비교 모델 통합, ablation과 도메인 간 평가까지 연구 파이프라인을 구축합니다.',
  rawLimit: '연구 논문과 실험 시스템을 개발 중이며, 관련 공개 도구로 RAW 보조 자동 라벨링 파이프라인을 제공합니다.',
  researchDetails: '연구 기여 자세히 보기',
  researchRift: '<strong>RIFT / DriveRAW:</strong> 검출에 맞춘 RAW 표현, 저조도 주행 데이터, 학습 기반 ISP 비교 평가.',
  researchIsp: '<strong>ISP 단계 연구:</strong> RAW부터 sRGB까지의 처리와 사전학습 영향을 분리한 실험, 좌표 정합, 노출·비트 깊이 분석.',
  researchTools: '<strong>연구 도구:</strong> 보조 주석, cross-ISP 의사 라벨 융합, RAW 교사–RGB 학생 불확실성 증류 프로토타입.',
  sensorLimit: '카메라 모델, 취득 시각 메타데이터와 보정 도구를 Data Machine·T-Car 시스템으로 연결합니다.',
  parserTitle: '센서 기록을 사용할 수 있는 데이터셋으로',
  parserBody: 'ROS→nuScenes 변환에 동기화 기반 카메라 프레임 선택, 드랍 처리, 왜곡 보정, LiDAR·레이더·INS 변환과 안정적인 배치 처리를 기여했습니다.',
  odTitle: '차량 시스템에 연결되는 인지 모듈',
  odBody: 'YOLO 객체 검출을 ROS 메시지·시각화와 통합하고, 2단계 신호등 인지와 함께 카메라·LiDAR 매칭, 시간 정합과 오검출 문제를 다뤘습니다.',
  routeTitle: '주행 데이터 취득을 함께 관리하는 도구',
  routeBody: '좌표 기반 루트, 내비게이션, 취득 실행, GPS 공유와 변경 이력을 연결한 연구실용 경로 관리 웹앱을 제작·배포했습니다. FastAPI와 지도 인터페이스를 사용합니다.',
  internalTool: '실차 취득 운영 도구 / 2026',
  miruDate: '2025.09 — 2025.12', miruTitle: 'MiRu 제2대 회장', miruClub: '한양대학교 자동차 소프트웨어 동아리 ↗', miruDesc: '동아리 리더십과 자율주행 시스템 개발을 함께 수행했습니다.',
  additionalTitle: '트랙 밖의 개발', tarsTitle: '음성을 로봇의 명령으로.',
  tarsBody: 'Whisper, 로컬 언어 모델, 구조화된 주행 명령과 음성 응답을 연결했습니다. 팀 로버 프로젝트에서 카메라 기반 YOLO 차선·객체 인지도 개발했습니다.',
  systemsTitle: '애플리케이션 아래의 시스템.',
  systemsBody: 'xv6/RISC-V 과제에서 red-black tree 실행 큐를 사용하는 CFS 스케줄러, 주소 공간을 공유하는 clone/join 스레드, lazy file-backed mmap/munmap을 구현했습니다.',
  seminarLabel: '연구실 세미나 · 2026.08.14', seminarBody: 'ISP와 저조도 Structure from Motion — Dark3R 논의를 포함한 IRCV Lab 세미나 발표.',
  futureNote: '현재 탐색 중인 방향: 검증된 언어 교정과 데이터 순환을 활용하는 양팔 VLA 학습.'
});

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

const imageViewer = document.querySelector('#image-viewer');
const viewerImage = imageViewer.querySelector('img');
const viewerCaption = imageViewer.querySelector('.viewer-caption');
document.querySelectorAll('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    viewerImage.src = button.dataset.lightbox;
    viewerImage.alt = button.querySelector('img').alt;
    viewerCaption.textContent = button.querySelector('.gallery-title').textContent;
    imageViewer.showModal();
  });
});
imageViewer.querySelector('.viewer-close').addEventListener('click', () => imageViewer.close());
imageViewer.addEventListener('click', event => {
  if (event.target !== imageViewer) return;
  const bounds = imageViewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageViewer.close();
});

const heroVideo = document.querySelector('#hero-video');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && !navigator.connection?.saveData) {
  heroVideo.play().catch(() => { /* Native controls remain available when autoplay is blocked. */ });
}
reducedMotion.addEventListener('change', event => { if (event.matches) heroVideo.pause(); });
if ('IntersectionObserver' in window) {
  const visibility = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (!entry.isIntersecting) entry.target.pause(); });
  }, { threshold: 0.1 });
  document.querySelectorAll('video').forEach(video => visibility.observe(video));
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) document.querySelectorAll('video').forEach(video => video.pause());
});
document.querySelector('.skidpad-details').addEventListener('toggle', event => {
  if (!event.target.open) event.target.querySelector('video').pause();
});
