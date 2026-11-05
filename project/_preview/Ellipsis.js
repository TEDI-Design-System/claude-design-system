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

  // Ellipsis.preview.tsx
  var Ellipsis_preview_exports = {};
  __export(Ellipsis_preview_exports, {
    Default: () => Default2,
    LeadingStart: () => LeadingStart2,
    ResponsiveExample: () => ResponsiveExample2,
    ResponsiveWithCustomPopover: () => ResponsiveWithCustomPopover2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/misc/ellipsis/ellipsis.stories.tsx
  var ellipsis_stories_exports = {};
  __export(ellipsis_stories_exports, {
    Default: () => Default,
    LeadingStart: () => LeadingStart,
    ResponsiveExample: () => ResponsiveExample,
    ResponsiveWithCustomPopover: () => ResponsiveWithCustomPopover,
    default: () => ellipsis_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/overlays/popover/popover.tsx
  var popover_exports = {};
  __export(popover_exports, {
    default: () => popover_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(popover_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var popover_default = ns["Popover"] ?? ns;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/ellipsis/ellipsis.tsx
  var ellipsis_exports = {};
  __export(ellipsis_exports, {
    default: () => ellipsis_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(ellipsis_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var ellipsis_default = ns2["Ellipsis"] ?? ns2;

  // src/tedi/components/misc/ellipsis/ellipsis.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: ellipsis_default,
    title: "TEDI-Ready/Components/Helpers/Ellipsis",
    parameters: {
      status: {
        type: ["devComponent"]
      }
    }
  };
  var ellipsis_stories_default = meta;
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 200 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ellipsis_default, { ...args }) });
  var Default = {
    render: Template,
    args: {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
        "Any inline ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "content (even bold)" }),
        ", that is too long for the wrapper",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-small", children: " and dont fit in x number of rows" })
      ] })
    }
  };
  var ResponsiveExample = {
    args: {
      lineClamp: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
        "Any inline ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "content (even bold)" }),
        ", that is too long for the wrapper",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-small", children: " and dont fit in x number of rows" })
      ] })
    }
  };
  var LeadingStart = {
    render: Template,
    args: {
      position: "start",
      children: "https://www.tedi.ee/some/very/long/path/to/a/specific-resource-identifier.pdf"
    }
  };
  var ResponsiveWithCustomPopover = {
    args: {
      lineClamp: 1,
      popover: false,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { openWith: "hover", focusManager: { modal: false }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { role: "button", children: [
          "Any inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "content (even bold)" }),
          ", that is too long for the wrapper",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-small", children: " and dont fit in x number of rows" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: "Custom popover content, shown also when text doesn't Ellipse" })
      ] })
    }
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

  // Ellipsis.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(ellipsis_stories_exports, "Default", G, B);
  var ResponsiveExample2 = compose(ellipsis_stories_exports, "ResponsiveExample", G, B);
  var LeadingStart2 = compose(ellipsis_stories_exports, "LeadingStart", G, B);
  var ResponsiveWithCustomPopover2 = compose(ellipsis_stories_exports, "ResponsiveWithCustomPopover", G, B);
  return __toCommonJS(Ellipsis_preview_exports);
})();
