import _ from 'lodash'

class TheBrowser {
  constructor() {
    this.window = {};
    this.status = false;
    this.isPhone = false;
    this.isTablet = false;
    this.isMediumTablet = false;
    this.isLargeTablet = false;
    this.isDesktop = false;
    this.isMobileDevice = false;
    this.initialWindowSize = null;
    this.isSafari = false;
    this.isChrome = false;
    this.isExplorer = false;
    this.isFirefox = false;
    this.isEdge = false;
  }
  mQ = num => window.matchMedia(`(max-width: ${num}px)`);

  isSafariBrowser = () => {
    this.isSafari = /constructor/i.test(window.HTMLElement);
    return this.isSafari;
  };

  isChromeBrowser = () => {
    this.isChrome = !!window.chrome && !!window.chrome.webstore;
    return this.isChrome;
  };

  isExplorerBrowser = () => {
    this.isExplorer =
      navigator.appName === "Microsoft Internet Explorer" ||
      !!(
        navigator.userAgent.match(/Trident/) ||
        navigator.userAgent.match(/rv:11/)
      ) ||
      navigator.userAgent.indexOf("MSIE") > -1;

    return this.isExplorer;
  };

  isFirefoxBrowser = () => {
    this.isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
    return this.isFirefox;
  };

  isEdgeBrowser = () => {
    this.isEdge = navigator.userAgent.indexOf("Edge/") > -1;
    return this.isEdge;
  };

  determineBrowser = () => {
    const body = document.querySelector("body");
    const {
      windowWidth,
      status,
      isPhone,
      isTablet,
      isLargeTablet,
      isDesktop,
      isMobileDevice
    } = this.isMobile();

    if (this.isSafariBrowser()) {
      body.classList.add("isSafari");
    }
    if (this.isChromeBrowser()) {
      body.classList.add("isChrome");
    }
    if (this.isExplorerBrowser()) {
      body.classList.add("isExplorer");
    }
    if (this.isFirefoxBrowser()) {
      body.classList.add("isFirefox");
    }
    if (this.isEdgeBrowser()) {
      body.classList.add("isEdge");
    }
    if (this.isEdge || this.isExplorer) {
      this.handlePolyfill();
    }
  };

 

  handlePolyfill = () => {
    if (!Object.entries)
      Object.entries = function (obj) {
        var ownProps = Object.keys(obj),
          i = ownProps.length,
          resArray = new Array(i); // preallocate the Array
        while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
      };
    this.addObjectFindPolyfill();
    const body = document.querySelector("body");
    const polyfillOne = document.createElement("script");
    const polyfillTwo = document.createElement("script");

    polyfillOne.src =
      "https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js";
    polyfillOne.id = "polyfillOne";

    body.appendChild(polyfillTwo);
  };

  removePolyFill = () => {
    const body = document.querySelector("body");
    const polyfill = document.getElementById("polyfillOne");
    const polyfillTwo = document.getElementById("polyfillTwo");
    body.removeChild(polyfill);
    body.removeChild(polyfillTwo);
  };

  isSmallerThanTablet = num => num <= 780;

  isLandscape = () => window.orientation === 90;

  isMobile = () => {
    const winWidth = document.querySelector("body").clientWidth;
    let status = false;
    let isPhone = false;
    let isTablet = false;
    let isMediumTablet = false;
    let isLargeTablet = false;
    let isDesktop = false;
    

    if (winWidth <= 1024) {
      status = true;
    }

    if (winWidth <= 480) {
      isPhone = true;
    } else if (winWidth > 480 && winWidth < 768) {
      isTablet = true;
    } else if (winWidth > 768 && winWidth <= 915) {
      isMediumTablet = true;
    } else if (winWidth > 915 && winWidth <= 1124) {
      isLargeTablet = true;
    } else {
      isDesktop = true;
    }
    this.windowWidth = winWidth;
    this.status = status;
    this.isPhone = isPhone;
    this.isTablet = isTablet;
    this.isMediumTablet = isMediumTablet;
    this.isLargeTablet = isLargeTablet;
    this.isDesktop = isDesktop;

    return {
      windowWidth: this.windowWidth,
      status: this.status,
      isPhone: this.isPhone,
      isTablet: this.isTablet,
      isMediumTablet: this.isMediumTablet,
      isLargeTablet: this.isLargeTablet,
      isDesktop: this.isDesktop,
      isMobileDevice: this.isMobileDevice
    };
  };

  isShrinkingVertically = browser_height => browser_height <= 600;

  handleResize = () => {
    const _this = this;
    let resizeTimer;

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
      const {
        windowWidth,
        status,
        isPhone,
        isTablet,
        isLargeTablet,
        isDesktop,
        isMobileDevice
      } = _this.isMobile();

      if (status) {
        document.querySelector("body").classList.add("isMobile");
      }
      if (_this.initialWindowSize > windowWidth && (isTablet || isPhone)) {
        window.location.reload(true);
        _this.initialWindowSize = windowWidth;
      }
      if (
        _this.initialWindowSize < windowWidth &&
        (isLargeTablet || isDesktop)
      ) {
        // window.location.reload(true);
        _this.initialWindowSize = windowWidth;
      }
    }, 1000);
  };

  listenForResize = () => {
    window.addEventListener("resize", _.debounce(this.handleResize, 100));
  };

  lazyLoader = () => {
    !(function () {
      function i() {
        const t = document.querySelectorAll("img.lazyload");
        let e = t.length;
        for (!e && window.removeEventListener("scroll", i); e--;) {
          const r = window.innerHeight;
          if (t[e].getBoundingClientRect().top - r <= 100) {
            if (
              (t[e].getAttribute("data-src") &&
                (t[e].src = t[e].getAttribute("data-src")),
                t[e].getAttribute("data-srcset") &&
                (t[e].srcset = t[e].getAttribute("data-srcset")),
                t[e].parentElement.tagName === "PICTURE")
            ) {
              for (
                let n = t[e].parentElement.querySelectorAll("source"),
                  a = n.length; a--;

              ) {
                n[a].srcset = n[a].getAttribute("data-srcset");
              }
            }
            t[e].addEventListener("load", function () {
              this.classList.remove("lazyload");
            });
          }
        }
      }
      i(), window.addEventListener("scroll", i);
    })();
  };
  addObjectFindPolyfill = () => {
    if (!Array.prototype.find) {
      return Object.defineProperty(Array.prototype, "find", {
        value: function (predicate) {
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          var o = Object(this);
          var len = o.length >>> 0;

          if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
          }

          var thisArg = arguments[1];
          var k = 0;

          while (k < len) {
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue;
            }
            // e. Increase k by 1.
            k++;
          }

          // 7. Return undefined.
          return undefined;
        }
      });
    }

    if (typeof Object.assign !== "function") {
      Object.assign = function (target, varArgs) {
        // .length of function is 2
        "use strict";
        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError("Cannot convert undefined or null to object");
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      };
    }
  };
  init = () => {
    const winWidth = document.querySelector("body").clientWidth;
    this.initialWindowSize = winWidth;
    this.determineBrowser();
    this.listenForResize();
    this.lazyLoader();
  };
}

export const BROWSER = new TheBrowser();