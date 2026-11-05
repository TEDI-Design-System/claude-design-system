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

  // HeadingWithIcon.preview.tsx
  var HeadingWithIcon_preview_exports = {};
  __export(HeadingWithIcon_preview_exports, {
    Colors: () => Colors2,
    Default: () => Default2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/heading-with-icon/heading-with-icon.stories.tsx
  var heading_with_icon_stories_exports = {};
  __export(heading_with_icon_stories_exports, {
    Colors: () => Colors,
    Default: () => Default,
    default: () => heading_with_icon_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var vertical_spacing_default = ns["VerticalSpacing"] ?? ns;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/heading-with-icon/heading-with-icon.tsx
  var heading_with_icon_exports = {};
  __export(heading_with_icon_exports, {
    default: () => heading_with_icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_with_icon_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var heading_with_icon_default = ns2["HeadingWithIcon"] ?? ns2;

  // src/tedi/components/content/heading-with-icon/heading-with-icon.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var heading_with_icon_stories_default = {
    title: "Tedi-Ready/Content/HeadingWithIcon",
    component: heading_with_icon_default,
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=2137-19827&mode=dev"
      }
    }
  };
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_with_icon_default, { ...args });
  var TemplateColors = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_with_icon_default, { headingColor: "brand", iconColor: "brand", ...args, children: args.children }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_with_icon_default, { ...args, children: args.children })
    ] });
  };
  var Default = {
    render: Template,
    args: {
      children: "My family physician",
      name: "assignment_ind",
      headingColor: "brand",
      iconColor: "brand"
    }
  };
  var Colors = {
    render: TemplateColors,
    args: {
      children: "My family physician",
      name: "assignment_ind"
    }
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
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

  // HeadingWithIcon.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(heading_with_icon_stories_exports, "Default", G, B);
  var Colors2 = compose(heading_with_icon_stories_exports, "Colors", G, B);
  return __toCommonJS(HeadingWithIcon_preview_exports);
})();
