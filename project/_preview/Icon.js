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

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames2() {
          var classes = "";
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames2.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames2.default = classNames2;
          module.exports = classNames2;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames2;
          });
        } else {
          window.classNames = classNames2;
        }
      })();
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

  // Icon.preview.tsx
  var Icon_preview_exports = {};
  __export(Icon_preview_exports, {
    Backgrounds: () => Backgrounds2,
    Colors: () => Colors2,
    Default: () => Default2,
    Sizes: () => Sizes2,
    SizesWithBackground: () => SizesWithBackground2,
    UsedInsideText: () => UsedInsideText2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/base/icon/icon.stories.tsx
  var icon_stories_exports = {};
  __export(icon_stories_exports, {
    Backgrounds: () => Backgrounds,
    Colors: () => Colors,
    Default: () => Default,
    Sizes: () => Sizes,
    SizesWithBackground: () => SizesWithBackground,
    UsedInsideText: () => UsedInsideText,
    default: () => icon_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_classnames = __toESM(require_classnames(), 1);

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

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/heading/heading.tsx
  var heading_exports = {};
  __export(heading_exports, {
    default: () => heading_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var heading_default = ns4["Heading"] ?? ns4;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var icon_default = ns5["Icon"] ?? ns5;

  // src/tedi/components/base/icon/icon.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    title: "Tedi-Ready/Base/Icon",
    component: icon_exports.Icon,
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=45-30752&mode=dev"
      }
    }
  };
  var icon_stories_default = meta;
  var sizeArray = [8, 12, 16, 18, 24, 36, 48];
  var colorArray = [
    "primary",
    "secondary",
    "tertiary",
    "brand",
    "brand-dark",
    "success",
    "warning",
    "warning-dark",
    "danger",
    "white"
  ];
  var TemplateRow = (args) => {
    const { array, property, ...iconProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: "Outlined" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { alignItems: "center", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)({ "bg bg-primary": value === "white" }), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { ...iconProps, ...{ [property]: value } }) }) }, key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: "Filled" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { alignItems: "center", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)({ "bg bg-primary": value === "white" }), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { ...iconProps, ...{ [property]: value }, filled: true }) }) }, key)) })
    ] });
  };
  var TemplateColumn = (args) => {
    const { array, property, ...iconProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list w-50", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { className: "w-50 flex", children: [
        value?.toString(),
        "\xA0",
        value === 24 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { className: "example-text--secondary", children: "default" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { ...iconProps, ...{ [property]: value } }),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { ...iconProps, ...{ [property]: value }, filled: true })
      ] })
    ] }, key)) });
  };
  var TemplateColumnWithMultipleVariants = (args) => {
    const { items } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list w-50", children: items.map((item, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      grid_exports.Row,
      {
        justifyContent: "start",
        className: `${key === items.length - 1 ? "" : "border-bottom"} padding-14-16`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { className: "w-50 flex", children: [
            item.size?.toString(),
            "\xA0",
            item.size === 24 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { className: "example-text--secondary", children: "default" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { ...{ size: item.size, background: item.background, name: item.name, color: item.color } }),
            "\xA0",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              icon_exports.Icon,
              {
                ...{ size: item.size, background: item.background, name: item.name, color: item.color },
                filled: true
              }
            )
          ] })
        ]
      },
      key
    )) });
  };
  var TemplateColumnWithBackgroundCircleVarians = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "Vaccines", background: "brand-primary", color: "white" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "Info", background: "brand-primary", color: "white", size: 16 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "Vaccines", background: "brand-secondary", color: "brand" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "Info", background: "brand-secondary", color: "brand", size: 16 }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { alignItems: "center", className: "bg bg-primary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "Vaccines", background: "primary", color: "brand" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "Info", background: "primary", color: "brand", size: 16 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "Vaccines", background: "secondary", color: "white" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "Info", background: "secondary", color: "white", size: 16 }) })
      ] }) })
    ] });
  };
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { ...args });
  var Default = {
    render: Template,
    args: {
      name: "account_circle"
    }
  };
  var Sizes = {
    name: "Icon Size",
    render: TemplateColumn,
    args: {
      name: "account_circle",
      property: "size",
      color: "primary",
      array: sizeArray
    }
  };
  var SizesWithBackground = {
    name: "Icon size inside background",
    render: TemplateColumnWithMultipleVariants,
    args: {
      items: [
        {
          name: "info",
          property: "size",
          color: "brand",
          background: "brand-secondary",
          size: 16
        },
        {
          name: "vaccines",
          property: "size",
          color: "brand",
          background: "brand-secondary",
          size: 24
        }
      ]
    }
  };
  var Colors = {
    render: TemplateRow,
    name: "Icon colors",
    args: {
      name: "account_circle",
      property: "color",
      array: colorArray,
      size: 48
    }
  };
  var Backgrounds = {
    render: TemplateColumnWithBackgroundCircleVarians,
    name: "Icon background colors"
  };
  var UsedInsideText = {
    render: (args) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.25, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(heading_exports.Heading, { element: "h1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: args.name, display: "inline" }),
          "This is level 1 heading with inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { color: "brand", name: args.name, display: "inline" }),
          " icon"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(heading_exports.Heading, { element: "h2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: args.name, display: "inline" }),
          "This is level 2 heading with inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { color: "brand", name: args.name, display: "inline" }),
          " icon"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(heading_exports.Heading, { element: "h3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: args.name, display: "inline" }),
          "This is level 3 heading with inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { color: "brand", name: args.name, display: "inline" }),
          " icon"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(heading_exports.Heading, { element: "h4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: args.name, display: "inline" }),
          "This is level 4 heading with inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { color: "brand", name: args.name, display: "inline" }),
          " icon"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(heading_exports.Heading, { element: "h5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: args.name, display: "inline" }),
          "This is level 5 heading with inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { color: "brand", name: args.name, display: "inline" }),
          " icon"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(heading_exports.Heading, { element: "h6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: args.name, display: "inline" }),
          "This is level 6 heading with inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { color: "brand", name: args.name, display: "inline" }),
          " icon"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: args.name, display: "inline" }),
          "This is paragraph text with inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { color: "brand", name: args.name, display: "inline" }),
          " icon"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: args.name, display: "inline" }),
          "This is small text with inline ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { color: "brand", name: args.name, display: "inline" }),
          " icon"
        ] })
      ] });
    },
    args: {
      name: "account_circle"
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

  // Icon.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(icon_stories_exports, "Default", G, B);
  var Sizes2 = compose(icon_stories_exports, "Sizes", G, B);
  var SizesWithBackground2 = compose(icon_stories_exports, "SizesWithBackground", G, B);
  var Colors2 = compose(icon_stories_exports, "Colors", G, B);
  var Backgrounds2 = compose(icon_stories_exports, "Backgrounds", G, B);
  var UsedInsideText2 = compose(icon_stories_exports, "UsedInsideText", G, B);
  return __toCommonJS(Icon_preview_exports);
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
