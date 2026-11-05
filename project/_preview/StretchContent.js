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

  // StretchContent.preview.tsx
  var StretchContent_preview_exports = {};
  __export(StretchContent_preview_exports, {
    CardsExample: () => CardsExample2,
    Default: () => Default2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/misc/stretch-content/stretch-content.stories.tsx
  var stretch_content_stories_exports = {};
  __export(stretch_content_stories_exports, {
    CardsExample: () => CardsExample,
    Default: () => Default,
    default: () => stretch_content_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/heading/heading.tsx
  var heading_exports = {};
  __export(heading_exports, {
    default: () => heading_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var heading_default = ns["Heading"] ?? ns;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var button_default = ns2["Button"] ?? ns2;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var card_default = ns3["Card"] ?? ns3;

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
  var ns4 = window.Tedi;
  var row_default = ns4["Row"] ?? ns4;

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
  var ns5 = window.Tedi;
  var col_default = ns5["Col"] ?? ns5;

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
  var ns6 = window.Tedi;
  var vertical_spacing_default = ns6["VerticalSpacing"] ?? ns6;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/stretch-content/stretch-content.tsx
  var stretch_content_exports = {};
  __export(stretch_content_exports, {
    default: () => stretch_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(stretch_content_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var stretch_content_default = ns7["StretchContent"] ?? ns7;

  // src/tedi/components/misc/stretch-content/stretch-content.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: stretch_content_default,
    title: "TEDI-Ready/Components/Helpers/StretchContent",
    parameters: {
      status: {
        type: [
          "devComponent",
          { name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }
        ]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      }
    }
  };
  var stretch_content_stories_default = meta;
  var Template = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 500, height: 500 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_default, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-box", children: "Element that gets stretched" }) }) });
  };
  var Default = {
    render: Template
  };
  var CardsExample = {
    render: (_args) => {
      const lorem = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad expedita iste itaque laborum magnam non nulla tempora ullam! A consequuntur dicta et incidunt nisi pariatur sapiente, temporibus unde voluptatem?" });
      const card = (title, content) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(card_exports.Card, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.CardHeader, { background: "brand-primary", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h2", children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { direction: "column", gap: 4, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { children: content }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { children: "Click me" }) })
          ] }) }) })
        ] });
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_default, { children: card(
          "Card with longer content",
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            lorem,
            lorem
          ] })
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: card("Card that is not stretched", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: lorem })) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_default, { children: card("Card where content is also stretched", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: lorem })) }) })
      ] });
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

  // StretchContent.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(stretch_content_stories_exports, "Default", G, B);
  var CardsExample2 = compose(stretch_content_stories_exports, "CardsExample", G, B);
  return __toCommonJS(StretchContent_preview_exports);
})();
