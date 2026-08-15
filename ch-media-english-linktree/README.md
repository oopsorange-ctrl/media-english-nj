# DoRms Linktree Template

DoRms 커뮤니티 선생님들이 자기 활동을 빠르게 모아 공개할 수 있는 링크트리 템플릿입니다.

이 저장소는 DoRms 본 서비스가 아니라, 커뮤니티 구성원이 각자의 링크트리를 맞춰 쓰기 위한 디자인 껍데기입니다. 제품별 이미지나 내부 운영 자산은 넣지 않았고, DoRms 커뮤니티 대표 이미지와 고를 수 있는 SVG 아이콘만 포함했습니다.

## 빠른 시작

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 내 링크로 바꾸기

1. `src/config/linktree.ts`를 엽니다.
2. `profile`의 `OOO`, 소개 문구, 상단 설명을 바꿉니다.
3. `cards`의 `링크1`, `설명1`, `https://example.com`을 내 링크로 바꿉니다.
4. 첫 번째 탭인 `도름스 커뮤니티 나의 활동`은 맨 위에 둡니다.
5. 색을 바꾸고 싶으면 `src/config/theme.ts`의 `colors`, `pillColors`를 바꿉니다.
6. 배포 주소가 생기면 `.env.example`을 참고해 `NEXT_PUBLIC_SITE_URL`을 내 주소로 설정합니다.

## AI에게 맡길 때

이 저장소에는 `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`가 들어 있습니다. AI 코딩 도구가 이 저장소를 열면 먼저 필요한 질문을 하고, 그 답으로 링크트리를 채우도록 안내합니다.

직접 붙여넣을 프롬프트는 [docs/AI_CUSTOMIZE_PROMPT.md](docs/AI_CUSTOMIZE_PROMPT.md)에 있습니다.

## 반드시 지키는 기본값

- 첫 번째 탭은 `도름스 커뮤니티 나의 활동`입니다.
- 이 탭에는 DoRms 커뮤니티 대표 이미지를 씁니다.
- 탭 안에 링크가 많아져도 내부 스크롤바가 디자인 톤에 맞게 보입니다.
- 네이버 블로그 SVG 아이콘이 기본 포함돼 있습니다.
- 개인 정보, 비공개 링크, 서비스 내부 자산, 환경변수는 커밋하지 않습니다.

## 배포

가장 간단한 방법은 GitHub에 올린 뒤 Vercel에서 Import 하는 것입니다.

```bash
npm run build
```

빌드가 통과하면 Vercel, Netlify, Cloudflare Pages 같은 정적 호스팅에 올릴 수 있습니다.
