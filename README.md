# DeSpread Terminal

암호화폐 미디어 분석 대시보드 - Bloomberg Terminal 스타일의 웹 인터페이스

## 🚀 기능

- 실시간 암호화폐 미디어 분석
- 월별 기사 통계
- 상위 미디어 제공업체 분석
- 총 미디어 추적 현황
- Bloomberg Terminal 스타일 UI

## 🛠️ 기술 스택

- React 19
- TypeScript
- Chart.js
- CSS3

## 📦 설치 및 실행

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
```

## 🚀 배포

이 프로젝트는 Vercel을 통해 배포됩니다:

1. GitHub 저장소에 코드를 푸시
2. Vercel에서 GitHub 저장소 연결
3. 자동 배포 완료

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── panels/           # 대시보드 패널 컴포넌트
│   ├── TerminalHeader.tsx
│   ├── TerminalMain.tsx
│   └── TerminalFooter.tsx
├── App.tsx              # 메인 앱 컴포넌트
└── index.tsx            # 앱 진입점
```

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
