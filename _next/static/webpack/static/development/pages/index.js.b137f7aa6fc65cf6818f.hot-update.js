webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/iframe-resizer/index.js":
/*!**********************************************!*\
  !*** ./node_modules/iframe-resizer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./js */ "./node_modules/iframe-resizer/js/index.js")


/***/ }),

/***/ "./node_modules/iframe-resizer/js/iframeResizer.contentWindow.js":
/*!***********************************************************************!*\
  !*** ./node_modules/iframe-resizer/js/iframeResizer.contentWindow.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * File: iframeResizer.contentWindow.js
 * Desc: Include this file in any page being loaded into an iframe
 *       to force the iframe to resize to the content size.
 * Requires: iframeResizer.js on host page.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 *
 */

// eslint-disable-next-line sonarjs/cognitive-complexity, no-shadow-restricted-names
;(function(undefined) {
  if (typeof window === 'undefined') return // don't run for server side render

  var autoResize = true,
    base = 10,
    bodyBackground = '',
    bodyMargin = 0,
    bodyMarginStr = '',
    bodyObserver = null,
    bodyPadding = '',
    calculateWidth = false,
    doubleEventList = { resize: 1, click: 1 },
    eventCancelTimer = 128,
    firstRun = true,
    height = 1,
    heightCalcModeDefault = 'bodyOffset',
    heightCalcMode = heightCalcModeDefault,
    initLock = true,
    initMsg = '',
    inPageLinks = {},
    interval = 32,
    intervalTimer = null,
    logging = false,
    msgID = '[iFrameSizer]', // Must match host page msg ID
    msgIdLen = msgID.length,
    myID = '',
    resetRequiredMethods = {
      max: 1,
      min: 1,
      bodyScroll: 1,
      documentElementScroll: 1
    },
    resizeFrom = 'child',
    sendPermit = true,
    target = window.parent,
    targetOriginDefault = '*',
    tolerance = 0,
    triggerLocked = false,
    triggerLockedTimer = null,
    throttledTimer = 16,
    width = 1,
    widthCalcModeDefault = 'scroll',
    widthCalcMode = widthCalcModeDefault,
    win = window,
    onMessage = function() {
      warn('onMessage function not defined')
    },
    onReady = function() {},
    onPageInfo = function() {},
    customCalcMethods = {
      height: function() {
        warn('Custom height calculation function not defined')
        return document.documentElement.offsetHeight
      },
      width: function() {
        warn('Custom width calculation function not defined')
        return document.body.scrollWidth
      }
    },
    eventHandlersByName = {},
    passiveSupported = false

  function noop() {}

  try {
    var options = Object.create(
      {},
      {
        passive: {
          get: function() {
            passiveSupported = true
          }
        }
      }
    )
    window.addEventListener('test', noop, options)
    window.removeEventListener('test', noop, options)
  } catch (error) {
    /* */
  }

  function addEventListener(el, evt, func, options) {
    el.addEventListener(evt, func, passiveSupported ? options || {} : false)
  }

  function removeEventListener(el, evt, func) {
    el.removeEventListener(evt, func, false)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // Based on underscore.js
  function throttle(func) {
    var context,
      args,
      result,
      timeout = null,
      previous = 0,
      later = function() {
        previous = getNow()
        timeout = null
        result = func.apply(context, args)
        if (!timeout) {
          // eslint-disable-next-line no-multi-assign
          context = args = null
        }
      }

    return function() {
      var now = getNow()

      if (!previous) {
        previous = now
      }

      var remaining = throttledTimer - (now - previous)

      context = this
      args = arguments

      if (remaining <= 0 || remaining > throttledTimer) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }

        previous = now
        result = func.apply(context, args)

        if (!timeout) {
          // eslint-disable-next-line no-multi-assign
          context = args = null
        }
      } else if (!timeout) {
        timeout = setTimeout(later, remaining)
      }

      return result
    }
  }

  var getNow =
    Date.now ||
    function() {
      /* istanbul ignore next */ // Not testable in PhantonJS
      return new Date().getTime()
    }

  function formatLogMsg(msg) {
    return msgID + '[' + myID + '] ' + msg
  }

  function log(msg) {
    if (logging && 'object' === typeof window.console) {
      // eslint-disable-next-line no-console
      console.log(formatLogMsg(msg))
    }
  }

  function warn(msg) {
    if ('object' === typeof window.console) {
      // eslint-disable-next-line no-console
      console.warn(formatLogMsg(msg))
    }
  }

  function init() {
    readDataFromParent()
    log('Initialising iFrame (' + location.href + ')')
    readDataFromPage()
    setMargin()
    setBodyStyle('background', bodyBackground)
    setBodyStyle('padding', bodyPadding)
    injectClearFixIntoBodyElement()
    checkHeightMode()
    checkWidthMode()
    stopInfiniteResizingOfIFrame()
    setupPublicMethods()
    startEventListeners()
    inPageLinks = setupInPageLinks()
    sendSize('init', 'Init message from host page')
    onReady()
  }

  function readDataFromParent() {
    function strBool(str) {
      return 'true' === str
    }

    var data = initMsg.substr(msgIdLen).split(':')

    myID = data[0]
    bodyMargin = undefined !== data[1] ? Number(data[1]) : bodyMargin // For V1 compatibility
    calculateWidth = undefined !== data[2] ? strBool(data[2]) : calculateWidth
    logging = undefined !== data[3] ? strBool(data[3]) : logging
    interval = undefined !== data[4] ? Number(data[4]) : interval
    autoResize = undefined !== data[6] ? strBool(data[6]) : autoResize
    bodyMarginStr = data[7]
    heightCalcMode = undefined !== data[8] ? data[8] : heightCalcMode
    bodyBackground = data[9]
    bodyPadding = data[10]
    tolerance = undefined !== data[11] ? Number(data[11]) : tolerance
    inPageLinks.enable = undefined !== data[12] ? strBool(data[12]) : false
    resizeFrom = undefined !== data[13] ? data[13] : resizeFrom
    widthCalcMode = undefined !== data[14] ? data[14] : widthCalcMode
  }

  function depricate(key) {
    var splitName = key.split('Callback')

    if (splitName.length === 2) {
      var name =
        'on' + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1)
      this[name] = this[key]
      delete this[key]
      warn(
        "Deprecated: '" +
          key +
          "' has been renamed '" +
          name +
          "'. The old method will be removed in the next major version."
      )
    }
  }

  function readDataFromPage() {
    function readData() {
      var data = window.iFrameResizer

      log('Reading data from page: ' + JSON.stringify(data))
      Object.keys(data).forEach(depricate, data)

      onMessage = 'onMessage' in data ? data.onMessage : onMessage
      onReady = 'onReady' in data ? data.onReady : onReady
      targetOriginDefault =
        'targetOrigin' in data ? data.targetOrigin : targetOriginDefault
      heightCalcMode =
        'heightCalculationMethod' in data
          ? data.heightCalculationMethod
          : heightCalcMode
      widthCalcMode =
        'widthCalculationMethod' in data
          ? data.widthCalculationMethod
          : widthCalcMode
    }

    function setupCustomCalcMethods(calcMode, calcFunc) {
      if ('function' === typeof calcMode) {
        log('Setup custom ' + calcFunc + 'CalcMethod')
        customCalcMethods[calcFunc] = calcMode
        calcMode = 'custom'
      }

      return calcMode
    }

    if (
      'iFrameResizer' in window &&
      Object === window.iFrameResizer.constructor
    ) {
      readData()
      heightCalcMode = setupCustomCalcMethods(heightCalcMode, 'height')
      widthCalcMode = setupCustomCalcMethods(widthCalcMode, 'width')
    }

    log('TargetOrigin for parent set to: ' + targetOriginDefault)
  }

  function chkCSS(attr, value) {
    if (-1 !== value.indexOf('-')) {
      warn('Negative CSS value ignored for ' + attr)
      value = ''
    }
    return value
  }

  function setBodyStyle(attr, value) {
    if (undefined !== value && '' !== value && 'null' !== value) {
      document.body.style[attr] = value
      log('Body ' + attr + ' set to "' + value + '"')
    }
  }

  function setMargin() {
    // If called via V1 script, convert bodyMargin from int to str
    if (undefined === bodyMarginStr) {
      bodyMarginStr = bodyMargin + 'px'
    }

    setBodyStyle('margin', chkCSS('margin', bodyMarginStr))
  }

  function stopInfiniteResizingOfIFrame() {
    document.documentElement.style.height = ''
    document.body.style.height = ''
    log('HTML & body height set to "auto"')
  }

  function manageTriggerEvent(options) {
    var listener = {
      add: function(eventName) {
        function handleEvent() {
          sendSize(options.eventName, options.eventType)
        }

        eventHandlersByName[eventName] = handleEvent

        addEventListener(window, eventName, handleEvent, { passive: true })
      },
      remove: function(eventName) {
        var handleEvent = eventHandlersByName[eventName]
        delete eventHandlersByName[eventName]

        removeEventListener(window, eventName, handleEvent)
      }
    }

    if (options.eventNames && Array.prototype.map) {
      options.eventName = options.eventNames[0]
      options.eventNames.map(listener[options.method])
    } else {
      listener[options.method](options.eventName)
    }

    log(
      capitalizeFirstLetter(options.method) +
        ' event listener: ' +
        options.eventType
    )
  }

  function manageEventListeners(method) {
    manageTriggerEvent({
      method: method,
      eventType: 'Animation Start',
      eventNames: ['animationstart', 'webkitAnimationStart']
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Animation Iteration',
      eventNames: ['animationiteration', 'webkitAnimationIteration']
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Animation End',
      eventNames: ['animationend', 'webkitAnimationEnd']
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Input',
      eventName: 'input'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Mouse Up',
      eventName: 'mouseup'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Mouse Down',
      eventName: 'mousedown'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Orientation Change',
      eventName: 'orientationchange'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Print',
      eventName: ['afterprint', 'beforeprint']
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Ready State Change',
      eventName: 'readystatechange'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Touch Start',
      eventName: 'touchstart'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Touch End',
      eventName: 'touchend'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Touch Cancel',
      eventName: 'touchcancel'
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Transition Start',
      eventNames: [
        'transitionstart',
        'webkitTransitionStart',
        'MSTransitionStart',
        'oTransitionStart',
        'otransitionstart'
      ]
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Transition Iteration',
      eventNames: [
        'transitioniteration',
        'webkitTransitionIteration',
        'MSTransitionIteration',
        'oTransitionIteration',
        'otransitioniteration'
      ]
    })
    manageTriggerEvent({
      method: method,
      eventType: 'Transition End',
      eventNames: [
        'transitionend',
        'webkitTransitionEnd',
        'MSTransitionEnd',
        'oTransitionEnd',
        'otransitionend'
      ]
    })
    if ('child' === resizeFrom) {
      manageTriggerEvent({
        method: method,
        eventType: 'IFrame Resized',
        eventName: 'resize'
      })
    }
  }

  function checkCalcMode(calcMode, calcModeDefault, modes, type) {
    if (calcModeDefault !== calcMode) {
      if (!(calcMode in modes)) {
        warn(
          calcMode + ' is not a valid option for ' + type + 'CalculationMethod.'
        )
        calcMode = calcModeDefault
      }
      log(type + ' calculation method set to "' + calcMode + '"')
    }

    return calcMode
  }

  function checkHeightMode() {
    heightCalcMode = checkCalcMode(
      heightCalcMode,
      heightCalcModeDefault,
      getHeight,
      'height'
    )
  }

  function checkWidthMode() {
    widthCalcMode = checkCalcMode(
      widthCalcMode,
      widthCalcModeDefault,
      getWidth,
      'width'
    )
  }

  function startEventListeners() {
    if (true === autoResize) {
      manageEventListeners('add')
      setupMutationObserver()
    } else {
      log('Auto Resize disabled')
    }
  }

  function stopMsgsToParent() {
    log('Disable outgoing messages')
    sendPermit = false
  }

  function removeMsgListener() {
    log('Remove event listener: Message')
    removeEventListener(window, 'message', receiver)
  }

  function disconnectMutationObserver() {
    if (null !== bodyObserver) {
      /* istanbul ignore next */ // Not testable in PhantonJS
      bodyObserver.disconnect()
    }
  }

  function stopEventListeners() {
    manageEventListeners('remove')
    disconnectMutationObserver()
    clearInterval(intervalTimer)
  }

  function teardown() {
    stopMsgsToParent()
    removeMsgListener()
    if (true === autoResize) stopEventListeners()
  }

  function injectClearFixIntoBodyElement() {
    var clearFix = document.createElement('div')
    clearFix.style.clear = 'both'
    // Guard against the following having been globally redefined in CSS.
    clearFix.style.display = 'block'
    clearFix.style.height = '0'
    document.body.appendChild(clearFix)
  }

  function setupInPageLinks() {
    function getPagePosition() {
      return {
        x:
          window.pageXOffset !== undefined
            ? window.pageXOffset
            : document.documentElement.scrollLeft,
        y:
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : document.documentElement.scrollTop
      }
    }

    function getElementPosition(el) {
      var elPosition = el.getBoundingClientRect(),
        pagePosition = getPagePosition()

      return {
        x: parseInt(elPosition.left, 10) + parseInt(pagePosition.x, 10),
        y: parseInt(elPosition.top, 10) + parseInt(pagePosition.y, 10)
      }
    }

    function findTarget(location) {
      function jumpToTarget(target) {
        var jumpPosition = getElementPosition(target)

        log(
          'Moving to in page link (#' +
            hash +
            ') at x: ' +
            jumpPosition.x +
            ' y: ' +
            jumpPosition.y
        )
        sendMsg(jumpPosition.y, jumpPosition.x, 'scrollToOffset') // X&Y reversed at sendMsg uses height/width
      }

      var hash = location.split('#')[1] || location, // Remove # if present
        hashData = decodeURIComponent(hash),
        target =
          document.getElementById(hashData) ||
          document.getElementsByName(hashData)[0]

      if (undefined !== target) {
        jumpToTarget(target)
      } else {
        log(
          'In page link (#' +
            hash +
            ') not found in iFrame, so sending to parent'
        )
        sendMsg(0, 0, 'inPageLink', '#' + hash)
      }
    }

    function checkLocationHash() {
      if ('' !== location.hash && '#' !== location.hash) {
        findTarget(location.href)
      }
    }

    function bindAnchors() {
      function setupLink(el) {
        function linkClicked(e) {
          e.preventDefault()

          /* jshint validthis:true */
          findTarget(this.getAttribute('href'))
        }

        if ('#' !== el.getAttribute('href')) {
          addEventListener(el, 'click', linkClicked)
        }
      }

      Array.prototype.forEach.call(
        document.querySelectorAll('a[href^="#"]'),
        setupLink
      )
    }

    function bindLocationHash() {
      addEventListener(window, 'hashchange', checkLocationHash)
    }

    function initCheck() {
      // Check if page loaded with location hash after init resize
      setTimeout(checkLocationHash, eventCancelTimer)
    }

    function enableInPageLinks() {
      /* istanbul ignore else */ // Not testable in phantonJS
      if (Array.prototype.forEach && document.querySelectorAll) {
        log('Setting up location.hash handlers')
        bindAnchors()
        bindLocationHash()
        initCheck()
      } else {
        warn(
          'In page linking not fully supported in this browser! (See README.md for IE8 workaround)'
        )
      }
    }

    if (inPageLinks.enable) {
      enableInPageLinks()
    } else {
      log('In page linking not enabled')
    }

    return {
      findTarget: findTarget
    }
  }

  function setupPublicMethods() {
    log('Enable public methods')

    win.parentIFrame = {
      autoResize: function autoResizeF(resize) {
        if (true === resize && false === autoResize) {
          autoResize = true
          startEventListeners()
        } else if (false === resize && true === autoResize) {
          autoResize = false
          stopEventListeners()
        }

        return autoResize
      },

      close: function closeF() {
        sendMsg(0, 0, 'close')
        teardown()
      },

      getId: function getIdF() {
        return myID
      },

      getPageInfo: function getPageInfoF(callback) {
        if ('function' === typeof callback) {
          onPageInfo = callback
          sendMsg(0, 0, 'pageInfo')
        } else {
          onPageInfo = function() {}
          sendMsg(0, 0, 'pageInfoStop')
        }
      },

      moveToAnchor: function moveToAnchorF(hash) {
        inPageLinks.findTarget(hash)
      },

      reset: function resetF() {
        resetIFrame('parentIFrame.reset')
      },

      scrollTo: function scrollToF(x, y) {
        sendMsg(y, x, 'scrollTo') // X&Y reversed at sendMsg uses height/width
      },

      scrollToOffset: function scrollToF(x, y) {
        sendMsg(y, x, 'scrollToOffset') // X&Y reversed at sendMsg uses height/width
      },

      sendMessage: function sendMessageF(msg, targetOrigin) {
        sendMsg(0, 0, 'message', JSON.stringify(msg), targetOrigin)
      },

      setHeightCalculationMethod: function setHeightCalculationMethodF(
        heightCalculationMethod
      ) {
        heightCalcMode = heightCalculationMethod
        checkHeightMode()
      },

      setWidthCalculationMethod: function setWidthCalculationMethodF(
        widthCalculationMethod
      ) {
        widthCalcMode = widthCalculationMethod
        checkWidthMode()
      },

      setTargetOrigin: function setTargetOriginF(targetOrigin) {
        log('Set targetOrigin: ' + targetOrigin)
        targetOriginDefault = targetOrigin
      },

      size: function sizeF(customHeight, customWidth) {
        var valString =
          '' + (customHeight || '') + (customWidth ? ',' + customWidth : '')
        sendSize(
          'size',
          'parentIFrame.size(' + valString + ')',
          customHeight,
          customWidth
        )
      }
    }
  }

  function initInterval() {
    if (0 !== interval) {
      log('setInterval: ' + interval + 'ms')
      intervalTimer = setInterval(function() {
        sendSize('interval', 'setInterval: ' + interval)
      }, Math.abs(interval))
    }
  }

  // Not testable in PhantomJS
  /* istanbul ignore next */
  function setupBodyMutationObserver() {
    function addImageLoadListners(mutation) {
      function addImageLoadListener(element) {
        if (false === element.complete) {
          log('Attach listeners to ' + element.src)
          element.addEventListener('load', imageLoaded, false)
          element.addEventListener('error', imageError, false)
          elements.push(element)
        }
      }

      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        addImageLoadListener(mutation.target)
      } else if (mutation.type === 'childList') {
        Array.prototype.forEach.call(
          mutation.target.querySelectorAll('img'),
          addImageLoadListener
        )
      }
    }

    function removeFromArray(element) {
      elements.splice(elements.indexOf(element), 1)
    }

    function removeImageLoadListener(element) {
      log('Remove listeners from ' + element.src)
      element.removeEventListener('load', imageLoaded, false)
      element.removeEventListener('error', imageError, false)
      removeFromArray(element)
    }

    function imageEventTriggered(event, type, typeDesc) {
      removeImageLoadListener(event.target)
      sendSize(type, typeDesc + ': ' + event.target.src, undefined, undefined)
    }

    function imageLoaded(event) {
      imageEventTriggered(event, 'imageLoad', 'Image loaded')
    }

    function imageError(event) {
      imageEventTriggered(event, 'imageLoadFailed', 'Image load failed')
    }

    function mutationObserved(mutations) {
      sendSize(
        'mutationObserver',
        'mutationObserver: ' + mutations[0].target + ' ' + mutations[0].type
      )

      // Deal with WebKit / Blink asyncing image loading when tags are injected into the page
      mutations.forEach(addImageLoadListners)
    }

    function createMutationObserver() {
      var target = document.querySelector('body'),
        config = {
          attributes: true,
          attributeOldValue: false,
          characterData: true,
          characterDataOldValue: false,
          childList: true,
          subtree: true
        }

      observer = new MutationObserver(mutationObserved)

      log('Create body MutationObserver')
      observer.observe(target, config)

      return observer
    }

    var elements = [],
      MutationObserver =
        window.MutationObserver || window.WebKitMutationObserver,
      observer = createMutationObserver()

    return {
      disconnect: function() {
        if ('disconnect' in observer) {
          log('Disconnect body MutationObserver')
          observer.disconnect()
          elements.forEach(removeImageLoadListener)
        }
      }
    }
  }

  function setupMutationObserver() {
    var forceIntervalTimer = 0 > interval

    // Not testable in PhantomJS
    /* istanbul ignore if */ if (
      window.MutationObserver ||
      window.WebKitMutationObserver
    ) {
      if (forceIntervalTimer) {
        initInterval()
      } else {
        bodyObserver = setupBodyMutationObserver()
      }
    } else {
      log('MutationObserver not supported in this browser!')
      initInterval()
    }
  }

  // document.documentElement.offsetHeight is not reliable, so
  // we have to jump through hoops to get a better value.
  function getComputedStyle(prop, el) {
    var retVal = 0
    el = el || document.body // Not testable in phantonJS

    retVal = document.defaultView.getComputedStyle(el, null)
    retVal = null !== retVal ? retVal[prop] : 0

    return parseInt(retVal, base)
  }

  function chkEventThottle(timer) {
    if (timer > throttledTimer / 2) {
      throttledTimer = 2 * timer
      log('Event throttle increased to ' + throttledTimer + 'ms')
    }
  }

  // Idea from https://github.com/guardian/iframe-messenger
  function getMaxElement(side, elements) {
    var elementsLength = elements.length,
      elVal = 0,
      maxVal = 0,
      Side = capitalizeFirstLetter(side),
      timer = getNow()

    for (var i = 0; i < elementsLength; i++) {
      elVal =
        elements[i].getBoundingClientRect()[side] +
        getComputedStyle('margin' + Side, elements[i])
      if (elVal > maxVal) {
        maxVal = elVal
      }
    }

    timer = getNow() - timer

    log('Parsed ' + elementsLength + ' HTML elements')
    log('Element position calculated in ' + timer + 'ms')

    chkEventThottle(timer)

    return maxVal
  }

  function getAllMeasurements(dimention) {
    return [
      dimention.bodyOffset(),
      dimention.bodyScroll(),
      dimention.documentElementOffset(),
      dimention.documentElementScroll()
    ]
  }

  function getTaggedElements(side, tag) {
    function noTaggedElementsFound() {
      warn('No tagged elements (' + tag + ') found on page')
      return document.querySelectorAll('body *')
    }

    var elements = document.querySelectorAll('[' + tag + ']')

    if (0 === elements.length) noTaggedElementsFound()

    return getMaxElement(side, elements)
  }

  function getAllElements() {
    return document.querySelectorAll('body *')
  }

  var getHeight = {
      bodyOffset: function getBodyOffsetHeight() {
        return (
          document.body.offsetHeight +
          getComputedStyle('marginTop') +
          getComputedStyle('marginBottom')
        )
      },

      offset: function() {
        return getHeight.bodyOffset() // Backwards compatability
      },

      bodyScroll: function getBodyScrollHeight() {
        return document.body.scrollHeight
      },

      custom: function getCustomWidth() {
        return customCalcMethods.height()
      },

      documentElementOffset: function getDEOffsetHeight() {
        return document.documentElement.offsetHeight
      },

      documentElementScroll: function getDEScrollHeight() {
        return document.documentElement.scrollHeight
      },

      max: function getMaxHeight() {
        return Math.max.apply(null, getAllMeasurements(getHeight))
      },

      min: function getMinHeight() {
        return Math.min.apply(null, getAllMeasurements(getHeight))
      },

      grow: function growHeight() {
        return getHeight.max() // Run max without the forced downsizing
      },

      lowestElement: function getBestHeight() {
        return Math.max(
          getHeight.bodyOffset() || getHeight.documentElementOffset(),
          getMaxElement('bottom', getAllElements())
        )
      },

      taggedElement: function getTaggedElementsHeight() {
        return getTaggedElements('bottom', 'data-iframe-height')
      }
    },
    getWidth = {
      bodyScroll: function getBodyScrollWidth() {
        return document.body.scrollWidth
      },

      bodyOffset: function getBodyOffsetWidth() {
        return document.body.offsetWidth
      },

      custom: function getCustomWidth() {
        return customCalcMethods.width()
      },

      documentElementScroll: function getDEScrollWidth() {
        return document.documentElement.scrollWidth
      },

      documentElementOffset: function getDEOffsetWidth() {
        return document.documentElement.offsetWidth
      },

      scroll: function getMaxWidth() {
        return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll())
      },

      max: function getMaxWidth() {
        return Math.max.apply(null, getAllMeasurements(getWidth))
      },

      min: function getMinWidth() {
        return Math.min.apply(null, getAllMeasurements(getWidth))
      },

      rightMostElement: function rightMostElement() {
        return getMaxElement('right', getAllElements())
      },

      taggedElement: function getTaggedElementsWidth() {
        return getTaggedElements('right', 'data-iframe-width')
      }
    }

  function sizeIFrame(
    triggerEvent,
    triggerEventDesc,
    customHeight,
    customWidth
  ) {
    function resizeIFrame() {
      height = currentHeight
      width = currentWidth

      sendMsg(height, width, triggerEvent)
    }

    function isSizeChangeDetected() {
      function checkTolarance(a, b) {
        var retVal = Math.abs(a - b) <= tolerance
        return !retVal
      }

      currentHeight =
        undefined !== customHeight ? customHeight : getHeight[heightCalcMode]()
      currentWidth =
        undefined !== customWidth ? customWidth : getWidth[widthCalcMode]()

      return (
        checkTolarance(height, currentHeight) ||
        (calculateWidth && checkTolarance(width, currentWidth))
      )
    }

    function isForceResizableEvent() {
      return !(triggerEvent in { init: 1, interval: 1, size: 1 })
    }

    function isForceResizableCalcMode() {
      return (
        heightCalcMode in resetRequiredMethods ||
        (calculateWidth && widthCalcMode in resetRequiredMethods)
      )
    }

    function logIgnored() {
      log('No change in size detected')
    }

    function checkDownSizing() {
      if (isForceResizableEvent() && isForceResizableCalcMode()) {
        resetIFrame(triggerEventDesc)
      } else if (!(triggerEvent in { interval: 1 })) {
        logIgnored()
      }
    }

    var currentHeight, currentWidth

    if (isSizeChangeDetected() || 'init' === triggerEvent) {
      lockTrigger()
      resizeIFrame()
    } else {
      checkDownSizing()
    }
  }

  var sizeIFrameThrottled = throttle(sizeIFrame)

  function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth) {
    function recordTrigger() {
      if (!(triggerEvent in { reset: 1, resetPage: 1, init: 1 })) {
        log('Trigger event: ' + triggerEventDesc)
      }
    }

    function isDoubleFiredEvent() {
      return triggerLocked && triggerEvent in doubleEventList
    }

    if (!isDoubleFiredEvent()) {
      recordTrigger()
      if (triggerEvent === 'init') {
        sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth)
      } else {
        sizeIFrameThrottled(
          triggerEvent,
          triggerEventDesc,
          customHeight,
          customWidth
        )
      }
    } else {
      log('Trigger event cancelled: ' + triggerEvent)
    }
  }

  function lockTrigger() {
    if (!triggerLocked) {
      triggerLocked = true
      log('Trigger event lock on')
    }
    clearTimeout(triggerLockedTimer)
    triggerLockedTimer = setTimeout(function() {
      triggerLocked = false
      log('Trigger event lock off')
      log('--')
    }, eventCancelTimer)
  }

  function triggerReset(triggerEvent) {
    height = getHeight[heightCalcMode]()
    width = getWidth[widthCalcMode]()

    sendMsg(height, width, triggerEvent)
  }

  function resetIFrame(triggerEventDesc) {
    var hcm = heightCalcMode
    heightCalcMode = heightCalcModeDefault

    log('Reset trigger event: ' + triggerEventDesc)
    lockTrigger()
    triggerReset('reset')

    heightCalcMode = hcm
  }

  function sendMsg(height, width, triggerEvent, msg, targetOrigin) {
    function setTargetOrigin() {
      if (undefined === targetOrigin) {
        targetOrigin = targetOriginDefault
      } else {
        log('Message targetOrigin: ' + targetOrigin)
      }
    }

    function sendToParent() {
      var size = height + ':' + width,
        message =
          myID +
          ':' +
          size +
          ':' +
          triggerEvent +
          (undefined !== msg ? ':' + msg : '')

      log('Sending message to host page (' + message + ')')
      target.postMessage(msgID + message, targetOrigin)
    }

    if (true === sendPermit) {
      setTargetOrigin()
      sendToParent()
    }
  }

  function receiver(event) {
    var processRequestFromParent = {
      init: function initFromParent() {
        initMsg = event.data
        target = event.source

        init()
        firstRun = false
        setTimeout(function() {
          initLock = false
        }, eventCancelTimer)
      },

      reset: function resetFromParent() {
        if (!initLock) {
          log('Page size reset by host page')
          triggerReset('resetPage')
        } else {
          log('Page reset ignored by init')
        }
      },

      resize: function resizeFromParent() {
        sendSize('resizeParent', 'Parent window requested size check')
      },

      moveToAnchor: function moveToAnchorF() {
        inPageLinks.findTarget(getData())
      },
      inPageLink: function inPageLinkF() {
        this.moveToAnchor()
      }, // Backward compatability

      pageInfo: function pageInfoFromParent() {
        var msgBody = getData()
        log('PageInfoFromParent called from parent: ' + msgBody)
        onPageInfo(JSON.parse(msgBody))
        log(' --')
      },

      message: function messageFromParent() {
        var msgBody = getData()

        log('onMessage called from parent: ' + msgBody)
        // eslint-disable-next-line sonarjs/no-extra-arguments
        onMessage(JSON.parse(msgBody))
        log(' --')
      }
    }

    function isMessageForUs() {
      return msgID === ('' + event.data).substr(0, msgIdLen) // ''+ Protects against non-string messages
    }

    function getMessageType() {
      return event.data.split(']')[1].split(':')[0]
    }

    function getData() {
      return event.data.substr(event.data.indexOf(':') + 1)
    }

    function isMiddleTier() {
      return (
        (!( true && module.exports) &&
          'iFrameResize' in window) ||
        ('jQuery' in window && 'iFrameResize' in window.jQuery.prototype)
      )
    }

    function isInitMsg() {
      // Test if this message is from a child below us. This is an ugly test, however, updating
      // the message format would break backwards compatibity.
      return event.data.split(':')[2] in { true: 1, false: 1 }
    }

    function callFromParent() {
      var messageType = getMessageType()

      if (messageType in processRequestFromParent) {
        processRequestFromParent[messageType]()
      } else if (!isMiddleTier() && !isInitMsg()) {
        warn('Unexpected message (' + event.data + ')')
      }
    }

    function processMessage() {
      if (false === firstRun) {
        callFromParent()
      } else if (isInitMsg()) {
        processRequestFromParent.init()
      } else {
        log(
          'Ignored message of type "' +
            getMessageType() +
            '". Received before initialization.'
        )
      }
    }

    if (isMessageForUs()) {
      processMessage()
    }
  }

  // Normally the parent kicks things off when it detects the iFrame has loaded.
  // If this script is async-loaded, then tell parent page to retry init.
  function chkLateLoaded() {
    if ('loading' !== document.readyState) {
      window.parent.postMessage('[iFrameResizerChild]Ready', '*')
    }
  }

  addEventListener(window, 'message', receiver)
  addEventListener(window, 'readystatechange', chkLateLoaded)
  chkLateLoaded()

  
})()


