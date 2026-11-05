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

  // Label.preview.tsx
  var Label_preview_exports = {};
  __export(Label_preview_exports, {
    Default: () => Default2,
    DefaultBold: () => DefaultBold2,
    DefaultSmall: () => DefaultSmall2,
    DefaultSmallBold: () => DefaultSmallBold2,
    InfoButtonStory: () => InfoButtonStory2,
    Required: () => Required2,
    RequiredBold: () => RequiredBold2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/label/label.stories.tsx
  var label_stories_exports = {};
  __export(label_stories_exports, {
    Default: () => Default,
    DefaultBold: () => DefaultBold,
    DefaultSmall: () => DefaultSmall,
    DefaultSmallBold: () => DefaultSmallBold,
    InfoButtonStory: () => InfoButtonStory,
    Required: () => Required,
    RequiredBold: () => RequiredBold,
    default: () => label_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/label/label.tsx
  var label_exports = {};
  __export(label_exports, {
    default: () => label_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(label_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var label_default = ns["Label"] ?? ns;

  // src/tedi/components/content/label/label.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: label_exports.Label,
    title: "TEDI-Ready/Content/Label",
    argTypes: {
      tooltip: { control: false }
    },
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=2137-19322&m=dev"
      }
    }
  };
  var label_stories_default = meta;
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(label_exports.Label, { ...args });
  var Default = {
    render: Template,
    args: {
      children: "Toimeaine"
    }
  };
  var Required = {
    render: Template,
    name: "Required field",
    args: {
      children: "Toimeaine",
      required: true
    }
  };
  var DefaultBold = {
    render: Template,
    name: "Bold",
    args: {
      children: "Toimeaine",
      isBold: true
    }
  };
  var RequiredBold = {
    render: Template,
    name: "Bold Required field",
    args: {
      children: "Toimeaine",
      required: true,
      isBold: true
    }
  };
  var InfoButtonStory = {
    render: Template,
    args: {
      children: "Toimeaine",
      required: true,
      tooltip: "Lisainfo"
    }
  };
  var DefaultSmall = {
    render: Template,
    args: {
      children: "Toimeaine",
      isSmall: true
    }
  };
  var DefaultSmallBold = {
    render: Template,
    args: {
      children: "Toimeaine",
      isBold: true,
      isSmall: true
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

  // Label.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(label_stories_exports, "Default", G, B);
  var Required2 = compose(label_stories_exports, "Required", G, B);
  var DefaultBold2 = compose(label_stories_exports, "DefaultBold", G, B);
  var RequiredBold2 = compose(label_stories_exports, "RequiredBold", G, B);
  var InfoButtonStory2 = compose(label_stories_exports, "InfoButtonStory", G, B);
  var DefaultSmall2 = compose(label_stories_exports, "DefaultSmall", G, B);
  var DefaultSmallBold2 = compose(label_stories_exports, "DefaultSmallBold", G, B);
  return __toCommonJS(Label_preview_exports);
})();
