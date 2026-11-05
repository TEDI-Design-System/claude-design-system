var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // <define:process.env>
  var init_define_process_env = __esm({
    "<define:process.env>"() {
    }
  });

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.React;
    }
  });

  // react-global:react-dom
  var require_react_dom = __commonJS({
    "react-global:react-dom"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.ReactDOM;
    }
  });

  // tedi-namespace:tedi-namespace
  var require_tedi_namespace = __commonJS({
    "tedi-namespace:tedi-namespace"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.Tedi;
    }
  });

  // react-global:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "react-global:react/jsx-runtime"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var R = window.React;
      function jsx3(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx3, jsxs: jsx3, jsxDEV: jsx3, Fragment: R.Fragment };
    }
  });

  // Table.preview.tsx
  var Table_preview_exports = {};
  __export(Table_preview_exports, {
    Actions: () => Actions3,
    ClickableRows: () => ClickableRows3,
    CollapsibleRows: () => CollapsibleRows2,
    CollapsibleRowsRowTrigger: () => CollapsibleRowsRowTrigger2,
    Custom: () => Custom3,
    Default: () => Default3,
    EditableValues: () => EditableValues3,
    Filters: () => Filters3,
    GroupedRows: () => GroupedRows3,
    LongTexts: () => LongTexts3,
    MergedCells: () => MergedCells3,
    NestedTable: () => NestedTable2,
    NoOutsideBorder: () => NoOutsideBorder2,
    ReorderableColumns: () => ReorderableColumns2,
    ReorderableColumnsStickyHeader: () => ReorderableColumnsStickyHeader2,
    ReorderableRows: () => ReorderableRows2,
    Responsive: () => Responsive3,
    ResponsiveCards: () => ResponsiveCards2,
    Scrollable: () => Scrollable2,
    SelectableRows: () => SelectableRows2,
    ServerSide: () => ServerSide3,
    Simple: () => Simple3,
    SingleSelectRows: () => SingleSelectRows2,
    Sizes: () => Sizes3,
    Sortable: () => Sortable3,
    StickyFirstColumn: () => StickyFirstColumn2,
    StickyHeader: () => StickyHeader2,
    StickyHeaderAndFirstColumn: () => StickyHeaderAndFirstColumn2,
    StickyLastColumn: () => StickyLastColumn2,
    Striped: () => Striped2,
    VerticalBorders: () => VerticalBorders2,
    WithColumnsMenu: () => WithColumnsMenu2,
    WithEmptyState: () => WithEmptyState2,
    WithFooter: () => WithFooter2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/table/table.stories.tsx
  var table_stories_exports = {};
  __export(table_stories_exports, {
    Actions: () => Actions,
    ClickableRows: () => ClickableRows,
    CollapsibleRows: () => CollapsibleRows,
    CollapsibleRowsRowTrigger: () => CollapsibleRowsRowTrigger,
    Custom: () => Custom,
    Default: () => Default,
    EditableValues: () => EditableValues,
    Filters: () => Filters,
    GroupedRows: () => GroupedRows,
    LongTexts: () => LongTexts,
    MergedCells: () => MergedCells,
    NestedTable: () => NestedTable,
    NoOutsideBorder: () => NoOutsideBorder,
    ReorderableColumns: () => ReorderableColumns,
    ReorderableColumnsStickyHeader: () => ReorderableColumnsStickyHeader,
    ReorderableRows: () => ReorderableRows,
    Responsive: () => Responsive,
    ResponsiveCards: () => ResponsiveCards,
    Scrollable: () => Scrollable,
    SelectableRows: () => SelectableRows,
    ServerSide: () => ServerSide,
    Simple: () => Simple,
    SingleSelectRows: () => SingleSelectRows,
    Sizes: () => Sizes,
    Sortable: () => Sortable,
    StickyFirstColumn: () => StickyFirstColumn,
    StickyHeader: () => StickyHeader,
    StickyHeaderAndFirstColumn: () => StickyHeaderAndFirstColumn,
    StickyLastColumn: () => StickyLastColumn,
    Striped: () => Striped,
    VerticalBorders: () => VerticalBorders,
    WithColumnsMenu: () => WithColumnsMenu,
    WithEmptyState: () => WithEmptyState,
    WithFooter: () => WithFooter,
    default: () => table_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // node_modules/@dnd-kit/sortable/dist/sortable.esm.js
  init_define_import_meta_env();
  init_define_process_env();
  var import_react4 = __toESM(require_react());

  // node_modules/@dnd-kit/core/dist/core.esm.js
  init_define_import_meta_env();
  init_define_process_env();
  var import_react3 = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());

  // node_modules/@dnd-kit/utilities/dist/utilities.esm.js
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react());
  var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function isWindow(element) {
    const elementString = Object.prototype.toString.call(element);
    return elementString === "[object Window]" || // In Electron context the Window object serializes to [object global]
    elementString === "[object global]";
  }
  function isNode(node) {
    return "nodeType" in node;
  }
  function getWindow(target) {
    var _target$ownerDocument, _target$ownerDocument2;
    if (!target) {
      return window;
    }
    if (isWindow(target)) {
      return target;
    }
    if (!isNode(target)) {
      return window;
    }
    return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
  }
  function isDocument(node) {
    const {
      Document
    } = getWindow(node);
    return node instanceof Document;
  }
  function isHTMLElement(node) {
    if (isWindow(node)) {
      return false;
    }
    return node instanceof getWindow(node).HTMLElement;
  }
  function isSVGElement(node) {
    return node instanceof getWindow(node).SVGElement;
  }
  function getOwnerDocument(target) {
    if (!target) {
      return document;
    }
    if (isWindow(target)) {
      return target.document;
    }
    if (!isNode(target)) {
      return document;
    }
    if (isDocument(target)) {
      return target;
    }
    if (isHTMLElement(target) || isSVGElement(target)) {
      return target.ownerDocument;
    }
    return document;
  }
  function createAdjustmentFn(modifier) {
    return function(object) {
      for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        adjustments[_key - 1] = arguments[_key];
      }
      return adjustments.reduce((accumulator, adjustment) => {
        const entries = Object.entries(adjustment);
        for (const [key, valueAdjustment] of entries) {
          const value = accumulator[key];
          if (value != null) {
            accumulator[key] = value + modifier * valueAdjustment;
          }
        }
        return accumulator;
      }, {
        ...object
      });
    };
  }
  var add = /* @__PURE__ */ createAdjustmentFn(1);
  var subtract = /* @__PURE__ */ createAdjustmentFn(-1);
  function hasViewportRelativeCoordinates(event) {
    return "clientX" in event && "clientY" in event;
  }
  function isKeyboardEvent(event) {
    if (!event) {
      return false;
    }
    const {
      KeyboardEvent
    } = getWindow(event.target);
    return KeyboardEvent && event instanceof KeyboardEvent;
  }
  function isTouchEvent(event) {
    if (!event) {
      return false;
    }
    const {
      TouchEvent
    } = getWindow(event.target);
    return TouchEvent && event instanceof TouchEvent;
  }
  function getEventCoordinates(event) {
    if (isTouchEvent(event)) {
      if (event.touches && event.touches.length) {
        const {
          clientX: x,
          clientY: y
        } = event.touches[0];
        return {
          x,
          y
        };
      } else if (event.changedTouches && event.changedTouches.length) {
        const {
          clientX: x,
          clientY: y
        } = event.changedTouches[0];
        return {
          x,
          y
        };
      }
    }
    if (hasViewportRelativeCoordinates(event)) {
      return {
        x: event.clientX,
        y: event.clientY
      };
    }
    return null;
  }

  // node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
  init_define_import_meta_env();
  init_define_process_env();
  var import_react2 = __toESM(require_react());

  // node_modules/@dnd-kit/core/dist/core.esm.js
  var Action;
  (function(Action2) {
    Action2["DragStart"] = "dragStart";
    Action2["DragMove"] = "dragMove";
    Action2["DragEnd"] = "dragEnd";
    Action2["DragCancel"] = "dragCancel";
    Action2["DragOver"] = "dragOver";
    Action2["RegisterDroppable"] = "registerDroppable";
    Action2["SetDroppableDisabled"] = "setDroppableDisabled";
    Action2["UnregisterDroppable"] = "unregisterDroppable";
  })(Action || (Action = {}));
  var defaultCoordinates = /* @__PURE__ */ Object.freeze({
    x: 0,
    y: 0
  });
  function parseTransform(transform) {
    if (transform.startsWith("matrix3d(")) {
      const transformArray = transform.slice(9, -1).split(/, /);
      return {
        x: +transformArray[12],
        y: +transformArray[13],
        scaleX: +transformArray[0],
        scaleY: +transformArray[5]
      };
    } else if (transform.startsWith("matrix(")) {
      const transformArray = transform.slice(7, -1).split(/, /);
      return {
        x: +transformArray[4],
        y: +transformArray[5],
        scaleX: +transformArray[0],
        scaleY: +transformArray[3]
      };
    }
    return null;
  }
  function inverseTransform(rect, transform, transformOrigin) {
    const parsedTransform = parseTransform(transform);
    if (!parsedTransform) {
      return rect;
    }
    const {
      scaleX,
      scaleY,
      x: translateX,
      y: translateY
    } = parsedTransform;
    const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
    const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
    const w = scaleX ? rect.width / scaleX : rect.width;
    const h = scaleY ? rect.height / scaleY : rect.height;
    return {
      width: w,
      height: h,
      top: y,
      right: x + w,
      bottom: y + h,
      left: x
    };
  }
  var defaultOptions = {
    ignoreTransform: false
  };
  function getClientRect(element, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    let rect = element.getBoundingClientRect();
    if (options.ignoreTransform) {
      const {
        transform,
        transformOrigin
      } = getWindow(element).getComputedStyle(element);
      if (transform) {
        rect = inverseTransform(rect, transform, transformOrigin);
      }
    }
    const {
      top,
      left,
      width,
      height,
      bottom,
      right
    } = rect;
    return {
      top,
      left,
      width,
      height,
      bottom,
      right
    };
  }
  function getTransformAgnosticClientRect(element) {
    return getClientRect(element, {
      ignoreTransform: true
    });
  }
  function isFixed(node, computedStyle) {
    if (computedStyle === void 0) {
      computedStyle = getWindow(node).getComputedStyle(node);
    }
    return computedStyle.position === "fixed";
  }
  function isScrollable(element, computedStyle) {
    if (computedStyle === void 0) {
      computedStyle = getWindow(element).getComputedStyle(element);
    }
    const overflowRegex = /(auto|scroll|overlay)/;
    const properties = ["overflow", "overflowX", "overflowY"];
    return properties.some((property) => {
      const value = computedStyle[property];
      return typeof value === "string" ? overflowRegex.test(value) : false;
    });
  }
  function getScrollableAncestors(element, limit) {
    const scrollParents = [];
    function findScrollableAncestors(node) {
      if (limit != null && scrollParents.length >= limit) {
        return scrollParents;
      }
      if (!node) {
        return scrollParents;
      }
      if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
        scrollParents.push(node.scrollingElement);
        return scrollParents;
      }
      if (!isHTMLElement(node) || isSVGElement(node)) {
        return scrollParents;
      }
      if (scrollParents.includes(node)) {
        return scrollParents;
      }
      const computedStyle = getWindow(element).getComputedStyle(node);
      if (node !== element) {
        if (isScrollable(node, computedStyle)) {
          scrollParents.push(node);
        }
      }
      if (isFixed(node, computedStyle)) {
        return scrollParents;
      }
      return findScrollableAncestors(node.parentNode);
    }
    if (!element) {
      return scrollParents;
    }
    return findScrollableAncestors(element);
  }
  function getFirstScrollableAncestor(node) {
    const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
    return firstScrollableAncestor != null ? firstScrollableAncestor : null;
  }
  var Direction;
  (function(Direction2) {
    Direction2[Direction2["Forward"] = 1] = "Forward";
    Direction2[Direction2["Backward"] = -1] = "Backward";
  })(Direction || (Direction = {}));
  function isDocumentScrollingElement(element) {
    if (!canUseDOM || !element) {
      return false;
    }
    return element === document.scrollingElement;
  }
  function getScrollPosition(scrollingContainer) {
    const minScroll = {
      x: 0,
      y: 0
    };
    const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
      height: window.innerHeight,
      width: window.innerWidth
    } : {
      height: scrollingContainer.clientHeight,
      width: scrollingContainer.clientWidth
    };
    const maxScroll = {
      x: scrollingContainer.scrollWidth - dimensions.width,
      y: scrollingContainer.scrollHeight - dimensions.height
    };
    const isTop = scrollingContainer.scrollTop <= minScroll.y;
    const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
    const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
    const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
    return {
      isTop,
      isLeft,
      isBottom,
      isRight,
      maxScroll,
      minScroll
    };
  }
  function getScrollElementRect(element) {
    if (element === document.scrollingElement) {
      const {
        innerWidth,
        innerHeight
      } = window;
      return {
        top: 0,
        left: 0,
        right: innerWidth,
        bottom: innerHeight,
        width: innerWidth,
        height: innerHeight
      };
    }
    const {
      top,
      left,
      right,
      bottom
    } = element.getBoundingClientRect();
    return {
      top,
      left,
      right,
      bottom,
      width: element.clientWidth,
      height: element.clientHeight
    };
  }
  function scrollIntoViewIfNeeded(element, measure) {
    if (measure === void 0) {
      measure = getClientRect;
    }
    if (!element) {
      return;
    }
    const {
      top,
      left,
      bottom,
      right
    } = measure(element);
    const firstScrollableAncestor = getFirstScrollableAncestor(element);
    if (!firstScrollableAncestor) {
      return;
    }
    if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
      element.scrollIntoView({
        block: "center",
        inline: "center"
      });
    }
  }
  var Listeners = class {
    constructor(target) {
      this.target = void 0;
      this.listeners = [];
      this.removeAll = () => {
        this.listeners.forEach((listener) => {
          var _this$target;
          return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
        });
      };
      this.target = target;
    }
    add(eventName, handler, options) {
      var _this$target2;
      (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
      this.listeners.push([eventName, handler, options]);
    }
  };
  function getEventListenerTarget(target) {
    const {
      EventTarget
    } = getWindow(target);
    return target instanceof EventTarget ? target : getOwnerDocument(target);
  }
  function hasExceededDistance(delta, measurement) {
    const dx = Math.abs(delta.x);
    const dy = Math.abs(delta.y);
    if (typeof measurement === "number") {
      return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
    }
    if ("x" in measurement && "y" in measurement) {
      return dx > measurement.x && dy > measurement.y;
    }
    if ("x" in measurement) {
      return dx > measurement.x;
    }
    if ("y" in measurement) {
      return dy > measurement.y;
    }
    return false;
  }
  var EventName;
  (function(EventName2) {
    EventName2["Click"] = "click";
    EventName2["DragStart"] = "dragstart";
    EventName2["Keydown"] = "keydown";
    EventName2["ContextMenu"] = "contextmenu";
    EventName2["Resize"] = "resize";
    EventName2["SelectionChange"] = "selectionchange";
    EventName2["VisibilityChange"] = "visibilitychange";
  })(EventName || (EventName = {}));
  function preventDefault(event) {
    event.preventDefault();
  }
  function stopPropagation(event) {
    event.stopPropagation();
  }
  var KeyboardCode;
  (function(KeyboardCode2) {
    KeyboardCode2["Space"] = "Space";
    KeyboardCode2["Down"] = "ArrowDown";
    KeyboardCode2["Right"] = "ArrowRight";
    KeyboardCode2["Left"] = "ArrowLeft";
    KeyboardCode2["Up"] = "ArrowUp";
    KeyboardCode2["Esc"] = "Escape";
    KeyboardCode2["Enter"] = "Enter";
    KeyboardCode2["Tab"] = "Tab";
  })(KeyboardCode || (KeyboardCode = {}));
  var defaultKeyboardCodes = {
    start: [KeyboardCode.Space, KeyboardCode.Enter],
    cancel: [KeyboardCode.Esc],
    end: [KeyboardCode.Space, KeyboardCode.Enter, KeyboardCode.Tab]
  };
  var defaultKeyboardCoordinateGetter = (event, _ref) => {
    let {
      currentCoordinates
    } = _ref;
    switch (event.code) {
      case KeyboardCode.Right:
        return {
          ...currentCoordinates,
          x: currentCoordinates.x + 25
        };
      case KeyboardCode.Left:
        return {
          ...currentCoordinates,
          x: currentCoordinates.x - 25
        };
      case KeyboardCode.Down:
        return {
          ...currentCoordinates,
          y: currentCoordinates.y + 25
        };
      case KeyboardCode.Up:
        return {
          ...currentCoordinates,
          y: currentCoordinates.y - 25
        };
    }
    return void 0;
  };
  var KeyboardSensor = class {
    constructor(props) {
      this.props = void 0;
      this.autoScrollEnabled = false;
      this.referenceCoordinates = void 0;
      this.listeners = void 0;
      this.windowListeners = void 0;
      this.props = props;
      const {
        event: {
          target
        }
      } = props;
      this.props = props;
      this.listeners = new Listeners(getOwnerDocument(target));
      this.windowListeners = new Listeners(getWindow(target));
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.attach();
    }
    attach() {
      this.handleStart();
      this.windowListeners.add(EventName.Resize, this.handleCancel);
      this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
      setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
    }
    handleStart() {
      const {
        activeNode,
        onStart
      } = this.props;
      const node = activeNode.node.current;
      if (node) {
        scrollIntoViewIfNeeded(node);
      }
      onStart(defaultCoordinates);
    }
    handleKeyDown(event) {
      if (isKeyboardEvent(event)) {
        const {
          active,
          context,
          options
        } = this.props;
        const {
          keyboardCodes = defaultKeyboardCodes,
          coordinateGetter = defaultKeyboardCoordinateGetter,
          scrollBehavior = "smooth"
        } = options;
        const {
          code
        } = event;
        if (keyboardCodes.end.includes(code)) {
          this.handleEnd(event);
          return;
        }
        if (keyboardCodes.cancel.includes(code)) {
          this.handleCancel(event);
          return;
        }
        const {
          collisionRect
        } = context.current;
        const currentCoordinates = collisionRect ? {
          x: collisionRect.left,
          y: collisionRect.top
        } : defaultCoordinates;
        if (!this.referenceCoordinates) {
          this.referenceCoordinates = currentCoordinates;
        }
        const newCoordinates = coordinateGetter(event, {
          active,
          context: context.current,
          currentCoordinates
        });
        if (newCoordinates) {
          const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
          const scrollDelta = {
            x: 0,
            y: 0
          };
          const {
            scrollableAncestors
          } = context.current;
          for (const scrollContainer of scrollableAncestors) {
            const direction = event.code;
            const {
              isTop,
              isRight,
              isLeft,
              isBottom,
              maxScroll,
              minScroll
            } = getScrollPosition(scrollContainer);
            const scrollElementRect = getScrollElementRect(scrollContainer);
            const clampedCoordinates = {
              x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
              y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
            };
            const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
            const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
            if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
              const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
              const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
              if (canScrollToNewCoordinates && !coordinatesDelta.y) {
                scrollContainer.scrollTo({
                  left: newScrollCoordinates,
                  behavior: scrollBehavior
                });
                return;
              }
              if (canScrollToNewCoordinates) {
                scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
              } else {
                scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
              }
              if (scrollDelta.x) {
                scrollContainer.scrollBy({
                  left: -scrollDelta.x,
                  behavior: scrollBehavior
                });
              }
              break;
            } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
              const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
              const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
              if (canScrollToNewCoordinates && !coordinatesDelta.x) {
                scrollContainer.scrollTo({
                  top: newScrollCoordinates,
                  behavior: scrollBehavior
                });
                return;
              }
              if (canScrollToNewCoordinates) {
                scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
              } else {
                scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
              }
              if (scrollDelta.y) {
                scrollContainer.scrollBy({
                  top: -scrollDelta.y,
                  behavior: scrollBehavior
                });
              }
              break;
            }
          }
          this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
        }
      }
    }
    handleMove(event, coordinates) {
      const {
        onMove
      } = this.props;
      event.preventDefault();
      onMove(coordinates);
    }
    handleEnd(event) {
      const {
        onEnd
      } = this.props;
      event.preventDefault();
      this.detach();
      onEnd();
    }
    handleCancel(event) {
      const {
        onCancel
      } = this.props;
      event.preventDefault();
      this.detach();
      onCancel();
    }
    detach() {
      this.listeners.removeAll();
      this.windowListeners.removeAll();
    }
  };
  KeyboardSensor.activators = [{
    eventName: "onKeyDown",
    handler: (event, _ref, _ref2) => {
      let {
        keyboardCodes = defaultKeyboardCodes,
        onActivation
      } = _ref;
      let {
        active
      } = _ref2;
      const {
        code
      } = event.nativeEvent;
      if (keyboardCodes.start.includes(code)) {
        const activator = active.activatorNode.current;
        if (activator && event.target !== activator) {
          return false;
        }
        event.preventDefault();
        onActivation == null ? void 0 : onActivation({
          event: event.nativeEvent
        });
        return true;
      }
      return false;
    }
  }];
  function isDistanceConstraint(constraint) {
    return Boolean(constraint && "distance" in constraint);
  }
  function isDelayConstraint(constraint) {
    return Boolean(constraint && "delay" in constraint);
  }
  var AbstractPointerSensor = class {
    constructor(props, events2, listenerTarget) {
      var _getEventCoordinates;
      if (listenerTarget === void 0) {
        listenerTarget = getEventListenerTarget(props.event.target);
      }
      this.props = void 0;
      this.events = void 0;
      this.autoScrollEnabled = true;
      this.document = void 0;
      this.activated = false;
      this.initialCoordinates = void 0;
      this.timeoutId = null;
      this.listeners = void 0;
      this.documentListeners = void 0;
      this.windowListeners = void 0;
      this.props = props;
      this.events = events2;
      const {
        event
      } = props;
      const {
        target
      } = event;
      this.props = props;
      this.events = events2;
      this.document = getOwnerDocument(target);
      this.documentListeners = new Listeners(this.document);
      this.listeners = new Listeners(listenerTarget);
      this.windowListeners = new Listeners(getWindow(target));
      this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
      this.handleStart = this.handleStart.bind(this);
      this.handleMove = this.handleMove.bind(this);
      this.handleEnd = this.handleEnd.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleKeydown = this.handleKeydown.bind(this);
      this.removeTextSelection = this.removeTextSelection.bind(this);
      this.attach();
    }
    attach() {
      const {
        events: events2,
        props: {
          options: {
            activationConstraint,
            bypassActivationConstraint
          }
        }
      } = this;
      this.listeners.add(events2.move.name, this.handleMove, {
        passive: false
      });
      this.listeners.add(events2.end.name, this.handleEnd);
      if (events2.cancel) {
        this.listeners.add(events2.cancel.name, this.handleCancel);
      }
      this.windowListeners.add(EventName.Resize, this.handleCancel);
      this.windowListeners.add(EventName.DragStart, preventDefault);
      this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
      this.windowListeners.add(EventName.ContextMenu, preventDefault);
      this.documentListeners.add(EventName.Keydown, this.handleKeydown);
      if (activationConstraint) {
        if (bypassActivationConstraint != null && bypassActivationConstraint({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options
        })) {
          return this.handleStart();
        }
        if (isDelayConstraint(activationConstraint)) {
          this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
          this.handlePending(activationConstraint);
          return;
        }
        if (isDistanceConstraint(activationConstraint)) {
          this.handlePending(activationConstraint);
          return;
        }
      }
      this.handleStart();
    }
    detach() {
      this.listeners.removeAll();
      this.windowListeners.removeAll();
      setTimeout(this.documentListeners.removeAll, 50);
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
    handlePending(constraint, offset) {
      const {
        active,
        onPending
      } = this.props;
      onPending(active, constraint, this.initialCoordinates, offset);
    }
    handleStart() {
      const {
        initialCoordinates
      } = this;
      const {
        onStart
      } = this.props;
      if (initialCoordinates) {
        this.activated = true;
        this.documentListeners.add(EventName.Click, stopPropagation, {
          capture: true
        });
        this.removeTextSelection();
        this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
        onStart(initialCoordinates);
      }
    }
    handleMove(event) {
      var _getEventCoordinates2;
      const {
        activated,
        initialCoordinates,
        props
      } = this;
      const {
        onMove,
        options: {
          activationConstraint
        }
      } = props;
      if (!initialCoordinates) {
        return;
      }
      const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
      const delta = subtract(initialCoordinates, coordinates);
      if (!activated && activationConstraint) {
        if (isDistanceConstraint(activationConstraint)) {
          if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
            return this.handleCancel();
          }
          if (hasExceededDistance(delta, activationConstraint.distance)) {
            return this.handleStart();
          }
        }
        if (isDelayConstraint(activationConstraint)) {
          if (hasExceededDistance(delta, activationConstraint.tolerance)) {
            return this.handleCancel();
          }
        }
        this.handlePending(activationConstraint, delta);
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      onMove(coordinates);
    }
    handleEnd() {
      const {
        onAbort,
        onEnd
      } = this.props;
      this.detach();
      if (!this.activated) {
        onAbort(this.props.active);
      }
      onEnd();
    }
    handleCancel() {
      const {
        onAbort,
        onCancel
      } = this.props;
      this.detach();
      if (!this.activated) {
        onAbort(this.props.active);
      }
      onCancel();
    }
    handleKeydown(event) {
      if (event.code === KeyboardCode.Esc) {
        this.handleCancel();
      }
    }
    removeTextSelection() {
      var _this$document$getSel;
      (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
    }
  };
  var events = {
    cancel: {
      name: "pointercancel"
    },
    move: {
      name: "pointermove"
    },
    end: {
      name: "pointerup"
    }
  };
  var PointerSensor = class extends AbstractPointerSensor {
    constructor(props) {
      const {
        event
      } = props;
      const listenerTarget = getOwnerDocument(event.target);
      super(props, events, listenerTarget);
    }
  };
  PointerSensor.activators = [{
    eventName: "onPointerDown",
    handler: (_ref, _ref2) => {
      let {
        nativeEvent: event
      } = _ref;
      let {
        onActivation
      } = _ref2;
      if (!event.isPrimary || event.button !== 0) {
        return false;
      }
      onActivation == null ? void 0 : onActivation({
        event
      });
      return true;
    }
  }];
  var events$1 = {
    move: {
      name: "mousemove"
    },
    end: {
      name: "mouseup"
    }
  };
  var MouseButton;
  (function(MouseButton2) {
    MouseButton2[MouseButton2["RightClick"] = 2] = "RightClick";
  })(MouseButton || (MouseButton = {}));
  var MouseSensor = class extends AbstractPointerSensor {
    constructor(props) {
      super(props, events$1, getOwnerDocument(props.event.target));
    }
  };
  MouseSensor.activators = [{
    eventName: "onMouseDown",
    handler: (_ref, _ref2) => {
      let {
        nativeEvent: event
      } = _ref;
      let {
        onActivation
      } = _ref2;
      if (event.button === MouseButton.RightClick) {
        return false;
      }
      onActivation == null ? void 0 : onActivation({
        event
      });
      return true;
    }
  }];
  var events$2 = {
    cancel: {
      name: "touchcancel"
    },
    move: {
      name: "touchmove"
    },
    end: {
      name: "touchend"
    }
  };
  var TouchSensor = class extends AbstractPointerSensor {
    constructor(props) {
      super(props, events$2);
    }
    static setup() {
      window.addEventListener(events$2.move.name, noop, {
        capture: false,
        passive: false
      });
      return function teardown() {
        window.removeEventListener(events$2.move.name, noop);
      };
      function noop() {
      }
    }
  };
  TouchSensor.activators = [{
    eventName: "onTouchStart",
    handler: (_ref, _ref2) => {
      let {
        nativeEvent: event
      } = _ref;
      let {
        onActivation
      } = _ref2;
      const {
        touches
      } = event;
      if (touches.length > 1) {
        return false;
      }
      onActivation == null ? void 0 : onActivation({
        event
      });
      return true;
    }
  }];
  var AutoScrollActivator;
  (function(AutoScrollActivator2) {
    AutoScrollActivator2[AutoScrollActivator2["Pointer"] = 0] = "Pointer";
    AutoScrollActivator2[AutoScrollActivator2["DraggableRect"] = 1] = "DraggableRect";
  })(AutoScrollActivator || (AutoScrollActivator = {}));
  var TraversalOrder;
  (function(TraversalOrder2) {
    TraversalOrder2[TraversalOrder2["TreeOrder"] = 0] = "TreeOrder";
    TraversalOrder2[TraversalOrder2["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
  })(TraversalOrder || (TraversalOrder = {}));
  var defaultScrollIntent = {
    x: {
      [Direction.Backward]: false,
      [Direction.Forward]: false
    },
    y: {
      [Direction.Backward]: false,
      [Direction.Forward]: false
    }
  };
  var MeasuringStrategy;
  (function(MeasuringStrategy2) {
    MeasuringStrategy2[MeasuringStrategy2["Always"] = 0] = "Always";
    MeasuringStrategy2[MeasuringStrategy2["BeforeDragging"] = 1] = "BeforeDragging";
    MeasuringStrategy2[MeasuringStrategy2["WhileDragging"] = 2] = "WhileDragging";
  })(MeasuringStrategy || (MeasuringStrategy = {}));
  var MeasuringFrequency;
  (function(MeasuringFrequency2) {
    MeasuringFrequency2["Optimized"] = "optimized";
  })(MeasuringFrequency || (MeasuringFrequency = {}));
  var defaultMeasuringConfiguration = {
    draggable: {
      measure: getTransformAgnosticClientRect
    },
    droppable: {
      measure: getTransformAgnosticClientRect,
      strategy: MeasuringStrategy.WhileDragging,
      frequency: MeasuringFrequency.Optimized
    },
    dragOverlay: {
      measure: getClientRect
    }
  };
  var ActiveDraggableContext = /* @__PURE__ */ (0, import_react3.createContext)({
    ...defaultCoordinates,
    scaleX: 1,
    scaleY: 1
  });
  var Status;
  (function(Status2) {
    Status2[Status2["Uninitialized"] = 0] = "Uninitialized";
    Status2[Status2["Initializing"] = 1] = "Initializing";
    Status2[Status2["Initialized"] = 2] = "Initialized";
  })(Status || (Status = {}));

  // node_modules/@dnd-kit/sortable/dist/sortable.esm.js
  function arrayMove(array, from, to) {
    const newArray = array.slice();
    newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
    return newArray;
  }
  var directions = [KeyboardCode.Down, KeyboardCode.Right, KeyboardCode.Up, KeyboardCode.Left];

  // src/tedi/components/content/table/table.stories.tsx
  var import_react5 = __toESM(require_react(), 1);

  // src/tedi/helpers/index.ts
  var helpers_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-is-mounted.ts
  var use_is_mounted_exports = {};
  __export(use_is_mounted_exports, {
    default: () => use_is_mounted_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_is_mounted_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var use_is_mounted_default = ns["useIsMounted"] ?? ns;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_is_mounted_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-safe-id.ts
  var use_safe_id_exports = {};
  __export(use_safe_id_exports, {
    default: () => use_safe_id_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_safe_id_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var use_safe_id_default = ns2["useSafeId"] ?? ns2;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_safe_id_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-breakpoint.ts
  var use_breakpoint_exports = {};
  __export(use_breakpoint_exports, {
    default: () => use_breakpoint_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_breakpoint_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var use_breakpoint_default = ns3["useBreakpoint"] ?? ns3;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_breakpoint_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-breakpoint-props.ts
  var use_breakpoint_props_exports = {};
  __export(use_breakpoint_props_exports, {
    default: () => use_breakpoint_props_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_breakpoint_props_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var use_breakpoint_props_default = ns4["useBreakpointProps"] ?? ns4;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_breakpoint_props_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-element-size.ts
  var use_element_size_exports = {};
  __export(use_element_size_exports, {
    default: () => use_element_size_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_element_size_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var use_element_size_default = ns5["useElementSize"] ?? ns5;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_element_size_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-scroll.ts
  var use_scroll_exports = {};
  __export(use_scroll_exports, {
    default: () => use_scroll_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_scroll_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var use_scroll_default = ns6["useScroll"] ?? ns6;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_scroll_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-is-touch-device.ts
  var use_is_touch_device_exports = {};
  __export(use_is_touch_device_exports, {
    default: () => use_is_touch_device_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_is_touch_device_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var use_is_touch_device_default = ns7["useIsTouchDevice"] ?? ns7;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_is_touch_device_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-file-upload.ts
  var use_file_upload_exports = {};
  __export(use_file_upload_exports, {
    default: () => use_file_upload_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_file_upload_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var use_file_upload_default = ns8["useFileUpload"] ?? ns8;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_file_upload_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-what-input.ts
  var use_what_input_exports = {};
  __export(use_what_input_exports, {
    default: () => use_what_input_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_what_input_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var use_what_input_default = ns9["useWhatInput"] ?? ns9;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_what_input_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-scroll-fade.ts
  var use_scroll_fade_exports = {};
  __export(use_scroll_fade_exports, {
    default: () => use_scroll_fade_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_scroll_fade_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var use_scroll_fade_default = ns10["useScrollFade"] ?? ns10;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_scroll_fade_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/polymorphic/types.ts
  var types_exports = {};
  __export(types_exports, {
    default: () => types_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(types_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var types_default = ns11["types.ts"] ?? ns11;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, types_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/heading/heading.tsx
  var heading_exports = {};
  __export(heading_exports, {
    default: () => heading_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var heading_default = ns12["Heading"] ?? ns12;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var text_default = ns13["Text"] ?? ns13;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns14 = window.Tedi;
  var button_default = ns14["Button"] ?? ns14;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/closing-button/closing-button.tsx
  var closing_button_exports = {};
  __export(closing_button_exports, {
    default: () => closing_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(closing_button_exports, __toESM(require_tedi_namespace()));
  var ns15 = window.Tedi;
  var closing_button_default = ns15["ClosingButton"] ?? ns15;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/info-button/info-button.tsx
  var info_button_exports = {};
  __export(info_button_exports, {
    default: () => info_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(info_button_exports, __toESM(require_tedi_namespace()));
  var ns16 = window.Tedi;
  var info_button_default = ns16["InfoButton"] ?? ns16;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/empty-state/index.ts
  var empty_state_exports = {};
  __export(empty_state_exports, {
    default: () => empty_state_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(empty_state_exports, __toESM(require_tedi_namespace()));
  var ns17 = window.Tedi;
  var empty_state_default = ns17["EmptyState"] ?? ns17;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/checkbox/checkbox.tsx
  var checkbox_exports = {};
  __export(checkbox_exports, {
    default: () => checkbox_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(checkbox_exports, __toESM(require_tedi_namespace()));
  var ns18 = window.Tedi;
  var checkbox_default = ns18["Checkbox"] ?? ns18;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/date-field/date-field.tsx
  var date_field_exports = {};
  __export(date_field_exports, {
    default: () => date_field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(date_field_exports, __toESM(require_tedi_namespace()));
  var ns19 = window.Tedi;
  var date_field_default = ns19["DateField"] ?? ns19;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/textfield/textfield.tsx
  var textfield_exports = {};
  __export(textfield_exports, {
    default: () => textfield_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textfield_exports, __toESM(require_tedi_namespace()));
  var ns20 = window.Tedi;
  var textfield_default = ns20["TextField"] ?? ns20;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/time-field/time-field.tsx
  var time_field_exports = {};
  __export(time_field_exports, {
    default: () => time_field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(time_field_exports, __toESM(require_tedi_namespace()));
  var ns21 = window.Tedi;
  var time_field_default = ns21["TimeField"] ?? ns21;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/hide-at/hide-at.tsx
  var hide_at_exports = {};
  __export(hide_at_exports, {
    default: () => hide_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(hide_at_exports, __toESM(require_tedi_namespace()));
  var ns22 = window.Tedi;
  var hide_at_default = ns22["HideAt"] ?? ns22;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/show-at/show-at.tsx
  var show_at_exports = {};
  __export(show_at_exports, {
    default: () => show_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(show_at_exports, __toESM(require_tedi_namespace()));
  var ns23 = window.Tedi;
  var show_at_default = ns23["ShowAt"] ?? ns23;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns24 = window.Tedi;
  var vertical_spacing_default = ns24["VerticalSpacing"] ?? ns24;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns25 = window.Tedi;
  var separator_default = ns25["Separator"] ?? ns25;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/notifications/alert/alert.tsx
  var alert_exports = {};
  __export(alert_exports, {
    default: () => alert_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(alert_exports, __toESM(require_tedi_namespace()));
  var ns26 = window.Tedi;
  var alert_default = ns26["Alert"] ?? ns26;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/overlays/dropdown/index.ts
  var dropdown_exports = {};
  __export(dropdown_exports, {
    default: () => dropdown_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(dropdown_exports, __toESM(require_tedi_namespace()));
  var ns27 = window.Tedi;
  var dropdown_default = ns27["Dropdown"] ?? ns27;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/overlays/popover/index.ts
  var popover_exports = {};
  __export(popover_exports, {
    default: () => popover_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(popover_exports, __toESM(require_tedi_namespace()));
  var ns28 = window.Tedi;
  var popover_default = ns28["Popover"] ?? ns28;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/overlays/tooltip/index.ts
  var tooltip_exports = {};
  __export(tooltip_exports, {
    default: () => tooltip_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tooltip_exports, __toESM(require_tedi_namespace()));
  var ns29 = window.Tedi;
  var tooltip_default = ns29["Tooltip"] ?? ns29;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns30 = window.Tedi;
  var status_badge_default = ns30["StatusBadge"] ?? ns30;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/table-card/table-card.tsx
  var table_card_exports = {};
  __export(table_card_exports, {
    default: () => table_card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(table_card_exports, __toESM(require_tedi_namespace()));
  var ns31 = window.Tedi;
  var table_card_default = ns31["TableCard"] ?? ns31;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/text-group/text-group.tsx
  var text_group_exports = {};
  __export(text_group_exports, {
    default: () => text_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_group_exports, __toESM(require_tedi_namespace()));
  var ns32 = window.Tedi;
  var text_group_default = ns32["TextGroup"] ?? ns32;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/truncate/truncate.tsx
  var truncate_exports = {};
  __export(truncate_exports, {
    default: () => truncate_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(truncate_exports, __toESM(require_tedi_namespace()));
  var ns33 = window.Tedi;
  var truncate_default = ns33["Truncate"] ?? ns33;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/table/table.tsx
  var table_exports = {};
  __export(table_exports, {
    default: () => table_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(table_exports, __toESM(require_tedi_namespace()));
  var ns34 = window.Tedi;
  var table_default = ns34["Table"] ?? ns34;

  // src/tedi/components/content/table/table.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: table_exports.Table,
    title: "TEDI-Ready/Content/Table",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.45.70?node-id=4514-63761&m=dev"
      }
    }
  };
  var table_stories_default = meta;
  var personSeed = [
    {
      name: "Anna Tamm",
      email: "anna.tamm@example.ee",
      role: "Engineer",
      location: "Tallinn",
      salary: 4200,
      status: "active"
    },
    {
      name: "J\xFCri Kask",
      email: "juri.kask@example.ee",
      role: "Designer",
      location: "Tartu",
      salary: 3800,
      status: "active"
    },
    {
      name: "Maria Saar",
      email: "maria.saar@example.ee",
      role: "Product",
      location: "P\xE4rnu",
      salary: 4600,
      status: "active"
    },
    {
      name: "Mart Mets",
      email: "mart.mets@example.ee",
      role: "Engineer",
      location: "Tallinn",
      salary: 4100,
      status: "inactive"
    },
    { name: "Liis Lepp", email: "liis.lepp@example.ee", role: "Ops", location: "Narva", salary: 3600, status: "active" },
    {
      name: "Kadri Kask",
      email: "kadri.kask@example.ee",
      role: "Engineer",
      location: "Viljandi",
      salary: 4e3,
      status: "active"
    },
    {
      name: "Rain Roos",
      email: "rain.roos@example.ee",
      role: "Designer",
      location: "Rakvere",
      salary: 3900,
      status: "inactive"
    }
  ];
  var people = Array.from({ length: 28 }, (_, index) => {
    const seed = personSeed[index % personSeed.length];
    const round = Math.floor(index / personSeed.length);
    return {
      ...seed,
      id: String(index + 1),
      name: round === 0 ? seed.name : `${seed.name} ${round + 1}`
    };
  });
  var DEFAULT_PAGINATION = { pageSize: 10, pageSizeOptions: [10, 25, 50] };
  var SHOWCASE_PAGINATION_3 = { pageSize: 3, pageSizeOptions: [3, 10, 25, 50] };
  var SHOWCASE_PAGINATION_4 = { pageSize: 4, pageSizeOptions: [4, 10, 25, 50] };
  var personColumns = [
    { id: "name", header: "Name", accessorKey: "name" },
    { id: "email", header: "Email", accessorKey: "email" },
    { id: "role", header: "Role", accessorKey: "role" },
    { id: "location", header: "Location", accessorKey: "location" }
  ];
  var bookingDateRange = {
    from: new Date(2029, 2, 22),
    to: new Date(2029, 2, 29)
  };
  var bookings = Array.from({ length: 28 }, (_, index) => ({
    id: String(index + 1),
    dateRange: bookingDateRange,
    hour: "11:14",
    duration: "6 min",
    location: "Harjumaa"
  }));
  var dateRangeFormatter = new Intl.DateTimeFormat("et-EE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  var formatDateRange = (range) => {
    if (!range?.from) return "";
    const from = dateRangeFormatter.format(range.from);
    return range.to ? `${from} \u2013 ${dateRangeFormatter.format(range.to)}` : from;
  };
  var doctorSeed = [
    { name: "Kalle Kask", specialty: "Dermatovenereoloog", experience: "4 a", location: "Tallinn" },
    { name: "Mari Maasikas", specialty: "Kopsuarst", experience: "4 a", location: "Tallinn" },
    { name: "Vello Vaarikas", specialty: "K\xF5rva-nina-kurguarst", experience: "4 a", location: "Tallinn" }
  ];
  var doctors = Array.from({ length: 28 }, (_, index) => ({
    ...doctorSeed[index % doctorSeed.length],
    id: String(index + 1)
  }));
  var editRowActionsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    width: "100%"
  };
  var EditableRowsContext = (0, import_react5.createContext)(null);
  function EditableRowsProvider({
    value,
    children
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsContext.Provider, { value, children });
  }
  function useEditor() {
    const editor = (0, import_react5.useContext)(EditableRowsContext);
    if (!editor) throw new Error("EditableRowsContext missing \u2014 wrap the table in <EditableRowsProvider>.");
    return editor;
  }
  function useEditableRows(initial) {
    const [rows, setRows] = (0, import_react5.useState)(initial);
    const [editingId, setEditingId] = (0, import_react5.useState)(null);
    const [draft, setDraft] = (0, import_react5.useState)(null);
    const beginEdit = (0, import_react5.useCallback)((row) => {
      setEditingId(row.id);
      setDraft(row);
    }, []);
    const cancelEdit = (0, import_react5.useCallback)(() => {
      setEditingId(null);
      setDraft(null);
    }, []);
    const commitEdit = (0, import_react5.useCallback)(() => {
      if (!draft) return;
      setRows((existing) => existing.map((row) => row.id === draft.id ? draft : row));
      setEditingId(null);
      setDraft(null);
    }, [draft]);
    return { rows, editingId, draft, setDraft, beginEdit, cancelEdit, commitEdit };
  }
  function EditActionsCell({ row }) {
    const editor = useEditor();
    if (row.id === editor.editingId) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: editRowActionsStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(closing_button_exports.ClosingButton, { title: "T\xFChista", onClick: editor.cancelEdit }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "primary", size: "small", icon: "check", onClick: editor.commitEdit, children: "Kinnita" })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: editRowActionsStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "link", iconLeft: "edit", onClick: () => editor.beginEdit(row), children: "Muuda" }) });
  }
  function EditableTextCell({
    row,
    field,
    label
  }) {
    const editor = useEditor();
    const isEditing = row.id === editor.editingId && editor.draft;
    if (!isEditing) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: String(row[field] ?? "") });
    }
    const draftValue = String(editor.draft[field] ?? "");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      textfield_exports.TextField,
      {
        id: `${row.id}-${field}`,
        name: field,
        label,
        hideLabel: true,
        value: draftValue,
        onChange: (next) => editor.setDraft((prev) => prev ? { ...prev, [field]: next } : prev)
      }
    );
  }
  function EditableTimeCell({
    row,
    field,
    label
  }) {
    const editor = useEditor();
    const isEditing = row.id === editor.editingId && editor.draft;
    if (!isEditing) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: String(row[field] ?? "") });
    }
    const draftValue = String(editor.draft[field] ?? "");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      time_field_exports.TimeField,
      {
        id: `${row.id}-${field}`,
        label,
        value: draftValue,
        inputProps: { hideLabel: true, name: field },
        onChange: (next) => editor.setDraft((prev) => prev ? { ...prev, [field]: next } : prev)
      }
    );
  }
  function EditableDateRangeCell({
    row,
    field,
    label
  }) {
    const editor = useEditor();
    const isEditing = row.id === editor.editingId && editor.draft;
    const value = row[field];
    if (!isEditing) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: formatDateRange(value) });
    }
    const draftValue = editor.draft[field];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      date_field_exports.DateField,
      {
        id: `${row.id}-${field}`,
        mode: "range",
        label,
        inputProps: { hideLabel: true },
        selected: draftValue,
        onSelect: (next) => editor.setDraft(
          (prev) => prev ? { ...prev, [field]: next ?? { from: void 0 } } : prev
        )
      }
    );
  }
  var bookingShowcaseColumns = [
    {
      id: "dateRange",
      header: "Kuup\xE4ev",
      accessorKey: "dateRange",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableDateRangeCell, { row: row.original, field: "dateRange", label: "Kuup\xE4ev" })
    },
    {
      id: "hour",
      header: "Kellaaeg",
      accessorKey: "hour",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTimeCell, { row: row.original, field: "hour", label: "Kellaaeg" })
    },
    {
      id: "duration",
      header: "Kestus",
      accessorKey: "duration",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTextCell, { row: row.original, field: "duration", label: "Kestus" })
    },
    {
      id: "location",
      header: "Asukoht",
      accessorKey: "location",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTextCell, { row: row.original, field: "location", label: "Asukoht" })
    },
    {
      id: "actions",
      header: "",
      size: 1,
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditActionsCell, { row: row.original })
    }
  ];
  var Default = {
    render: function Default2() {
      const editor = useEditableRows(bookings);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsProvider, { value: editor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-default",
          autoResetPageIndex: false,
          data: editor.rows,
          columns: bookingShowcaseColumns,
          pagination: SHOWCASE_PAGINATION_3
        }
      ) });
    }
  };
  var Sizes = {
    render: function Sizes2() {
      const defaultEditor = useEditableRows(bookings);
      const smallEditor = useEditableRows(bookings);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", children: "Default" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsProvider, { value: defaultEditor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_exports.Table,
          {
            id: "tedi-table-sizes-default",
            autoResetPageIndex: false,
            data: defaultEditor.rows,
            columns: bookingShowcaseColumns,
            pagination: {
              ...SHOWCASE_PAGINATION_3,
              paginationProps: { labels: { ariaLabel: "Pagination \u2013 default size" } }
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", children: "Small" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsProvider, { value: smallEditor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_exports.Table,
          {
            id: "tedi-table-sizes-small",
            autoResetPageIndex: false,
            data: smallEditor.rows,
            columns: bookingShowcaseColumns,
            size: "small",
            pagination: {
              ...SHOWCASE_PAGINATION_3,
              paginationProps: { labels: { ariaLabel: "Pagination \u2013 small size" } }
            }
          }
        ) })
      ] });
    }
  };
  var simplePeopleColumns = [
    {
      id: "name",
      header: "Isik",
      accessorKey: "name",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "link", children: row.original.name })
    },
    { id: "age", header: "Vanus", accessorKey: "age" },
    { id: "visits", header: "K\xFClastuste arv", accessorKey: "visits" },
    {
      id: "status",
      header: "T\xF5endi staatus",
      accessorKey: "status",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: certStatusColor[row.original.status], children: row.original.status })
    }
  ];
  var simpleDoctorColumns = [
    {
      id: "name",
      header: "Arst",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: "var(--general-text-secondary)" }, children: row.original.specialty })
      ] })
    },
    {
      id: "experience",
      header: "T\xF6\xF6staa\u017E",
      accessorKey: "experience",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTextCell, { row: row.original, field: "experience", label: "T\xF6\xF6staa\u017E" })
    },
    {
      id: "location",
      header: "Asukoht",
      accessorKey: "location",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTextCell, { row: row.original, field: "location", label: "Asukoht" })
    },
    {
      id: "actions",
      header: "",
      size: 1,
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditActionsCell, { row: row.original })
    }
  ];
  var Simple = {
    render: function Simple2() {
      const bookingEditor = useEditableRows(bookings);
      const doctorEditor = useEditableRows(doctors);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsProvider, { value: bookingEditor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_exports.Table,
          {
            id: "tedi-table-simple-bookings",
            autoResetPageIndex: false,
            data: bookingEditor.rows,
            columns: bookingShowcaseColumns,
            pagination: {
              ...SHOWCASE_PAGINATION_3,
              paginationProps: { labels: { ariaLabel: "Broneeringute pagineerimine" } }
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_exports.Table,
          {
            id: "tedi-table-simple-people",
            data: filterablePeople,
            columns: simplePeopleColumns,
            pagination: {
              ...SHOWCASE_PAGINATION_4,
              paginationProps: { labels: { ariaLabel: "Isikute pagineerimine" } }
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsProvider, { value: doctorEditor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_exports.Table,
          {
            id: "tedi-table-simple-doctors",
            autoResetPageIndex: false,
            data: doctorEditor.rows,
            columns: simpleDoctorColumns,
            pagination: {
              ...SHOWCASE_PAGINATION_3,
              paginationProps: { labels: { ariaLabel: "Arstide pagineerimine" } }
            }
          }
        ) })
      ] });
    }
  };
  var LONG_DESCRIPTION = "Pellentesque mattis augue at mi tristique dignissim. Aliquam lobortis hendrerit augue, sit amet pellentesque nibh ultricies eu. Nullam ut nibh non lectus pulvinar volutpat.";
  var LONG_TEXT_MAX_LENGTH = 70;
  var baseDoctorWithDescriptionColumns = [
    {
      id: "name",
      header: "Arst",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: "var(--general-text-secondary)" }, children: row.original.specialty })
      ] })
    },
    {
      id: "location",
      header: "Asukoht",
      accessorKey: "location",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTextCell, { row: row.original, field: "location", label: "Asukoht" })
    },
    {
      id: "actions",
      header: "",
      size: 1,
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditActionsCell, { row: row.original })
    }
  ];
  var baseDoctorActionsColumns = () => [
    {
      id: "name",
      header: "Arst",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: "var(--general-text-secondary)" }, children: row.original.specialty })
      ] })
    },
    { id: "experience", header: "T\xF6\xF6staa\u017E", accessorKey: "experience" },
    { id: "location", header: "Asukoht", accessorKey: "location" }
  ];
  var rowActionsCellStyle = {
    display: "inline-flex",
    gap: 8,
    justifyContent: "flex-end",
    width: "100%"
  };
  var customDoctorSeed = [
    {
      name: "Kalle Kask",
      specialty: "Dermatovenereoloog",
      experience: "4 a",
      location: "Tallinn",
      note: "Esineb makseh\xE4ireid",
      noteColor: "warning"
    },
    {
      name: "Mari Maasikas",
      specialty: "Kopsuarst",
      experience: "4 a",
      location: "Tallinn"
    },
    {
      name: "Vello Vaarikas",
      specialty: "K\xF5rva-nina-kurguarst",
      experience: "4 a",
      location: "Tallinn",
      note: "Arve tasumata",
      noteColor: "danger"
    }
  ];
  var customDoctors = Array.from({ length: 28 }, (_, index) => ({
    ...customDoctorSeed[index % customDoctorSeed.length],
    id: String(index + 1)
  }));
  var avatarStyle = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "var(--general-surface-secondary)",
    color: "var(--general-text-secondary)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "var(--heading-weight)",
    fontSize: "var(--body-small-regular-size)",
    flexShrink: 0
  };
  var initialsOf = (name) => name.split(" ").map((part) => part[0]).filter(Boolean).slice(0, 2).join("");
  var mergedCellsColumns = [
    {
      id: "dateRange",
      accessorKey: "dateRange",
      size: 240,
      header: ({ column }) => {
        const sorted = column.getIsSorted();
        const iconName = sorted === "asc" ? "arrow_upward" : sorted === "desc" ? "arrow_downward" : "unfold_more";
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
          "Kuup\xE4ev",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            table_exports.Table.HeaderButton,
            {
              icon: iconName,
              selected: !!sorted,
              "aria-label": "Sort by Kuup\xE4ev",
              onClick: column.getToggleSortingHandler()
            }
          )
        ] });
      },
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableDateRangeCell, { row: row.original, field: "dateRange", label: "Kuup\xE4ev" })
    },
    {
      id: "aeg",
      header: "Aeg",
      columns: [
        {
          id: "hour",
          header: "Kellaaeg",
          accessorKey: "hour",
          cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTimeCell, { row: row.original, field: "hour", label: "Kellaaeg" })
        },
        {
          id: "duration",
          header: "Kestus",
          accessorKey: "duration",
          cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTextCell, { row: row.original, field: "duration", label: "Kestus" })
        }
      ]
    },
    {
      id: "location",
      header: "Asukoht",
      accessorKey: "location",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableTextCell, { row: row.original, field: "location", label: "Asukoht" })
    },
    {
      id: "actions",
      header: "",
      size: 1,
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditActionsCell, { row: row.original })
    }
  ];
  var MergedCells = {
    render: function MergedCells2() {
      const editor = useEditableRows(bookings);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsProvider, { value: editor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-merged",
          verticalBorders: true,
          autoResetPageIndex: false,
          data: editor.rows,
          columns: mergedCellsColumns,
          pagination: DEFAULT_PAGINATION
        }
      ) });
    }
  };
  var GroupedRows = {
    render: function GroupedRows2() {
      const patientRows = (0, import_react5.useMemo)(
        () => [
          { id: "1", date: "2026-05-20", doctor: "Dr Tamm", procedure: "Consultation" },
          { id: "2", date: "2026-05-20", doctor: "Dr Tamm", procedure: "Follow-up" },
          { id: "3", date: "2026-05-21", doctor: "Dr Kask", procedure: "X-ray" },
          { id: "4", date: "2026-05-21", doctor: "Dr Kask", procedure: "Consultation" }
        ],
        []
      );
      const columns = (0, import_react5.useMemo)(
        () => [
          {
            id: "date",
            header: "Date",
            accessorKey: "date",
            meta: { rowSpan: (0, table_exports.groupRowSpan)(patientRows, (row) => row.date), vAlign: "top" }
          },
          {
            id: "doctor",
            header: "Doctor",
            accessorKey: "doctor",
            meta: { rowSpan: (0, table_exports.groupRowSpan)(patientRows, (row) => `${row.date}|${row.doctor}`), vAlign: "top" }
          },
          { id: "procedure", header: "Procedure", accessorKey: "procedure" }
        ],
        [patientRows]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "tedi-table-grouped", data: patientRows, columns, verticalBorders: true });
    }
  };
  var HeaderWithInfo = ({ label, info, align }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        justifyContent: align === "right" ? "flex-end" : "flex-start"
      },
      children: [
        label,
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_exports.Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_exports.Tooltip.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { isSmall: true, "aria-label": `${label} info` }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_exports.Tooltip.Content, { children: info })
        ] })
      ]
    }
  );
  var serviceSeed = [
    { service: "Vaimse tervise n\xF5ustamisteenus", doctor: "Pille Paunk\xFCla", price: 45.5, location: "Tallinn" },
    { service: "Hematoloogia", doctor: "Kalle Kuusik", price: 89.99, location: "Tallinn" },
    { service: "Ortopeedia", doctor: "M\xE4rt M\xE4nnimets", price: 110, location: "Tallinn" },
    { service: "Dermatoloogia", doctor: "Anna Tamm", price: 75, location: "Tartu" },
    { service: "Kardioloogia", doctor: "Mati Saar", price: 120.5, location: "P\xE4rnu" },
    { service: "Neuroloogia", doctor: "Liis P\xF5ld", price: 95.25, location: "Tallinn" },
    { service: "Pediaatria", doctor: "Jaan Lepp", price: 60, location: "Tartu" }
  ];
  var services = Array.from({ length: 28 }, (_, index) => ({
    id: String(index + 1),
    ...serviceSeed[index % serviceSeed.length]
  }));
  var priceFormatter = new Intl.NumberFormat("et-EE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var VerticalBorders = {
    render: () => {
      const columns = [
        {
          id: "service",
          accessorKey: "service",
          header: ({ column }) => {
            const sorted = column.getIsSorted();
            const iconName = sorted === "asc" ? "arrow_upward" : sorted === "desc" ? "arrow_downward" : "unfold_more";
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
              "Teenus",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                table_exports.Table.HeaderButton,
                {
                  icon: iconName,
                  selected: !!sorted,
                  "aria-label": "Sorteeri Teenus j\xE4rgi",
                  onClick: column.getToggleSortingHandler()
                }
              )
            ] });
          }
        },
        {
          id: "doctor",
          accessorKey: "doctor",
          header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderWithInfo, { label: "Arst", info: "Vastutav raviarst, kes teostab teenuse." })
        },
        {
          id: "price",
          accessorKey: "price",
          header: "Maksumus",
          meta: { align: "right" },
          cell: ({ row }) => `${priceFormatter.format(row.original.price)} \u20AC/h`
        },
        {
          id: "location",
          accessorKey: "location",
          header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderWithInfo, { label: "Asukoht", info: "Vastuv\xF5tu toimumiskoht." })
        }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-vb",
          data: services,
          columns,
          verticalBorders: true,
          pagination: DEFAULT_PAGINATION
        }
      );
    }
  };
  var NoOutsideBorder = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "tedi-table-borderless",
        data: people,
        columns: personColumns,
        borderless: true,
        pagination: DEFAULT_PAGINATION
      }
    )
  };
  var EditableValues = {
    render: function EditableValues2() {
      const editor = useEditableRows(bookings);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsProvider, { value: editor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-editable",
          autoResetPageIndex: false,
          data: editor.rows,
          columns: bookingShowcaseColumns,
          pagination: DEFAULT_PAGINATION
        }
      ) });
    }
  };
  var Sortable = {
    render: function Sortable2() {
      const columns = (0, import_react5.useMemo)(
        () => [
          { id: "name", header: "Name", accessorKey: "name" },
          { id: "role", header: "Role", accessorKey: "role" },
          { id: "location", header: "Location", accessorKey: "location" },
          { id: "salary", header: "Salary", accessorKey: "salary" }
        ].map((col) => ({
          ...col,
          meta: { label: col.header },
          header: ({ column }) => {
            const sorted = column.getIsSorted();
            const iconName = sorted === "asc" ? "arrow_upward" : sorted === "desc" ? "arrow_downward" : "unfold_more";
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              table_exports.Table.HeaderButton,
              {
                icon: iconName,
                selected: !!sorted,
                "aria-label": `Sort by ${col.header}`,
                onClick: column.getToggleSortingHandler(),
                children: col.header
              }
            );
          }
        })),
        []
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "tedi-table-sortable", data: people, columns, pagination: DEFAULT_PAGINATION });
    }
  };
  var certStatusColor = {
    Kehtiv: "success",
    Aegumas: "warning",
    Kehtetu: "danger",
    Aegunud: "neutral"
  };
  var CERT_STATUSES = ["Kehtiv", "Kehtetu", "Aegumas", "Aegunud"];
  var filterablePeopleSeed = [
    { name: "Mari Maasikas", jobStart: "21.08.2019", age: 25, visits: 6, status: "Kehtiv" },
    { name: "Kalle Kapsapea", jobStart: "14.03.2020", age: 35, visits: 13, status: "Kehtiv" },
    { name: "Mart M\xE4gi", jobStart: "02.01.2018", age: 43, visits: 26, status: "Kehtiv" },
    { name: "Meelis Mets", jobStart: "10.07.2021", age: 64, visits: 26, status: "Kehtetu" },
    { name: "Kadri Kask", jobStart: "30.11.2022", age: 32, visits: 4, status: "Aegumas" },
    { name: "Liis Linn", jobStart: "21.08.2019", age: 21, visits: 13, status: "Aegunud" }
  ];
  var filterablePeople = Array.from({ length: 28 }, (_, index) => {
    const seed = filterablePeopleSeed[index % filterablePeopleSeed.length];
    const round = Math.floor(index / filterablePeopleSeed.length);
    return {
      ...seed,
      id: String(index + 1),
      name: round === 0 ? seed.name : `${seed.name} ${round + 1}`
    };
  });
  var SortLabel = ({
    column,
    children,
    ariaLabel
  }) => {
    const sorted = column.getIsSorted();
    const iconName = sorted === "asc" ? "arrow_upward" : sorted === "desc" ? "arrow_downward" : "unfold_more";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table.HeaderButton,
      {
        icon: iconName,
        selected: !!sorted,
        "aria-label": ariaLabel,
        onClick: column.getToggleSortingHandler(),
        children
      }
    );
  };
  var TextFilterPopover = ({
    value,
    onApply,
    label
  }) => {
    const [draft, setDraft] = (0, import_react5.useState)(value);
    const [open, setOpen] = (0, import_react5.useState)(false);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_exports.Popover, { open, onToggle: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.PopoverTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table.HeaderButton, { icon: "filter_alt", selected: !!value, filled: !!value, "aria-label": `Filtreeri ${label}` }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.PopoverContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          textfield_exports.TextField,
          {
            id: `filter-${label}`,
            name: `filter-${label}`,
            label,
            hideLabel: true,
            value: draft,
            onChange: setDraft
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            button_default,
            {
              visualType: "secondary",
              size: "small",
              onClick: () => {
                setDraft("");
                onApply(void 0);
                setOpen(false);
              },
              children: "T\xFChista"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            button_default,
            {
              visualType: "primary",
              size: "small",
              onClick: () => {
                onApply(draft || void 0);
                setOpen(false);
              },
              children: "Filtreeri"
            }
          )
        ] })
      ] }) })
    ] });
  };
  var dateRangeStringToDate = (value) => {
    if (!value) return void 0;
    const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(value);
    if (!match) return void 0;
    const [, dd, mm, yyyy] = match;
    return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  };
  var dateToDateRangeString = (date) => {
    if (!date) return void 0;
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    return `${dd}.${mm}.${date.getFullYear()}`;
  };
  var DateRangeFilterPopover = ({
    value,
    onApply,
    label
  }) => {
    const [range, setRange] = (0, import_react5.useState)(() => {
      const from = dateRangeStringToDate(value?.from);
      const to = dateRangeStringToDate(value?.to);
      return from || to ? { from, to } : void 0;
    });
    const [open, setOpen] = (0, import_react5.useState)(false);
    const active = Boolean(value?.from || value?.to);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_exports.Popover, { open, onToggle: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.PopoverTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table.HeaderButton, { icon: "filter_alt", selected: active, filled: active, "aria-label": `Filtreeri ${label}` }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.PopoverContent, { width: "medium", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          date_field_exports.DateField,
          {
            id: "filter-date-range",
            mode: "range",
            label,
            selected: range,
            placeholder: "pp.kk.aaaa - pp.kk.aaaa",
            onSelect: (next) => setRange(next)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            button_default,
            {
              visualType: "secondary",
              size: "small",
              onClick: () => {
                setRange(void 0);
                onApply(void 0);
                setOpen(false);
              },
              children: "T\xFChista"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            button_default,
            {
              visualType: "primary",
              size: "small",
              onClick: () => {
                const fromStr = dateToDateRangeString(range?.from);
                const toStr = dateToDateRangeString(range?.to);
                onApply(fromStr || toStr ? { from: fromStr, to: toStr } : void 0);
                setOpen(false);
              },
              children: "Filtreeri"
            }
          )
        ] })
      ] }) })
    ] });
  };
  var MultiSelectFilterPopover = ({
    value,
    onApply,
    label
  }) => {
    const [draft, setDraft] = (0, import_react5.useState)(value ?? []);
    const [open, setOpen] = (0, import_react5.useState)(false);
    const active = (value?.length ?? 0) > 0;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_exports.Popover, { open, onToggle: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.PopoverTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table.HeaderButton, { icon: "filter_alt", selected: active, filled: active, "aria-label": `Filtreeri ${label}` }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.PopoverContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        CERT_STATUSES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          checkbox_exports.Checkbox,
          {
            id: `filter-status-${option}`,
            name: "filter-status",
            value: option,
            label: option,
            checked: draft.includes(option),
            onChange: (_val, checked) => setDraft((prev) => checked ? [...prev, option] : prev.filter((v) => v !== option))
          },
          option
        )),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            button_default,
            {
              visualType: "secondary",
              size: "small",
              onClick: () => {
                setDraft([]);
                onApply(void 0);
                setOpen(false);
              },
              children: "T\xFChista"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            button_default,
            {
              visualType: "primary",
              size: "small",
              onClick: () => {
                onApply(draft.length ? draft : void 0);
                setOpen(false);
              },
              children: "Filtreeri"
            }
          )
        ] })
      ] }) })
    ] });
  };
  var parseDate = (value) => {
    const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(value);
    if (!match) return null;
    const [, dd, mm, yyyy] = match;
    return Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd));
  };
  var Filters = {
    render: function Filters2() {
      const columns = (0, import_react5.useMemo)(
        () => [
          {
            id: "name",
            accessorKey: "name",
            filterFn: "includesString",
            header: ({ column }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortLabel, { column, ariaLabel: "Sorteeri Nimi", children: "Nimi" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                TextFilterPopover,
                {
                  value: column.getFilterValue() ?? "",
                  onApply: (next) => column.setFilterValue(next),
                  label: "Nimi"
                }
              )
            ] })
          },
          {
            id: "jobStart",
            accessorKey: "jobStart",
            filterFn: (row, id, value) => {
              if (!value?.from && !value?.to) return true;
              const cell = parseDate(row.getValue(id));
              if (cell === null) return false;
              const fromTs = value.from ? parseDate(value.from) : null;
              const toTs = value.to ? parseDate(value.to) : null;
              if (fromTs !== null && cell < fromTs) return false;
              if (toTs !== null && cell > toTs) return false;
              return true;
            },
            header: ({ column }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortLabel, { column, ariaLabel: "Sorteeri T\xF6\xF6 algus", children: "T\xF6\xF6 algus" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                DateRangeFilterPopover,
                {
                  value: column.getFilterValue(),
                  onApply: (next) => column.setFilterValue(next),
                  label: "T\xF6\xF6 algus"
                }
              )
            ] })
          },
          {
            id: "age",
            accessorKey: "age",
            header: ({ column }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortLabel, { column, ariaLabel: "Sorteeri Vanus", children: "Vanus" })
          },
          {
            id: "visits",
            accessorKey: "visits",
            header: ({ column }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortLabel, { column, ariaLabel: "Sorteeri K\xFClastuste arv", children: "K\xFClastuste arv" })
          },
          {
            id: "status",
            accessorKey: "status",
            filterFn: (row, id, value) => !value?.length || value.includes(row.getValue(id)),
            header: ({ column }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortLabel, { column, ariaLabel: "Sorteeri T\xF5endi staatus", children: "T\xF5endi staatus" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                MultiSelectFilterPopover,
                {
                  value: column.getFilterValue(),
                  onApply: (next) => column.setFilterValue(next),
                  label: "T\xF5endi staatus"
                }
              )
            ] }),
            cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: certStatusColor[row.original.status], children: row.original.status })
          }
        ],
        []
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-filters",
          data: filterablePeople,
          columns,
          pagination: DEFAULT_PAGINATION
        }
      );
    }
  };
  var collapsibleSeed = [
    { name: "Mari Maasikas", age: 25, visits: 6, status: "Kehtiv" },
    { name: "Kalle Kapsapea", age: 35, visits: 13, status: "Kehtiv" },
    { name: "Mart M\xE4gi", age: 43, visits: 26, status: "Kehtiv" },
    { name: "Meelis Mets", age: 64, visits: 26, status: "Kehtetu" },
    { name: "Kadri Kask", age: 32, visits: 4, status: "Aegumas" },
    { name: "Liis Linn", age: 21, visits: 13, status: "Aegunud" }
  ];
  var collapsiblePeople = Array.from({ length: 28 }, (_, index) => {
    const seed = collapsibleSeed[index % collapsibleSeed.length];
    const round = Math.floor(index / collapsibleSeed.length);
    const name = round === 0 ? seed.name : `${seed.name} ${round + 1}`;
    const id = String(index + 1);
    const subRows = index % 2 === 0 ? [
      { id: `${id}-1`, name, age: seed.age, visits: Math.floor(seed.visits / 2), status: "Kehtiv" },
      { id: `${id}-2`, name, age: seed.age, visits: seed.visits - Math.floor(seed.visits / 2), status: "Kehtetu" }
    ] : void 0;
    return { ...seed, id, name, ...subRows ? { subRows } : {} };
  });
  var CollapsibleRows = {
    render: () => {
      const columns = [
        { id: "name", header: "Isik", accessorKey: "name" },
        { id: "age", header: "Vanus", accessorKey: "age" },
        { id: "visits", header: "K\xFClastuste arv", accessorKey: "visits" },
        {
          id: "status",
          header: "T\xF5endi staatus",
          accessorKey: "status",
          cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: certStatusColor[row.original.status], children: row.original.status })
        }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-collapse",
          data: collapsiblePeople,
          columns,
          getSubRows: (row) => row.subRows,
          pagination: DEFAULT_PAGINATION
        }
      );
    }
  };
  var CollapsibleRowsRowTrigger = {
    render: () => {
      const columns = [
        { id: "name", header: "Isik", accessorKey: "name" },
        { id: "age", header: "Vanus", accessorKey: "age" },
        { id: "visits", header: "K\xFClastuste arv", accessorKey: "visits" },
        {
          id: "status",
          header: "T\xF5endi staatus",
          accessorKey: "status",
          cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: certStatusColor[row.original.status], children: row.original.status })
        }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-collapse-row-trigger",
          data: collapsiblePeople,
          columns,
          getSubRows: (row) => row.subRows,
          expandTrigger: "row",
          pagination: DEFAULT_PAGINATION
        }
      );
    }
  };
  var NestedTable = {
    render: () => {
      const columns = [
        { id: "name", header: "Isik", accessorKey: "name" },
        { id: "age", header: "Vanus", accessorKey: "age" },
        { id: "visits", header: "K\xFClastuste arv", accessorKey: "visits" }
      ];
      const nestedColumns = [
        { id: "visits", header: "K\xFClastuste arv", accessorKey: "visits" },
        { id: "status", header: "T\xF5endi staatus", accessorKey: "status" }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-nested",
          data: collapsiblePeople,
          columns,
          renderSubComponent: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            table_exports.Table,
            {
              id: `tedi-table-nested-${row.id}`,
              data: row.original.subRows ?? [],
              columns: nestedColumns
            }
          ),
          getRowCanExpand: (row) => !!row.original.subRows,
          defaultState: { expanded: { "0": true, "2": true } },
          striped: true,
          verticalBorders: true,
          size: "small",
          pagination: SHOWCASE_PAGINATION_4
        }
      );
    }
  };
  var RESPONSIVE_SECONDARY_COLUMNS = [
    { id: "email", header: "E-post" },
    { id: "role", header: "Roll" },
    { id: "location", header: "Asukoht" }
  ];
  var SelectableRows = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "tedi-table-selectable",
        data: people,
        columns: personColumns,
        enableRowSelection: true,
        pagination: DEFAULT_PAGINATION
      }
    )
  };
  var SingleSelectRows = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "tedi-table-single-select",
        data: people,
        columns: personColumns,
        enableRowSelection: true,
        selectionMode: "single",
        pagination: DEFAULT_PAGINATION
      }
    )
  };
  var ClickableRows = {
    render: function ClickableRows2() {
      const [active, setActive] = (0, import_react5.useState)(null);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { className: "margin-bottom-10", children: active ? `You clicked ${active.name}` : "Click a row to select it." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_exports.Table,
          {
            id: "tedi-table-clickable",
            data: people,
            columns: personColumns,
            onRowClick: (row) => setActive({ id: row.id, name: row.original.name }),
            activeRowId: active?.id,
            pagination: DEFAULT_PAGINATION
          }
        )
      ] });
    }
  };
  var Striped = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "tedi-table-striped",
        data: people,
        columns: personColumns,
        striped: true,
        pagination: DEFAULT_PAGINATION
      }
    )
  };
  var stickyDoctorSeed = [
    {
      name: "Kalle Kask",
      personalId: "49504080456",
      specialty: "Dermatovenereoloog",
      experience: "4 a",
      location: "Tallinn"
    },
    {
      name: "Mari Maasikas",
      personalId: "39404080456",
      specialty: "Kopsuarst",
      experience: "4 a",
      location: "Tallinn"
    },
    {
      name: "Vello Vaarikas",
      personalId: "39403080865",
      specialty: "K\xF5rva-nina-kurguarst",
      experience: "4 a",
      location: "Tallinn"
    }
  ];
  var stickyDoctors = Array.from({ length: 28 }, (_, index) => ({
    ...stickyDoctorSeed[index % stickyDoctorSeed.length],
    id: String(index + 1)
  }));
  var stickyDoctorColumns = [
    {
      id: "name",
      header: "Arst",
      accessorKey: "name",
      size: 280,
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 16 }, children: [
        row.original.name,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { color: "var(--general-text-tertiary)" }, children: row.original.personalId })
      ] })
    },
    { id: "specialty", header: "Eriala", accessorKey: "specialty", size: 240 },
    { id: "experience", header: "T\xF6\xF6staa\u017E", accessorKey: "experience", size: 200 },
    { id: "location", header: "Asukoht", accessorKey: "location", size: 200 },
    {
      id: "actions",
      header: "",
      size: 1,
      cell: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: rowActionsCellStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "link", iconLeft: "edit", children: "Muuda" }) })
    }
  ];
  var StickyFirstColumn = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 600 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "tedi-table-sticky",
        data: stickyDoctors,
        columns: stickyDoctorColumns,
        stickyFirstColumn: true,
        pagination: DEFAULT_PAGINATION
      }
    ) })
  };
  var StickyLastColumn = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 600 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "tedi-table-sticky-last",
        data: stickyDoctors,
        columns: stickyDoctorColumns,
        stickyLastColumn: true,
        pagination: DEFAULT_PAGINATION
      }
    ) })
  };
  var StickyHeader = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "tedi-table-sticky-header", data: people, columns: personColumns, stickyHeader: true, maxHeight: 240 })
  };
  var StickyHeaderAndFirstColumn = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 600 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "tedi-table-sticky-both",
        data: stickyDoctors,
        columns: stickyDoctorColumns,
        stickyHeader: true,
        stickyFirstColumn: true,
        maxHeight: 280
      }
    ) })
  };
  var WithEmptyState = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "tedi-table-empty-state",
        data: [],
        columns: personColumns,
        emptyState: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(empty_state_exports.EmptyState, { type: "inside", icon: { name: "spa", color: "tertiary" }, children: "No results found" })
      }
    )
  };
  var longTextsColumns = [
    baseDoctorWithDescriptionColumns[0],
    {
      id: "description",
      header: "Kirjeldus",
      size: 480,
      cell: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(truncate_exports.Truncate, { maxLength: LONG_TEXT_MAX_LENGTH, children: LONG_DESCRIPTION })
    },
    baseDoctorWithDescriptionColumns[1],
    baseDoctorWithDescriptionColumns[2]
  ];
  var LongTexts = {
    render: function LongTexts2() {
      const editor = useEditableRows(doctors);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableRowsProvider, { value: editor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-long-texts",
          autoResetPageIndex: false,
          data: editor.rows,
          columns: longTextsColumns,
          pagination: SHOWCASE_PAGINATION_3
        }
      ) });
    }
  };
  var Actions = {
    render: function Actions2() {
      const columns = (0, import_react5.useMemo)(
        () => [
          ...baseDoctorActionsColumns(),
          {
            id: "actions",
            header: "",
            size: 1,
            cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: rowActionsCellStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { placement: "bottom-end", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.DropdownTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                button_default,
                {
                  visualType: "secondary",
                  size: "small",
                  icon: "more_vert",
                  "aria-label": `Avalda ${row.original.name} valikud`,
                  onClick: () => void 0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {})
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.DropdownContent, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.DropdownItem, { onClick: () => void 0, children: "Muuda" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.DropdownItem, { onClick: () => void 0, children: "Dubleeri" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.DropdownItem, { onClick: () => void 0, children: "Saada e-mail" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.DropdownItem, { onClick: () => void 0, children: "Kustuta" })
              ] })
            ] }) })
          }
        ],
        []
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "tedi-table-actions", data: doctors, columns, pagination: SHOWCASE_PAGINATION_3 });
    }
  };
  var Custom = {
    render: function Custom2() {
      const columns = (0, import_react5.useMemo)(
        () => [
          {
            id: "name",
            header: "Arst",
            cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", style: avatarStyle, children: initialsOf(row.original.name) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.name }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: "var(--general-text-secondary)" }, children: row.original.specialty })
              ] })
            ] })
          },
          {
            id: "note",
            header: "",
            cell: ({ row }) => row.original.note && row.original.noteColor ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_exports.Alert, { type: row.original.noteColor, size: "small", role: "status", children: row.original.note }) : null
          },
          { id: "location", header: "Asukoht", accessorKey: "location" },
          {
            id: "actions",
            header: "",
            size: 1,
            cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: rowActionsCellStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_exports.Popover, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.PopoverTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { isSmall: true, "aria-label": `${row.original.name} eelvaade` }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.PopoverContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontWeight: "var(--heading-weight)" }, children: row.original.name }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { color: "var(--general-text-secondary)" }, children: [
                  row.original.specialty,
                  " \xB7 ",
                  row.original.location
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { color: "primary", axis: "horizontal", spacing: 0.5 }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", size: "small", icon: "edit", onClick: () => void 0, children: "Muuda" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "primary", size: "small", icon: "open_in_new", onClick: () => void 0, children: "Ava profiil" })
                ] })
              ] }) })
            ] }) })
          }
        ],
        []
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-custom",
          data: customDoctors,
          columns,
          pagination: SHOWCASE_PAGINATION_3
        }
      ) });
    }
  };
  var WithFooter = {
    render: () => {
      const columns = [
        { id: "name", header: "Name", accessorKey: "name", footer: `${people.length} people` },
        { id: "role", header: "Role", accessorKey: "role" },
        { id: "location", header: "Location", accessorKey: "location" },
        {
          id: "salary",
          accessorKey: "salary",
          header: "Salary (\u20AC)",
          meta: { align: "right" },
          cell: (info) => info.getValue().toLocaleString("et-EE"),
          footer: (info) => {
            const total = info.table.getFilteredRowModel().rows.reduce((sum, row) => sum + row.original.salary, 0);
            return `Total \u20AC${total.toLocaleString("et-EE")}`;
          }
        }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "tedi-table-footer", data: people, columns, pagination: DEFAULT_PAGINATION });
    }
  };
  var WithColumnsMenu = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "tedi-table-visibility", data: people, columns: personColumns, pagination: DEFAULT_PAGINATION, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table.Toolbar, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table.ColumnsMenu, {}) }) })
  };
  var ReorderableRows = {
    render: function DraggableRows() {
      const [rows, setRows] = (0, import_react5.useState)(() => people.slice(0, 8));
      const columns = (0, import_react5.useMemo)(
        () => [
          { id: "name", header: "Name", accessorKey: "name" },
          { id: "role", header: "Role", accessorKey: "role" },
          { id: "location", header: "Location", accessorKey: "location" }
        ],
        []
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_exports.Alert, { type: "info", role: "status", title: "Row reordering", icon: "lightbulb", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          "Reorder by mouse (grab the ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "\u2261" }),
          " handle) or ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "keyboard" }),
          ": Tab to a handle, press ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Space" }),
          "/",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Enter" }),
          " to pick the row up, then",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "\u2191" }),
          "/",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "\u2193" }),
          " to move, ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Space" }),
          "/",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Enter" }),
          " to drop, or ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Esc" }),
          " to cancel. Each move emits",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "onRowDrop" }),
          " with source indices \u2014 the parent applies it (e.g. with",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "arrayMove" }),
          ") and passes the new data back. Moves are announced to screen readers via a live region."
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_exports.Table,
          {
            id: "tedi-table-row-drag",
            data: rows,
            columns,
            reorderableRows: true,
            onRowDrop: ({ fromIndex, toIndex }) => setRows((current) => arrayMove(current, fromIndex, toIndex))
          }
        )
      ] });
    }
  };
  var ReorderableColumns = {
    render: function DraggableColumns() {
      const columns = (0, import_react5.useMemo)(
        () => [
          { id: "name", header: "Name", accessorKey: "name" },
          { id: "email", header: "Email", accessorKey: "email" },
          { id: "role", header: "Role", accessorKey: "role" },
          { id: "location", header: "Location", accessorKey: "location" }
        ],
        []
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_exports.Alert, { type: "info", role: "status", title: "Column reordering", icon: "lightbulb", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          "Reorder by mouse (reorder a header by its ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "\u2261" }),
          " handle) or ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "keyboard" }),
          ": Tab to a handle, ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Space" }),
          "/",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Enter" }),
          " to pick up, then",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "\u2190" }),
          "/",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "\u2192" }),
          " to move, ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Space" }),
          "/",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Enter" }),
          " to drop, or ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "Esc" }),
          " to cancel. The Table owns the wiring and pushes the new order into TanStack's ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "state.columnOrder" }),
          " (announced to screen readers) \u2014 combine with ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "persist" }),
          " to keep the order across refreshes."
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "tedi-table-column-drag", data: people.slice(0, 6), columns, reorderableColumns: true })
      ] });
    }
  };
  var ReorderableColumnsStickyHeader = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_exports.Alert, { type: "info", role: "status", title: "Reorder columns + sticky header", icon: "lightbulb", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
        "Reorder columns by dragging a header handle while the header stays pinned during vertical scroll. The two features are independent \u2014 drag rewrites ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "state.columnOrder" }),
        "; the sticky header is pure CSS."
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-column-drag-sticky",
          data: people,
          columns: personColumns,
          reorderableColumns: true,
          stickyHeader: true,
          maxHeight: 280,
          pagination: { pageSize: 10 }
        }
      )
    ] })
  };
  var ServerSide = {
    render: function ServerSide2() {
      const [pagination, setPagination] = (0, import_react5.useState)({ pageIndex: 0, pageSize: 5 });
      const [sorting, setSorting] = (0, import_react5.useState)([]);
      const sortedData = (0, import_react5.useMemo)(() => {
        if (sorting.length === 0) return people;
        const { id, desc } = sorting[0];
        const direction = desc ? -1 : 1;
        return [...people].sort((a, b) => {
          const av = a[id];
          const bv = b[id];
          if (av === bv) return 0;
          return av > bv ? direction : -direction;
        });
      }, [sorting]);
      const pageRows = (0, import_react5.useMemo)(
        () => sortedData.slice(pagination.pageIndex * pagination.pageSize, (pagination.pageIndex + 1) * pagination.pageSize),
        [sortedData, pagination]
      );
      const sortableColumns = (0, import_react5.useMemo)(
        () => personColumns.map((col) => ({
          ...col,
          header: ({ column }) => {
            const sorted = column.getIsSorted();
            const iconName = sorted === "asc" ? "arrow_upward" : sorted === "desc" ? "arrow_downward" : "unfold_more";
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
              col.header,
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                table_exports.Table.HeaderButton,
                {
                  icon: iconName,
                  selected: !!sorted,
                  "aria-label": `Sort by ${col.header}`,
                  onClick: column.getToggleSortingHandler()
                }
              )
            ] });
          }
        })),
        []
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(alert_exports.Alert, { type: "info", role: "status", title: "Server-side mode", icon: "lightbulb", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            "This story simulates a server-paginated, server-sorted table. The parent owns the current page slice and the sort state; the Table is told ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "manualPagination" }),
            " +",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "manualSorting" }),
            " so it does not re-slice or re-sort its",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "data" }),
            " locally."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Wiring it up in your app" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "pre",
            {
              style: {
                margin: 0,
                padding: "var(--tedi-dimensions-12)",
                background: "var(--general-surface-secondary)",
                fontSize: "var(--body-small-regular-size)",
                whiteSpace: "pre-wrap"
              },
              children: `const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
const [sorting, setSorting] = useState([]);

// Refetch from the server whenever pagination / sort changes.
const { data: page, total } = useServerQuery({ pagination, sorting });

<Table
  data={page.rows}                    // current page only
  columns={columns}
  manualPagination                    // disables in-memory pagination
  manualSorting                       // disables in-memory sort
  pageCount={Math.ceil(total / pagination.pageSize)}
  rowCount={total}                    // shown in the "X results" footer
  state={{ pagination, sorting }}     // controlled
  onStateChange={(next) => {
    if (next.pagination) setPagination(next.pagination);
    if (next.sorting) setSorting(next.sorting);
  }}
  pagination
/>`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "horizontal", spacing: 1, color: "secondary" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { modifiers: "small", color: "secondary", children: [
            "Tip: ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { children: "manualFiltering" }),
            " works the same way for column filters when you have them."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          table_exports.Table,
          {
            id: "tedi-table-server-side",
            data: pageRows,
            columns: sortableColumns,
            manualPagination: true,
            manualSorting: true,
            pageCount: Math.ceil(people.length / pagination.pageSize),
            rowCount: people.length,
            state: { pagination, sorting },
            onStateChange: (next) => {
              if (next.pagination) setPagination(next.pagination);
              if (next.sorting !== void 0) setSorting(next.sorting);
            },
            pagination: { pageSize: 5, pageSizeOptions: [5, 10, 25] }
          }
        )
      ] });
    }
  };
  var Responsive = {
    render: function Responsive2() {
      const breakpoint = (0, helpers_exports.useBreakpoint)();
      const belowMd = (0, helpers_exports.isBreakpointBelow)(breakpoint, "md");
      const columns = (0, import_react5.useMemo)(
        () => [
          { id: "name", header: "Nimi", accessorKey: "name" },
          { id: "email", header: "E-post", accessorKey: "email" },
          { id: "role", header: "Roll", accessorKey: "role" },
          { id: "location", header: "Asukoht", accessorKey: "location" },
          { id: "salary", header: "Palk", accessorKey: "salary" }
        ],
        []
      );
      const columnVisibility = (0, import_react5.useMemo)(
        () => RESPONSIVE_SECONDARY_COLUMNS.reduce((acc, col) => {
          acc[col.id] = !belowMd;
          return acc;
        }, {}),
        [belowMd]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_exports.Table,
        {
          id: "tedi-table-responsive",
          data: people,
          columns,
          state: { columnVisibility },
          getRowCanExpand: () => belowMd,
          renderSubComponent: belowMd ? (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: RESPONSIVE_SECONDARY_COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            text_group_exports.TextGroup,
            {
              type: "horizontal",
              labelWidth: "6rem",
              label: col.header,
              value: String(row.original[col.id])
            },
            col.id
          )) }) : void 0,
          pagination: DEFAULT_PAGINATION
        }
      );
    }
  };
  var appointments = Array.from({ length: 6 }, () => ({
    date: "22.03.2029 \u2013 29.03.2029",
    time: "11:14",
    duration: "6 min",
    location: "Harjumaa"
  }));
  var editButton = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "neutral", size: "small", iconLeft: "edit", children: "Muuda" });
  var appointmentColumns = [
    {
      id: "date",
      header: "Kuup\xE4ev",
      accessorKey: "date",
      cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { whiteSpace: "nowrap" }, children: row.original.date })
    },
    { id: "time", header: "Kellaaeg", accessorKey: "time" },
    { id: "duration", header: "Kestus", accessorKey: "duration" },
    { id: "location", header: "Asukoht", accessorKey: "location" },
    {
      id: "actions",
      header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Tegevused" }),
      size: 1,
      meta: { label: "Tegevused" },
      cell: () => editButton
    }
  ];
  var Scrollable = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "table-scroll-plain", data: appointments, columns: appointmentColumns }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 560 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "table-scroll-sticky-col",
        data: appointments,
        columns: appointmentColumns,
        stickyFirstColumn: true
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_exports.Table,
      {
        id: "table-scroll-sticky-header",
        data: appointments,
        columns: appointmentColumns,
        stickyHeader: true,
        maxHeight: 240
      }
    )
  ] });
  Scrollable.parameters = { fullWidth: true, layout: "padded" };
  var ResponsiveCards = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_exports.Table, { id: "table-responsive-cards", data: appointments, columns: appointmentColumns }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: appointments.map((appointment, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_card_exports.TableCard,
      {
        layout: "vertical",
        rows: [
          { label: "Kuup\xE4ev", value: appointment.date },
          { label: "Kellaaeg", value: appointment.time },
          { label: "Kestus", value: appointment.duration },
          { label: "Asukoht", value: appointment.location }
        ],
        actions: editButton
      },
      index
    )) }) })
  ] });
  ResponsiveCards.parameters = { fullWidth: true, layout: "padded" };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React4 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function compose(stories, key, globalDefaults, backgrounds) {
    const meta2 = stories.default ?? {};
    const story = stories[key];
    const args = { ...meta2.args ?? {}, ...story?.args ?? {} };
    const argTypes = { ...meta2.argTypes ?? {}, ...story?.argTypes ?? {} };
    for (const name of Object.keys(args)) {
      const mapping = argTypes[name]?.mapping;
      if (mapping && typeof mapping === "object" && args[name] in mapping) args[name] = mapping[args[name]];
    }
    const title = typeof meta2.title === "string" ? meta2.title : "";
    const context = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: { ...globalDefaults, ...meta2.globals ?? {}, ...story?.globals ?? {} },
      viewMode: "story",
      parameters: { ...meta2.parameters ?? {}, ...story?.parameters ?? {} }
    };
    let render = null;
    if (typeof story?.render === "function") render = () => story.render(args, context);
    else if (typeof story === "function") render = () => story(args, context);
    else if (typeof meta2.render === "function") render = () => meta2.render(args, context);
    else {
      const Component = story?.component ?? meta2.component;
      if (Component) render = () => React4.createElement(Component, args);
    }
    if (!render) return () => null;
    const decorators = [].concat(story?.decorators ?? []).concat(meta2.decorators ?? []);
    const decorated = decorators.reduce(
      (inner, decorator) => () => decorator(inner, context) ?? inner(),
      render
    );
    const background = backgrounds[context.globals.backgrounds?.value];
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Story, {}) });
  }

  // Table.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default3 = compose(table_stories_exports, "Default", G, B);
  var Sizes3 = compose(table_stories_exports, "Sizes", G, B);
  var Simple3 = compose(table_stories_exports, "Simple", G, B);
  var MergedCells3 = compose(table_stories_exports, "MergedCells", G, B);
  var GroupedRows3 = compose(table_stories_exports, "GroupedRows", G, B);
  var VerticalBorders2 = compose(table_stories_exports, "VerticalBorders", G, B);
  var NoOutsideBorder2 = compose(table_stories_exports, "NoOutsideBorder", G, B);
  var EditableValues3 = compose(table_stories_exports, "EditableValues", G, B);
  var Sortable3 = compose(table_stories_exports, "Sortable", G, B);
  var Filters3 = compose(table_stories_exports, "Filters", G, B);
  var CollapsibleRows2 = compose(table_stories_exports, "CollapsibleRows", G, B);
  var CollapsibleRowsRowTrigger2 = compose(table_stories_exports, "CollapsibleRowsRowTrigger", G, B);
  var NestedTable2 = compose(table_stories_exports, "NestedTable", G, B);
  var SelectableRows2 = compose(table_stories_exports, "SelectableRows", G, B);
  var SingleSelectRows2 = compose(table_stories_exports, "SingleSelectRows", G, B);
  var ClickableRows3 = compose(table_stories_exports, "ClickableRows", G, B);
  var Striped2 = compose(table_stories_exports, "Striped", G, B);
  var StickyFirstColumn2 = compose(table_stories_exports, "StickyFirstColumn", G, B);
  var StickyLastColumn2 = compose(table_stories_exports, "StickyLastColumn", G, B);
  var StickyHeader2 = compose(table_stories_exports, "StickyHeader", G, B);
  var StickyHeaderAndFirstColumn2 = compose(table_stories_exports, "StickyHeaderAndFirstColumn", G, B);
  var WithEmptyState2 = compose(table_stories_exports, "WithEmptyState", G, B);
  var LongTexts3 = compose(table_stories_exports, "LongTexts", G, B);
  var Actions3 = compose(table_stories_exports, "Actions", G, B);
  var Custom3 = compose(table_stories_exports, "Custom", G, B);
  var WithFooter2 = compose(table_stories_exports, "WithFooter", G, B);
  var WithColumnsMenu2 = compose(table_stories_exports, "WithColumnsMenu", G, B);
  var ReorderableRows2 = compose(table_stories_exports, "ReorderableRows", G, B);
  var ReorderableColumns2 = compose(table_stories_exports, "ReorderableColumns", G, B);
  var ReorderableColumnsStickyHeader2 = compose(table_stories_exports, "ReorderableColumnsStickyHeader", G, B);
  var ServerSide3 = compose(table_stories_exports, "ServerSide", G, B);
  var Responsive3 = compose(table_stories_exports, "Responsive", G, B);
  var Scrollable2 = compose(table_stories_exports, "Scrollable", G, B);
  var ResponsiveCards2 = compose(table_stories_exports, "ResponsiveCards", G, B);
  return __toCommonJS(Table_preview_exports);
})();
