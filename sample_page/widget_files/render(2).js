;(function () {
  // This features loads a lot slower, resulting in code running before the feature is fully build 
  // Therefore, it needs to trigger this service to ensure the correct behavior
  if (window.services && window.services.imageService) {
    window.services.imageService.polyfillObjectFit();
  }
})();
