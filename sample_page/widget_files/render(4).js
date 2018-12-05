(function(){
  window.serviceCallbacks.push(function() {
    function loadError (err) {
      console.error('Taboola unit failed to load', err);
    }

    function initTaboolas () {
      const TaboolaService = new services.TaboolaService();

      // if mobile/tablet, don't initialize taboola features marked as 'desktop-only'
      const taboolas = (function () {
        const selector = window.isMobile.any() 
          ? '.taboola-container:not(.desktop-only)'
          : '.taboola-container';
        return document.querySelectorAll(selector);
      })();

      for (let i = 0; i < taboolas.length; i++) {
        const id = taboolas[i].getAttribute('id');
        const loadImmediately = taboolas[i].getAttribute('data-ad-loadimmediately');
        if (loadImmediately === 'true') {
           TaboolaService.appendAd(id);
        } else {
          window.services.lazyLoadService.addPendingObject({
            id: id,
            el: document.getElementById(id),
            load: function() {
              TaboolaService.appendAd(id);
            }
          });
        }
      }
    }

    const url = '//cdn.taboola.com/libtrc/tribunedigital-network/loader.js';

    trb.appendResource(
      'script',
      url,
      true,
      undefined,
      initTaboolas,
      loadError
    );
   
  });
})();
