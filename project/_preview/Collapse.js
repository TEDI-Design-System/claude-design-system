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

  // Collapse.preview.tsx
  var Collapse_preview_exports = {};
  __export(Collapse_preview_exports, {
    Default: () => Default2,
    FullRowToggle: () => FullRowToggle2,
    IconOnly: () => IconOnly2,
    Inverted: () => Inverted2,
    Nested: () => Nested2,
    SecondaryArrow: () => SecondaryArrow2,
    WithoutUnderline: () => WithoutUnderline2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/collapse/collapse.stories.tsx
  var collapse_stories_exports = {};
  __export(collapse_stories_exports, {
    Default: () => Default,
    FullRowToggle: () => FullRowToggle,
    IconOnly: () => IconOnly,
    Inverted: () => Inverted,
    Nested: () => Nested,
    SecondaryArrow: () => SecondaryArrow,
    WithoutUnderline: () => WithoutUnderline,
    default: () => collapse_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/heading/heading.tsx
  var heading_exports = {};
  __export(heading_exports, {
    default: () => heading_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var heading_default = ns["Heading"] ?? ns;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var vertical_spacing_default = ns3["VerticalSpacing"] ?? ns3;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/collapse/collapse.tsx
  var collapse_exports = {};
  __export(collapse_exports, {
    default: () => collapse_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(collapse_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var collapse_default = ns4["Collapse"] ?? ns4;

  // src/tedi/components/content/collapse/collapse.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: collapse_default,
    title: "TEDI-Ready/Content/Collapse",
    parameters: {
      status: {
        type: [
          "devComponent",
          { name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }
        ]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.0.4-(work-in-progress)?node-id=15433-138256&m=dev"
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      }
    },
    argTypes: {
      title: { control: false },
      children: { control: false }
    }
  };
  var collapse_stories_default = meta;
  var Default = {
    args: {
      id: "collapse-default",
      openText: "N\xE4ita rohkem",
      closeText: "N\xE4ita v\xE4hem",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h5", color: "secondary", children: "Juhtumi \xFCldandmed" }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "secondary", children: "Laste osalus" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Peret\xFCli lapse osaluseta" })
      ] })
    }
  };
  var IconOnly = {
    args: {
      id: "collapse-icon-only",
      iconOnly: true,
      toggleLabel: "N\xE4ita detaile",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Sisu ilma pealkirjata." })
    }
  };
  var SecondaryArrow = {
    args: {
      id: "collapse-secondary",
      iconOnly: true,
      arrowType: "secondary",
      toggleLabel: "N\xE4ita detaile",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Sisu." })
    }
  };
  var Inverted = {
    globals: { backgrounds: { value: "brand" } },
    args: {
      id: "collapse-inverted",
      inverted: true,
      openText: "N\xE4ita rohkem",
      closeText: "N\xE4ita v\xE4hem",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "white", element: "span", children: "Sisu tumedal taustal." })
    }
  };
  var WithoutUnderline = {
    args: {
      ...Default.args,
      id: "collapse-no-underline",
      underline: false
    }
  };
  var FullRowToggle = {
    args: {
      ...Default.args,
      id: "collapse-full-row",
      fullRowToggle: true
    }
  };
  var Nested = {
    args: {
      id: "parent-collapse",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h5", color: "secondary", children: "\xDClemine plokk" }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "\xDClemise ploki sisu enne alamplokki." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          collapse_default,
          {
            id: "child-collapse",
            title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h6", color: "secondary", children: "Alamplokk" }),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Pesastatud alamploki sisu." })
          }
        )
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

  // Collapse.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(collapse_stories_exports, "Default", G, B);
  var IconOnly2 = compose(collapse_stories_exports, "IconOnly", G, B);
  var SecondaryArrow2 = compose(collapse_stories_exports, "SecondaryArrow", G, B);
  var Inverted2 = compose(collapse_stories_exports, "Inverted", G, B);
  var WithoutUnderline2 = compose(collapse_stories_exports, "WithoutUnderline", G, B);
  var FullRowToggle2 = compose(collapse_stories_exports, "FullRowToggle", G, B);
  var Nested2 = compose(collapse_stories_exports, "Nested", G, B);
  return __toCommonJS(Collapse_preview_exports);
})();
