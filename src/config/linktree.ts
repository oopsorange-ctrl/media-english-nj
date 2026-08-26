export type IconName =
  | "dorms-community"
  | "naver-blog"
  | "instagram"
  | "kakao-chat"
  | "kakao-group"
  | "download"
  | "manual"
  | "privacy"
  | "school"
  | "docs"
  | "contact"
  | "magazine"
  | "code"
  | "game"
  | "youtube"
  | "bell";

export type Thumb =
  | { kind: "image"; src: string; alt: string }
  | { kind: "icon"; icon: IconName };

export type LinkItem = {
  name: string;
  description?: string;
  href: string;
  thumb?: Thumb;
};

export type LinkCard =
  | {
      kind: "group";
      id: string;
      number: string;
      name: string;
      description: string;
      thumb: Thumb;
      items: LinkItem[];
    }
  | {
      kind: "link";
      id: string;
      number: string;
      name: string;
      description: string;
      href: string;
      thumb: Thumb;
    };

export const profile = {
  teacherName: "NJ",
  title: "Ch.Media English",
  introTitle: "Ch.Media English",
  introDescription: "이번 학기 처음 시작하는 수업, Ch.Media English의 자료와 링크를 모아두는 곳입니다.",
  catalogTitle: "Ch.Media English",
  catalogDescription: "수업 자료와 링크를 이곳에 차근차근 모아갑니다."
};

// [가정] 항목은 앞으로 계속 늘어날 예정 — 새 카드를 추가할 땐 이 배열에
// { kind: "link", id, number, name, description, href, thumb } 형태로
// 추가하면 됩니다. number는 두 자리 숫자로 순서대로("01", "02"...) 부여하세요.
export const cards: LinkCard[] = [
  {
    kind: "link",
    id: "flipped-learning-youtube",
    number: "01",
    name: "Flipped Learing(YOUTUBE)",
    description: "수업 전 미리 보는 플립러닝 영상 채널",
    href: "https://www.youtube.com/@nj3769",
    thumb: { kind: "icon", icon: "youtube" }
  },
  {
    kind: "link",
    id: "media-english-vocabs",
    number: "02",
    name: "Media English Vocabs",
    description: "미디어영어 영단어 학습장",
    href: "https://claude.ai/public/artifacts/2958041f-a305-4c92-b2a4-57f1edd4cf6f",
    thumb: { kind: "icon", icon: "docs" }
  },
  {
    kind: "link",
    id: "word-tug-of-war",
    number: "03",
    name: "Word-tug of War(게임)",
    description: "줄다리기로 즐기는 어휘 테스트 게임",
    href: "https://claude.ai/public/artifacts/7cd89759-cdf6-42f1-bfa3-1b4081f9d613",
    thumb: { kind: "icon", icon: "game" }
  },
  {
    kind: "link",
    id: "textbook-pdf",
    number: "03",
    name: "교과서 PDF",
    description: "태블릿 필기용 교과서 PDF 모음",
    href: "https://drive.google.com/drive/u/1/folders/15yDwaJFyu7kiO1TO27aoFz2m1kfuVaLN",
    thumb: { kind: "icon", icon: "manual" }
  },
  {
    kind: "link",
    id: "attendance-system",
    number: "04",
    name: "출석 시스템",
    description: "이동수업 반별 출석 체크",
    href: "https://claude.ai/public/artifacts/c9e4b708-d1b2-48a1-8e74-bb8c0ad31dcc",
    thumb: { kind: "icon", icon: "school" }
  },
  {
    kind: "link",
    id: "golden-bell",
    number: "0X",
    name: "도전 골든벨",
    description: "챕터 복습 골든벨 게임",
    href: "https://claude.ai/public/artifacts/f0901351-797d-43b7-8143-1e5b9a7319be",
    thumb: { kind: "icon", icon: "game" }
  },
  {
    kind: "group",
    id: "arcade",
    number: "05",
    name: "오락실",
    description: "nj가 만든 미니게임 모음",
    thumb: { kind: "icon", icon: "game" },
    items: [
      {
        name: "포트리스 미니",
        description: "클래식 포트리스 스타일 미니게임",
        href: "https://fortress-mini.onrender.com/",
        thumb: { kind: "icon", icon: "game" }
      }
    ]
  }
];