/***/ }),

/***/ "./node_modules/iframe-resizer/js/iframeResizer.js":
/*!*********************************************************!*\
  !*** ./node_modules/iframe-resizer/js/iframeResizer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * File: iframeResizer.js
 * Desc: Force iframes to size to content.
 * Requires: iframeResizer.contentWindow.js to be loaded into the target frame.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 * Contributor: Jure Mav - jure.mav@gmail.com
 * Contributor: Reed Dadoune - reed@dadoune.com
 */

// eslint-disable-next-line sonarjs/cognitive-complexity, no-shadow-restricted-names
;(function(undefined) {
  if (typeof window === 'undefined') return // don't run for server side render

  var count = 0,
    logEnabled = false,
    hiddenCheckEnabled = false,
    msgHeader = 'message',
    msgHeaderLen = msgHeader.length,
    msgId = '[iFrameSizer]', // Must match iframe msg ID
    msgIdLen = msgId.length,
    pagePosition = null,
    requestAnimationFrame = window.requestAnimationFrame,
    resetRequiredMethods = {
      max: 1,
      scroll: 1,
      bodyScroll: 1,
      documentElementScroll: 1
    },
    settings = {},
    timer = null,
    defaults = {
      autoResize: true,
      bodyBackground: null,
      bodyMargin: null,
      bodyMarginV1: 8,
      bodyPadding: null,
      checkOrigin: true,
      inPageLinks: false,
      enablePublicMethods: true,
      heightCalculationMethod: 'bodyOffset',
      id: 'iFrameResizer',
      interval: 32,
      log: false,
      maxHeight: Infinity,
      maxWidth: Infinity,
      minHeight: 0,
      minWidth: 0,
      resizeFrom: 'parent',
      scrolling: false,
      sizeHeight: true,
      sizeWidth: false,
      warningTimeout: 5000,
      tolerance: 0,
      widthCalculationMethod: 'scroll',
      onClosed: function() {},
      onInit: function() {},
      onMessage: function() {
        warn('onMessage function not defined')
      },
      onResized: function() {},
      onScroll: function() {
        return true
      }
    }

  function getMutationObserver() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    )
  }

  function addEventListener(el, evt, func) {
    el.addEventListener(evt, func, false)
  }

  function removeEventListener(el, evt, func) {
    el.removeEventListener(evt, func, false)
  }

  function setupRequestAnimationFrame() {
    var vendors = ['moz', 'webkit', 'o', 'ms']
    var x

    // Remove vendor prefixing if prefixed and break early if not
    for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
      requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    }

    if (!requestAnimationFrame) {
      log('setup', 'RequestAnimationFrame not supported')
    }
  }

  function getMyID(iframeId) {
    var retStr = 'Host page: ' + iframeId

    if (window.top !== window.self) {
      if (window.parentIFrame && window.parentIFrame.getId) {
        retStr = window.parentIFrame.getId() + ': ' + iframeId
      } else {
        retStr = 'Nested host page: ' + iframeId
      }
    }

    return retStr
  }

  function formatLogHeader(iframeId) {
    return msgId + '[' + getMyID(iframeId) + ']'
  }

  function isLogEnabled(iframeId) {
    return settings[iframeId] ? settings[iframeId].log : logEnabled
  }

  function log(iframeId, msg) {
    output('log', iframeId, msg, isLogEnabled(iframeId))
  }

  function info(iframeId, msg) {
    output('info', iframeId, msg, isLogEnabled(iframeId))
  }

  function warn(iframeId, msg) {
    output('warn', iframeId, msg, true)
  }

  function output(type, iframeId, msg, enabled) {
    if (true === enabled && 'object' === typeof window.console) {
      // eslint-disable-next-line no-console
      console[type](formatLogHeader(iframeId), msg)
    }
  }

  function iFrameListener(event) {
    function resizeIFrame() {
      function resize() {
        setSize(messageData)
        setPagePosition(iframeId)
        on('onResized', messageData)
      }

      ensureInRange('Height')
      ensureInRange('Width')

      syncResize(resize, messageData, 'init')
    }

    function processMsg() {
      var data = msg.substr(msgIdLen).split(':')

      return {
        iframe: settings[data[0]] && settings[data[0]].iframe,
        id: data[0],
        height: data[1],
        width: data[2],
        type: data[3]
      }
    }

    function ensureInRange(Dimension) {
      var max = Number(settings[iframeId]['max' + Dimension]),
        min = Number(settings[iframeId]['min' + Dimension]),
        dimension = Dimension.toLowerCase(),
        size = Number(messageData[dimension])

      log(iframeId, 'Checking ' + dimension + ' is in range ' + min + '-' + max)

      if (size < min) {
        size = min
        log(iframeId, 'Set ' + dimension + ' to min value')
      }

      if (size > max) {
        size = max
        log(iframeId, 'Set ' + dimension + ' to max value')
      }

      messageData[dimension] = '' + size
    }

    function isMessageFromIFrame() {
      function checkAllowedOrigin() {
        function checkList() {
          var i = 0,
            retCode = false

          log(
            iframeId,
            'Checking connection is from allowed list of origins: ' +
              checkOrigin
          )

          for (; i < checkOrigin.length; i++) {
            if (checkOrigin[i] === origin) {
              retCode = true
              break
            }
          }
          return retCode
        }

        function checkSingle() {
          var remoteHost = settings[iframeId] && settings[iframeId].remoteHost
          log(iframeId, 'Checking connection is from: ' + remoteHost)
          return origin === remoteHost
        }

        return checkOrigin.constructor === Array ? checkList() : checkSingle()
      }

      var origin = event.origin,
        checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin

      if (checkOrigin && '' + origin !== 'null' && !checkAllowedOrigin()) {
        throw new Error(
          'Unexpected message received from: ' +
            origin +
            ' for ' +
            messageData.iframe.id +
            '. Message was: ' +
            event.data +
            '. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.'
        )
      }

      return true
    }

    function isMessageForUs() {
      return (
        msgId === ('' + msg).substr(0, msgIdLen) &&
        msg.substr(msgIdLen).split(':')[0] in settings
      ) // ''+Protects against non-string msg
    }

    function isMessageFromMetaParent() {
      // Test if this message is from a parent above us. This is an ugly test, however, updating
      // the message format would break backwards compatibity.
      var retCode = messageData.type in { true: 1, false: 1, undefined: 1 }

      if (retCode) {
        log(iframeId, 'Ignoring init message from meta parent page')
      }

      return retCode
    }

    function getMsgBody(offset) {
      return msg.substr(msg.indexOf(':') + msgHeaderLen + offset)
    }

    function forwardMsgFromIFrame(msgBody) {
      log(
        iframeId,
        'onMessage passed: {iframe: ' +
          messageData.iframe.id +
          ', message: ' +
          msgBody +
          '}'
      )
      on('onMessage', {
        iframe: messageData.iframe,
        message: JSON.parse(msgBody)
      })
      log(iframeId, '--')
    }

    function getPageInfo() {
      var bodyPosition = document.body.getBoundingClientRect(),
        iFramePosition = messageData.iframe.getBoundingClientRect()

      return JSON.stringify({
        iframeHeight: iFramePosition.height,
        iframeWidth: iFramePosition.width,
        clientHeight: Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        ),
        clientWidth: Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
        offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
        scrollTop: window.pageYOffset,
        scrollLeft: window.pageXOffset,
        documentHeight: document.documentElement.clientHeight,
        documentWidth: document.documentElement.clientWidth,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      })
    }

    function sendPageInfoToIframe(iframe, iframeId) {
      function debouncedTrigger() {
        trigger('Send Page Info', 'pageInfo:' + getPageInfo(), iframe, iframeId)
      }
      debounceFrameEvents(debouncedTrigger, 32, iframeId)
    }

    function startPageInfoMonitor() {
      function setListener(type, func) {
        function sendPageInfo() {
          if (settings[id]) {
            sendPageInfoToIframe(settings[id].iframe, id)
          } else {
            stop()
          }
        }

        ;['scroll', 'resize'].forEach(function(evt) {
          log(id, type + evt + ' listener for sendPageInfo')
          func(window, evt, sendPageInfo)
        })
      }

      function stop() {
        setListener('Remove ', removeEventListener)
      }

      function start() {
        setListener('Add ', addEventListener)
      }

      var id = iframeId // Create locally scoped copy of iFrame ID

      start()

      if (settings[id]) {
        settings[id].stopPageInfo = stop
      }
    }

    function stopPageInfoMonitor() {
      if (settings[iframeId] && settings[iframeId].stopPageInfo) {
        settings[iframeId].stopPageInfo()
        delete settings[iframeId].stopPageInfo
      }
    }

    function checkIFrameExists() {
      var retBool = true

      if (null === messageData.iframe) {
        warn(iframeId, 'IFrame (' + messageData.id + ') not found')
        retBool = false
      }
      return retBool
    }

    function getElementPosition(target) {
      var iFramePosition = target.getBoundingClientRect()

      getPagePosition(iframeId)

      return {
        x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
        y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
      }
    }

    function scrollRequestFromChild(addOffset) {
      /* istanbul ignore next */ // Not testable in Karma
      function reposition() {
        pagePosition = newPosition
        scrollTo()
        log(iframeId, '--')
      }

      function calcOffset() {
        return {
          x: Number(messageData.width) + offset.x,
          y: Number(messageData.height) + offset.y
        }
      }

      function scrollParent() {
        if (window.parentIFrame) {
          window.parentIFrame['scrollTo' + (addOffset ? 'Offset' : '')](
            newPosition.x,
            newPosition.y
          )
        } else {
          warn(
            iframeId,
            'Unable to scroll to requested position, window.parentIFrame not found'
          )
        }
      }

      var offset = addOffset
          ? getElementPosition(messageData.iframe)
          : { x: 0, y: 0 },
        newPosition = calcOffset()

      log(
        iframeId,
        'Reposition requested from iFrame (offset x:' +
          offset.x +
          ' y:' +
          offset.y +
          ')'
      )

      if (window.top !== window.self) {
        scrollParent()
      } else {
        reposition()
      }
    }

    function scrollTo() {
      if (false !== on('onScroll', pagePosition)) {
        setPagePosition(iframeId)
      } else {
        unsetPagePosition()
      }
    }

    function findTarget(location) {
      function jumpToTarget() {
        var jumpPosition = getElementPosition(target)

        log(
          iframeId,
          'Moving to in page link (#' +
            hash +
            ') at x: ' +
            jumpPosition.x +
            ' y: ' +
            jumpPosition.y
        )
        pagePosition = {
          x: jumpPosition.x,
          y: jumpPosition.y
        }

        scrollTo()
        log(iframeId, '--')
      }

      function jumpToParent() {
        if (window.parentIFrame) {
          window.parentIFrame.moveToAnchor(hash)
        } else {
          log(
            iframeId,
            'In page link #' +
              hash +
              ' not found and window.parentIFrame not found'
          )
        }
      }

      var hash = location.split('#')[1] || '',
        hashData = decodeURIComponent(hash),
        target =
          document.getElementById(hashData) ||
          document.getElementsByName(hashData)[0]

      if (target) {
        jumpToTarget()
      } else if (window.top !== window.self) {
        jumpToParent()
      } else {
        log(iframeId, 'In page link #' + hash + ' not found')
      }
    }

    function on(funcName, val) {
      return chkEvent(iframeId, funcName, val)
    }

    function actionMsg() {
      if (settings[iframeId] && settings[iframeId].firstRun) firstRun()

      switch (messageData.type) {
        case 'close':
          if (settings[iframeId].closeRequeston)
            chkEvent(iframeId, 'onCloseRequest', settings[iframeId].iframe)
          else closeIFrame(messageData.iframe)
          break

        case 'message':
          forwardMsgFromIFrame(getMsgBody(6))
          break

        case 'scrollTo':
          scrollRequestFromChild(false)
          break

        case 'scrollToOffset':
          scrollRequestFromChild(true)
          break

        case 'pageInfo':
          sendPageInfoToIframe(
            settings[iframeId] && settings[iframeId].iframe,
            iframeId
          )
          startPageInfoMonitor()
          break

        case 'pageInfoStop':
          stopPageInfoMonitor()
          break

        case 'inPageLink':
          findTarget(getMsgBody(9))
          break

        case 'reset':
          resetIFrame(messageData)
          break

        case 'init':
          resizeIFrame()
          on('onInit', messageData.iframe)
          break

        default:
          resizeIFrame()
      }
    }

    function hasSettings(iframeId) {
      var retBool = true

      if (!settings[iframeId]) {
        retBool = false
        warn(
          messageData.type +
            ' No settings for ' +
            iframeId +
            '. Message was: ' +
            msg
        )
      }

      return retBool
    }

    function iFrameReadyMsgReceived() {
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (var iframeId in settings) {
        trigger(
          'iFrame requested init',
          createOutgoingMsg(iframeId),
          document.getElementById(iframeId),
          iframeId
        )
      }
    }

    function firstRun() {
      if (settings[iframeId]) {
        settings[iframeId].firstRun = false
      }
    }

    var msg = event.data,
      messageData = {},
      iframeId = null

    if ('[iFrameResizerChild]Ready' === msg) {
      iFrameReadyMsgReceived()
    } else if (isMessageForUs()) {
      messageData = processMsg()
      iframeId = messageData.id
      if (settings[iframeId]) {
        settings[iframeId].loaded = true
      }

      if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
        log(iframeId, 'Received: ' + msg)

        if (checkIFrameExists() && isMessageFromIFrame()) {
          actionMsg()
        }
      }
    } else {
      info(iframeId, 'Ignored: ' + msg)
    }
  }

  function chkEvent(iframeId, funcName, val) {
    var func = null,
      retVal = null

    if (settings[iframeId]) {
      func = settings[iframeId][funcName]

      if ('function' === typeof func) {
        retVal = func(val)
      } else {
        throw new TypeError(
          funcName + ' on iFrame[' + iframeId + '] is not a function'
        )
      }
    }

    return retVal
  }

  function removeIframeListeners(iframe) {
    var iframeId = iframe.id
    delete settings[iframeId]
  }

  function closeIFrame(iframe) {
    var iframeId = iframe.id
    log(iframeId, 'Removing iFrame: ' + iframeId)

    try {
      // Catch race condition error with React
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe)
      }
    } catch (error) {
      warn(error)
    }

    chkEvent(iframeId, 'onClosed', iframeId)
    log(iframeId, '--')
    removeIframeListeners(iframe)
  }

  function getPagePosition(iframeId) {
    if (null === pagePosition) {
      pagePosition = {
        x:
          window.pageXOffset !== undefined
            ? window.pageXOffset
            : document.documentElement.scrollLeft,
        y:
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : document.documentElement.scrollTop
      }
      log(
        iframeId,
        'Get page position: ' + pagePosition.x + ',' + pagePosition.y
      )
    }
  }

  function setPagePosition(iframeId) {
    if (null !== pagePosition) {
      window.scrollTo(pagePosition.x, pagePosition.y)
      log(
        iframeId,
        'Set page position: ' + pagePosition.x + ',' + pagePosition.y
      )
      unsetPagePosition()
    }
  }

  function unsetPagePosition() {
    pagePosition = null
  }

  function resetIFrame(messageData) {
    function reset() {
      setSize(messageData)
      trigger('reset', 'reset', messageData.iframe, messageData.id)
    }

    log(
      messageData.id,
      'Size reset requested by ' +
        ('init' === messageData.type ? 'host page' : 'iFrame')
    )
    getPagePosition(messageData.id)
    syncResize(reset, messageData, 'reset')
  }

  function setSize(messageData) {
    function setDimension(dimension) {
      if (!messageData.id) {
        log('undefined', 'messageData id not set')
        return
      }
      messageData.iframe.style[dimension] = messageData[dimension] + 'px'
      log(
        messageData.id,
        'IFrame (' +
          iframeId +
          ') ' +
          dimension +
          ' set to ' +
          messageData[dimension] +
          'px'
      )
    }

    function chkZero(dimension) {
      // FireFox sets dimension of hidden iFrames to zero.
      // So if we detect that set up an event to check for
      // when iFrame becomes visible.

      /* istanbul ignore next */ // Not testable in PhantomJS
      if (!hiddenCheckEnabled && '0' === messageData[dimension]) {
        hiddenCheckEnabled = true
        log(iframeId, 'Hidden iFrame detected, creating visibility listener')
        fixHiddenIFrames()
      }
    }

    function processDimension(dimension) {
      setDimension(dimension)
      chkZero(dimension)
    }

    var iframeId = messageData.iframe.id

    if (settings[iframeId]) {
      if (settings[iframeId].sizeHeight) {
        processDimension('height')
      }
      if (settings[iframeId].sizeWidth) {
        processDimension('width')
      }
    }
  }

  function syncResize(func, messageData, doNotSync) {
    /* istanbul ignore if */ // Not testable in PhantomJS
    if (doNotSync !== messageData.type && requestAnimationFrame) {
      log(messageData.id, 'Requesting animation frame')
      requestAnimationFrame(func)
    } else {
      func()
    }
  }

  function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
    function postMessageToIFrame() {
      var target = settings[id] && settings[id].targetOrigin
      log(
        id,
        '[' +
          calleeMsg +
          '] Sending msg to iframe[' +
          id +
          '] (' +
          msg +
          ') targetOrigin: ' +
          target
      )
      iframe.contentWindow.postMessage(msgId + msg, target)
    }

    function iFrameNotFound() {
      warn(id, '[' + calleeMsg + '] IFrame(' + id + ') not found')
    }

    function chkAndSend() {
      if (
        iframe &&
        'contentWindow' in iframe &&
        null !== iframe.contentWindow
      ) {
        // Null test for PhantomJS
        postMessageToIFrame()
      } else {
        iFrameNotFound()
      }
    }

    function warnOnNoResponse() {
      function warning() {
        if (settings[id] && !settings[id].loaded && !errorShown) {
          errorShown = true
          warn(
            id,
            'IFrame has not responded within ' +
              settings[id].warningTimeout / 1000 +
              ' seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.'
          )
        }
      }

      if (
        !!noResponseWarning &&
        settings[id] &&
        !!settings[id].warningTimeout
      ) {
        settings[id].msgTimeout = setTimeout(
          warning,
          settings[id].warningTimeout
        )
      }
    }

    var errorShown = false

    id = id || iframe.id

    if (settings[id]) {
      chkAndSend()
      warnOnNoResponse()
    }
  }

  function createOutgoingMsg(iframeId) {
    return (
      iframeId +
      ':' +
      settings[iframeId].bodyMarginV1 +
      ':' +
      settings[iframeId].sizeWidth +
      ':' +
      settings[iframeId].log +
      ':' +
      settings[iframeId].interval +
      ':' +
      settings[iframeId].enablePublicMethods +
      ':' +
      settings[iframeId].autoResize +
      ':' +
      settings[iframeId].bodyMargin +
      ':' +
      settings[iframeId].heightCalculationMethod +
      ':' +
      settings[iframeId].bodyBackground +
      ':' +
      settings[iframeId].bodyPadding +
      ':' +
      settings[iframeId].tolerance +
      ':' +
      settings[iframeId].inPageLinks +
      ':' +
      settings[iframeId].resizeFrom +
      ':' +
      settings[iframeId].widthCalculationMethod
    )
  }

  function setupIFrame(iframe, options) {
    function setLimits() {
      function addStyle(style) {
        if (
          Infinity !== settings[iframeId][style] &&
          0 !== settings[iframeId][style]
        ) {
          iframe.style[style] = settings[iframeId][style] + 'px'
          log(
            iframeId,
            'Set ' + style + ' = ' + settings[iframeId][style] + 'px'
          )
        }
      }

      function chkMinMax(dimension) {
        if (
          settings[iframeId]['min' + dimension] >
          settings[iframeId]['max' + dimension]
        ) {
          throw new Error(
            'Value for min' +
              dimension +
              ' can not be greater than max' +
              dimension
          )
        }
      }

      chkMinMax('Height')
      chkMinMax('Width')

      addStyle('maxHeight')
      addStyle('minHeight')
      addStyle('maxWidth')
      addStyle('minWidth')
    }

    function newId() {
      var id = (options && options.id) || defaults.id + count++
      if (null !== document.getElementById(id)) {
        id += count++
      }
      return id
    }

    function ensureHasId(iframeId) {
      if ('' === iframeId) {
        // eslint-disable-next-line no-multi-assign
        iframe.id = iframeId = newId()
        logEnabled = (options || {}).log
        log(
          iframeId,
          'Added missing iframe ID: ' + iframeId + ' (' + iframe.src + ')'
        )
      }

      return iframeId
    }

    function setScrolling() {
      log(
        iframeId,
        'IFrame scrolling ' +
          (settings[iframeId] && settings[iframeId].scrolling
            ? 'enabled'
            : 'disabled') +
          ' for ' +
          iframeId
      )
      iframe.style.overflow =
        false === (settings[iframeId] && settings[iframeId].scrolling)
          ? 'hidden'
          : 'auto'
      switch (settings[iframeId] && settings[iframeId].scrolling) {
        case 'omit':
          break

        case true:
          iframe.scrolling = 'yes'
          break

        case false:
          iframe.scrolling = 'no'
          break

        default:
          iframe.scrolling = settings[iframeId]
            ? settings[iframeId].scrolling
            : 'no'
      }
    }

    // The V1 iFrame script expects an int, where as in V2 expects a CSS
    // string value such as '1px 3em', so if we have an int for V2, set V1=V2
    // and then convert V2 to a string PX value.
    function setupBodyMarginValues() {
      if (
        'number' ===
          typeof (settings[iframeId] && settings[iframeId].bodyMargin) ||
        '0' === (settings[iframeId] && settings[iframeId].bodyMargin)
      ) {
        settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin
        settings[iframeId].bodyMargin =
          '' + settings[iframeId].bodyMargin + 'px'
      }
    }

    function checkReset() {
      // Reduce scope of firstRun to function, because IE8's JS execution
      // context stack is borked and this value gets externally
      // changed midway through running this function!!!
      var firstRun = settings[iframeId] && settings[iframeId].firstRun,
        resetRequertMethod =
          settings[iframeId] &&
          settings[iframeId].heightCalculationMethod in resetRequiredMethods

      if (!firstRun && resetRequertMethod) {
        resetIFrame({ iframe: iframe, height: 0, width: 0, type: 'init' })
      }
    }

    function setupIFrameObject() {
      if (settings[iframeId]) {
        settings[iframeId].iframe.iFrameResizer = {
          close: closeIFrame.bind(null, settings[iframeId].iframe),

          removeListeners: removeIframeListeners.bind(
            null,
            settings[iframeId].iframe
          ),

          resize: trigger.bind(
            null,
            'Window resize',
            'resize',
            settings[iframeId].iframe
          ),

          moveToAnchor: function(anchor) {
            trigger(
              'Move to anchor',
              'moveToAnchor:' + anchor,
              settings[iframeId].iframe,
              iframeId
            )
          },

          sendMessage: function(message) {
            message = JSON.stringify(message)
            trigger(
              'Send Message',
              'message:' + message,
              settings[iframeId].iframe,
              iframeId
            )
          }
        }
      }
    }

    // We have to call trigger twice, as we can not be sure if all
    // iframes have completed loading when this code runs. The
    // event listener also catches the page changing in the iFrame.
    function init(msg) {
      function iFrameLoaded() {
        trigger('iFrame.onload', msg, iframe, undefined, true)
        checkReset()
      }

      function createDestroyObserver(MutationObserver) {
        if (!iframe.parentNode) {
          return
        }

        var destroyObserver = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            var removedNodes = Array.prototype.slice.call(mutation.removedNodes) // Transform NodeList into an Array
            removedNodes.forEach(function(removedNode) {
              if (removedNode === iframe) {
                closeIFrame(iframe)
              }
            })
          })
        })
        destroyObserver.observe(iframe.parentNode, {
          childList: true
        })
      }

      var MutationObserver = getMutationObserver()
      if (MutationObserver) {
        createDestroyObserver(MutationObserver)
      }

      addEventListener(iframe, 'load', iFrameLoaded)
      trigger('init', msg, iframe, undefined, true)
    }

    function checkOptions(options) {
      if ('object' !== typeof options) {
        throw new TypeError('Options is not an object')
      }
    }

    function copyOptions(options) {
      // eslint-disable-next-line no-restricted-syntax
      for (var option in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, option)) {
          settings[iframeId][option] = Object.prototype.hasOwnProperty.call(
            options,
            option
          )
            ? options[option]
            : defaults[option]
        }
      }
    }

    function getTargetOrigin(remoteHost) {
      return '' === remoteHost || 'file://' === remoteHost ? '*' : remoteHost
    }

    function depricate(key) {
      var splitName = key.split('Callback')

      if (splitName.length === 2) {
        var name =
          'on' + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1)
        this[name] = this[key]
        delete this[key]
        warn(
          iframeId,
          "Deprecated: '" +
            key +
            "' has been renamed '" +
            name +
            "'. The old method will be removed in the next major version."
        )
      }
    }

    function processOptions(options) {
      options = options || {}
      settings[iframeId] = {
        firstRun: true,
        iframe: iframe,
        remoteHost: iframe.src
          .split('/')
          .slice(0, 3)
          .join('/')
      }

      checkOptions(options)
      Object.keys(options).forEach(depricate, options)
      copyOptions(options)

      if (settings[iframeId]) {
        settings[iframeId].targetOrigin =
          true === settings[iframeId].checkOrigin
            ? getTargetOrigin(settings[iframeId].remoteHost)
            : '*'
      }
    }

    function beenHere() {
      return iframeId in settings && 'iFrameResizer' in iframe
    }

    var iframeId = ensureHasId(iframe.id)

    if (!beenHere()) {
      processOptions(options)
      setScrolling()
      setLimits()
      setupBodyMarginValues()
      init(createOutgoingMsg(iframeId))
      setupIFrameObject()
    } else {
      warn(iframeId, 'Ignored iFrame, already setup.')
    }
  }

  function debouce(fn, time) {
    if (null === timer) {
      timer = setTimeout(function() {
        timer = null
        fn()
      }, time)
    }
  }

  var frameTimer = {}
  function debounceFrameEvents(fn, time, frameId) {
    if (!frameTimer[frameId]) {
      frameTimer[frameId] = setTimeout(function() {
        frameTimer[frameId] = null
        fn()
      }, time)
    }
  }

  // Not testable in PhantomJS
  /* istanbul ignore next */

  function fixHiddenIFrames() {
    function checkIFrames() {
      function checkIFrame(settingId) {
        function chkDimension(dimension) {
          return (
            '0px' ===
            (settings[settingId] && settings[settingId].iframe.style[dimension])
          )
        }

        function isVisible(el) {
          return null !== el.offsetParent
        }

        if (
          settings[settingId] &&
          isVisible(settings[settingId].iframe) &&
          (chkDimension('height') || chkDimension('width'))
        ) {
          trigger(
            'Visibility change',
            'resize',
            settings[settingId].iframe,
            settingId
          )
        }
      }

      Object.keys(settings).forEach(function(key) {
        checkIFrame(settings[key])
      })
    }

    function mutationObserved(mutations) {
      log(
        'window',
        'Mutation observed: ' + mutations[0].target + ' ' + mutations[0].type
      )
      debouce(checkIFrames, 16)
    }

    function createMutationObserver() {
      var target = document.querySelector('body'),
        config = {
          attributes: true,
          attributeOldValue: false,
          characterData: true,
          characterDataOldValue: false,
          childList: true,
          subtree: true
        },
        observer = new MutationObserver(mutationObserved)

      observer.observe(target, config)
    }

    var MutationObserver = getMutationObserver()
    if (MutationObserver) {
      createMutationObserver()
    }
  }

  function resizeIFrames(event) {
    function resize() {
      sendTriggerMsg('Window ' + event, 'resize')
    }

    log('window', 'Trigger event: ' + event)
    debouce(resize, 16)
  }

  // Not testable in PhantomJS
  /* istanbul ignore next */
  function tabVisible() {
    function resize() {
      sendTriggerMsg('Tab Visable', 'resize')
    }

    if ('hidden' !== document.visibilityState) {
      log('document', 'Trigger event: Visiblity change')
      debouce(resize, 16)
    }
  }

  function sendTriggerMsg(eventName, event) {
    function isIFrameResizeEnabled(iframeId) {
      return (
        settings[iframeId] &&
        'parent' === settings[iframeId].resizeFrom &&
        settings[iframeId].autoResize &&
        !settings[iframeId].firstRun
      )
    }

    Object.keys(settings).forEach(function(iframeId) {
      if (isIFrameResizeEnabled(iframeId)) {
        trigger(eventName, event, document.getElementById(iframeId), iframeId)
      }
    })
  }

  function setupEventListeners() {
    addEventListener(window, 'message', iFrameListener)

    addEventListener(window, 'resize', function() {
      resizeIFrames('resize')
    })

    addEventListener(document, 'visibilitychange', tabVisible)

    addEventListener(document, '-webkit-visibilitychange', tabVisible)
  }

  function factory() {
    function init(options, element) {
      function chkType() {
        if (!element.tagName) {
          throw new TypeError('Object is not a valid DOM element')
        } else if ('IFRAME' !== element.tagName.toUpperCase()) {
          throw new TypeError(
            'Expected <IFRAME> tag, found <' + element.tagName + '>'
          )
        }
      }

      if (element) {
        chkType()
        setupIFrame(element, options)
        iFrames.push(element)
      }
    }

    function warnDeprecatedOptions(options) {
      if (options && options.enablePublicMethods) {
        warn(
          'enablePublicMethods option has been removed, public methods are now always available in the iFrame'
        )
      }
    }

    var iFrames

    setupRequestAnimationFrame()
    setupEventListeners()

    return function iFrameResizeF(options, target) {
      iFrames = [] // Only return iFrames past in on this call

      warnDeprecatedOptions(options)

      switch (typeof target) {
        case 'undefined':
        case 'string':
          Array.prototype.forEach.call(
            document.querySelectorAll(target || 'iframe'),
            init.bind(undefined, options)
          )
          break

        case 'object':
          init(options, target)
          break

        default:
          throw new TypeError('Unexpected data type (' + typeof target + ')')
      }

      return iFrames
    }
  }

  function createJQueryPublicMethod($) {
    if (!$.fn) {
      info('', 'Unable to bind to jQuery, it is not fully loaded.')
    } else if (!$.fn.iFrameResize) {
      $.fn.iFrameResize = function $iFrameResizeF(options) {
        function init(index, element) {
          setupIFrame(element, options)
        }

        return this.filter('iframe')
          .each(init)
          .end()
      }
    }
  }

  if (window.jQuery) {
    createJQueryPublicMethod(window.jQuery)
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
  window.iFrameResize = window.iFrameResize || factory()
})()


