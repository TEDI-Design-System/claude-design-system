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

  // Spinner.preview.tsx
  var Spinner_preview_exports = {};
  __export(Spinner_preview_exports, {
    Color: () => Color2,
    Default: () => Default2,
    Size: () => Size2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/loaders/spinner/spinner.stories.tsx
  var spinner_stories_exports = {};
  __export(spinner_stories_exports, {
    Color: () => Color,
    Default: () => Default,
    Size: () => Size,
    default: () => spinner_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // src/tedi/components/layout/grid/index.ts
  var grid_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/grid/row.tsx
  var row_exports = {};
  __export(row_exports, {
    default: () => row_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(row_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var row_default = ns["Row"] ?? ns;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, row_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/grid/col.tsx
  var col_exports = {};
  __export(col_exports, {
    default: () => col_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(col_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var col_default = ns2["Col"] ?? ns2;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/loaders/spinner/spinner.tsx
  var spinner_exports = {};
  __export(spinner_exports, {
    default: () => spinner_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(spinner_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var spinner_default = ns3["Spinner"] ?? ns3;

  // src/tedi/components/loaders/spinner/spinner.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var withConditionalCanvasBackground = (Story, context) => {
    const { color } = context.args;
    (0, import_react.useEffect)(() => {
      const bg = color === "secondary" ? "var(--general-surface-inverted-primary)" : "var(--general-surface-primary)";
      const elements = document.querySelectorAll(".sb-show-main, .docs-story > div, .sbdocs-preview");
      elements.forEach((el) => {
        const element = el;
        element.style.backgroundColor = bg;
        element.style.color = color === "secondary" ? "var(--general-text-white)" : "var(--general-text-primary)";
        element.style.transition = "background-color 0.2s ease";
      });
      return () => {
        elements.forEach((el) => {
          const element = el;
          element.style.backgroundColor = "";
        });
      };
    }, [color]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {});
  };
  var meta = {
    component: spinner_exports.Spinner,
    title: "Tedi-Ready/Components/Loader/Spinner",
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=2768-42334&mode=dev"
      }
    }
  };
  var spinner_stories_default = meta;
  var sizeArray = [8, 10, 12, 16, 18, 24, 36, 48];
  var TemplateColumn = (args) => {
    const { array, property, ...spinnerProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list w-50", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: value?.toString() }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "d-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(spinner_exports.Spinner, { ...spinnerProps, ...{ [property]: value } }) })
    ] }, key)) });
  };
  var TemplateColors = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(spinner_exports.Spinner, { color: "primary", label: "Loading...", size: 48 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg bg-primary", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(spinner_exports.Spinner, { color: "secondary", label: "Loading...", size: 48 }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg bg-danger", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(spinner_exports.Spinner, { color: "secondary", label: "Loading...", size: 48 }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg bg-success", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(spinner_exports.Spinner, { color: "secondary", label: "Loading...", size: 48 }) }) })
    ] });
  };
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(spinner_exports.Spinner, { ...args });
  var Default = {
    render: Template,
    args: {
      size: 16,
      color: "primary",
      label: "Loading..."
    },
    decorators: [withConditionalCanvasBackground]
  };
  var Size = {
    render: TemplateColumn,
    args: {
      property: "size",
      color: "primary",
      array: sizeArray,
      label: "Loading..."
    }
  };
  var Color = {
    render: TemplateColors
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

  // Spinner.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(spinner_stories_exports, "Default", G, B);
  var Size2 = compose(spinner_stories_exports, "Size", G, B);
  var Color2 = compose(spinner_stories_exports, "Color", G, B);
  return __toCommonJS(Spinner_preview_exports);
})();
