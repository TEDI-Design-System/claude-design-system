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

  // Timeline.preview.tsx
  var Timeline_preview_exports = {};
  __export(Timeline_preview_exports, {
    CustomTextColor: () => CustomTextColor2,
    Default: () => Default2,
    Example: () => Example2,
    Position: () => Position2,
    TimelineCard: () => TimelineCard2,
    TitleOnly: () => TitleOnly2,
    WithAction: () => WithAction2,
    WithDate: () => WithDate2,
    WithDateDescription: () => WithDateDescription2,
    WithDescription: () => WithDescription2,
    WithInfoTooltip: () => WithInfoTooltip2,
    WithoutTitle: () => WithoutTitle2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/misc/timeline/timeline.stories.tsx
  var timeline_stories_exports = {};
  __export(timeline_stories_exports, {
    CustomTextColor: () => CustomTextColor,
    Default: () => Default,
    Example: () => Example,
    Position: () => Position,
    TimelineCard: () => TimelineCard,
    TitleOnly: () => TitleOnly,
    WithAction: () => WithAction,
    WithDate: () => WithDate,
    WithDateDescription: () => WithDateDescription,
    WithDescription: () => WithDescription,
    WithInfoTooltip: () => WithInfoTooltip,
    WithoutTitle: () => WithoutTitle,
    default: () => timeline_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var text_default = ns["Text"] ?? ns;

  // tedi:src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var button_default = ns2["Button"] ?? ns2;

  // tedi:src/tedi/components/content/collapse/collapse.tsx
  var collapse_exports = {};
  __export(collapse_exports, {
    default: () => collapse_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(collapse_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var collapse_default = ns3["Collapse"] ?? ns3;

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
  var ns4 = window.Tedi;
  var row_default = ns4["Row"] ?? ns4;

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
  var ns5 = window.Tedi;
  var col_default = ns5["Col"] ?? ns5;

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
  var ns6 = window.Tedi;
  var vertical_spacing_default = ns6["VerticalSpacing"] ?? ns6;

  // tedi:src/tedi/components/overlays/tooltip/index.ts
  var tooltip_exports = {};
  __export(tooltip_exports, {
    default: () => tooltip_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tooltip_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var tooltip_default = ns7["Tooltip"] ?? ns7;

  // tedi:src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var separator_default = ns8["Separator"] ?? ns8;

  // tedi:src/tedi/components/misc/timeline/timeline.tsx
  var timeline_exports = {};
  __export(timeline_exports, {
    default: () => timeline_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(timeline_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var timeline_default = ns9["Timeline"] ?? ns9;

  // src/tedi/components/misc/timeline/timeline.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: timeline_exports.Timeline,
    subcomponents: {
      "Timeline.Item": timeline_exports.Timeline.Item,
      "Timeline.Title": timeline_exports.Timeline.Title,
      "Timeline.Description": timeline_exports.Timeline.Description
    },
    title: "TEDI-Ready/Components/Helpers/Timeline",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.60.78?node-id=11335-186480&m=dev"
      }
    },
    argTypes: {
      activeIndex: { control: "number" },
      variant: { control: "radio", options: ["default", "card"] },
      cardPadding: { control: "select", options: [0, 0.5, 0.75, 1, 1.5, 2, 2.5, 3] }
    }
  };
  var timeline_stories_default = meta;
  var positions = [
    { label: "Start", above: false, below: true },
    { label: "Middle", above: true, below: true },
    { label: "End", above: true, below: false }
  ];
  var STUB_HEIGHT = 1.5;
  var DOT_OFFSET = "calc((1.5rem - 9px) / 2)";
  var renderTimings = (timings) => timings.map((timing, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: index === 0 ? void 0 : "small", children: timing }, `${timing}-${index}`));
  var PositionShowcase = ({
    renderContent,
    timings
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: positions.map(({ label, above, below }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, sm: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "var(--layout-grid-gutters-12)" }, children: [
      timings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            display: "flex",
            flexShrink: 0,
            flexDirection: "column",
            alignItems: "flex-end",
            textAlign: "right",
            whiteSpace: "nowrap",
            paddingTop: above ? `calc(${STUB_HEIGHT}rem - ${DOT_OFFSET})` : 0
          },
          children: renderTimings(timings)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: above ? 0 : DOT_OFFSET
          },
          children: [
            above && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", color: "accent", height: STUB_HEIGHT }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { variant: "dot-only", color: "accent", dotSize: "medium", dotStyle: "filled" }),
            below && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flex: 1, minHeight: `${STUB_HEIGHT}rem` }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", color: "accent" }) })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            "--timeline-text-min-height": "1.5rem",
            paddingTop: above ? `calc(${STUB_HEIGHT}rem - ${DOT_OFFSET})` : 0
          },
          children: renderContent()
        }
      )
    ] })
  ] }) }, label)) });
  var Default = {
    args: { activeIndex: 1 },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { timings: ["1990", "14. detsember"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "P\xE4rast taotluse esitamist v\xF5etakse see menetlusse." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { timings: ["1990", "15. detsember"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Menetlemine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p\xE4eva." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { timings: ["1991", "15. jaanuar"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Otsus" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Otsus tehakse teatavaks." })
      ] })
    ] })
  };
  var Position = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1.5, children: positions.map(({ label, above, below }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 1, className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { minWidth: "4rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: label }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, md: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "var(--layout-grid-gutters-12)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              textAlign: "right",
              minWidth: "6rem",
              paddingTop: above ? `calc(${STUB_HEIGHT}rem - ${DOT_OFFSET})` : 0
            },
            children: renderTimings(["1990", "14. detsember"])
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: above ? 0 : DOT_OFFSET
            },
            children: [
              above && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", color: "secondary", height: STUB_HEIGHT }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { variant: "dot-only", color: "secondary", dotSize: "medium", dotStyle: "outlined" }),
              below && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flex: 1, minHeight: `${STUB_HEIGHT}rem` }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "vertical", color: "secondary" }) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              "--timeline-text-min-height": "1.5rem",
              paddingTop: above ? `calc(${STUB_HEIGHT}rem - ${DOT_OFFSET})` : 0
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" }),
              label === "Start" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                collapse_exports.Collapse,
                {
                  id: "timeline-position-collapse",
                  size: "small",
                  openText: "N\xE4ita rohkem",
                  closeText: "N\xE4ita v\xE4hem",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: "P\xE4rast otsuse teatavaks tegemist saab seda vajadusel vaidlustada." })
                }
              )
            ]
          }
        )
      ] }) })
    ] }, label)) })
  };
  var TitleOnly = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PositionShowcase, { renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }) })
  };
  var WithDescription = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      PositionShowcase,
      {
        renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" })
        ] })
      }
    )
  };
  var CustomTextColor = {
    args: { activeIndex: 0 },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { timings: ["2024", "16. detsember"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { color: "primary", children: "Taotluse esitamine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { color: "brand", children: "P\xE4rast taotluse esitamist v\xF5etakse see menetlusse." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { timings: ["2025", "15. jaanuar"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Menetlemine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p\xE4eva." })
      ] })
    ] })
  };
  var WithInfoTooltip = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      PositionShowcase,
      {
        renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Title, { children: [
            "Taotluse esitamine",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_exports.InfoTooltip, { isSmall: true, ariaLabel: "Taotluse esitamine info", children: "Taotluse esitamise j\xE4rel v\xF5etakse see menetlusse." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" })
        ] })
      }
    )
  };
  var WithoutTitle = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      PositionShowcase,
      {
        renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" })
      }
    )
  };
  var WithAction = {
    args: { activeIndex: 1 },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(collapse_exports.Collapse, { id: "timeline-action-collapse", openText: "N\xE4ita rohkem", closeText: "N\xE4ita v\xE4hem", size: "small", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: "P\xE4rast otsuse teatavaks tegemist saab seda vajadusel vaidlustada." }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { size: "small", style: { width: "fit-content" }, children: "Alusta taotlust" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { size: "small", visualType: "secondary", iconLeft: "add", style: { width: "fit-content" }, children: "Lisa kaastaotleja" })
      ] })
    ] })
  };
  var WithDate = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      PositionShowcase,
      {
        timings: ["1990"],
        renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" })
        ] })
      }
    )
  };
  var WithDateDescription = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      PositionShowcase,
      {
        timings: ["1990", "14. detsember"],
        renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" })
        ] })
      }
    )
  };
  var Example = {
    args: { activeIndex: 2 },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Item, { timings: ["1990", "14. detsember"], children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Staa\u017Ei kogumise algus (I sammas)" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { timings: ["2002", "04. oktoober"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "II sambaga liitumine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Aktiivne fond: LHV XL (loositud)" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Item, { timings: ["2007", "07. aprill"], children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Minimaalse staa\u017Ei t\xE4itumine (I sammas)" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Item, { timings: ["2021", "13. mai"], children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "III sambaga liitumine" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Item, { timings: ["2022", "14. juuni"], children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "II sambast lahkumine" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { timings: ["2024", "16. detsember"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Taotluse esitamine" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Description, { children: "Menetlemine v\xF5ib v\xF5tta kuni 30 p" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { size: "small", style: { width: "fit-content" }, children: "Alusta taotlust" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Item, { timings: ["2032"], children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "II sambaga uuesti liitumise v\xF5imalus" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Item, { timings: ["2035"], children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Vanaduspensioniiga" }) })
    ] })
  };
  var TimelineCard = {
    args: { activeIndex: 1, variant: "card" },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        timeline_exports.Timeline.Item,
        {
          timings: ["11.01.2024 12:23", "Kersti \xD6\xF6viul"],
          timingsBottom: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: "Muudetud 08.02.2024 12:23" }),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Suhtlus isikuga" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(collapse_exports.Collapse, { id: "timeline-card-collapse-1", openText: "N\xE4ita rohkem", closeText: "N\xE4ita v\xE4hem", defaultOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "secondary", children: "Lisainfo: Lorem ipsum dolor sit amet, consectetur adipiscing elit." }) })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        timeline_exports.Timeline.Item,
        {
          timings: ["08.02.2024 12:23", "Kersti \xD6\xF6viul"],
          timingsBottom: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: "Muudetud 12.03.2024 12:23" }),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Suhtlus isikuga" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(collapse_exports.Collapse, { id: "timeline-card-collapse-2", openText: "N\xE4ita rohkem", closeText: "N\xE4ita v\xE4hem", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "secondary", children: "Lisainfo: Lorem ipsum dolor sit amet, consectetur adipiscing elit." }) })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(timeline_exports.Timeline.Item, { timings: ["12.05.2024 12:23", "Kersti \xD6\xF6viul"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(timeline_exports.Timeline.Title, { children: "Suhtlus isikuga" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(collapse_exports.Collapse, { id: "timeline-card-collapse-3", openText: "N\xE4ita rohkem", closeText: "N\xE4ita v\xE4hem", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "secondary", children: "Lisainfo: Lorem ipsum dolor sit amet, consectetur adipiscing elit." }) })
      ] })
    ] })
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

  // Timeline.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(timeline_stories_exports, "Default", G, B);
  var Position2 = compose(timeline_stories_exports, "Position", G, B);
  var TitleOnly2 = compose(timeline_stories_exports, "TitleOnly", G, B);
  var WithDescription2 = compose(timeline_stories_exports, "WithDescription", G, B);
  var CustomTextColor2 = compose(timeline_stories_exports, "CustomTextColor", G, B);
  var WithInfoTooltip2 = compose(timeline_stories_exports, "WithInfoTooltip", G, B);
  var WithoutTitle2 = compose(timeline_stories_exports, "WithoutTitle", G, B);
  var WithAction2 = compose(timeline_stories_exports, "WithAction", G, B);
  var WithDate2 = compose(timeline_stories_exports, "WithDate", G, B);
  var WithDateDescription2 = compose(timeline_stories_exports, "WithDateDescription", G, B);
  var Example2 = compose(timeline_stories_exports, "Example", G, B);
  var TimelineCard2 = compose(timeline_stories_exports, "TimelineCard", G, B);
  return __toCommonJS(Timeline_preview_exports);
})();
