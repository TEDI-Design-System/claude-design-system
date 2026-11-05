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

  // CardButton.preview.tsx
  var CardButton_preview_exports = {};
  __export(CardButton_preview_exports, {
    AsLink: () => AsLink2,
    CardRows: () => CardRows2,
    CardShortcut: () => CardShortcut2,
    ComplexCard: () => ComplexCard2,
    Default: () => Default2,
    States: () => States2,
    WithIconCard: () => WithIconCard2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/buttons/card-button/card-button.stories.tsx
  var card_button_stories_exports = {};
  __export(card_button_stories_exports, {
    AsLink: () => AsLink,
    CardRows: () => CardRows,
    CardShortcut: () => CardShortcut,
    ComplexCard: () => ComplexCard,
    Default: () => Default,
    States: () => States,
    WithIconCard: () => WithIconCard,
    default: () => card_button_stories_default
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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var icon_default = ns12["Icon"] ?? ns12;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var text_default = ns13["Text"] ?? ns13;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/card/card.tsx
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns14 = window.Tedi;
  var card_default = ns14["Card"] ?? ns14;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/text-group/text-group.tsx
  var text_group_exports = {};
  __export(text_group_exports, {
    default: () => text_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_group_exports, __toESM(require_tedi_namespace()));
  var ns15 = window.Tedi;
  var text_group_default = ns15["TextGroup"] ?? ns15;

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
  var ns16 = window.Tedi;
  var row_default = ns16["Row"] ?? ns16;

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
  var ns17 = window.Tedi;
  var col_default = ns17["Col"] ?? ns17;

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
  var ns18 = window.Tedi;
  var vertical_spacing_default = ns18["VerticalSpacing"] ?? ns18;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns19 = window.Tedi;
  var separator_default = ns19["Separator"] ?? ns19;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/stretch-content/stretch-content.tsx
  var stretch_content_exports = {};
  __export(stretch_content_exports, {
    default: () => stretch_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(stretch_content_exports, __toESM(require_tedi_namespace()));
  var ns20 = window.Tedi;
  var stretch_content_default = ns20["StretchContent"] ?? ns20;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns21 = window.Tedi;
  var status_badge_default = ns21["StatusBadge"] ?? ns21;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/card-button/card-button.tsx
  var card_button_exports = {};
  __export(card_button_exports, {
    default: () => card_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_button_exports, __toESM(require_tedi_namespace()));
  var ns22 = window.Tedi;
  var card_button_default = ns22["CardButton"] ?? ns22;

  // src/tedi/components/buttons/card-button/card-button.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: card_button_exports.CardButton,
    title: "TEDI-Ready/Components/Buttons/CardButton",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.54.76?node-id=4620-85618&m=dev"
      }
    }
  };
  var card_button_stories_default = meta;
  var rowStyle = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" };
  var ShortcutCard = ({ title, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: rowStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "secondary" })
  ] }) }) });
  var IconCard = ({ icon, title, description }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutter: 0, style: { flex: "1 0 auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_exports.StretchContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { borderRadius: { right: false }, borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { background: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: icon, color: "secondary" }) }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_exports.Separator, { axis: "vertical" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_exports.StretchContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { borderRadius: { left: false }, borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: rowStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "secondary" })
    ] }) }) }) }) })
  ] }) });
  var BookingCard = ({
    lead,
    title,
    description,
    book,
    disabled
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
    lead,
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flex: 1, flexDirection: "column" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: description })
    ] }),
    book ? (
      // The "Broneerima" call to action uses the neutral button-link colour
      // (brand in light mode, white in dark mode) — it can't be an actual `Button`,
      // since the whole card is already the clickable `CardButton`.
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "span",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: disabled ? "var(--general-text-disabled)" : "var(--button-main-neutral-text-default)"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", children: "Broneerima" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "inherit" })
          ]
        }
      )
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "secondary" })
  ] }) }) });
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutCard, { title: "T\xF6\xF6v\xF5ime", description: "N\xE4iteks t\xF6\xF6v\xF5imetuslehed, t\xF6\xF6v\xF5ime hindamine" }) })
  };
  var CardRows = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        BookingCard,
        {
          lead: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: "8:30" }),
          title: "Kardioloog",
          description: "Valdkond",
          book: true
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        BookingCard,
        {
          lead: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: "8:30" }),
          title: "Kardioloog",
          book: true
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        BookingCard,
        {
          lead: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "monitor_heart", color: "secondary" }),
          title: "Kardioloog",
          description: "Valdkond",
          book: true
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCard, { title: "Kardioloog", description: "Valdkond", book: true }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCard, { icon: "monitor_heart", title: "Kardioloog", description: "Valdkond" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: { display: "flex", flex: 1, flexDirection: "column", alignItems: "flex-start", gap: "0.25rem" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: "Kardioloog" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Kindlustatud | Tervisekassa" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", color: "brand", children: "Broneerima" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "brand" })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "monitor_heart", color: "secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flex: 1, flexDirection: "column" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: "Perearst" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: "Dr. Mari Maasikas" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Aktiivne" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "secondary" })
      ] }) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCard, { title: "\xDCldandmed" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: rowStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "h4", color: "brand", children: "Minu andmed" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: "Isikuandmed ja sinu perearstiga seotud info." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "secondary" })
      ] }) }) }) })
    ] })
  };
  var CardShortcut = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { cols: 1, md: { cols: 2 }, gutter: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutCard, { title: "T\xF6\xF6v\xF5ime", description: "N\xE4iteks t\xF6\xF6v\xF5imetuslehed, t\xF6\xF6v\xF5ime hindamine" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        ShortcutCard,
        {
          title: "Esindus\xF5igus Terviseportaalis",
          description: "V\xF5imaldab jagada ligip\xE4\xE4su sinu terviseandmetele"
        }
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutCard, { title: "Mootors\xF5iduki juhiloa t\xF5end", description: "Kehtib kuni 28.05.2024" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutCard, { title: "Minu hammaste tervis", description: "\xDClevaade sinu vastuv\xF5ttudest" }) }) })
    ] })
  };
  var WithIconCard = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { cols: 1, lg: { cols: 3 }, gutter: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCard, { icon: "euro_symbol", title: "Isiku toetused", description: "Toetused mis on isikule ette n\xE4htud" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCard, { icon: "checklist", title: "Isiku hindamised", description: "Hindamised toetuste saamiseks" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCard, { icon: "contract", title: "Isiku teenused", description: "Teenused mis on v\xF5imaldatud peale hindamist" }) }) })
    ] })
  };
  var STATE_ROWS = ["Default", "Hover", "Active", "Focus", "Disabled"];
  var States = {
    parameters: {
      pseudo: {
        hover: '[data-pseudo="Hover"]',
        active: '[data-pseudo="Active"]',
        focusVisible: '[data-pseudo="Focus"]'
      }
    },
    render: () => {
      const breakpoint = (0, helpers_exports.useBreakpoint)();
      const isMobile = (0, helpers_exports.isBreakpointBelow)(breakpoint, "md");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "auto 1fr 1fr",
            gap: isMobile ? "0.5rem" : "1rem",
            alignItems: "center"
          },
          children: STATE_ROWS.map((state) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", color: "primary", children: state }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { "data-pseudo": state, disabled: state === "Disabled", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCard, { title: "Kardioloog", description: "Valdkond", book: true, disabled: state === "Disabled" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { "data-pseudo": state, disabled: state === "Disabled", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCard, { icon: "monitor_heart", title: "Kardioloog", description: "Valdkond" }) })
          ] }, state))
        }
      );
    }
  };
  var AsLink = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { as: "a", href: "#", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutCard, { title: "T\xF6\xF6v\xF5ime", description: "N\xE4iteks t\xF6\xF6v\xF5imetuslehed, t\xF6\xF6v\xF5ime hindamine" }) })
  };
  var ComplexCard = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(card_exports.Card, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutter: 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stretch_content_exports.StretchContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { borderRadius: { right: false, bottom: false }, borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { background: "secondary", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "prescriptions", color: "secondary" }) }) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_exports.Separator, { axis: "vertical" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { borderRadius: { left: false, bottom: false }, borderless: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...rowStyle, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: "Amlodipiin 50mg" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: "Amlodipin-rathiopharm 50mg" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", variant: "bordered", children: "Kehtiv" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: "Kehtiv kuni 12.05.2024" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "secondary" })
          ] })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_exports.Separator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { cols: 1, md: { cols: 3 }, gutter: 2, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { type: "vertical", label: "Toimeaine", value: "Amlodipiin" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { type: "vertical", label: "Kogus", value: "30 tk" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_group_exports.TextGroup, { type: "vertical", label: "V\xE4lja ostmata", value: "5 / 6 retsepti" }) })
      ] }) })
    ] }) })
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

  // CardButton.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(card_button_stories_exports, "Default", G, B);
  var CardRows2 = compose(card_button_stories_exports, "CardRows", G, B);
  var CardShortcut2 = compose(card_button_stories_exports, "CardShortcut", G, B);
  var WithIconCard2 = compose(card_button_stories_exports, "WithIconCard", G, B);
  var States2 = compose(card_button_stories_exports, "States", G, B);
  var AsLink2 = compose(card_button_stories_exports, "AsLink", G, B);
  var ComplexCard2 = compose(card_button_stories_exports, "ComplexCard", G, B);
  return __toCommonJS(CardButton_preview_exports);
})();
