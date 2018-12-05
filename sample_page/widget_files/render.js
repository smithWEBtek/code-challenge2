;(function () {
  window.serviceCallbacks.push(function() {
    window.services.trayService = new services.TrayService();
    window.services.trayService.trackTrayWidth('topics');
    new window.services.AppBarService();
    window.services.inputAutocomplete.checkUnprocessedInputFields();

    window.services.trayService.trayOpenCallback('search', function() {
      // Focus input-field upon opening search-tray
      var inputField = document.querySelector('.search-tray form.form-inline input.search-bar');
      if (inputField) {
        inputField.focus();
      }
    });
  })
})();

;(function () {
  window.serviceCallbacks.push(function() {
    const ScreamerService = new services.ScreamerService();
  })
})();

;(function() {
  window.serviceCallbacks.push(function() {
    new services.NewsletterService();
  })
  // This features loads a lot slower, resulting in code running before the feature is fully build 
  // Therefore, it needs to trigger this service to ensure the correct behavior
  if (window.services && window.services.imageService) {
    window.services.imageService.polyfillObjectFit();
  }
})();

(function() {
  window.serviceCallbacks.push(function() {
    new services.SolidOpinionService()
  })
})();

;(function () {
  // This features loads a lot slower, resulting in code running before the feature is fully build 
  // Therefore, it needs to trigger this service to ensure the correct behavior
  if (window.services && window.services.imageService) {
    window.services.imageService.polyfillObjectFit();
  }
})();

;(function () {
  window.serviceCallbacks.push(function() {
    const railAdsService = new services.RailAdsService()
  })
})();
