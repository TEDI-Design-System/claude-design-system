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

  // Radio.preview.tsx
  var Radio_preview_exports = {};
  __export(Radio_preview_exports, {
    CardStatesPrimary: () => CardStatesPrimary2,
    CardStatesSecondary: () => CardStatesSecondary2,
    CardsGrouped: () => CardsGrouped2,
    CardsHasBorder: () => CardsHasBorder2,
    CardsSeparate: () => CardsSeparate2,
    CardsWithDescription: () => CardsWithDescription2,
    CardsWithIcons: () => CardsWithIcons2,
    CardsWithLabel: () => CardsWithLabel2,
    Controlled: () => Controlled2,
    Default: () => Default2,
    Group: () => Group2,
    HiddenLabel: () => HiddenLabel2,
    ResponsiveVariant: () => ResponsiveVariant2,
    Sizes: () => Sizes2,
    States: () => States2,
    WithHelper: () => WithHelper2,
    WithLongTitle: () => WithLongTitle2,
    WithTooltip: () => WithTooltip2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/radio/radio.stories.tsx
  var radio_stories_exports = {};
  __export(radio_stories_exports, {
    CardStatesPrimary: () => CardStatesPrimary,
    CardStatesSecondary: () => CardStatesSecondary,
    CardsGrouped: () => CardsGrouped,
    CardsHasBorder: () => CardsHasBorder,
    CardsSeparate: () => CardsSeparate,
    CardsWithDescription: () => CardsWithDescription,
    CardsWithIcons: () => CardsWithIcons,
    CardsWithLabel: () => CardsWithLabel,
    Controlled: () => Controlled,
    Default: () => Default,
    Group: () => Group,
    HiddenLabel: () => HiddenLabel,
    ResponsiveVariant: () => ResponsiveVariant,
    Sizes: () => Sizes,
    States: () => States,
    WithHelper: () => WithHelper,
    WithLongTitle: () => WithLongTitle,
    WithTooltip: () => WithTooltip,
    default: () => radio_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // src/tedi/helpers/index.ts
  var helpers_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-is-mounted.ts
  var use_is_mounted_exports = {};
  __export(use_is_mounted_exports, {
    default: () => use_is_mounted_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_is_mounted_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var use_is_mounted_default = ns["useIsMounted"] ?? ns;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_is_mounted_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-safe-id.ts
  var use_safe_id_exports = {};
  __export(use_safe_id_exports, {
    default: () => use_safe_id_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_safe_id_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var use_safe_id_default = ns2["useSafeId"] ?? ns2;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_safe_id_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-breakpoint.ts
  var use_breakpoint_exports = {};
  __export(use_breakpoint_exports, {
    default: () => use_breakpoint_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_breakpoint_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var use_breakpoint_default = ns3["useBreakpoint"] ?? ns3;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_breakpoint_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-breakpoint-props.ts
  var use_breakpoint_props_exports = {};
  __export(use_breakpoint_props_exports, {
    default: () => use_breakpoint_props_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_breakpoint_props_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var use_breakpoint_props_default = ns4["useBreakpointProps"] ?? ns4;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_breakpoint_props_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-element-size.ts
  var use_element_size_exports = {};
  __export(use_element_size_exports, {
    default: () => use_element_size_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_element_size_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var use_element_size_default = ns5["useElementSize"] ?? ns5;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_element_size_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-scroll.ts
  var use_scroll_exports = {};
  __export(use_scroll_exports, {
    default: () => use_scroll_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_scroll_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var use_scroll_default = ns6["useScroll"] ?? ns6;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_scroll_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-is-touch-device.ts
  var use_is_touch_device_exports = {};
  __export(use_is_touch_device_exports, {
    default: () => use_is_touch_device_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_is_touch_device_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var use_is_touch_device_default = ns7["useIsTouchDevice"] ?? ns7;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_is_touch_device_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-file-upload.ts
  var use_file_upload_exports = {};
  __export(use_file_upload_exports, {
    default: () => use_file_upload_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_file_upload_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var use_file_upload_default = ns8["useFileUpload"] ?? ns8;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_file_upload_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-what-input.ts
  var use_what_input_exports = {};
  __export(use_what_input_exports, {
    default: () => use_what_input_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_what_input_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var use_what_input_default = ns9["useWhatInput"] ?? ns9;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_what_input_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/hooks/use-scroll-fade.ts
  var use_scroll_fade_exports = {};
  __export(use_scroll_fade_exports, {
    default: () => use_scroll_fade_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(use_scroll_fade_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var use_scroll_fade_default = ns10["useScrollFade"] ?? ns10;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, use_scroll_fade_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/helpers/polymorphic/types.ts
  var types_exports = {};
  __export(types_exports, {
    default: () => types_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(types_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var types_default = ns11["types.ts"] ?? ns11;

  // src/tedi/helpers/index.ts
  __reExport(helpers_exports, types_exports);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var text_default = ns12["Text"] ?? ns12;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var button_default = ns13["Button"] ?? ns13;

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
  var ns14 = window.Tedi;
  var row_default = ns14["Row"] ?? ns14;

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
  var ns15 = window.Tedi;
  var col_default = ns15["Col"] ?? ns15;

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
  var ns16 = window.Tedi;
  var vertical_spacing_default = ns16["VerticalSpacing"] ?? ns16;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/notifications/alert/alert.tsx
  var alert_exports = {};
  __export(alert_exports, {
    default: () => alert_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(alert_exports, __toESM(require_tedi_namespace()));
  var ns17 = window.Tedi;
  var alert_default = ns17["Alert"] ?? ns17;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/feedback-text/feedback-text.tsx
  var feedback_text_exports = {};
  __export(feedback_text_exports, {
    default: () => feedback_text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(feedback_text_exports, __toESM(require_tedi_namespace()));
  var ns18 = window.Tedi;
  var feedback_text_default = ns18["FeedbackText"] ?? ns18;

  // src/tedi/components/form/radio/index.ts
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/radio/radio.tsx
  var radio_exports = {};
  __export(radio_exports, {
    default: () => radio_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(radio_exports, __toESM(require_tedi_namespace()));
  var ns19 = window.Tedi;
  var radio_default = ns19["Radio"] ?? ns19;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/radio/radio-group/radio-group.tsx
  var radio_group_exports = {};
  __export(radio_group_exports, {
    default: () => radio_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(radio_group_exports, __toESM(require_tedi_namespace()));
  var ns20 = window.Tedi;
  var radio_group_default = ns20["RadioGroup"] ?? ns20;

  // src/tedi/components/form/radio/index.ts
  var Radio = Object.assign(radio_default, { Group: radio_group_default });
  var radio_default2 = Radio;

  // src/tedi/components/form/radio/radio.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: radio_default2,
    subcomponents: { "Radio.Group": radio_group_default },
    title: "TEDI-Ready/Components/Form/ChoiceGroup/Radio",
    argTypes: {
      tooltip: { control: false }
    },
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      }
    }
  };
  var radio_stories_default = meta;
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { ...args, label: "Tekst", value: "default" });
  var sizesArray = ["default", "large"];
  var TemplateSizes = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, className: "example-list", children: sizesArray.map((size, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === sizesArray.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 10, md: 6, xs: 8, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: size.charAt(0).toUpperCase() + size.slice(1) }),
        size === "large" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(alert_default, { type: "warning", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Applied automatically on mobile screen sizes. " }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Otherwise, prefer using default size." })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, md: 6, xs: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        radio_default2,
        {
          ...args,
          size,
          id: `radio-size-${size}`,
          label: `${size.charAt(0).toUpperCase() + size.slice(1)} size`,
          hideLabel: true
        }
      ) })
    ] }, key)) }) });
  };
  var Default = {
    render: Template,
    args: {
      id: "default-radio",
      name: "default-radio",
      defaultChecked: true
    }
  };
  var Sizes = {
    render: TemplateSizes
  };
  var stateRows = [
    { label: "Default", id: "default" },
    { label: "Hover", id: "hover", props: { hover: true } },
    { label: "Active", id: "active" },
    { label: "Disabled", id: "disabled", props: { disabled: true } },
    { label: "Focus", id: "focus" },
    { label: "Mandatory", id: "required", props: { required: true }, error: false }
  ];
  var StateMatrix = ({
    headers,
    rows,
    alignItems = "start",
    mobileLayout = "rows",
    desktopGrid
  }) => {
    const stacked = (0, helpers_exports.isBreakpointBelow)((0, helpers_exports.useBreakpoint)(), "md");
    const fixedGrid = stacked ? void 0 : desktopGrid;
    const gridStyle = (gridTemplateColumns) => ({
      display: "grid",
      gridTemplateColumns,
      gridAutoRows: fixedGrid ? `minmax(${fixedGrid.rowHeight}, auto)` : void 0,
      columnGap: fixedGrid?.columnGap ?? "var(--layout-grid-gutters-24)",
      rowGap: fixedGrid?.rowGap ?? "var(--layout-grid-gutters-16)",
      alignItems
    });
    const labelTrack = fixedGrid ? `minmax(${fixedGrid.columnWidth}, max-content)` : "max-content";
    const cellTrack = fixedGrid ? `minmax(${fixedGrid.columnWidth}, max-content)` : "minmax(min-content, max-content)";
    if (stacked && mobileLayout === "columns") {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-column gap-4", children: headers.map((header, column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: header }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: gridStyle("max-content minmax(0, 1fr)"), children: rows.filter(({ cells }) => cells[column]).map(({ label, cells }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.default.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: cells[column] })
        ] }, label)) })
      ] }, column)) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: gridStyle(
          stacked ? `repeat(${headers.length}, minmax(0, 1fr))` : `${labelTrack} repeat(${headers.length}, ${cellTrack})`
        ),
        children: [
          !stacked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
          headers.map((header, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: header }, index)),
          rows.map(({ label, cells }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.default.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: stacked ? { gridColumn: "1 / -1", marginTop: "var(--layout-grid-gutters-08)" } : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: label }) }),
            cells.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: cell }, index))
          ] }, label))
        ]
      }
    );
  };
  var STATES_DESKTOP_GRID = {
    columnWidth: "10.375rem",
    rowHeight: "2.5rem",
    columnGap: "var(--layout-grid-gutters-16)",
    rowGap: "var(--layout-grid-gutters-08)"
  };
  var STATE_COLUMNS = [
    { suffix: "unselected", selected: false, error: false },
    { suffix: "selected", selected: true, error: false },
    { suffix: "error-unselected", selected: false, error: true },
    { suffix: "error-selected", selected: true, error: true }
  ];
  var HiddenLabel = {
    render: Template,
    args: {
      id: "hidden-label-radio",
      name: "hidden-label-radio",
      hideLabel: true
    }
  };
  var WithHelper = {
    render: Template,
    args: {
      id: "extra-content-radio",
      name: "extra-content-radio",
      helper: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque quis augue sit amet semper. Donec porttitor mauris neque, quis feugiat erat malesuada ac. Cras vel mauris a est pretium egestas."
      }
    }
  };
  var WithTooltip = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        radio_default2,
        {
          ...args,
          id: "radio-short-title-tooltip",
          label: "Tekst",
          name: "radio-short-title-tooltip",
          value: "radio"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        radio_default2,
        {
          ...args,
          id: "radio-short-title-helper-tooltip",
          label: "Tekst",
          name: "radio-short-title-helper-tooltip",
          value: "radio",
          helper: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque quis augue sit amet semper. Donec porttitor mauris neque, quis feugiat erat malesuada ac. Cras vel mauris a est pretium egestas."
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        radio_default2,
        {
          ...args,
          id: "radio-long-title-tooltip-helper",
          label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, sem blandit sodales tincidunt, orci elit ornare ex, eu ultrices diam turpis id nisl. Sed sollicitudin auctor nunc. Aliquam a arcu in sem bibendum laoreet non eu nunc.",
          name: "radio-long-title-tooltip-helper",
          value: "radio",
          helper: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque quis augue sit amet semper. Donec porttitor mauris neque, quis feugiat erat malesuada ac. Cras vel mauris a est pretium egestas."
          }
        }
      )
    ] }) }) }),
    args: {
      name: "tooltip-radio",
      tooltip: "This is a tooltip"
    }
  };
  var WithLongTitle = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, lg: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      radio_default2,
      {
        id: "radio-long-title",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, sem blandit sodales tincidunt, orci elit ornare ex, eu ultrices diam turpis id nisl. Sed sollicitudin auctor nunc. Aliquam a arcu in sem bibendum laoreet non eu nunc.",
        name: "radio-long-title",
        value: "radio"
      }
    ) }) });
  };
  var Group = {
    render: () => {
      const group = (direction, helper, invalid = false) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(radio_default2.Group, { label: "Tooraine", direction, invalid, helper, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" })
      ] });
      const error = { text: "V\xE4hemalt 1 tooraine on kohustuslik valida", type: "error" };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { cols: 1, md: { cols: 2 }, gutterY: 3, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: group("column", { text: "Tegemist on veidi veidra valikuga, kuid v\xE4hemalt \xFChe baaselemendi peab valima" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: group("row", { text: "Eestis levinud k\xF6\xF6giviljad" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: group("column", error, true) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: group("row", error, true) })
      ] });
    }
  };
  var Controlled = () => {
    const [selected, setSelected] = (0, import_react.useState)(null);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(radio_default2.Group, { label: "Teavitusviis", value: selected, onChange: setSelected, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "email", label: "E-post" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "sms", label: "SMS" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
        "Selected: ",
        selected ?? "\u2014"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", onClick: () => setSelected(null), disabled: selected === null, children: "Clear selection" })
    ] });
  };
  var CardsSeparate = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { cols: 1, md: { cols: 2 }, gutterY: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(radio_default2.Group, { label: "Juurvili", hideLabel: true, variant: "card", cardVariant: "primary", defaultValue: "peet", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(radio_default2.Group, { label: "Juurvili", hideLabel: true, variant: "card", cardVariant: "secondary", defaultValue: "peet", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" })
        ] })
      ] }) })
    ] })
  };
  var CardsWithLabel = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(radio_default2.Group, { label: "Juurvili", variant: "card", cardVariant: "primary", defaultValue: "kartul", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        radio_default2.Group,
        {
          label: "Juurvili",
          variant: "card",
          cardVariant: "primary",
          invalid: true,
          helper: { text: "Valik on kohustuslik", type: "error" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" })
          ]
        }
      )
    ] })
  };
  var CardsHasBorder = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(radio_default2.Group, { label: "Juurvili", hideLabel: true, variant: "card", cardVariant: "primary", bordered: true, defaultValue: "peet", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" })
    ] })
  };
  var CardsGrouped = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { cols: 1, md: { cols: 2 }, gutterY: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          radio_default2.Group,
          {
            label: "Juurvili",
            hideLabel: true,
            variant: "card",
            cardVariant: "primary",
            layout: "segmented",
            defaultValue: "peet",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kaalikas", label: "Kaalikas" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          radio_default2.Group,
          {
            label: "Juurvili",
            hideLabel: true,
            variant: "card",
            cardVariant: "secondary",
            layout: "segmented",
            defaultValue: "kapsas",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kaalikas", label: "Kaalikas" })
            ]
          }
        )
      ] }) })
    ] })
  };
  var CardsWithDescription = {
    render: () => {
      const items = [
        {
          value: "kartul",
          label: "Kartul",
          description: "T\xE4rkliserikas mugulk\xF6\xF6givili, mida kasutatakse laialt toiduks."
        },
        {
          value: "peet",
          label: "Peet",
          description: "Magusamaitseline juurvili, mida s\xFC\xFCakse nii toorelt kui ka kuumt\xF6\xF6deldult."
        },
        {
          value: "kapsas",
          label: "Kapsas",
          description: "Lehtk\xF6\xF6givili, mille tihedaid lehti kasutatakse mitmesugustes roogades."
        }
      ];
      const group = (title, cardVariant, layout) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          radio_default2.Group,
          {
            label: "Juurvili",
            hideLabel: true,
            variant: "card",
            cardVariant,
            layout,
            bordered: cardVariant === "primary",
            defaultValue: "peet",
            children: layout === "segmented" ? (
              // Every card starts at full width and shrinks by the same amount, so the joined cards stay equal width
              items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                radio_default2,
                {
                  value: item.value,
                  label: item.label,
                  description: item.description,
                  className: "w-100"
                },
                item.value
              ))
            ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { className: "flex-grow-1", gutter: 2, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "flex", xs: 12, md: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: item.value, label: item.label, description: item.description, className: "w-100" }) }, item.value)) })
          }
        )
      ] });
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column gap-4", children: [
        group("Primary", "primary", "separated"),
        group("Primary grouped", "primary", "segmented"),
        group("Secondary", "secondary", "separated"),
        group("Secondary grouped", "secondary", "segmented")
      ] });
    }
  };
  var CardsWithIcons = {
    render: () => {
      const items = [
        {
          value: "tram",
          label: "Trammiga",
          icon: "directions_subway",
          description: "Soovitatud variant, v\xE4hendab ummikuid"
        },
        { value: "walk", label: "Jalgsi", icon: "directions_walk", description: "Soovitatud variant, v\xE4hendab ummikuid" },
        {
          value: "car",
          label: "Autoga",
          icon: "directions_car",
          description: "Kui soovid kiiremini kohale j\xF5uda, tekitab ummikuid"
        }
      ];
      const group = (title, cardVariant, withDescription = false) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          radio_default2.Group,
          {
            label: "Liikumisviis",
            hideLabel: true,
            variant: "card",
            cardVariant,
            bordered: cardVariant === "primary",
            defaultValue: "walk",
            children: withDescription ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { className: "flex-grow-1", gutter: 2, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "flex", xs: 12, md: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              radio_default2,
              {
                value: item.value,
                label: item.label,
                icon: item.icon,
                description: item.description,
                className: "w-100"
              }
            ) }, item.value)) }) : items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: item.value, label: item.label, icon: item.icon }, item.value))
          }
        )
      ] });
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { cols: 1, md: { cols: 2 }, gutterY: 3, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: group("Primary", "primary") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: group("Secondary", "secondary") })
        ] }),
        group("Primary with description", "primary", true),
        group("Secondary with description", "secondary", true)
      ] });
    }
  };
  var ResponsiveVariant = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      radio_default2.Group,
      {
        label: "Tooraine",
        defaultValue: "kartul",
        variant: "card",
        cardVariant: "secondary",
        md: { variant: "default", direction: "column" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kartul", label: "Kartul" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "peet", label: "Peet" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "kapsas", label: "Kapsas" })
        ]
      }
    )
  };
  var CARD_STATES = [
    { state: "Default" },
    { state: "Hover" },
    { state: "Active" },
    { state: "Focus" },
    { state: "Disabled", props: { disabled: true } }
  ];
  var CARD_COLUMNS = {
    primary: [
      { column: "unselected", title: "Unselected" },
      { column: "borderless", title: "Unselected borderless" },
      { column: "selected", title: "Selected" },
      { column: "grouped", title: "Grouped" }
    ],
    secondary: [
      { column: "unselected", title: "Unselected" },
      { column: "selected", title: "Selected" },
      { column: "grouped", title: "Grouped" }
    ]
  };
  var cardStateId = (cardVariant, column, state) => `radio-card-${cardVariant}-${column}-${state.toLowerCase()}`;
  var cardStatesPseudo = (cardVariant) => {
    const ids = (state) => CARD_COLUMNS[cardVariant].map(({ column }) => `#${cardStateId(cardVariant, column, state)}`);
    return { hover: ids("Hover"), active: ids("Active"), focusVisible: ids("Focus") };
  };
  var CardErrorCell = ({ message, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "var(--layout-grid-gutters-04)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "max-content" }, children }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feedback_text_default, { text: message, type: "error" })
  ] });
  var renderCardCell = (cardVariant, column, state, props = {}) => {
    const id = cardStateId(cardVariant, column, state);
    const isError = state === "Error";
    const selected = column === "selected" || column === "grouped";
    const bordered = column === "unselected";
    if (column === "grouped" || isError) {
      const errorText = selected ? "Valitud v\xE4\xE4rtus ei sobi ajavahemikuga" : "Kohustuslik on valida v\xE4hemalt 1 v\xE4\xE4rtus";
      const group = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        radio_default2.Group,
        {
          label: `${column} ${state}`,
          hideLabel: true,
          name: id,
          variant: "card",
          cardVariant,
          layout: column === "grouped" ? "segmented" : "separated",
          direction: "row",
          bordered,
          defaultValue: selected ? "a" : null,
          invalid: isError,
          disabled: props.disabled,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { id: isError ? void 0 : id, value: "a", label: "Tekst" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_default2, { value: "b", label: "Tekst" })
          ]
        }
      );
      return isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardErrorCell, { message: errorText, children: group }) : group;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      radio_default2,
      {
        variant: "card",
        cardVariant,
        bordered,
        id,
        name: id,
        value: "radio",
        label: "Tekst",
        defaultChecked: selected,
        ...props
      }
    );
  };
  var renderCardStates = (cardVariant) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    StateMatrix,
    {
      alignItems: "center",
      mobileLayout: "columns",
      headers: CARD_COLUMNS[cardVariant].map(({ title }) => title),
      rows: [...CARD_STATES, { state: "Error", props: void 0 }].map(({ state, props }) => ({
        label: state,
        cells: CARD_COLUMNS[cardVariant].map(({ column }) => renderCardCell(cardVariant, column, state, props))
      }))
    }
  );
  var States = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    StateMatrix,
    {
      alignItems: "center",
      mobileLayout: "columns",
      desktopGrid: STATES_DESKTOP_GRID,
      headers: ["Unselected", "Selected", "Error unselected", "Error selected"],
      rows: stateRows.map(({ label, id, props, error: hasError = true }) => ({
        label,
        cells: STATE_COLUMNS.map(({ suffix, selected, error }) => {
          if (error && !hasError) return null;
          const radioId = `radio-${id}-${suffix}`;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            radio_default2,
            {
              id: radioId,
              label: "Tekst",
              name: radioId,
              value: "radio",
              defaultChecked: selected,
              ...props,
              ...error ? { invalid: true, helper: { text: "Kohustuslik v\xE4li", type: "error" } } : {}
            },
            radioId
          );
        })
      }))
    }
  );
  States.parameters = {
    pseudo: {
      active: STATE_COLUMNS.map(({ suffix }) => `#radio-active-${suffix} + *`),
      focusVisible: STATE_COLUMNS.map(({ suffix }) => `#radio-focus-${suffix}`)
    }
  };
  var CardStatesPrimary = {
    parameters: { pseudo: cardStatesPseudo("primary") },
    render: () => renderCardStates("primary")
  };
  var CardStatesSecondary = {
    parameters: { pseudo: cardStatesPseudo("secondary") },
    render: () => renderCardStates("secondary")
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React2 = __toESM(require_react(), 1);
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
      if (Component) render = () => React2.createElement(Component, args);
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

  // Radio.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(radio_stories_exports, "Default", G, B);
  var Sizes2 = compose(radio_stories_exports, "Sizes", G, B);
  var HiddenLabel2 = compose(radio_stories_exports, "HiddenLabel", G, B);
  var WithHelper2 = compose(radio_stories_exports, "WithHelper", G, B);
  var WithTooltip2 = compose(radio_stories_exports, "WithTooltip", G, B);
  var WithLongTitle2 = compose(radio_stories_exports, "WithLongTitle", G, B);
  var Group2 = compose(radio_stories_exports, "Group", G, B);
  var Controlled2 = compose(radio_stories_exports, "Controlled", G, B);
  var CardsSeparate2 = compose(radio_stories_exports, "CardsSeparate", G, B);
  var CardsWithLabel2 = compose(radio_stories_exports, "CardsWithLabel", G, B);
  var CardsHasBorder2 = compose(radio_stories_exports, "CardsHasBorder", G, B);
  var CardsGrouped2 = compose(radio_stories_exports, "CardsGrouped", G, B);
  var CardsWithDescription2 = compose(radio_stories_exports, "CardsWithDescription", G, B);
  var CardsWithIcons2 = compose(radio_stories_exports, "CardsWithIcons", G, B);
  var ResponsiveVariant2 = compose(radio_stories_exports, "ResponsiveVariant", G, B);
  var States2 = compose(radio_stories_exports, "States", G, B);
  var CardStatesPrimary2 = compose(radio_stories_exports, "CardStatesPrimary", G, B);
  var CardStatesSecondary2 = compose(radio_stories_exports, "CardStatesSecondary", G, B);
  return __toCommonJS(Radio_preview_exports);
})();
