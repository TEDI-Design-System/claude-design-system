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

  // react-global:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "react-global:react/jsx-runtime"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var R = window.React;
      function jsx4(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx4, jsxs: jsx4, jsxDEV: jsx4, Fragment: R.Fragment };
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

  // Text.preview.tsx
  var Text_preview_exports = {};
  __export(Text_preview_exports, {
    BodyText: () => BodyText2,
    Default: () => Default2,
    GeneralText: () => GeneralText2,
    StatusText: () => StatusText2,
    Subtitles: () => Subtitles2,
    VisualTest: () => VisualTest2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/base/typography/text/text.stories.tsx
  var text_stories_exports = {};
  __export(text_stories_exports, {
    BodyText: () => BodyText,
    Default: () => Default,
    GeneralText: () => GeneralText,
    StatusText: () => StatusText,
    Subtitles: () => Subtitles,
    VisualTest: () => VisualTest,
    default: () => text_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // .storybook/visual-test-story.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var VISUAL_TEST_VIEWPORTS = [375, 1200];
  var VisualTestStory = ({ story, component, props }) => {
    const args = { ...story.args };
    if (story.render) {
      const node = story.render(args, {});
      if (!props) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: node });
      }
      if (!(0, import_react.isValidElement)(node)) {
        throw new Error("VisualTestStory: `props` needs a story whose `render` returns a single element.");
      }
      return (0, import_react.cloneElement)(node, props);
    }
    if (component) {
      return (0, import_react.createElement)(component, { ...args, ...props });
    }
    throw new Error("VisualTestStory: the story has no `render`; pass the `component` to render its args with.");
  };

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
  var ns = window.Tedi;
  var row_default = ns["Row"] ?? ns;

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
  var ns2 = window.Tedi;
  var col_default = ns2["Col"] ?? ns2;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var vertical_spacing_default = ns3["VerticalSpacing"] ?? ns3;

  // tedi:src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var text_default = ns4["Text"] ?? ns4;

  // src/tedi/components/base/typography/text/text.stories.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: text_exports.Text,
    title: "Tedi-Ready/Base/Typography/Text",
    parameters: {
      chromatic: { disableSnapshot: true },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?node-id=115-11630&m=dev"
      },
      status: {
        type: "mobileViewDifference"
      }
    }
  };
  var text_stories_default = meta;
  var TemplateSubtitles = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "example-list w-100", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "primary", modifiers: "subtitle", children: "Subtitle" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "primary", modifiers: ["subtitle", "small"], children: "Subtitle Small" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", element: "label", children: "Label" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { element: "label", modifiers: "bold", children: "Label bold" }) }) })
  ] });
  var TemplateBodyText = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "example-list w-100", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { children: "Body Regular" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Body bold" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "italic", children: "Body italic" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "small", children: "Small" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: ["small", "bold"], children: "Small bold" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: ["small", "italic"], children: "Small italic" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "border-bottom padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: ["extra-small"], children: "Extra small" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "padding-14-16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: ["extra-small", "bold"], children: "Small bold" }) }) })
  ] });
  var TemplateGeneralText = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "primary", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "secondary", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "tertiary", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "brand", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { className: "bg bg-primary", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "white", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) })
  ] });
  var TemplateStatusText = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "success", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "warning", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "danger", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "info", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { color: "neutral", children: "Rebane on v\xE4ikese koera suurune ja pika koheva sabaga. Joostes hoiab ta saba horisontaalselt. Tema selja karvad on oran\u017Eid. Eestis eelistab ta elupaigana metsatukkasid." }) }) })
  ] });
  var Default = {
    args: {
      children: "Text"
    }
  };
  var BodyText = {
    render: TemplateBodyText,
    name: "Body"
  };
  var Subtitles = {
    render: TemplateSubtitles
  };
  var GeneralText = {
    render: TemplateGeneralText,
    name: "General text colors"
  };
  var StatusText = {
    render: TemplateStatusText,
    name: "Status text colors"
  };
  var VisualTest = {
    tags: ["!dev", "!autodocs"],
    parameters: { chromatic: { disableSnapshot: false, viewports: VISUAL_TEST_VIEWPORTS } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Default" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: Default, component: text_exports.Text })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Body" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: BodyText })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Subtitles" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: Subtitles })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "General text colors" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: GeneralText })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: "Status text colors" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(VisualTestStory, { story: StatusText })
      ] })
    ] })
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
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

  // Text.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(text_stories_exports, "Default", G, B);
  var BodyText2 = compose(text_stories_exports, "BodyText", G, B);
  var Subtitles2 = compose(text_stories_exports, "Subtitles", G, B);
  var GeneralText2 = compose(text_stories_exports, "GeneralText", G, B);
  var StatusText2 = compose(text_stories_exports, "StatusText", G, B);
  var VisualTest2 = compose(text_stories_exports, "VisualTest", G, B);
  return __toCommonJS(Text_preview_exports);
})();
