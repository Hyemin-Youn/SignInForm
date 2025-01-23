const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  // ESLint 경고 무시 (선택 사항)
  lintOnSave: false,

  // 배포 경로 설정 (GitHub Pages 사용 시 필요)
  publicPath: process.env.NODE_ENV === 'production'
    ? '/SignInForm/' // GitHub Pages에서의 저장소 이름
    : '/',

  // CSS 소스맵 비활성화 (빌드 최적화)
  css: {
    sourceMap: false,
  },

  // DevServer 설정
  devServer: {
    port: 8080, // 개발 서버 포트
    open: true, // 서버 실행 시 브라우저 자동 열기
  },
});
