export default {
  base: './', // Ensure correct base path
  build: {
    rollupOptions: {
      external: [
        'firebase/app',
        'firebase/firestore',
        'firebase/storage',
        'firebase/auth',
        'firebase/analytics'
      ]
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
};
