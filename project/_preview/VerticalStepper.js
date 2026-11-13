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

  // VerticalStepper.preview.tsx
  var VerticalStepper_preview_exports = {};
  __export(VerticalStepper_preview_exports, {
    Compact: () => Compact2,
    Default: () => Default2,
    Responsive: () => Responsive2,
    States: () => States2,
    WithButton: () => WithButton2,
    WithDescriptions: () => WithDescriptions2,
    WithLinks: () => WithLinks2,
    WithStatusBadges: () => WithStatusBadges2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/navigation/vertical-stepper/vertical-stepper.stories.tsx
  var vertical_stepper_stories_exports = {};
  __export(vertical_stepper_stories_exports, {
    Compact: () => Compact,
    Default: () => Default,
    Responsive: () => Responsive,
    States: () => States,
    WithButton: () => WithButton,
    WithDescriptions: () => WithDescriptions,
    WithLinks: () => WithLinks,
    WithStatusBadges: () => WithStatusBadges,
    default: () => vertical_stepper_stories_default
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

  // tedi:src/tedi/components/layout/hide-at/hide-at.tsx
  var hide_at_exports = {};
  __export(hide_at_exports, {
    default: () => hide_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(hide_at_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var hide_at_default = ns6["HideAt"] ?? ns6;

  // tedi:src/tedi/components/layout/show-at/show-at.tsx
  var show_at_exports = {};
  __export(show_at_exports, {
    default: () => show_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(show_at_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var show_at_default = ns7["ShowAt"] ?? ns7;

  // tedi:src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var vertical_spacing_default = ns8["VerticalSpacing"] ?? ns8;

  // tedi:src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var separator_default = ns9["Separator"] ?? ns9;

  // tedi:src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var status_badge_default = ns10["StatusBadge"] ?? ns10;

  // tedi:src/tedi/components/navigation/card-stepper/index.ts
  var card_stepper_exports = {};
  __export(card_stepper_exports, {
    default: () => card_stepper_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_stepper_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var card_stepper_default = ns11["CardStepper"] ?? ns11;

  // tedi:src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var link_default = ns12["Link"] ?? ns12;

  // tedi:src/tedi/components/navigation/vertical-stepper/vertical-stepper.tsx
  var vertical_stepper_exports = {};
  __export(vertical_stepper_exports, {
    default: () => vertical_stepper_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_stepper_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var vertical_stepper_default = ns13["VerticalStepper"] ?? ns13;

  // tedi:src/tedi/components/navigation/vertical-stepper/vertical-stepper-item.tsx
  var vertical_stepper_item_exports = {};
  __export(vertical_stepper_item_exports, {
    default: () => vertical_stepper_item_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_stepper_item_exports, __toESM(require_tedi_namespace()));
  var ns14 = window.Tedi;
  var vertical_stepper_item_default = ns14["VerticalStepperItem"] ?? ns14;

  // tedi:src/tedi/components/navigation/vertical-stepper/vertical-stepper-sub-item.tsx
  var vertical_stepper_sub_item_exports = {};
  __export(vertical_stepper_sub_item_exports, {
    default: () => vertical_stepper_sub_item_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_stepper_sub_item_exports, __toESM(require_tedi_namespace()));
  var ns15 = window.Tedi;
  var vertical_stepper_sub_item_default = ns15["VerticalStepperSubItem"] ?? ns15;

  // src/tedi/components/navigation/vertical-stepper/vertical-stepper.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: vertical_stepper_exports.VerticalStepper,
    title: "TEDI-Ready/Components/Navigation/VerticalStepper",
    subcomponents: {
      "VerticalStepper.Item": vertical_stepper_item_exports.VerticalStepperItem,
      "VerticalStepper.SubItem": vertical_stepper_sub_item_exports.VerticalStepperSubItem
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.54.75?node-id=4375-57530&m=dev"
      }
    }
  };
  var vertical_stepper_stories_default = meta;
  var noop = () => void 0;
  var Frame = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 360 }, children });
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Hindamise edenemine", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Sotsiaalne v\xF5rgustik", current: true, href: "#step-1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper.Item, { title: "Sotsiaalsed suhted", state: "completed", defaultOpen: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.SubItem, { title: "S\xF5brad", state: "completed", onClick: noop }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.SubItem, { title: "Pere", onClick: noop })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Vaimne tervis", state: "completed", href: "#step-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "F\xFC\xFCsiline tervis", state: "completed", href: "#step-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Elukeskkond", state: "completed", href: "#step-5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "H\xF5ivatus", state: "error", href: "#step-6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Vaba aeg ja huvitegevused", state: "completed", href: "#step-7" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Igap\xE4evaelu toimingud", href: "#step-8" })
    ] }) })
  };
  var WithDescriptions = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Taotluse menetlus", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Kutse", state: "completed", href: "#k1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        vertical_stepper_exports.VerticalStepper.Item,
        {
          title: "Tahteavaldus",
          description: "\xDClevaatamine v\xF5ib v\xF5tta kuni 30 t\xF6\xF6p\xE4eva",
          state: "completed",
          href: "#k2"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        vertical_stepper_exports.VerticalStepper.Item,
        {
          title: "Geenianal\xFC\xFCs",
          description: "Menetlemine v\xF5tab aega kuni 30 p\xE4eva",
          current: true,
          href: "#k3"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Vastus", href: "#k4" })
    ] }) })
  };
  var WithStatusBadges = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Andmete kontroll", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        vertical_stepper_exports.VerticalStepper.Item,
        {
          title: "Isikuandmed",
          state: "completed",
          href: "#i1",
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", variant: "bordered", children: "Isik on t\xF5estatud" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "\xDCldandmed", state: "completed", href: "#i2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Terviseandmed", state: "completed", href: "#i3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        vertical_stepper_exports.VerticalStepper.Item,
        {
          title: "Vastus",
          current: true,
          href: "#i4",
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: "small", children: "T\xE4idab ametnik" })
        }
      )
    ] }) })
  };
  var WithButton = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Andmete sisestus", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        vertical_stepper_exports.VerticalStepper.Item,
        {
          title: "Isikuandmed",
          state: "completed",
          href: "#b1",
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", size: "small", iconLeft: "add", children: "Lisa isik" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "\xDCldandmed", state: "completed", href: "#b2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Terviseandmed", state: "completed", href: "#b3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "\xDClevaade", current: true, href: "#b4" })
    ] }) })
  };
  var WithLinks = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Tervisevaldkonnad", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        vertical_stepper_exports.VerticalStepper.Item,
        {
          title: "Vaimne tervis",
          state: "completed",
          href: "#l1",
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#read-1", iconRight: "arrow_forward", children: "Loe rohkem" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        vertical_stepper_exports.VerticalStepper.Item,
        {
          title: "F\xFC\xFCsiline tervis",
          state: "completed",
          href: "#l2",
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#read-2", iconRight: "arrow_forward", children: "Loe rohkem" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "\xDCldandmed", state: "completed", href: "#l3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "\xDClevaade", current: true, href: "#l4" })
    ] }) })
  };
  var Compact = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Hindamise edenemine", compact: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Sotsiaalne v\xF5rgustik", current: true, href: "#c1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper.Item, { title: "Sotsiaalsed suhted", state: "completed", defaultOpen: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.SubItem, { title: "S\xF5brad", state: "completed", onClick: noop }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.SubItem, { title: "Pere", onClick: noop })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Vaimne tervis", state: "completed", href: "#c3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "F\xFC\xFCsiline tervis", state: "completed", href: "#c4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Elukeskkond", state: "completed", href: "#c5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "H\xF5ivatus", state: "error", href: "#c6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Vaba aeg ja huvitegevused", state: "completed", href: "#c7" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Igap\xE4evaelu toimingud", href: "#c8" })
    ] }) })
  };
  var ITEM_STATES = [
    { label: "Completed", props: { state: "completed" } },
    { label: "Has error", props: { state: "error" } },
    { label: "Default", props: {} },
    { label: "Selected", props: { current: true } },
    { label: "Disabled", props: { state: "disabled" }, noHover: true }
  ];
  var SUB_STATES = [
    { label: "Completed", props: { state: "completed" } },
    { label: "Has error", props: { state: "error" } },
    { label: "Default", props: {} },
    { label: "Selected", props: { current: true } },
    { label: "Disabled", props: { state: "disabled" }, noHover: true },
    { label: "Informative", props: { state: "informative" }, noHover: true }
  ];
  var itemCell = (compact, props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Stepper state example", compact, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Text", onClick: noop, ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.Item, { title: "Text", onClick: noop, ...props, current: void 0 })
  ] });
  var subCell = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Sub-step state example", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_stepper_exports.VerticalStepper.Item, { title: "Text", defaultOpen: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.SubItem, { title: "Text", onClick: noop, ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper.SubItem, { title: "Text", onClick: noop, ...props, current: void 0 })
  ] }) });
  var StateMatrix = ({
    states,
    renderCell
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { gutterX: 2, gutterY: 3, children: states.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, md: 4, lg: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: s.label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", color: "tertiary", children: "Default" }),
      renderCell(s.props)
    ] }),
    !s.noHover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vs-hover", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", color: "tertiary", children: "Hover" }),
      renderCell(s.props)
    ] }) })
  ] }) }, s.label)) });
  var States = {
    parameters: {
      pseudo: { hover: [".vs-hover a", ".vs-hover button"] },
      a11y: {
        config: {
          // This is a visual state matrix, not a real page: it renders the disabled/informative states
          // (intentionally low-contrast) and repeats the same-labelled `<nav>` many times. Those two
          // rules don't apply to this showcase — every real usage is covered by the other stories.
          rules: [
            { id: "color-contrast", enabled: false },
            { id: "landmark-unique", enabled: false }
          ]
        }
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", modifiers: "h5", children: "Default" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateMatrix, { states: ITEM_STATES, renderCell: (props) => itemCell(false, props) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_exports.Separator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", modifiers: "h5", children: "Compact" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateMatrix, { states: ITEM_STATES, renderCell: (props) => itemCell(true, props) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_exports.Separator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h3", modifiers: "h5", children: "Has subitems" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateMatrix, { states: SUB_STATES, renderCell: subCell })
      ] })
    ] })
  };
  var RESPONSIVE_STEPS = [
    { title: "Isikuandmed", description: "\xDCles laaditud 03.06.2026", state: "completed" },
    { title: "\xDCldandmed", state: "completed" },
    { title: "Terviseandmed" },
    { title: "\xDClevaade" }
  ];
  var Responsive = {
    render: function ResponsiveExample() {
      const [step, setStep] = (0, import_react.useState)(2);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_stepper_exports.VerticalStepper, { "aria-label": "Taotluse sammud", children: RESPONSIVE_STEPS.map((s, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          vertical_stepper_exports.VerticalStepper.Item,
          {
            title: s.title,
            description: s.description,
            state: s.state,
            current: index === step,
            onClick: () => setStep(index)
          },
          index
        )) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(hide_at_exports.HideAt, { md: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: RESPONSIVE_STEPS,
            activeStep: step,
            onStepChange: setStep,
            showNavigation: true,
            labels: {
              previous: "Eelmine samm",
              next: "J\xE4rgmine samm",
              openSteps: "Ava sammud",
              modalHeading: "Sammud"
            },
            "aria-label": "Taotluse sammud"
          }
        ) }) })
      ] });
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

  // VerticalStepper.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(vertical_stepper_stories_exports, "Default", G, B);
  var WithDescriptions2 = compose(vertical_stepper_stories_exports, "WithDescriptions", G, B);
  var WithStatusBadges2 = compose(vertical_stepper_stories_exports, "WithStatusBadges", G, B);
  var WithButton2 = compose(vertical_stepper_stories_exports, "WithButton", G, B);
  var WithLinks2 = compose(vertical_stepper_stories_exports, "WithLinks", G, B);
  var Compact2 = compose(vertical_stepper_stories_exports, "Compact", G, B);
  var States2 = compose(vertical_stepper_stories_exports, "States", G, B);
  var Responsive2 = compose(vertical_stepper_stories_exports, "Responsive", G, B);
  return __toCommonJS(VerticalStepper_preview_exports);
})();
