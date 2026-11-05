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

  // Tag.preview.tsx
  var Tag_preview_exports = {};
  __export(Tag_preview_exports, {
    Danger: () => Danger2,
    Default: () => Default2,
    Ellipsis: () => Ellipsis2,
    Primary: () => Primary2,
    Secondary: () => Secondary2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/tags/tag/tag.stories.tsx
  var tag_stories_exports = {};
  __export(tag_stories_exports, {
    Danger: () => Danger,
    Default: () => Default,
    Ellipsis: () => Ellipsis,
    Primary: () => Primary,
    Secondary: () => Secondary,
    default: () => tag_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/layout/grid/index.ts
  var grid_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/grid/row.tsx
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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/grid/col.tsx
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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/tags/tag/tag.tsx
  var tag_exports = {};
  __export(tag_exports, {
    default: () => tag_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tag_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var tag_default = ns3["Tag"] ?? ns3;

  // src/tedi/components/tags/tag/tag.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var tag_stories_default = {
    title: "Tedi-Ready/Components/Tag/Tag",
    component: tag_exports.Tag,
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=2405-49832&m=dev"
      }
    }
  };
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { ...args });
  var ColorTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { justifyContent: "start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: args.color, children: args.children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: args.color, onClose: args.onClose, children: args.children }) }),
      args.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: args.color, isLoading: args.isLoading, children: args.children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { isLoading: true, color: args.color, children: "Tag with a very long text but little room" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: args.color, onClose: args.onClose, children: "Tag with a very long text but little room" }) })
    ] });
  };
  var Default = {
    render: Template,
    args: {
      color: "primary",
      children: "Tag"
    }
  };
  var Primary = {
    render: ColorTemplate,
    args: {
      onClose: (e) => console.log("Close button clicked", e),
      isLoading: true,
      color: "primary",
      children: "Tag"
    }
  };
  var Secondary = {
    render: ColorTemplate,
    args: {
      onClose: (e) => console.log("Close button clicked", e),
      isLoading: true,
      color: "secondary",
      children: "Tag"
    }
  };
  var Danger = {
    render: ColorTemplate,
    args: {
      onClose: (e) => console.log("Close button clicked", e),
      color: "danger",
      children: "Tag"
    }
  };
  var Ellipsis = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem", width: "7rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { onClose: (e) => console.log("Close button clicked", e), children: "A fairly long tag label that wraps" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { onClose: (e) => console.log("Close button clicked", e), ellipsis: "end", children: "A fairly long tag label, end" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { onClose: (e) => console.log("Close button clicked", e), ellipsis: "start", children: "start, a fairly long tag label" })
    ] })
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  function compose(stories, key, globalDefaults, backgrounds) {
    const meta = stories.default ?? {};
    const story = stories[key];
    const args = { ...meta.args ?? {}, ...story?.args ?? {} };
    const argTypes = { ...meta.argTypes ?? {}, ...story?.argTypes ?? {} };
    for (const name of Object.keys(args)) {
      const mapping = argTypes[name]?.mapping;
      if (mapping && typeof mapping === "object" && args[name] in mapping) args[name] = mapping[args[name]];
    }
    const title = typeof meta.title === "string" ? meta.title : "";
    const context = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: { ...globalDefaults, ...meta.globals ?? {}, ...story?.globals ?? {} },
      viewMode: "story",
      parameters: { ...meta.parameters ?? {}, ...story?.parameters ?? {} }
    };
    let render = null;
    if (typeof story?.render === "function") render = () => story.render(args, context);
    else if (typeof story === "function") render = () => story(args, context);
    else if (typeof meta.render === "function") render = () => meta.render(args, context);
    else {
      const Component = story?.component ?? meta.component;
      if (Component) render = () => React.createElement(Component, args);
    }
    if (!render) return () => null;
    const decorators = [].concat(story?.decorators ?? []).concat(meta.decorators ?? []);
    const decorated = decorators.reduce(
      (inner, decorator) => () => decorator(inner, context) ?? inner(),
      render
    );
    const background = backgrounds[context.globals.backgrounds?.value];
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Story, {}) });
  }

  // Tag.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(tag_stories_exports, "Default", G, B);
  var Primary2 = compose(tag_stories_exports, "Primary", G, B);
  var Secondary2 = compose(tag_stories_exports, "Secondary", G, B);
  var Danger2 = compose(tag_stories_exports, "Danger", G, B);
  var Ellipsis2 = compose(tag_stories_exports, "Ellipsis", G, B);
  return __toCommonJS(Tag_preview_exports);
})();
