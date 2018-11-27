export default {
  install: Vue => {
    let ua = window.navigator.userAgent;
    let browserObj = {};

    //   // IE 10
    // ua = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)";

    //   // IE 11
    // ua = "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko";

    //   // Edge 12 (Spartan)
    // ua =
    //   "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0";

    //   // Edge 13
    // ua =
    //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586";

    browserObj.ua = ua;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    browserObj.isOpera =
      !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    // Firefox 1.0+
    browserObj.isFirefox = typeof InstallTrigger !== "undefined";
    // Safari 3.0+
    browserObj.isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function(p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(!window["safari"] || safari.pushNotification);
    // Internet Explorer 6-11
    browserObj.isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // Edge 20+
    browserObj.isEdge = !browserObj.isIE && !!window.StyleMedia;
    // Chrome 1+
    browserObj.isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    browserObj.isBlink =
      (browserObj.isChrome || browserObj.isOpera) && !!window.CSS;
    browserObj.version = getVersion();

    function getVersion() {
      if (browserObj.isChrome) {
        return parseInt(ua.match(/Chrom(e|ium)\/([0-9]+)\./)[2]) || undefined;
      } else if (browserObj.isFirefox) {
        return parseInt(ua.match(/Firefox\/([0-9]+)\./)[1]) || undefined;
      } else if (browserObj.isIE) {
        const msie = ua.indexOf("MSIE ");
        if (msie > 0) {
          return (
            parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10) ||
            undefined
          );
        }
        let trident = ua.indexOf("Trident/");
        if (trident > 0) {
          // IE 11 => return version number
          let rv = ua.indexOf("rv:");
          return (
            parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10) || undefined
          );
        }
      } else if (browserObj.isEdge) {
        let edge = ua.indexOf("Edge/");
        if (edge > 0) {
          // Edge (IE 12+) => return version number
          return (
            parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10) ||
            undefined
          );
        }
      } else {
        return undefined;
      }
    }

    Vue.prototype.$browserDetect = browserObj;
  }
};