/***/ }),

/***/ "./node_modules/iframe-resizer/js/index.js":
/*!*************************************************!*\
  !*** ./node_modules/iframe-resizer/js/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.iframeResizer = __webpack_require__(/*! ./iframeResizer */ "./node_modules/iframe-resizer/js/iframeResizer.js")
exports.iframeResizerContentWindow = __webpack_require__(/*! ./iframeResizer.contentWindow */ "./node_modules/iframe-resizer/js/iframeResizer.contentWindow.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nivo_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nivo/colors */ "./node_modules/@nivo/colors/dist/nivo-colors.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nivo/bar */ "./node_modules/@nivo/bar/dist/nivo-bar.esm.js");
/* harmony import */ var iframe_resizer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! iframe-resizer */ "./node_modules/iframe-resizer/index.js");
/* harmony import */ var iframe_resizer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(iframe_resizer__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/home/thomas/repos/mes-aides-stats/next/pages/index.js";








console.log(iframe_resizer__WEBPACK_IMPORTED_MODULE_13___default.a);
var catMapping = {
  show: {
    cat: 'Affiché'
  },
  click: {
    cat: 'Cliqué'
  },
  form: {
    cat: 'Actionné',
    name: 'Formulaire'
  },
  teleservice: {
    cat: 'Actionné',
    name: 'Téléservice'
  },
  instructions: {
    cat: 'Actionné',
    name: 'Instructions'
  },
  link: {
    cat: 'Actionné',
    name: 'Lien'
  },
  msa: {
    cat: 'Actionné',
    name: 'MSA'
  },
  'show-unexpected': {
    cat: 'Incompris'
  },
  close: {
    cat: 'Expliqué',
    name: 'Fermé'
  },
  'retour-logement': {
    cat: 'Expliqué',
    name: 'Retour page logement'
  },
  'simulation-caf': {
    cat: 'Expliqué',
    name: 'Simulateur CAF'
  },
  email: {
    cat: 'Expliqué',
    name: 'Email'
  }
};
var cats = ['Affiché', 'Cliqué', 'Actionné', 'Incompris', 'Expliqué'];

var _colors = Object(d3_scale__WEBPACK_IMPORTED_MODULE_11__["scaleOrdinal"])(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["categoricalColorSchemes"].category10);

function apply(prop, base, shouldShow) {
  var result = base.subtable.reduce(function (accum, table) {
    if (!catMapping[table.label]) {
      return accum;
    }

    accum[catMapping[table.label].cat] = accum[catMapping[table.label].cat] || {
      category: catMapping[table.label].cat
    };
    accum[catMapping[table.label].cat][table.label] = table[prop];
    return accum;
  }, {});

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(shouldShow).forEach(function (k) {
    if (!shouldShow[k]) {
      delete result[k];
    }
  });

  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(result);
}

var sources = {
  //    nb_uniq_visitors: 'Visiteur unique', // Non fonctionnel avec les données mensuelles
  nb_visits: 'Visite',
  nb_events: 'Évènement'
};
var periods = {
  day: 'Hier',
  month: 'Mois en cours' // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.

};

var MyResponsiveBar = function MyResponsiveBar(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_12__["ResponsiveBar"], {
    data: data,
    keys: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(catMapping),
    indexBy: "category",
    margin: {
      top: 15,
      right: 10,
      bottom: 50,
      left: 60
    },
    padding: 0.3,
    colors: function colors(_ref2) {
      var id = _ref2.id;
      return _colors(id);
    },
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    animate: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  });
};

