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

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.React;
    }
  });

  // ClosingButton.preview.tsx
  var ClosingButton_preview_exports = {};
  __export(ClosingButton_preview_exports, {
    ColorBrand: () => ColorBrand2,
    ColorInverted: () => ColorInverted2,
    Default: () => Default2,
    IconSizes: () => IconSizes2,
    Size: () => Size2,
    States: () => States2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/buttons/closing-button/closing-button.stories.tsx
  var closing_button_stories_exports = {};
  __export(closing_button_stories_exports, {
    ColorBrand: () => ColorBrand,
    ColorInverted: () => ColorInverted,
    Default: () => Default,
    IconSizes: () => IconSizes,
    Size: () => Size,
    States: () => States,
    default: () => closing_button_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

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
  var ns2 = window.Tedi;
  var row_default = ns2["Row"] ?? ns2;

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
  var ns3 = window.Tedi;
  var col_default = ns3["Col"] ?? ns3;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:src/tedi/components/buttons/closing-button/closing-button.tsx
  var closing_button_exports = {};
  __export(closing_button_exports, {
    default: () => closing_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(closing_button_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var closing_button_default = ns4["ClosingButton"] ?? ns4;

  // src/tedi/components/buttons/closing-button/closing-button.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: closing_button_default,
    title: "Tedi-Ready/Components/Buttons/ClosingButton",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=4514-63815&m=dev"
      }
    }
  };
  var sizeArray = ["default", "small"];
  var iconSizeArray = [18, 24];
  var closing_button_stories_default = meta;
  var SizeTemplate = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: sizeArray.map((size, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === sizeArray.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "flex w-50", children: size }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(closing_button_default, { size, onClick: () => alert(`${size} button clicked`) }) })
    ] }, key)) });
  };
  var stateArray = ["Default", "Hover", "Active", "Focus"];
  var StatesTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "16px", maxWidth: "200px" }, children: stateArray.map((state) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: args.color === "white" ? "white" : "primary", modifiers: "bold", children: state }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(closing_button_default, { id: state, ...args }) })
    ] }, state)) });
  };
  var IconSizeTemplate = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: iconSizeArray.map((iconSize, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === iconSizeArray.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "flex w-50", children: `${iconSize}px` }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(closing_button_default, { iconSize, onClick: () => alert(`${iconSize}px icon clicked`), className: "hover" }),
        iconSize === 24 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginLeft: "16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          closing_button_default,
          {
            iconSize,
            size: "small",
            onClick: () => alert(`${iconSize}px icon clicked`),
            className: "hover"
          }
        ) })
      ] })
    ] }, key)) });
  };
  var Default = {
    args: {
      title: "close"
    }
  };
  var Size = {
    render: SizeTemplate
  };
  var IconSizes = {
    render: IconSizeTemplate,
    parameters: {
      pseudo: {
        hover: ".hover"
      }
    }
  };
  var States = {
    render: StatesTemplate,
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var ColorBrand = {
    render: StatesTemplate,
    args: {
      color: "brand"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var ColorInverted = {
    render: StatesTemplate,
    args: {
      color: "white"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    },
    globals: { backgrounds: { value: "brand" } }
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
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

  // ClosingButton.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(closing_button_stories_exports, "Default", G, B);
  var Size2 = compose(closing_button_stories_exports, "Size", G, B);
  var IconSizes2 = compose(closing_button_stories_exports, "IconSizes", G, B);
  var States2 = compose(closing_button_stories_exports, "States", G, B);
  var ColorBrand2 = compose(closing_button_stories_exports, "ColorBrand", G, B);
  var ColorInverted2 = compose(closing_button_stories_exports, "ColorInverted", G, B);
  return __toCommonJS(ClosingButton_preview_exports);
})();
