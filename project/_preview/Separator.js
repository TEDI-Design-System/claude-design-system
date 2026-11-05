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

  // Separator.preview.tsx
  var Separator_preview_exports = {};
  __export(Separator_preview_exports, {
    Default: () => Default2,
    DotFilled: () => DotFilled2,
    DotOutlined: () => DotOutlined2,
    DottedLineHorizontal: () => DottedLineHorizontal2,
    DottedLineVertical: () => DottedLineVertical2,
    DottedSizes: () => DottedSizes2,
    HorizontalSpacings: () => HorizontalSpacings2,
    HorizontalThickness: () => HorizontalThickness2,
    InlineSeparatorUsage: () => InlineSeparatorUsage2,
    Position: () => Position2,
    Sizes: () => Sizes2,
    SpacingTopDefault: () => SpacingTopDefault2,
    SpacingTopSmall: () => SpacingTopSmall2,
    Vertical: () => Vertical2,
    VerticalDottedCardExample: () => VerticalDottedCardExample2,
    VerticalDottedSmallCardExample: () => VerticalDottedSmallCardExample2,
    VerticalSpacings: () => VerticalSpacings2,
    VerticalThickness: () => VerticalThickness2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/misc/separator/separator.stories.tsx
  var separator_stories_exports = {};
  __export(separator_stories_exports, {
    Default: () => Default,
    DotFilled: () => DotFilled,
    DotOutlined: () => DotOutlined,
    DottedLineHorizontal: () => DottedLineHorizontal,
    DottedLineVertical: () => DottedLineVertical,
    DottedSizes: () => DottedSizes,
    HorizontalSpacings: () => HorizontalSpacings,
    HorizontalThickness: () => HorizontalThickness,
    InlineSeparatorUsage: () => InlineSeparatorUsage,
    Position: () => Position,
    Sizes: () => Sizes,
    SpacingTopDefault: () => SpacingTopDefault,
    SpacingTopSmall: () => SpacingTopSmall,
    Vertical: () => Vertical,
    VerticalDottedCardExample: () => VerticalDottedCardExample,
    VerticalDottedSmallCardExample: () => VerticalDottedSmallCardExample,
    VerticalSpacings: () => VerticalSpacings,
    VerticalThickness: () => VerticalThickness,
    default: () => separator_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var text_default = ns["Text"] ?? ns;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var card_default = ns2["Card"] ?? ns2;

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
  var ns3 = window.Tedi;
  var row_default = ns3["Row"] ?? ns3;

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
  var ns4 = window.Tedi;
  var col_default = ns4["Col"] ?? ns4;

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
  var ns5 = window.Tedi;
  var vertical_spacing_default = ns5["VerticalSpacing"] ?? ns5;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var separator_default = ns6["Separator"] ?? ns6;

  // src/tedi/components/misc/separator/separator.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: separator_default,
    title: "TEDI-Ready/Components/Helpers/Separator",
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/file/jWiRIXhHRxwVdMSimKX2FF/TEDI-Design-System-(draft)?type=design&node-id=3518-32729&m=dev"
      }
    }
  };
  var separator_stories_default = meta;
  var spacingArray = [0, 0.5, 1, 1.5, 2, 2.5];
  var sizeArray = ["large", "medium"];
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { ...args });
  var SizesTemplate = (args) => {
    const { array } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: value === "large" ? "Large" : "Medium" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "d-flex", width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        separator_default,
        {
          variant: "dotted",
          axis: "vertical",
          color: "accent",
          dotPosition: "center",
          dotSize: value,
          dotStyle: void 0
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "d-flex", align: "center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        separator_default,
        {
          variant: "dotted",
          axis: "horizontal",
          color: "accent",
          dotPosition: "center",
          dotSize: value
        }
      ) })
    ] }, key)) });
  };
  var ColorsAndThickness = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { spacing: 1, thickness: 1, ...args }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { spacing: 1, thickness: 2, ...args })
  ] }) });
  var SpacingHorizontal = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: spacingArray.map((spacing, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { spacing, ...args }, index)) }) });
  var SpacingVertical = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: spacingArray.map((spacing, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { spacing, ...args }) }, index)) });
  var Default = {
    render: Template,
    args: { spacing: 1 }
  };
  var HorizontalSpacings = {
    render: SpacingHorizontal,
    args: {
      axis: "horizontal"
    }
  };
  var HorizontalThickness = {
    render: ColorsAndThickness
  };
  var Vertical = {
    render: Template,
    args: { axis: "vertical", height: 3 }
  };
  var VerticalSpacings = {
    render: SpacingVertical,
    args: {
      axis: "vertical",
      height: 3,
      display: "inline-block"
    }
  };
  var VerticalThickness = {
    render: ColorsAndThickness,
    args: { axis: "vertical", height: 3, display: "inline" }
  };
  var DottedLineHorizontal = {
    render: Template,
    args: { axis: "horizontal", variant: "dotted", color: "accent", dotPosition: "center" }
  };
  var DottedLineVertical = {
    render: Template,
    args: { axis: "vertical", variant: "dotted", color: "accent", height: 5, dotPosition: "center" }
  };
  var Sizes = {
    render: SizesTemplate,
    args: {
      property: "dotSize",
      array: sizeArray
    }
  };
  var SpacingTopDefault = {
    render: () => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", variant: "dotted", height: 2, dotPosition: "center", color: "accent", dotSize: "large" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", variant: "dotted", height: 2, dotPosition: "center", color: "accent", dotSize: "medium" }) })
      ] });
    }
  };
  var SpacingTopSmall = {
    render: () => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", variant: "dotted", height: 2, dotPosition: 0.5, color: "accent", dotSize: "large" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", variant: "dotted", height: 2, dotPosition: 0.75, color: "accent", dotSize: "medium" }) })
      ] });
    }
  };
  var Position = {
    render: () => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Start" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                variant: "dotted",
                height: 2,
                dotPosition: "start",
                color: "accent",
                dotSize: "large"
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                variant: "dotted",
                height: 2,
                dotPosition: "start",
                color: "accent",
                dotSize: "medium"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Center" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                variant: "dotted",
                height: 1,
                dotPosition: "center",
                color: "accent",
                dotSize: "large"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                variant: "dotted",
                height: 1,
                dotPosition: "center",
                color: "accent",
                dotSize: "medium"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "End" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                variant: "dotted",
                height: 1,
                dotPosition: "end",
                color: "accent",
                dotSize: "large"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                variant: "dotted",
                height: 1,
                dotPosition: "end",
                color: "accent",
                dotSize: "medium"
              }
            ) })
          ] })
        ] }) })
      ] }) });
    }
  };
  var TemplateVertical = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: "auto", md: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-right", children: "12.12.2012" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, lg: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { ...args }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h6", children: "Card content title" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem rem nisi quae? Rem, amet! Veritatis laboriosam consectetur ipsum quae. Amet voluptatibus quod eaque at nostrum id provident? Cum, maiores libero!" })
    ] })
  ] }) }) });
  var DotFilled = {
    render: () => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "horizontal", variant: "dot-only", dotSize: "large", dotStyle: "filled", color: "secondary" }) });
    }
  };
  var DotOutlined = {
    render: () => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "horizontal", variant: "dot-only", dotSize: "large", dotStyle: "outlined", color: "secondary" }) });
    }
  };
  var dotSizeToPxMap = {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "15px"
  };
  var DottedSizesTemplate = (args) => {
    const { array } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: value !== void 0 ? dotSizeToPxMap[value] || value : "\u2014" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "d-flex", width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        separator_default,
        {
          dotSize: value,
          variant: "dot-only",
          axis: "horizontal",
          color: "secondary",
          dotStyle: "filled"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "d-flex", align: "center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        separator_default,
        {
          dotSize: value,
          variant: "dot-only",
          axis: "horizontal",
          color: "secondary",
          dotStyle: "outlined"
        }
      ) })
    ] }, key)) });
  };
  var DottedSizes = {
    render: DottedSizesTemplate,
    args: {
      property: "dotSize",
      array: ["extra-small", "small", "medium", "large"]
    }
  };
  var InlineSeparatorTemplate = (args) => {
    const { dotPosition, ...safeArgs } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
        "Lorem ipsum dolor sit, amet",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { ...safeArgs, element: "span", color: "primary", spacing: 0.5 }),
        "consectetur adipisicing elit."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
        "Lorem ipsum dolor sit, amet",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { ...safeArgs, element: "span", color: "secondary", spacing: 1 }),
        "consectetur adipisicing elit."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
        "Lorem ipsum dolor sit, amet",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { ...safeArgs, element: "span", color: "accent", spacing: 1.5 }),
        "consectetur adipisicing elit."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
        "Lorem ipsum dolor sit, amet",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { ...safeArgs, element: "span", color: "secondary", spacing: 0.5, variant: "dot-only", dotSize: "small" }),
        "consectetur adipisicing elit."
      ] })
    ] });
  };
  var InlineSeparatorUsage = {
    render: InlineSeparatorTemplate,
    args: { axis: "vertical", display: "inline" }
  };
  var VerticalDottedCardExample = {
    render: TemplateVertical,
    args: {
      axis: "horizontal",
      variant: "dotted",
      color: "accent",
      spacing: 1,
      isStretched: true,
      dotPosition: 1.25,
      md: { axis: "vertical" }
    }
  };
  var VerticalDottedSmallCardExample = {
    render: TemplateVertical,
    args: {
      axis: "horizontal",
      spacing: 1,
      variant: "dotted",
      dotSize: "medium",
      color: "accent",
      isStretched: true,
      dotPosition: 1.25,
      md: { axis: "vertical" }
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

  // Separator.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(separator_stories_exports, "Default", G, B);
  var HorizontalSpacings2 = compose(separator_stories_exports, "HorizontalSpacings", G, B);
  var HorizontalThickness2 = compose(separator_stories_exports, "HorizontalThickness", G, B);
  var Vertical2 = compose(separator_stories_exports, "Vertical", G, B);
  var VerticalSpacings2 = compose(separator_stories_exports, "VerticalSpacings", G, B);
  var VerticalThickness2 = compose(separator_stories_exports, "VerticalThickness", G, B);
  var DottedLineHorizontal2 = compose(separator_stories_exports, "DottedLineHorizontal", G, B);
  var DottedLineVertical2 = compose(separator_stories_exports, "DottedLineVertical", G, B);
  var Sizes2 = compose(separator_stories_exports, "Sizes", G, B);
  var SpacingTopDefault2 = compose(separator_stories_exports, "SpacingTopDefault", G, B);
  var SpacingTopSmall2 = compose(separator_stories_exports, "SpacingTopSmall", G, B);
  var Position2 = compose(separator_stories_exports, "Position", G, B);
  var DotFilled2 = compose(separator_stories_exports, "DotFilled", G, B);
  var DotOutlined2 = compose(separator_stories_exports, "DotOutlined", G, B);
  var DottedSizes2 = compose(separator_stories_exports, "DottedSizes", G, B);
  var InlineSeparatorUsage2 = compose(separator_stories_exports, "InlineSeparatorUsage", G, B);
  var VerticalDottedCardExample2 = compose(separator_stories_exports, "VerticalDottedCardExample", G, B);
  var VerticalDottedSmallCardExample2 = compose(separator_stories_exports, "VerticalDottedSmallCardExample", G, B);
  return __toCommonJS(Separator_preview_exports);
})();