function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      benefits = _useState2[0],
      setBenefits = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('day'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      period = _useState4[0],
      setPeriod = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('nb_visits'),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      source = _useState6[0],
      setSource = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(cats.reduce(function (accum, c) {
    accum[c] = true;
    return accum;
  }, {})),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      show = _useState8[0],
      setShow = _useState8[1];

  function fetchData(_x) {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(period) {
      var res, json;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://stats.data.gouv.fr/index.php?date=yesterday&expanded=1&filter_limit=50&format=JSON&idSite=9&method=Events.getName&module=API&period=".concat(period));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              json = _context.sent;
              setBenefits(json);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setBenefits([]);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _fetchData.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    fetchData(period);
  }, []);
  var handlePeriodChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    setPeriod(e.target.value);
    fetchData(e.target.value);
  });
  var handleSourceChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    setSource(e.target.value);
  });
  var handleShowChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (cat, value) {
    setShow(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, show, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cat, value)));
  });
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1655332064",
    __self: this
  }, ".chart.jsx-1655332064{height:300px;}.list.jsx-1655332064{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.cell.jsx-1655332064{width:300px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}h3.jsx-1655332064{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSG9CLEFBRzhCLEFBR0EsQUFJRCxBQU1ILFNBQ2IsR0FOaUIsQ0FQakIsNkRBR21CLFlBS08sNkNBSjFCLGlDQUtrQyxtSEFDbEMiLCJmaWxlIjoiL2hvbWUvdGhvbWFzL3JlcG9zL21lcy1haWRlcy1zdGF0cy9uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2NhdGVnb3JpY2FsQ29sb3JTY2hlbWVzfSBmcm9tICdAbml2by9jb2xvcnMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgc2NhbGVPcmRpbmFsIH0gZnJvbSAnZDMtc2NhbGUnXG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJ1xuaW1wb3J0IGlmcmFtZUZlc2l6ZXIgZnJvbSAnaWZyYW1lLXJlc2l6ZXInXG5cbmNvbnNvbGUubG9nKGlmcmFtZUZlc2l6ZXIpXG5cbmNvbnN0IGNhdE1hcHBpbmcgPSB7XG4gICAgc2hvdzogeyBjYXQ6ICdBZmZpY2jDqScgfSxcbiAgICBjbGljazogeyBjYXQ6ICdDbGlxdcOpJyB9LFxuICAgIGZvcm06IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ0Zvcm11bGFpcmUnIH0sXG4gICAgdGVsZXNlcnZpY2U6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ1TDqWzDqXNlcnZpY2UnIH0sXG4gICAgaW5zdHJ1Y3Rpb25zOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdJbnN0cnVjdGlvbnMnIH0sXG4gICAgbGluazogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnTGllbicgfSxcbiAgICBtc2E6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ01TQScgfSxcbiAgICAnc2hvdy11bmV4cGVjdGVkJzogeyBjYXQ6ICdJbmNvbXByaXMnfSxcbiAgICBjbG9zZTogeyBjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnRmVybcOpJ30sXG4gICAgJ3JldG91ci1sb2dlbWVudCc6ICB7Y2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ1JldG91ciBwYWdlIGxvZ2VtZW50J30sXG4gICAgJ3NpbXVsYXRpb24tY2FmJzogIHtjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnU2ltdWxhdGV1ciBDQUYnfSxcbiAgICBlbWFpbDogeyBjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnRW1haWwnfSxcbn1cblxuY29uc3QgY2F0cyA9IFtcbiAgICAnQWZmaWNow6knLFxuICAgICdDbGlxdcOpJyxcbiAgICAnQWN0aW9ubsOpJyxcbiAgICAnSW5jb21wcmlzJyxcbiAgICAnRXhwbGlxdcOpJ1xuXVxuY29uc3QgY29sb3JzID0gc2NhbGVPcmRpbmFsKGNhdGVnb3JpY2FsQ29sb3JTY2hlbWVzLmNhdGVnb3J5MTApXG5cbmZ1bmN0aW9uIGFwcGx5KHByb3AsIGJhc2UsIHNob3VsZFNob3cpIHtcbiAgICBsZXQgcmVzdWx0ID0gYmFzZS5zdWJ0YWJsZS5yZWR1Y2UoKGFjY3VtLCB0YWJsZSkgPT4ge1xuICAgICAgICBpZiAoIWNhdE1hcHBpbmdbdGFibGUubGFiZWxdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgICAgfVxuICAgICAgICBhY2N1bVtjYXRNYXBwaW5nW3RhYmxlLmxhYmVsXS5jYXRdID0gYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XSB8fCB7XG4gICAgICAgICAgICBjYXRlZ29yeTogY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XG4gICAgICAgIH1cbiAgICAgICAgYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XVt0YWJsZS5sYWJlbF0gPSB0YWJsZVtwcm9wXVxuICAgICAgICByZXR1cm4gYWNjdW1cbiAgICB9LCB7fSlcblxuICAgIE9iamVjdC5rZXlzKHNob3VsZFNob3cpLmZvckVhY2goayA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkU2hvd1trXSkge1xuICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrXVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlc3VsdClcbn1cblxuY29uc3Qgc291cmNlcyA9IHtcbi8vICAgIG5iX3VuaXFfdmlzaXRvcnM6ICdWaXNpdGV1ciB1bmlxdWUnLCAvLyBOb24gZm9uY3Rpb25uZWwgYXZlYyBsZXMgZG9ubsOpZXMgbWVuc3VlbGxlc1xuICAgIG5iX3Zpc2l0czogJ1Zpc2l0ZScsXG4gICAgbmJfZXZlbnRzOiAnw4l2w6huZW1lbnQnXG59XG5cbmNvbnN0IHBlcmlvZHMgPSB7XG4gICAgZGF5OiAnSGllcicsXG4gICAgbW9udGg6ICdNb2lzIGVuIGNvdXJzJ1xufVxuXG4vLyBtYWtlIHN1cmUgcGFyZW50IGNvbnRhaW5lciBoYXZlIGEgZGVmaW5lZCBoZWlnaHQgd2hlbiB1c2luZ1xuLy8gcmVzcG9uc2l2ZSBjb21wb25lbnQsIG90aGVyd2lzZSBoZWlnaHQgd2lsbCBiZSAwIGFuZFxuLy8gbm8gY2hhcnQgd2lsbCBiZSByZW5kZXJlZC5cbi8vIHdlYnNpdGUgZXhhbXBsZXMgc2hvd2Nhc2UgbWFueSBwcm9wZXJ0aWVzLFxuLy8geW91J2xsIG9mdGVuIHVzZSBqdXN0IGEgZmV3IG9mIHRoZW0uXG5jb25zdCBNeVJlc3BvbnNpdmVCYXIgPSAoeyBkYXRhIC8qIHNlZSBkYXRhIHRhYiAqLyB9KSA9PiAoXG4gICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAga2V5cz17T2JqZWN0LmtleXMoY2F0TWFwcGluZyl9XG4gICAgICAgIGluZGV4Qnk9XCJjYXRlZ29yeVwiXG4gICAgICAgIG1hcmdpbj17eyB0b3A6IDE1LCByaWdodDogMTAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XG4gICAgICAgIHBhZGRpbmc9ezAuM31cbiAgICAgICAgY29sb3JzPXsoeyBpZCB9KSA9PiBjb2xvcnMoaWQpfVxuICAgICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxuICAgICAgICBhbmltYXRlPXtmYWxzZX1cbiAgICAvPlxuKVxuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtiZW5lZml0cywgc2V0QmVuZWZpdHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZSgnZGF5Jyk7XG4gICAgY29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IHVzZVN0YXRlKCduYl92aXNpdHMnKTtcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShjYXRzLnJlZHVjZSgoYWNjdW0sIGMpID0+IHtcbiAgICAgICAgYWNjdW1bY10gPSB0cnVlXG4gICAgICAgIHJldHVybiBhY2N1bVxuICAgIH0sIHt9KSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShwZXJpb2QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3N0YXRzLmRhdGEuZ291di5mci9pbmRleC5waHA/ZGF0ZT15ZXN0ZXJkYXkmZXhwYW5kZWQ9MSZmaWx0ZXJfbGltaXQ9NTAmZm9ybWF0PUpTT04maWRTaXRlPTkmbWV0aG9kPUV2ZW50cy5nZXROYW1lJm1vZHVsZT1BUEkmcGVyaW9kPSR7cGVyaW9kfWApXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICAgICAgc2V0QmVuZWZpdHMoanNvbilcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzZXRCZW5lZml0cyhbXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaERhdGEocGVyaW9kKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgZmV0Y2hEYXRhKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gICAgY29uc3QgaGFuZGxlU291cmNlQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiB7XG4gICAgICAgIHNldFNvdXJjZShlLnRhcmdldC52YWx1ZSlcbiAgICB9KVxuICAgIGNvbnN0IGhhbmRsZVNob3dDaGFuZ2UgPSB1c2VDYWxsYmFjaygoY2F0LCB2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRTaG93KHsuLi5zaG93LCBbY2F0XTogdmFsdWV9KVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNlbGwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBMZXMgZ3JhcGhpcXVlcyBzdWl2YW50cyByZXByw6lzZW50ZW50IGxlcyB0YXV4IGRlIGNvbnZlcnNpb24gc3VyIGxhIHBhZ2UgZGUgcHLDqXNlbnRhdGlvbiBkZSByw6lzdWx0YXRzIHN1ciBsZSBzaW11bGF0ZXVyLlxuICAgICAgICAgICAgICAgIERpZmbDqXJlbnRzIMOpdsOobmVtZW50cyBzb250IGNhcHR1csOpcyBwb3VyIG1pZXV4IMOpdmFsdWVyIGwnaW1wYWN0IGR1IHNpbXVsYXRldXIgc3VyIGxlIG5vbi1yZWNvdXJzIGF1eCBkaXNwb3NpdGlmcyBwcsOpc2VudMOpcyBhdXggdXNhZ2Vycy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFDDqXJpb2RlIGRlIHLDqWbDqXJlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17cGVyaW9kfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwZXJpb2RzKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9PntwZXJpb2RzW2tdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VyY2UgZGVzIGRvbm7DqWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTb3VyY2VDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17c291cmNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2VzKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9Pntzb3VyY2VzW2tdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdHMubWFwKGNhdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Y2F0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3Nob3dbY2F0XX08aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2hvd1tjYXRdfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTaG93Q2hhbmdlKGNhdCwgZS50YXJnZXQuY2hlY2tlZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjYXRNYXBwaW5nKS5tYXAoY2F0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRNYXBwaW5nW2NhdElkXS5jYXQgPT09IGNhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NhdElkfT48c3BhbiBzdHlsZT17e2NvbG9yOmNvbG9ycyhjYXRJZCl9fT7il7w8L3NwYW4+Jm5ic3A7e2NhdE1hcHBpbmdbY2F0SWRdLm5hbWUgfHwgY2F0TWFwcGluZ1tjYXRJZF0uY2F0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2JlbmVmaXRzLm1hcChiID0+IHtcbiAgICAgICAgICAgIGxldCBsID0gYi5sYWJlbFxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhcHBseShzb3VyY2UsIGIsIHNob3cpXG5cbiAgICAgICAgICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bH0gY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e2x9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE15UmVzcG9uc2l2ZUJhciBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/thomas/repos/mes-aides-stats/next/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Les graphiques suivants repr\xE9sentent les taux de conversion sur la page de pr\xE9sentation de r\xE9sultats sur le simulateur. Diff\xE9rents \xE9v\xE8nements sont captur\xE9s pour mieux \xE9valuer l'impact du simulateur sur le non-recours aux dispositifs pr\xE9sent\xE9s aux usagers."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064" + " " + "cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "P\xE9riode de r\xE9f\xE9rence", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
    onChange: handlePeriodChange,
    defaultValue: period,
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(periods).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, periods[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Source des donn\xE9es", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
    onChange: handleSourceChange,
    defaultValue: source,
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(sources).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, sources[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, cats.map(function (cat) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
      key: cat,
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, show[cat], react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
      type: "checkbox",
      checked: show[cat],
      onChange: function onChange(e) {
        return handleShowChange(cat, e.target.checked);
      },
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), cat)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(catMapping).map(function (catId) {
      if (catMapping[catId].cat === cat) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: catId,
          className: "jsx-1655332064",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          style: {
            color: _colors(catId)
          },
          className: "jsx-1655332064",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, "\u25FC"), "\xA0", catMapping[catId].name || catMapping[catId].cat);
      }
    })));
  })))), benefits.map(function (b) {
    var l = b.label;
    var data = apply(source, b, show);

    if (!data.length) {
      return;
    }

    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      key: l,
      className: "jsx-1655332064" + " " + "cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, l), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "jsx-1655332064" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MyResponsiveBar, {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b137f7aa6fc65cf6818f.hot-update.js.map