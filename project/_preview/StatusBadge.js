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

  // tedi-namespace:tedi-namespace
  var require_tedi_namespace = __commonJS({
    "tedi-namespace:tedi-namespace"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.Tedi;
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

  // StatusBadge.preview.tsx
  var StatusBadge_preview_exports = {};
  __export(StatusBadge_preview_exports, {
    Colors: () => Colors2,
    Default: () => Default2,
    Sizes: () => Sizes2,
    StatusIndicator: () => StatusIndicator2,
    WithTooltip: () => WithTooltip2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/tags/status-badge/status-badge.stories.tsx
  var status_badge_stories_exports = {};
  __export(status_badge_stories_exports, {
    Colors: () => Colors,
    Default: () => Default,
    Sizes: () => Sizes,
    StatusIndicator: () => StatusIndicator,
    WithTooltip: () => WithTooltip,
    default: () => status_badge_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

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
  var ns2 = window.Tedi;
  var row_default = ns2["Row"] ?? ns2;

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
  var ns3 = window.Tedi;
  var col_default = ns3["Col"] ?? ns3;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var vertical_spacing_default = ns4["VerticalSpacing"] ?? ns4;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/overlays/tooltip/index.ts
  var tooltip_exports = {};
  __export(tooltip_exports, {
    default: () => tooltip_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tooltip_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var tooltip_default = ns5["Tooltip"] ?? ns5;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var status_badge_default = ns6["StatusBadge"] ?? ns6;

  // src/tedi/components/tags/status-badge/status-badge.stories.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: status_badge_exports.StatusBadge,
    title: "Tedi-Ready/Components/Tag/StatusBadge",
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=2385-24154&m=dev"
      }
    }
  };
  var status_badge_stories_default = meta;
  var colors = ["neutral", "brand", "accent", "warning", "danger", "success"];
  var variants = ["filled", "filled-bordered", "bordered"];
  var statuses = ["inactive", "success", "warning", "danger"];
  var sizeArray = ["default", "large"];
  var colorToIconMap = {
    neutral: "edit",
    brand: "send",
    accent: "sync",
    success: "check",
    danger: "error",
    warning: "warning",
    transparent: "edit"
  };
  var statusToIconMap = {
    inactive: "edit",
    success: "send",
    warning: "sync",
    danger: "error"
  };
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { ...args });
  var Default = {
    render: Template,
    args: {
      color: "neutral",
      variant: "filled",
      children: "Text"
    }
  };
  var TemplateAllCombos = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "badge-grid", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: colors.map((color) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { className: "mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 2, className: "d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: color.charAt(0).toUpperCase() + color.slice(1) }) }),
      variants.map((variant) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { ...args, color, variant, children: "Text" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { ...args, color, variant, icon: colorToIconMap[color], children: "Text" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { ...args, color, variant, icon: colorToIconMap[color] }) })
      ] }, variant))
    ] }, color)) }) });
  };
  var TemplateStatusGrid = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "badge-grid", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { className: "mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { md: 2, className: "d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: status?.charAt(0).toUpperCase() + status.slice(1) }) }),
      variants.map((variant) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { ...args, color: "neutral", variant, status, children: "Text" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          status_badge_exports.StatusBadge,
          {
            ...args,
            color: "neutral",
            variant,
            icon: statusToIconMap[status],
            status,
            children: "Text"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          status_badge_exports.StatusBadge,
          {
            ...args,
            color: "neutral",
            variant,
            icon: statusToIconMap[status],
            status
          }
        ) })
      ] }, variant))
    ] }, status)) }) });
  };
  var TemplateColumn = (args) => {
    const { array } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "example-list", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { width: 6, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: value ? value.charAt(0).toUpperCase() + value.slice(1) : "" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Col, { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { ...args, color: "neutral", size: array[key] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { ...args, color: "neutral", size: array[key], status: "success" })
      ] })
    ] }, key)) });
  };
  var Sizes = {
    render: TemplateColumn,
    args: {
      array: sizeArray,
      children: "Draft",
      color: "neutral"
    }
  };
  var Colors = {
    render: TemplateAllCombos
  };
  var StatusIndicator = {
    render: TemplateStatusGrid,
    args: {
      color: "neutral"
    }
  };
  var WithTooltip = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(tooltip_exports.Tooltip, { placement: "top", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(tooltip_exports.Tooltip.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(status_badge_exports.StatusBadge, { color: "warning", icon: "warning" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(tooltip_exports.Tooltip.Content, { children: "Icon-only badges should always have a tooltip to provide context and ensure accessibility." })
    ] });
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
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

  // StatusBadge.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(status_badge_stories_exports, "Default", G, B);
  var Sizes2 = compose(status_badge_stories_exports, "Sizes", G, B);
  var Colors2 = compose(status_badge_stories_exports, "Colors", G, B);
  var StatusIndicator2 = compose(status_badge_stories_exports, "StatusIndicator", G, B);
  var WithTooltip2 = compose(status_badge_stories_exports, "WithTooltip", G, B);
  return __toCommonJS(StatusBadge_preview_exports);
})();
