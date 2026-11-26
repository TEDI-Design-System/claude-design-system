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

  // Rating.preview.tsx
  var Rating_preview_exports = {};
  __export(Rating_preview_exports, {
    Controlled: () => Controlled2,
    CustomIcons: () => CustomIcons2,
    Default: () => Default2,
    FeedbackFormExample: () => FeedbackFormExample2,
    Icons: () => Icons2,
    Numbers: () => Numbers2,
    ReadOnlyScale: () => ReadOnlyScale2,
    Stars: () => Stars2,
    States: () => States2,
    VerticalIcons: () => VerticalIcons2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/rating/rating.stories.tsx
  var rating_stories_exports = {};
  __export(rating_stories_exports, {
    Controlled: () => Controlled,
    CustomIcons: () => CustomIcons,
    Default: () => Default,
    FeedbackFormExample: () => FeedbackFormExample,
    Icons: () => Icons,
    Numbers: () => Numbers,
    ReadOnlyScale: () => ReadOnlyScale,
    Stars: () => Stars,
    States: () => States,
    VerticalIcons: () => VerticalIcons,
    default: () => rating_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // tedi:src/tedi/components/base/typography/heading/heading.tsx
  var heading_exports = {};
  __export(heading_exports, {
    default: () => heading_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(heading_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var heading_default = ns["Heading"] ?? ns;

  // tedi:src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var button_default = ns3["Button"] ?? ns3;

  // tedi:src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var card_default = ns4["Card"] ?? ns4;

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
  var ns5 = window.Tedi;
  var row_default = ns5["Row"] ?? ns5;

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
  var ns6 = window.Tedi;
  var col_default = ns6["Col"] ?? ns6;

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
  var ns7 = window.Tedi;
  var vertical_spacing_default = ns7["VerticalSpacing"] ?? ns7;

  // tedi:src/tedi/components/form/choice-group/choice-group.tsx
  var choice_group_exports = {};
  __export(choice_group_exports, {
    default: () => choice_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(choice_group_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var choice_group_default = ns8["ChoiceGroup"] ?? ns8;

  // tedi:src/tedi/components/form/textarea/textarea.tsx
  var textarea_exports = {};
  __export(textarea_exports, {
    default: () => textarea_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textarea_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var textarea_default = ns9["Textarea"] ?? ns9;

  // tedi:src/tedi/components/form/rating/rating.tsx
  var rating_exports = {};
  __export(rating_exports, {
    default: () => rating_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(rating_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var rating_default = ns10["Rating"] ?? ns10;

  // src/tedi/components/form/rating/rating.stories.tsx
  var import_jsx_runtime = (
    // Row label sits on top on mobile (so the scale gets the full width) and moves to a left column from md up.
    __toESM(require_jsx_runtime(), 1)
  );
  var meta = {
    component: rating_exports.Rating,
    title: "TEDI-Ready/Components/Form/Rating",
    args: {
      label: "Hinnang",
      type: "star"
    },
    argTypes: {
      value: { control: { type: "number", min: 0, step: 0.5 } },
      defaultValue: { control: { type: "number", min: 0, step: 0.5 } }
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
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.76.92?node-id=15548-139124&m=dev"
      }
    }
  };
  var rating_stories_default = meta;
  var STAR_LABELS = [
    "Ei j\xE4\xE4nud \xFCldse rahule",
    "Ei j\xE4\xE4nud rahule",
    "Osaliselt rahul",
    "J\xE4in rahule",
    "J\xE4in v\xE4ga rahule"
  ];
  var ICON_LABELS = ["V\xE4ga halb", "Halb", "Keskmine", "Hea", "V\xE4ga hea"];
  var NUMBER_LABELS = Array.from(
    { length: 10 },
    (_, index) => index === 0 ? "V\xE4ga halb" : index === 9 ? "Suurep\xE4rane" : ""
  );
  var rowLabel = (value, max) => value === 0 ? "No rating" : `${value} of ${max}`;
  var ScaleShowcase = ({
    type,
    max,
    itemLabels
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
    Array.from({ length: max + 1 }, (_, value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column flex-md-row gap-3 align-items-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "5rem", flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: rowLabel(value, max) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(rating_exports.Rating, { type, count: max, defaultValue: value, itemLabels, label: rowLabel(value, max) })
    ] }, value)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column flex-md-row gap-3 align-items-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "5rem", flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Read only" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          rating_exports.Rating,
          {
            type,
            count: max,
            readOnly: true,
            value: 3.5,
            ratingsCount: 271,
            label: `${type} read-only, with raters`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          rating_exports.Rating,
          {
            type,
            count: max,
            readOnly: true,
            value: 3.5,
            ratingsCount: 271,
            showRatingsCountLabel: false,
            label: `${type} read-only, count only`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(rating_exports.Rating, { type, count: max, readOnly: true, value: 3.5, label: `${type} read-only, no count` })
      ] })
    ] })
  ] });
  var Default = {
    // `defaultValue` is only read on mount; the key remounts so the control takes effect.
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(rating_exports.Rating, { ...args }, args.defaultValue)
  };
  var Stars = {
    parameters: { controls: { disable: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleShowcase, { type: "star", max: 5, itemLabels: STAR_LABELS })
  };
  var Numbers = {
    parameters: { controls: { disable: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleShowcase, { type: "number", max: 10, itemLabels: NUMBER_LABELS })
  };
  var Icons = {
    parameters: { controls: { disable: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleShowcase, { type: "icon", max: 5, itemLabels: ICON_LABELS })
  };
  var States = {
    parameters: {
      controls: { disable: true },
      pseudo: { hover: '[id^="rating-hover"] label', focusVisible: '[id^="rating-focus"] input' }
    },
    render: () => {
      const types = ["star", "number", "icon"];
      const rows = [
        { label: "Default" },
        { label: "Hover", state: "hover" },
        { label: "Disabled", disabled: true },
        { label: "Focus", state: "focus" }
      ];
      const cell = { padding: "0.5rem 1rem", textAlign: "left", verticalAlign: "middle" };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { gutterY: 5, children: types.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { xs: 12, md: 4, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", modifiers: "h5", children: type[0].toUpperCase() + type.slice(1) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { style: { borderCollapse: "collapse" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "State" }) }),
            ["Default", "Selected"].map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { scope: "col", style: cell, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: column }) }, column))
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { id: row.state ? `rating-${row.state}-${type}` : void 0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { scope: "row", style: { ...cell, paddingLeft: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: row.label }) }),
            [0, 1].map((selected) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { style: cell, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              rating_exports.Rating,
              {
                type,
                count: 1,
                defaultValue: selected,
                disabled: row.disabled,
                icons: type === "icon" ? ["sentiment_satisfied"] : void 0,
                label: `${type} ${row.label} ${selected ? "selected" : "default"}`
              }
            ) }, selected))
          ] }, row.label)) })
        ] })
      ] }, type)) });
    }
  };
  var VerticalIcons = {
    name: "Vertical (icons)",
    parameters: { controls: { disable: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      rating_exports.Rating,
      {
        type: "icon",
        orientation: "vertical",
        itemLabels: ["V\xE4ga halb kogemus", "Halb kogemus", "Keskmine kogemus", "Hea kogemus", "V\xE4ga hea kogemus"],
        defaultValue: 4,
        label: "Teenuse hinnang"
      }
    )
  };
  var Controlled = {
    render: (args) => {
      const [value, setValue] = (0, import_react.useState)(2);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(rating_exports.Rating, { ...args, type: "star", value, onChange: setValue, itemLabels: STAR_LABELS, label: "Hinnang" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
          "Valitud: ",
          value || "\u2014"
        ] })
      ] });
    }
  };
  var ReadOnlyScale = {
    parameters: { controls: { disable: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [4.8, 3.5, 2.5, 1.2].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      rating_exports.Rating,
      {
        type: "star",
        readOnly: true,
        readOnlyVariant: "scale",
        value,
        ratingsCount: 271,
        label: "Teenuse hinnang"
      },
      value
    )) })
  };
  var CustomIcons = {
    parameters: { controls: { disable: true } },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        rating_exports.Rating,
        {
          type: "icon",
          icons: ["thunderstorm", "rainy", "cloud", "partly_cloudy_day", "sunny"],
          itemLabels: ["V\xE4ga halb", "Halb", "Keskmine", "Hea", "V\xE4ga hea"],
          defaultValue: 4,
          label: "Ilmahinnang"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(rating_exports.Rating, { type: "star", icons: "star", defaultValue: 3, itemLabels: STAR_LABELS, label: "Pointier star" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(rating_exports.Rating, { type: "star", icons: "favorite", defaultValue: 4, label: "Favourite" })
    ] })
  };
  var REASON_ITEMS = [
    { id: "reason-error", value: "error", label: "N\xE4en veateadet" },
    { id: "reason-wrong", value: "wrong", label: "Andmed on valed" },
    { id: "reason-missing", value: "missing", label: "Andmed puuduvad" },
    { id: "reason-no-right", value: "no-right", label: "\xD5igus puudub" },
    { id: "reason-not-found", value: "not-found", label: "Ei leidnud, mida otsisin" },
    { id: "reason-complex", value: "complex", label: "Keeruline" },
    { id: "reason-other", value: "other", label: "Muu p\xF5hjus" }
  ];
  var centered = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "var(--layout-grid-gutters-08)"
  };
  var FeedbackFormExample = {
    parameters: {
      controls: { disable: true },
      layout: "padded"
    },
    render: () => {
      const [rating, setRating] = (0, import_react.useState)(1);
      const [reasons, setReasons] = (0, import_react.useState)(["error"]);
      const [comment, setComment] = (0, import_react.useState)("");
      const [submitted, setSubmitted] = (0, import_react.useState)(false);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.CardContent, { children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: centered, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h2", modifiers: "h5", children: "Ait\xE4h!" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "secondary", children: "Sinu tagasiside aitab portaali paremaks muuta." })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: centered, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h2", modifiers: "h5", children: "Kuidas j\xE4id rahule teenuse kasutamisega?" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            rating_exports.Rating,
            {
              label: "Kuidas j\xE4id rahule teenuse kasutamisega?",
              value: rating,
              onChange: setRating,
              itemLabels: STAR_LABELS
            }
          )
        ] }),
        rating > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: centered, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", modifiers: "h5", children: "Mis m\xF5jutas Sinu vastust?" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "secondary", children: "Vali sobivad m\xE4rks\xF5nad" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            choice_group_exports.ChoiceGroup,
            {
              id: "feedback-reasons",
              name: "feedback-reasons",
              label: "Mis m\xF5jutas Sinu vastust?",
              hideLabel: true,
              inputType: "checkbox",
              variant: "card",
              color: "secondary",
              showIndicator: true,
              value: reasons,
              onChange: setReasons,
              items: REASON_ITEMS,
              rowProps: { justifyContent: "center" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            textarea_exports.Textarea,
            {
              id: "feedback-comment",
              label: "Soovi korral lisa t\xE4psustus",
              characterLimit: 500,
              value: comment,
              onChange: setComment,
              helper: {
                text: "Me ei vasta selle vormi kaudu saadetud tagasisidele. Palun \xE4ra lisa siia isiklikku teavet."
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: centered, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { onClick: () => setSubmitted(true), children: "Saada tagasiside" }) })
        ] })
      ] }) }) });
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

  // Rating.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(rating_stories_exports, "Default", G, B);
  var Stars2 = compose(rating_stories_exports, "Stars", G, B);
  var Numbers2 = compose(rating_stories_exports, "Numbers", G, B);
  var Icons2 = compose(rating_stories_exports, "Icons", G, B);
  var States2 = compose(rating_stories_exports, "States", G, B);
  var VerticalIcons2 = compose(rating_stories_exports, "VerticalIcons", G, B);
  var Controlled2 = compose(rating_stories_exports, "Controlled", G, B);
  var ReadOnlyScale2 = compose(rating_stories_exports, "ReadOnlyScale", G, B);
  var CustomIcons2 = compose(rating_stories_exports, "CustomIcons", G, B);
  var FeedbackFormExample2 = compose(rating_stories_exports, "FeedbackFormExample", G, B);
  return __toCommonJS(Rating_preview_exports);
})();
