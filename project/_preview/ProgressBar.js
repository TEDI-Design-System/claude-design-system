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

  // ProgressBar.preview.tsx
  var ProgressBar_preview_exports = {};
  __export(ProgressBar_preview_exports, {
    Animated: () => Animated2,
    Default: () => Default2,
    Position: () => Position2,
    Regular: () => Regular2,
    Responsive: () => Responsive2,
    Sizes: () => Sizes2,
    ValueHidden: () => ValueHidden2,
    WithError: () => WithError2,
    WithHint: () => WithHint2,
    WithLabel: () => WithLabel2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/loaders/progress-bar/progress-bar.stories.tsx
  var progress_bar_stories_exports = {};
  __export(progress_bar_stories_exports, {
    Animated: () => Animated,
    Default: () => Default,
    Position: () => Position,
    Regular: () => Regular,
    Responsive: () => Responsive,
    Sizes: () => Sizes,
    ValueHidden: () => ValueHidden,
    WithError: () => WithError,
    WithHint: () => WithHint,
    WithLabel: () => WithLabel,
    default: () => progress_bar_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var text_default = ns12["Text"] ?? ns12;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/loaders/progress-bar/progress-bar.tsx
  var progress_bar_exports = {};
  __export(progress_bar_exports, {
    default: () => progress_bar_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(progress_bar_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var progress_bar_default = ns13["ProgressBar"] ?? ns13;

  // src/tedi/components/loaders/progress-bar/progress-bar.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var HINT = { text: "\xDCleslaadimine", type: "hint" };
  var meta = {
    component: progress_bar_exports.ProgressBar,
    title: "TEDI-Ready/Components/Loader/ProgressBar",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.49.74?node-id=25616-189000&m=dev"
      },
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      }
    },
    argTypes: {
      value: { control: { type: "range", min: 0, max: 100, step: 1 } }
    }
  };
  var progress_bar_stories_default = meta;
  var MatrixTable = ({ rows }) => {
    const breakpoint = (0, helpers_exports.useBreakpoint)();
    const isMobile = (0, helpers_exports.isBreakpointBelow)(breakpoint, "md");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: `${index === rows.length - 1 ? "" : "border-bottom"} padding-14-16`,
        style: {
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          gap: "8px 24px",
          alignItems: isMobile ? "stretch" : "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: isMobile ? "0 0 auto" : "1 1 140px", margin: 0 }, children: row.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", children: line }, line)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: isMobile ? "0 0 auto" : "3 1 260px", minWidth: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(progress_bar_exports.ProgressBar, { ...row.props }) })
        ]
      },
      row.lines.join("|")
    )) });
  };
  var Default = {
    args: { value: 60, ariaLabel: "Edenemisriba pealkiri" }
  };
  var sizeRows = [
    { lines: ["Default"], props: { value: 20, ariaLabel: "Edenemisriba pealkiri", helper: HINT } },
    { lines: ["Small"], props: { value: 20, small: true, ariaLabel: "Edenemisriba pealkiri", helper: HINT } }
  ];
  var Sizes = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatrixTable, { rows: sizeRows }),
    parameters: {
      docs: {
        source: {
          code: `<ProgressBar value={20} ariaLabel="Edenemisriba pealkiri" helper={{ text: '\xDCleslaadimine', type: 'hint' }} />
<ProgressBar value={20} small ariaLabel="Edenemisriba pealkiri" helper={{ text: '\xDCleslaadimine', type: 'hint' }} />`
        }
      }
    }
  };
  var positionRows = [
    {
      lines: ["Top title", "Horizontal value", "Bottom hint"],
      props: {
        value: 20,
        label: "Edenemisriba pealkiri",
        required: true,
        labelPosition: "top",
        valuePosition: "horizontal",
        helper: HINT
      }
    },
    {
      lines: ["Top title", "Bottom value", "Bottom hint"],
      props: {
        value: 20,
        label: "Edenemisriba pealkiri",
        required: true,
        labelPosition: "top",
        valuePosition: "bottom",
        helper: HINT
      }
    },
    {
      lines: ["Horizontal title", "Horizontal value", "Bottom hint"],
      props: {
        value: 20,
        label: "Edenemisriba pealkiri",
        required: true,
        labelPosition: "top",
        valuePosition: "horizontal",
        helper: HINT,
        md: { labelPosition: "horizontal" }
      }
    },
    {
      lines: ["Horizontal title", "Bottom value", "Bottom hint"],
      props: {
        value: 20,
        label: "Edenemisriba pealkiri",
        required: true,
        labelPosition: "top",
        valuePosition: "bottom",
        helper: HINT,
        md: { labelPosition: "horizontal" }
      }
    }
  ];
  var Position = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatrixTable, { rows: positionRows }),
    parameters: {
      docs: {
        source: {
          code: `<ProgressBar value={20} label="Edenemisriba pealkiri" required labelPosition="top" valuePosition="horizontal" helper={{ text: '\xDCleslaadimine', type: 'hint' }} />
<ProgressBar value={20} label="Edenemisriba pealkiri" required labelPosition="top" valuePosition="bottom" helper={{ text: '\xDCleslaadimine', type: 'hint' }} />
<ProgressBar value={20} label="Edenemisriba pealkiri" required labelPosition="top" valuePosition="horizontal" helper={{ text: '\xDCleslaadimine', type: 'hint' }} md={{ labelPosition: 'horizontal' }} />
<ProgressBar value={20} label="Edenemisriba pealkiri" required labelPosition="top" valuePosition="bottom" helper={{ text: '\xDCleslaadimine', type: 'hint' }} md={{ labelPosition: 'horizontal' }} />`
        }
      }
    }
  };
  var WithLabel = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "24px", maxWidth: "720px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        progress_bar_exports.ProgressBar,
        {
          value: 40,
          label: "Progress",
          required: true,
          valuePosition: "bottom",
          helper: { text: "\xDCleslaadimine", type: "hint" }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        progress_bar_exports.ProgressBar,
        {
          value: 40,
          label: "K\xFCsitluses osalenutest olid vanuses 15-18",
          labelPosition: "top",
          md: { labelPosition: "horizontal" }
        }
      )
    ] }),
    parameters: {
      docs: {
        source: {
          code: `<ProgressBar value={40} label="Progress" required valuePosition="bottom" helper={{ text: '\xDCleslaadimine', type: 'hint' }} />
<ProgressBar value={40} label="K\xFCsitluses osalenutest olid vanuses 15-18" labelPosition="top" lg={{ labelPosition: 'top' }} />`
        }
      }
    }
  };
  var Regular = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "24px", maxWidth: "720px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(progress_bar_exports.ProgressBar, { value: 40, ariaLabel: "Edenemisriba pealkiri" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(progress_bar_exports.ProgressBar, { value: 40, ariaLabel: "Edenemisriba pealkiri", valueLabel: "1 / 5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(progress_bar_exports.ProgressBar, { value: 40, ariaLabel: "Edenemisriba pealkiri", valuePosition: "bottom" })
    ] }),
    parameters: {
      docs: {
        source: {
          code: `<ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" />
<ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" valueLabel="1 / 5" />
<ProgressBar value={40} ariaLabel="Edenemisriba pealkiri" valuePosition="bottom" />`
        }
      }
    }
  };
  var WithHint = {
    args: {
      value: 40,
      ariaLabel: "Edenemisriba pealkiri",
      helper: HINT
    }
  };
  var WithError = {
    args: {
      value: 40,
      ariaLabel: "Edenemisriba pealkiri",
      helper: { text: "\xDCleslaadimine eba\xF5nnestus, fail on liiga suur", type: "error" }
    }
  };
  var ValueHidden = {
    args: {
      value: 60,
      ariaLabel: "Edenemisriba pealkiri",
      showValue: false
    }
  };
  var Responsive = {
    args: {
      value: 40,
      label: "Edenemisriba pealkiri",
      labelPosition: "top",
      valuePosition: "bottom",
      helper: HINT,
      md: { labelPosition: "horizontal", valuePosition: "horizontal" }
    }
  };
  var Animated = {
    render: function AnimatedStory() {
      const [value, setValue] = (0, import_react.useState)(0);
      (0, import_react.useEffect)(() => {
        const id = window.setInterval(() => {
          setValue((v) => v >= 100 ? 0 : v + 5);
        }, 300);
        return () => window.clearInterval(id);
      }, []);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(progress_bar_exports.ProgressBar, { value, label: "\xDCleslaadimine..." });
    }
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react(), 1);
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
      if (Component) render = () => React.createElement(Component, args);
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

  // ProgressBar.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(progress_bar_stories_exports, "Default", G, B);
  var Sizes2 = compose(progress_bar_stories_exports, "Sizes", G, B);
  var Position2 = compose(progress_bar_stories_exports, "Position", G, B);
  var WithLabel2 = compose(progress_bar_stories_exports, "WithLabel", G, B);
  var Regular2 = compose(progress_bar_stories_exports, "Regular", G, B);
  var WithHint2 = compose(progress_bar_stories_exports, "WithHint", G, B);
  var WithError2 = compose(progress_bar_stories_exports, "WithError", G, B);
  var ValueHidden2 = compose(progress_bar_stories_exports, "ValueHidden", G, B);
  var Responsive2 = compose(progress_bar_stories_exports, "Responsive", G, B);
  var Animated2 = compose(progress_bar_stories_exports, "Animated", G, B);
  return __toCommonJS(ProgressBar_preview_exports);
})();
