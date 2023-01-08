// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
function injectScript(src) {
  window.scriptsLoaded = window.scriptsLoaded || [];

  if (window.scriptsLoaded.indexOf(src)) {
    const head = document.querySelector('head');
    const script = document.createElement('script');

    script.src = src;
    script.setAttribute('async', 'true');
    head.append(script);
    window.scriptsLoaded.push(src);
  }
}
function loadCustomJS() {
  const src = 'https://main--helix-pt-01--pat-ffm.hlx.page/scripts/custom.js';
  injectScript(src);
}

loadCustomJS();
