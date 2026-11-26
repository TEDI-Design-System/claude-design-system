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

  // sb-hooks:storybook/preview-api
  var require_preview_api = __commonJS({
    "sb-hooks:storybook/preview-api"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var GLOBAL_DEFAULTS = { "theme": "default" };
      var R = function() {
        return window.React;
      };
      var noop = function() {
      };
      var channel = { on: noop, off: noop, once: noop, emit: noop, removeListener: noop };
      module.exports = {
        addons: { register: noop, add: noop, getChannel: function() {
          return channel;
        }, setConfig: noop, getConfig: function() {
          return {};
        } },
        useGlobals: function() {
          var s = R().useState(GLOBAL_DEFAULTS);
          return [s[0], function(n) {
            s[1](Object.assign({}, s[0], n));
          }];
        },
        useArgs: function() {
          return [{}, noop, noop];
        },
        useParameter: noop,
        useChannel: function() {
          return noop;
        },
        useState: function() {
          return R().useState.apply(null, arguments);
        },
        useEffect: function() {
          return R().useEffect.apply(null, arguments);
        },
        useMemo: function() {
          return R().useMemo.apply(null, arguments);
        },
        useCallback: function() {
          return R().useCallback.apply(null, arguments);
        },
        useRef: function() {
          return R().useRef.apply(null, arguments);
        },
        useReducer: function() {
          return R().useReducer.apply(null, arguments);
        }
      };
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

  // react-global:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "react-global:react/jsx-runtime"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var R = window.React;
      function jsx4(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx4, jsxs: jsx4, jsxDEV: jsx4, Fragment: R.Fragment };
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

  // CollapseButton.preview.tsx
  var CollapseButton_preview_exports = {};
  __export(CollapseButton_preview_exports, {
    Default: () => Default2,
    IconOnly: () => IconOnly2,
    IconOnlyInverted: () => IconOnlyInverted2,
    SecondaryButton: () => SecondaryButton2,
    States: () => States2,
    VisualTest: () => VisualTest2,
    WithTextInverted: () => WithTextInverted2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/buttons/collapse-button/collapse-button.stories.tsx
  var collapse_button_stories_exports = {};
  __export(collapse_button_stories_exports, {
    Default: () => Default,
    IconOnly: () => IconOnly,
    IconOnlyInverted: () => IconOnlyInverted,
    SecondaryButton: () => SecondaryButton,
    States: () => States,
    VisualTest: () => VisualTest,
    WithTextInverted: () => WithTextInverted,
    default: () => collapse_button_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_preview_api = __toESM(require_preview_api(), 1);

  // .storybook/visual-test-story.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var VISUAL_TEST_VIEWPORTS = [375, 1200];
  var VisualTestStory = ({ story, component, props }) => {
    const args = { ...story.args };
    if (story.render) {
      const node = story.render(args, {});
      if (!props) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: node });
      }
      if (!(0, import_react.isValidElement)(node)) {
        throw new Error("VisualTestStory: `props` needs a story whose `render` returns a single element.");
      }
      return (0, import_react.cloneElement)(node, props);
    }
    if (component) {
      return (0, import_react.createElement)(component, { ...args, ...props });
    }
    throw new Error("VisualTestStory: the story has no `render`; pass the `component` to render its args with.");
  };

  // tedi:src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var text_default = ns["Text"] ?? ns;

  // tedi:src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var card_default = ns2["Card"] ?? ns2;

  // src/tedi/components/layout/grid/index.ts
  var grid_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/components/layout/grid/row.tsx
  var row_exports = {};
  __export(row_exports, {
    default: () => row_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(row_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var row_default = ns3["Row"] ?? ns3;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, row_exports);

  // tedi:src/tedi/components/layout/grid/col.tsx
  var col_exports = {};
  __export(col_exports, {
    default: () => col_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(col_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var col_default = ns4["Col"] ?? ns4;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var vertical_spacing_default = ns5["VerticalSpacing"] ?? ns5;

  // tedi:src/tedi/components/buttons/collapse-button/collapse-button.tsx
  var collapse_button_exports = {};
  __export(collapse_button_exports, {
    default: () => collapse_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(collapse_button_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var collapse_button_default = ns6["CollapseButton"] ?? ns6;

  // src/tedi/components/buttons/collapse-button/collapse-button.stories.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: collapse_button_exports.CollapseButton,
    title: "TEDI-Ready/Components/Buttons/CollapseButton",
    parameters: {
      chromatic: { disableSnapshot: true },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.49.74?node-id=15433-138256&m=dev"
      }
    },
    args: {
      openText: "Ava",
      closeText: "Sulge",
      hideText: false,
      arrowType: "default",
      size: "default",
      inverted: false,
      underline: true,
      open: false
    }
  };
  var collapse_button_stories_default = meta;
  var Default = {
    render: function Render(args) {
      const [, updateArgs] = (0, import_preview_api.useArgs)();
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(collapse_button_exports.CollapseButton, { ...args, onOpenChange: (open) => updateArgs({ open }) });
    }
  };
  var pseudoStates = ["Default", "Hover", "Active", "Focus"];
  var PSEUDO_PARAMS = {
    pseudo: {
      hover: "#Hover",
      active: "#Active",
      focusVisible: "#Focus"
    }
  };
  var StatesTemplate = (args) => {
    const { titleColor = "primary", hideSizes = false, idPrefix, ...collapseProps } = args;
    const getId = (state, size, open) => idPrefix ? `${idPrefix}${state}-${size}-${open ? "open" : "closed"}` : state;
    const renderRow = (state, size) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { cols: 5, alignItems: "center", gap: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: titleColor, children: state }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { width: 4, className: "flex align-items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          collapse_button_exports.CollapseButton,
          {
            ...collapseProps,
            id: getId(state, size ?? "default", false),
            size: size ?? "default",
            open: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(collapse_button_exports.CollapseButton, { ...collapseProps, id: getId(state, size ?? "default", true), size: size ?? "default", open: true })
      ] })
    ] }, `${state}-${size ?? "default"}`);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(vertical_spacing_exports.VerticalSpacing.Item, { size: 3, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", color: titleColor, children: "Default" }),
        pseudoStates.map((state) => renderRow(state))
      ] }) }),
      !hideSizes && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", color: titleColor, children: "Small" }),
        pseudoStates.map((state) => renderRow(state, "small"))
      ] })
    ] });
  };
  var States = {
    render: StatesTemplate,
    parameters: PSEUDO_PARAMS
  };
  var IconOnly = {
    render: StatesTemplate,
    args: {
      hideText: true,
      "aria-label": "N\xE4ita detaile"
    },
    parameters: PSEUDO_PARAMS
  };
  var SecondaryButton = {
    render: StatesTemplate,
    args: {
      hideText: true,
      arrowType: "secondary",
      "aria-label": "N\xE4ita detaile",
      // The secondary style has no small variant in the design.
      hideSizes: true
    },
    parameters: PSEUDO_PARAMS
  };
  var WithTextInverted = {
    render: StatesTemplate,
    args: {
      inverted: true,
      titleColor: "white"
    },
    parameters: PSEUDO_PARAMS,
    globals: { backgrounds: { value: "brand" } }
  };
  var IconOnlyInverted = {
    render: StatesTemplate,
    args: {
      hideText: true,
      inverted: true,
      titleColor: "white",
      "aria-label": "N\xE4ita detaile"
    },
    parameters: PSEUDO_PARAMS,
    globals: { backgrounds: { value: "brand" } }
  };
  var metaArgs = meta.args;
  var VisualTest = {
    tags: ["!dev", "!autodocs"],
    parameters: {
      chromatic: { disableSnapshot: false, viewports: VISUAL_TEST_VIEWPORTS },
      pseudo: {
        hover: '[id^="vt-"][id*="-Hover-"]',
        active: '[id^="vt-"][id*="-Active-"]',
        focusVisible: '[id^="vt-"][id*="-Focus-"]'
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Default" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: { args: { ...meta.args, ...Default.args } }, component: collapse_button_exports.CollapseButton })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "States" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: { ...States, args: { ...metaArgs, ...States.args, idPrefix: "vt-states-" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Icon only" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: { ...IconOnly, args: { ...metaArgs, ...IconOnly.args, idPrefix: "vt-icon-only-" } } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Secondary button" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: { ...SecondaryButton, args: { ...metaArgs, ...SecondaryButton.args, idPrefix: "vt-secondary-" } }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { background: "brand-primary", borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", color: "white", children: "With text inverted" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: { ...WithTextInverted, args: { ...metaArgs, ...WithTextInverted.args, idPrefix: "vt-inverted-" } }
          }
        )
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card, { background: "brand-primary", borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", color: "white", children: "Icon only inverted" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          VisualTestStory,
          {
            story: {
              ...IconOnlyInverted,
              args: { ...metaArgs, ...IconOnlyInverted.args, idPrefix: "vt-icon-only-inverted-" }
            }
          }
        )
      ] }) }) })
    ] })
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
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
      if (Component) render = () => React.createElement(Component, args);
    }
    if (!render) return () => null;
    const decorators = [].concat(story?.decorators ?? []).concat(meta2.decorators ?? []);
    const decorated = decorators.reduce(
      (inner, decorator) => () => decorator(inner, context) ?? inner(),
      render
    );
    const background = backgrounds[context.globals.backgrounds?.value];
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Story, {}) });
  }

  // CollapseButton.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(collapse_button_stories_exports, "Default", G, B);
  var States2 = compose(collapse_button_stories_exports, "States", G, B);
  var IconOnly2 = compose(collapse_button_stories_exports, "IconOnly", G, B);
  var SecondaryButton2 = compose(collapse_button_stories_exports, "SecondaryButton", G, B);
  var WithTextInverted2 = compose(collapse_button_stories_exports, "WithTextInverted", G, B);
  var IconOnlyInverted2 = compose(collapse_button_stories_exports, "IconOnlyInverted", G, B);
  var VisualTest2 = compose(collapse_button_stories_exports, "VisualTest", G, B);
  return __toCommonJS(CollapseButton_preview_exports);
})();
