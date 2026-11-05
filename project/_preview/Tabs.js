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

  // Tabs.preview.tsx
  var Tabs_preview_exports = {};
  __export(Tabs_preview_exports, {
    Controlled: () => Controlled2,
    Default: () => Default2,
    OverflowBehavior: () => OverflowBehavior2,
    States: () => States2,
    WithDisabledTab: () => WithDisabledTab2,
    WithIcons: () => WithIcons2,
    WithStatusBadge: () => WithStatusBadge2,
    WithSubTabs: () => WithSubTabs2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/navigation/tabs/tabs.stories.tsx
  var tabs_stories_exports = {};
  __export(tabs_stories_exports, {
    Controlled: () => Controlled,
    Default: () => Default,
    OverflowBehavior: () => OverflowBehavior,
    States: () => States,
    WithDisabledTab: () => WithDisabledTab,
    WithIcons: () => WithIcons,
    WithStatusBadge: () => WithStatusBadge,
    WithSubTabs: () => WithSubTabs,
    default: () => tabs_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var button_default = ns3["Button"] ?? ns3;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/button-group/button-group.tsx
  var button_group_exports = {};
  __export(button_group_exports, {
    default: () => button_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_group_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var button_group_default = ns4["ButtonGroup"] ?? ns4;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/card/card-content/card-content.tsx
  var card_content_exports = {};
  __export(card_content_exports, {
    default: () => card_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_content_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var card_content_default = ns5["CardContent"] ?? ns5;

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
  var ns6 = window.Tedi;
  var row_default = ns6["Row"] ?? ns6;

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
  var ns7 = window.Tedi;
  var col_default = ns7["Col"] ?? ns7;

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
  var ns8 = window.Tedi;
  var vertical_spacing_default = ns8["VerticalSpacing"] ?? ns8;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/ellipsis/ellipsis.tsx
  var ellipsis_exports = {};
  __export(ellipsis_exports, {
    default: () => ellipsis_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(ellipsis_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var ellipsis_default = ns9["Ellipsis"] ?? ns9;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var status_badge_default = ns10["StatusBadge"] ?? ns10;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-indicator/status-indicator.tsx
  var status_indicator_exports = {};
  __export(status_indicator_exports, {
    default: () => status_indicator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_indicator_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var status_indicator_default = ns11["StatusIndicator"] ?? ns11;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/tabs/tabs.tsx
  var tabs_exports = {};
  __export(tabs_exports, {
    default: () => tabs_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tabs_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var tabs_default = ns12["Tabs"] ?? ns12;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/tabs/tabs-context.tsx
  var tabs_context_exports = {};
  __export(tabs_context_exports, {
    default: () => tabs_context_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tabs_context_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var tabs_context_default = ns13["TabsContext"] ?? ns13;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/tabs/tabs-trigger/tabs-trigger.tsx
  var tabs_trigger_exports = {};
  __export(tabs_trigger_exports, {
    default: () => tabs_trigger_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tabs_trigger_exports, __toESM(require_tedi_namespace()));
  var ns14 = window.Tedi;
  var tabs_trigger_default = ns14["TabsTrigger"] ?? ns14;

  // src/tedi/components/navigation/tabs/tabs.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: tabs_exports.Tabs,
    title: "TEDI-Ready/Components/Navigation/Tabs",
    subcomponents: {
      "Tabs.List": tabs_exports.Tabs.List,
      "Tabs.Trigger": tabs_exports.Tabs.Trigger,
      "Tabs.Content": tabs_exports.Tabs.Content
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.38.59?node-id=3419-38773&m=dev"
      }
    }
  };
  var tabs_stories_default = meta;
  var content = {
    healthTimeline: "Kronoloogiline \xFClevaade teie tervises\xFCndmustest \u2013 visiidid, anal\xFC\xFCsid ja diagnoosid on koondatud \xFChele ajateljele.",
    diseaseCourse: "Diagnoositud haiguste \xFClevaade ja nende areng ajas koos ravi- ning j\xE4lgimism\xE4rkmetega.",
    medication: "Teile v\xE4lja kirjutatud ja v\xE4ljastatud ravimite loetelu koos annuste ja manustamisperioodidega.",
    table: "Andmed on kuvatud tabelina \u2013 sobib t\xE4pseks v\xF5rdluseks ja veergude kaupa sorteerimiseks.",
    grid: "Andmed on kuvatud ruudustikuna \u2013 sobib visuaalseks sirvimiseks ja kiireks \xFClevaateks.",
    unreadMessages: "Teil on uusi lugemata teateid tervishoiuteenuse osutajatelt. Avage teade \xFCksikasjade n\xE4gemiseks.",
    declarations: "Teie tahteavaldused, n\xE4iteks elundidoonorluse ja ravisoovide kohta.",
    proceduresInProgress: "Hetkel t\xF6\xF6s olevad menetlused ja nende seis.",
    proceduresInPlanning: "Menetlused, mis on planeeritud, kuid pole veel alanud.",
    calendar: "Kalendrivaade teie eelseisvatest visiitidest ja t\xE4htaegadest."
  };
  var stateArray = ["Default", "Hover", "Active", "Focus", "Selected"];
  var noop = () => null;
  var TemplateColumnWithStates = (args) => {
    const { array } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "state-example", children: array.map((state, index) => {
      const triggerId = state === "Selected" ? "state-tab" : `${state}-tab`;
      const currentTab = state === "Selected" ? "state-tab" : "";
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: "padding-14-16", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: state }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_context_exports.TabsContext.Provider, { value: { currentTab, setCurrentTab: noop }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_trigger_exports.TabsTrigger, { id: triggerId, children: "Terviseteekond" }) }) })
      ] }, index);
    }) });
  };
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs, { defaultValue: "tab-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.List, { "aria-label": "Tervise sakid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-1", children: "Terviseteekond" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-2", children: "Haiguste kulg" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-3", children: "Ravimite ajalugu" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.healthTimeline }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.diseaseCourse }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.medication }) }) })
    ] })
  };
  var WithIcons = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs, { defaultValue: "tab-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.List, { "aria-label": "Ikoonidega sakid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-1", icon: "table_chart", children: "Tabel" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-2", icon: "grid_on", children: "Ruudustik" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.table }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.grid }) }) })
    ] })
  };
  var WithStatusBadge = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs, { defaultValue: "tab-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.List, { "aria-label": "Olekum\xE4rgisega sakid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.Trigger, { id: "tab-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ellipsis_exports.Ellipsis, { lineClamp: 1, popover: true, children: "Terviseteekond" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "brand", children: "Esitatud" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { position: "relative" }, children: [
          "Lugemata teated\xA0",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_indicator_exports.StatusIndicator, { type: "danger", position: "top-right" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-3", children: "Ravimite ajalugu" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.healthTimeline }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.unreadMessages }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.medication }) }) })
    ] })
  };
  var States = {
    render: TemplateColumnWithStates,
    args: {
      array: stateArray
    },
    parameters: {
      a11y: { test: "off" },
      pseudo: {
        hover: "#Hover-tab",
        active: "#Active-tab",
        focusVisible: "#Focus-tab"
      }
    }
  };
  var Controlled = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: () => {
      const [currentTab, setCurrentTab] = (0, import_react.useState)("tab-1");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
          "Current tab: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: currentTab })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs, { value: currentTab, onChange: setCurrentTab, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.List, { "aria-label": "Juhitavad sakid", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-1", children: "Terviseteekond" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-2", children: "Haiguste kulg" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-3", children: "Ravimite ajalugu" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.healthTimeline }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.diseaseCourse }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.medication }) })
        ] })
      ] });
    }
  };
  var WithDisabledTab = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs, { defaultValue: "tab-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.List, { "aria-label": "Keelatud sakiga sakid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-1", children: "Terviseteekond" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-2", children: "Haiguste kulg" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-3", disabled: true, children: "Ravimite ajalugu" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.healthTimeline }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.diseaseCourse }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.medication }) }) })
    ] })
  };
  var OverflowBehavior = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Dropdown (default)" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 400 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs, { defaultValue: "more-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.List, { "aria-label": "\xDClet\xE4ituvad sakid rippmen\xFC\xFCga", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "more-1", children: "Terviseteekond" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "more-2", children: "Haiguste kulg" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "more-3", children: "Ravimite ajalugu" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "more-4", children: "Tahteavaldused" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "more-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.healthTimeline }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "more-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.diseaseCourse }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "more-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.medication }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "more-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.declarations }) }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Horizontal scroll" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 400 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs, { defaultValue: "scroll-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.List, { "aria-label": "\xDClet\xE4ituvad sakid kerimisega", overflowMode: "scroll", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "scroll-1", children: "Terviseteekond" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "scroll-2", children: "Haiguste kulg" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "scroll-3", children: "Ravimite ajalugu" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "scroll-4", children: "Tahteavaldused" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "scroll-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.healthTimeline }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "scroll-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.diseaseCourse }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "scroll-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.medication }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "scroll-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.declarations }) }) })
      ] }) })
    ] })
  };
  var WithSubTabs = {
    render: () => {
      const [activeSubTab, setActiveSubTab] = (0, import_react.useState)("work-accidents");
      const subTabLabels = {
        "work-accidents": "T\xF6\xF6\xF5nnetused",
        "occupational-diseases": "Kutsehaigused",
        "work-related-illnesses": "T\xF6\xF6ga seotud haigused"
      };
      const subTabContent = {
        "work-accidents": "T\xF6\xF6\xF5nnetuste juhtumid ja nende menetluse seis.",
        "occupational-diseases": "Kutsehaiguste kirjed ja diagnoosid.",
        "work-related-illnesses": "T\xF6\xF6ga seotud haiguste teated ja tulemused."
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs, { defaultValue: "tab-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tabs_exports.Tabs.List, { "aria-label": "T\xF6\xF6tervishoiu ja -ohutuse sakid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-1", children: "K\xE4imasolevad menetlused" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-2", children: "Planeeritavad menetlused" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-3", children: "\xD5nnetused ja haigused" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Trigger, { id: "tab-4", children: "Kalender" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.proceduresInProgress }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.proceduresInPlanning }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1.5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            button_group_exports.ButtonGroup,
            {
              type: "secondary",
              ariaLabel: "\xD5nnetuste ja haiguste alamnavigatsioon",
              enableMobileDropdown: true,
              onSelectionChange: setActiveSubTab,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "work-accidents", isActive: activeSubTab === "work-accidents", children: "T\xF6\xF6\xF5nnetused" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "occupational-diseases", isActive: activeSubTab === "occupational-diseases", children: "Kutsehaigused" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { id: "work-related-illnesses", isActive: activeSubTab === "work-related-illnesses", children: "T\xF6\xF6ga seotud haigused" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(heading_exports.Heading, { element: "h2", children: subTabLabels[activeSubTab] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: subTabContent[activeSubTab] })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tabs_exports.Tabs.Content, { id: "tab-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_content_exports.CardContent, { padding: { vertical: 1.5, horizontal: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: content.calendar }) }) })
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

  // Tabs.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(tabs_stories_exports, "Default", G, B);
  var WithIcons2 = compose(tabs_stories_exports, "WithIcons", G, B);
  var WithStatusBadge2 = compose(tabs_stories_exports, "WithStatusBadge", G, B);
  var States2 = compose(tabs_stories_exports, "States", G, B);
  var Controlled2 = compose(tabs_stories_exports, "Controlled", G, B);
  var WithDisabledTab2 = compose(tabs_stories_exports, "WithDisabledTab", G, B);
  var OverflowBehavior2 = compose(tabs_stories_exports, "OverflowBehavior", G, B);
  var WithSubTabs2 = compose(tabs_stories_exports, "WithSubTabs", G, B);
  return __toCommonJS(Tabs_preview_exports);
})();
