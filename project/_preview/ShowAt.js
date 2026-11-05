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

  // ShowAt.preview.tsx
  var ShowAt_preview_exports = {};
  __export(ShowAt_preview_exports, {
    BreakpointOverview: () => BreakpointOverview2,
    Default: () => Default2,
    MultipleBreakpoints: () => MultipleBreakpoints2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/layout/show-at/show-at.stories.tsx
  var show_at_stories_exports = {};
  __export(show_at_stories_exports, {
    BreakpointOverview: () => BreakpointOverview,
    Default: () => Default,
    MultipleBreakpoints: () => MultipleBreakpoints,
    default: () => show_at_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var text_default = ns["Text"] ?? ns;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/show-at/show-at.tsx
  var show_at_exports = {};
  __export(show_at_exports, {
    default: () => show_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(show_at_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var show_at_default = ns2["ShowAt"] ?? ns2;

  // src/tedi/components/layout/show-at/show-at.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: show_at_exports.ShowAt,
    title: "TEDI-Ready/Layout/ShowAt",
    parameters: {
      status: {
        type: ["devComponent"]
      }
    }
  };
  var show_at_stories_default = meta;
  var Box = ({ children, color = "#e8f4fd" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "1px solid #b3d9f2",
        backgroundColor: color
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children })
    }
  );
  var Description = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", color: "secondary", children });
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { children: "The colored box below is wrapped in ShowAt md. It is only visible at the md breakpoint and above. Resize the viewport below md to see it disappear." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: "This content is only visible at md and above." }) })
    ] })
  };
  var MultipleBreakpoints = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { children: "The colored box below is wrapped in ShowAt sm lg. It is visible at sm and above, or at lg and above. It is hidden below sm (xs)." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { sm: true, lg: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: "This content is visible at sm and above, or at lg and above." }) })
    ] })
  };
  var BreakpointOverviewTemplate = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { children: "Each colored box is visible at the specified breakpoint and above. Resize the viewport to see boxes disappear as you go below their threshold." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { xs: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { color: "#fde8e8", children: "Visible at xs and above" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { sm: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { color: "#fef3e2", children: "Visible at sm and above" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { color: "#fefce8", children: "Visible at md and above" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { lg: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { color: "#e8fde8", children: "Visible at lg and above" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { xl: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { color: "#e8f4fd", children: "Visible at xl and above" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { xxl: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { color: "#f0e8fd", children: "Visible at xxl and above" }) })
  ] });
  var BreakpointOverview = {
    render: BreakpointOverviewTemplate
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

  // ShowAt.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(show_at_stories_exports, "Default", G, B);
  var MultipleBreakpoints2 = compose(show_at_stories_exports, "MultipleBreakpoints", G, B);
  var BreakpointOverview2 = compose(show_at_stories_exports, "BreakpointOverview", G, B);
  return __toCommonJS(ShowAt_preview_exports);
})();
