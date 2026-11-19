// ─────────────────────────────────────────────────────────
// 사이트에 나오는 정보는 전부 여기서 고칩니다.
// 전화번호, 카카오톡 채널 주소, 가격, 운영시간, 사진 경로 등.
// ─────────────────────────────────────────────────────────

export const site = {
  name: "강남스타피트니스골프",
  nameEn: "STAR FITNESS GOLF",
  description:
    "역삼동 테헤란로 골프 · 피트니스 센터. 카카오VX 프렌즈 스크린 전타석, 스윙 분석기, 1:1 레슨, 헬스 · PT.",

  phone: "02-501-5754",
  phoneTel: "025015754",

  // 카카오톡 채널 1:1 채팅 주소. 채널 관리자센터에서 확인 후 붙여넣기
  // 예: "https://pf.kakao.com/_abcdE/chat"
  // 비어 있으면 카카오톡 버튼이 전화 걸기로 연결됩니다.
  kakaoChannelUrl: "",

  blogUrl: "https://blog.naver.com/ssadafitness",
  instagramUrl: "",

  address: "서울 강남구 테헤란로 121, 원빌딩 지하 2층",
  addressSub: "역삼동 648-26",
  mapQuery: "서울 강남구 테헤란로 121",

  hours: [
    { label: "평일", value: "06:00 – 23:00" },
    { label: "토요일", value: "10:00 – 18:00" },
    { label: "일요일 · 공휴일", value: "확인 후 입력" },
  ],
  parking: "건물 주차장 · 발렛 가능",

  business: {
    owner: "대표자명",
    regNo: "000-00-00000",
  },
};

// 메인 슬라이드. image에 "/images/hero-1.jpg"처럼 넣으면 사진이 나옵니다 (public/images 폴더).
// video에 "/images/hero.mp4"를 넣으면 무음 반복 영상이 나옵니다.
export const heroSlides: {
  kicker: string;
  title: string[];
  sub: string;
  image?: string;
  video?: string;
}[] = [
  {
    kicker: "KAKAO VX FRIENDS SCREEN",
    title: ["스윙이", "바뀌는 곳."],
    sub: "전타석 카카오VX 스크린 · 스윙 분석기 · 1:1 레슨",
  },
  {
    kicker: "GOLF + FITNESS",
    title: ["골프도, 몸도", "한 곳에서."],
    sub: "골프 레슨과 헬스 · PT를 한 공간에서",
  },
  {
    kicker: "TEHERAN-RO 121",
    title: ["퇴근길에", "들르는 연습장."],
    sub: "평일 06:00 – 23:00 · 건물 주차 · 발렛",
  },
];

export const programs: { en: string; ko: string; desc: string; image?: string }[] = [
  {
    en: "GOLF",
    ko: "골프 레슨 · 스크린 타석",
    desc: "카카오VX 프렌즈 스크린 전타석과 스윙 분석기, 프로와 1:1 레슨.",
  },
  {
    en: "FITNESS",
    ko: "헬스",
    desc: "유산소 · 웨이트 기구, 운동복과 샤워실을 제공합니다.",
  },
  {
    en: "PT",
    ko: "퍼스널 트레이닝",
    desc: "목표에 맞춘 1:1 트레이닝. 상담 후 횟수를 정합니다.",
  },
];

export const features: { no: string; title: string; desc: string; image?: string }[] = [
  { no: "01", title: "카카오VX 프렌즈 스크린 전타석", desc: "모든 타석에 스크린 시뮬레이터를 설치했습니다." },
  { no: "02", title: "스윙 분석기 + 1:1 레슨", desc: "내 스윙을 화면으로 확인하며 교정합니다." },
  { no: "03", title: "프라이빗 개인 부스", desc: "다른 사람 신경 쓰지 않고 연습에 집중하세요." },
  { no: "04", title: "샤워실 · 운동복 · 주차", desc: "운동복은 4XL까지, 건물 주차장과 발렛 이용." },
];

export const memberships: {
  en: string;
  name: string;
  price?: string;
  unit?: string;
  note: string;
  highlight?: boolean;
}[] = [
  { en: "GOLF", name: "골프 타석 이용", price: "60,000", unit: "원 / 월", note: "카카오VX 스크린 타석 · 스윙 분석기" },
  { en: "FITNESS", name: "헬스", price: "90,000", unit: "원 / 3개월", note: "운동복 · 샤워실 · 탈의실 포함", highlight: true },
  { en: "LESSON · PT", name: "골프 레슨 · PT", note: "횟수 · 목표에 맞춰 상담 후 안내합니다" },
];

// 공지 · 이벤트. 새 소식은 맨 위에 추가하세요. 비어 있으면 블로그 안내만 나옵니다.
export const notices: { kind: "공지" | "이벤트"; title: string; date: string; url?: string }[] = [];

export const nav = [
  { id: "programs", en: "PROGRAM", ko: "프로그램" },
  { id: "about", en: "ABOUT", ko: "센터 특징" },
  { id: "membership", en: "MEMBERSHIP", ko: "회원권" },
  { id: "news", en: "NEWS", ko: "소식" },
  { id: "location", en: "LOCATION", ko: "오시는 길" },
];

export function kakaoHref() {
  return site.kakaoChannelUrl || `tel:${site.phoneTel}`;
}
