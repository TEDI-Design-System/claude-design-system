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
      function jsx2(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx2, jsxs: jsx2, jsxDEV: jsx2, Fragment: R.Fragment };
    }
  });

  // FeedbackText.preview.tsx
  var FeedbackText_preview_exports = {};
  __export(FeedbackText_preview_exports, {
    Error: () => Error3,
    Helper: () => Helper2,
    PositionLeft: () => PositionLeft2,
    PositionRight: () => PositionRight2,
    Valid: () => Valid2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/feedback-text/feedback-text.stories.tsx
  var feedback_text_stories_exports = {};
  __export(feedback_text_stories_exports, {
    Error: () => Error2,
    Helper: () => Helper,
    PositionLeft: () => PositionLeft,
    PositionRight: () => PositionRight,
    Valid: () => Valid,
    default: () => feedback_text_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/components/form/feedback-text/feedback-text.tsx
  var feedback_text_exports = {};
  __export(feedback_text_exports, {
    default: () => feedback_text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(feedback_text_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var feedback_text_default = ns["FeedbackText"] ?? ns;

  // src/tedi/components/form/feedback-text/feedback-text.stories.tsx
  var meta = {
    component: feedback_text_exports.FeedbackText,
    title: "TEDI-Ready/Components/Form/FeedbackText",
    parameters: {
      status: {
        type: ["devComponent"]
      }
    }
  };
  var feedback_text_stories_default = meta;
  var Helper = {
    args: {
      text: "I am a hint text"
    }
  };
  var Error2 = {
    args: {
      text: "I am an error text",
      type: "error"
    }
  };
  var Valid = {
    args: {
      text: "I am a valid text",
      type: "valid"
    }
  };
  var PositionLeft = {
    args: {
      text: "I am a hint text",
      position: "left"
    }
  };
  var PositionRight = {
    args: {
      text: "I am a valid text",
      type: "valid",
      position: "right"
    }
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime = __toESM(require_jsx_runtime());
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
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}) });
  }

  // FeedbackText.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Helper2 = compose(feedback_text_stories_exports, "Helper", G, B);
  var Error3 = compose(feedback_text_stories_exports, "Error", G, B);
  var Valid2 = compose(feedback_text_stories_exports, "Valid", G, B);
  var PositionLeft2 = compose(feedback_text_stories_exports, "PositionLeft", G, B);
  var PositionRight2 = compose(feedback_text_stories_exports, "PositionRight", G, B);
  return __toCommonJS(FeedbackText_preview_exports);
})();
