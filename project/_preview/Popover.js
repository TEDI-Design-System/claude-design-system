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

  // Popover.preview.tsx
  var Popover_preview_exports = {};
  __export(Popover_preview_exports, {
    AccessibilityBaseline: () => AccessibilityBaseline2,
    ArrowPosition: () => ArrowPosition2,
    ClosingButton: () => ClosingButton2,
    ContentExamples: () => ContentExamples2,
    Default: () => Default2,
    FocusLocked: () => FocusLocked2,
    Heading: () => Heading2,
    NoTitleAccessibleName: () => NoTitleAccessibleName2,
    NotDismissible: () => NotDismissible2,
    OpenForVisualTest: () => OpenForVisualTest2,
    OpenHorizontalPlacementsForVisualTest: () => OpenHorizontalPlacementsForVisualTest2,
    OpenVerticalPlacementsForVisualTest: () => OpenVerticalPlacementsForVisualTest2,
    OpenWidthsForVisualTest: () => OpenWidthsForVisualTest2,
    OpenWithBorderForVisualTest: () => OpenWithBorderForVisualTest2,
    ReadAllStressTest: () => ReadAllStressTest2,
    ScrollLocked: () => ScrollLocked2,
    Size: () => Size2,
    Trigger: () => Trigger2,
    WithProminentBorder: () => WithProminentBorder2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/overlays/popover/popover.stories.tsx
  var popover_stories_exports = {};
  __export(popover_stories_exports, {
    AccessibilityBaseline: () => AccessibilityBaseline,
    ArrowPosition: () => ArrowPosition,
    ClosingButton: () => ClosingButton,
    ContentExamples: () => ContentExamples,
    Default: () => Default,
    FocusLocked: () => FocusLocked,
    Heading: () => Heading,
    NoTitleAccessibleName: () => NoTitleAccessibleName,
    NotDismissible: () => NotDismissible,
    OpenForVisualTest: () => OpenForVisualTest,
    OpenHorizontalPlacementsForVisualTest: () => OpenHorizontalPlacementsForVisualTest,
    OpenVerticalPlacementsForVisualTest: () => OpenVerticalPlacementsForVisualTest,
    OpenWidthsForVisualTest: () => OpenWidthsForVisualTest,
    OpenWithBorderForVisualTest: () => OpenWithBorderForVisualTest,
    ReadAllStressTest: () => ReadAllStressTest,
    ScrollLocked: () => ScrollLocked,
    Size: () => Size,
    Trigger: () => Trigger,
    WithProminentBorder: () => WithProminentBorder,
    default: () => popover_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // .storybook/subcomponent-controls.ts
  init_define_import_meta_env();
  init_define_process_env();
  var SEP = "__";
  var ALWAYS_EXCLUDE = ["style", "ref", "key", "defaultServerBreakpoint", "xs", "sm", "md", "lg", "xl", "xxl"];
  var stripQuotes = (value) => value.replace(/^['"]|['"]$/g, "");
  var isNumericLiteral = (value) => /^-?\d+(?:\.\d+)?$/.test(value);
  var inferControl = (type) => {
    switch (type?.name) {
      case "boolean":
        return { control: "boolean" };
      case "number":
        return { control: "number" };
      case "string":
        return { control: "text" };
      case "enum": {
        const literals = (type.value ?? []).map((entry) => stripQuotes(entry.value)).filter((value) => value !== "undefined" && value !== "null");
        if (literals.length === 0) return { control: "text" };
        if (literals.every((value) => value === "true" || value === "false")) return { control: "boolean" };
        if (literals.every(isNumericLiteral)) return { control: "select", options: literals.map(Number) };
        return { control: "select", options: literals };
      }
      default:
        return { control: "object" };
    }
  };
  var subcomponentArgTypes = (component, options) => {
    const { category, prefix, include, exclude = [] } = options;
    const docgen = component;
    const props = docgen.__docgenInfo?.props;
    if (!props) {
      console.warn(
        `[subcomponentArgTypes] No __docgenInfo for "${docgen.displayName ?? category}". Controls will not be generated. Check the react-docgen-typescript config in .storybook/main.ts.`
      );
      return {};
    }
    const skip = /* @__PURE__ */ new Set([...ALWAYS_EXCLUDE, ...exclude]);
    const argTypes = {};
    for (const [name, prop] of Object.entries(props)) {
      if (include && !include.includes(name)) continue;
      if (skip.has(name)) continue;
      const { control, options: controlOptions } = inferControl(prop.type);
      const defaultValue = prop.defaultValue?.value;
      argTypes[`${prefix}${SEP}${name}`] = {
        name,
        description: prop.description || void 0,
        control,
        options: controlOptions,
        table: {
          category,
          type: prop.type ? { summary: prop.type.raw ?? prop.type.name } : void 0,
          defaultValue: defaultValue !== void 0 && defaultValue !== null ? { summary: String(defaultValue) } : void 0
        }
      };
    }
    return argTypes;
  };
  var getSubcomponentProps = (args, prefix) => {
    const head = `${prefix}${SEP}`;
    const props = {};
    for (const [key, value] of Object.entries(args)) {
      if (key.startsWith(head) && value !== void 0 && value !== "") {
        props[key.slice(head.length)] = value;
      }
    }
    return props;
  };
  var getPrimaryComponentProps = (args) => {
    const props = {};
    for (const [key, value] of Object.entries(args)) {
      if (!key.includes(SEP)) props[key] = value;
    }
    return props;
  };

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var icon_default = ns["Icon"] ?? ns;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var button_default = ns3["Button"] ?? ns3;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/info-button/info-button.tsx
  var info_button_exports = {};
  __export(info_button_exports, {
    default: () => info_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(info_button_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var info_button_default = ns4["InfoButton"] ?? ns4;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/empty-state/index.ts
  var empty_state_exports = {};
  __export(empty_state_exports, {
    default: () => empty_state_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(empty_state_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var empty_state_default = ns5["EmptyState"] ?? ns5;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/search/search.tsx
  var search_exports = {};
  __export(search_exports, {
    default: () => search_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(search_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var search_default = ns6["Search"] ?? ns6;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/form/toggle/toggle.tsx
  var toggle_exports = {};
  __export(toggle_exports, {
    default: () => toggle_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(toggle_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var toggle_default = ns7["Toggle"] ?? ns7;

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
  var ns8 = window.Tedi;
  var row_default = ns8["Row"] ?? ns8;

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
  var ns9 = window.Tedi;
  var col_default = ns9["Col"] ?? ns9;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/option-content/option-content.tsx
  var option_content_exports = {};
  __export(option_content_exports, {
    default: () => option_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(option_content_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var option_content_default = ns10["OptionContent"] ?? ns10;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var separator_default = ns11["Separator"] ?? ns11;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var link_default = ns12["Link"] ?? ns12;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/overlays/popover/popover.tsx
  var popover_exports = {};
  __export(popover_exports, {
    default: () => popover_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(popover_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var popover_default = ns13["Popover"] ?? ns13;

  // src/tedi/components/overlays/popover/popover.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: popover_default,
    subcomponents: {
      "Popover.Trigger": popover_default.Trigger,
      "Popover.Content": popover_default.Content
    },
    title: "TEDI-Ready/Components/Overlay/Popover",
    parameters: {
      docs: {
        source: {
          transform: (code) => {
            return code.replaceAll("PopoverTrigger", "Popover.Trigger").replaceAll("PopoverContent", "Popover.Content");
          }
        }
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=5797-117364&m=dev"
      }
    }
  };
  var popover_stories_default = meta;
  var POLAR_BEAR_TEXT = "J\xE4\xE4karu (Ursus maritimus) on suur karu, kes elab Arktikas ja selle l\xE4hialadel.";
  var ContentExamplesTemplate = (args) => {
    const [firstOpen, setFirstOpen] = (0, import_react.useState)(false);
    const [secondOpen, setSecondOpen] = (0, import_react.useState)(false);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, open: firstOpen, onToggle: setFirstOpen, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Buttons & heading" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { title: "Pealkiri", close: true, children: [
          POLAR_BEAR_TEXT,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-2", style: { marginTop: "var(--layout-grid-gutters-08)" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", onClick: () => setFirstOpen(false), children: "T\xFChista" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              button_default,
              {
                onClick: () => {
                  alert("This is alert message!");
                  setFirstOpen(false);
                },
                children: "Esita"
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, open: secondOpen, onToggle: setSecondOpen, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Buttons" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { children: [
          POLAR_BEAR_TEXT,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-2", style: { marginTop: "var(--layout-grid-gutters-08)" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", onClick: () => setSecondOpen(false), children: "T\xFChista" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              button_default,
              {
                onClick: () => {
                  alert("This is alert message!");
                  setSecondOpen(false);
                },
                children: "Esita"
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Link" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { children: [
          POLAR_BEAR_TEXT,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", underline: false, iconRight: "north_east", className: "align-self-end", children: "Loe rohkem" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Text" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) })
    ] });
  };
  var HeadingTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Heading & close" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { width: "medium", title: "Pealkiri", close: true, children: [
          "This popover is with title and close button.",
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-content-end gap-2", style: { marginTop: "var(--layout-grid-gutters-08)" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "T\xFChista" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Esita" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Heading" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { width: "medium", title: "Pealkiri", children: [
          "This popover is with title.",
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-content-end gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "T\xFChista" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Esita" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Custom heading & close" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          popover_default.Content,
          {
            width: "medium",
            title: "This popover is with smaller title and close button.",
            titleProps: { element: "p" },
            close: true,
            closeProps: { size: "small" },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-content-end gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "T\xFChista" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Esita" })
            ] })
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Only content" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { width: "medium", children: [
          "This popover does not have title and close button.",
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-content-end gap-2", style: { marginTop: "var(--layout-grid-gutters-08)" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "T\xFChista" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Esita" })
          ] })
        ] })
      ] }) })
    ] });
  };
  var TriggerTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "Button Trigger" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: "This popover is triggered by button." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { children: "Info Button Trigger" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: "This popover is triggered by info button." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Text Trigger" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: "This popover is triggered by text. By default text has dashed underline." })
      ] }) })
    ] });
  };
  var ArrowPositionTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 3, justifyContent: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "top-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Top start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "top", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Top center" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "top-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Top end" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "bottom-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Bottom start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "bottom", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Bottom center" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "bottom-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Bottom end" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "left-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Left start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "left", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Left center" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "left-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Left end" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "right-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Right start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Right center" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, placement: "right-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Right end" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: POLAR_BEAR_TEXT })
      ] }) })
    ] });
  };
  var SizeTemplate = (args) => {
    const sizes = ["none", "small", "medium", "large"];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { gutterY: 3, children: sizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: size.charAt(0).toUpperCase() + size.slice(1) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { width: size, children: POLAR_BEAR_TEXT })
    ] }) }, size)) });
  };
  var ClosingButtonTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Default Button" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { title: "Pealkiri", close: true, children: POLAR_BEAR_TEXT })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Custom Button" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { title: "Pealkiri", close: true, closeProps: { size: "small", iconSize: 18 }, children: POLAR_BEAR_TEXT })
      ] }) })
    ] });
  };
  var NotDismissibleTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "This is not dismissible" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { title: "Not dismissible", close: true, children: "This popover can not be closed by clicking outside or Escape button. Make sure you show the close button, otherwise it can not be closed." })
    ] });
  };
  var HeaderPopoverItem = ({
    name,
    code,
    icon = "supervised_user_circle",
    selected = false
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      type: "button",
      className: "flex align-items-center gap-2 w-100",
      style: {
        padding: "var(--card-padding-xs)",
        borderRadius: "var(--card-radius-rounded)",
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        background: selected ? "var(--header-popover-item-selected)" : "transparent"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: icon, size: 24, color: selected ? "white" : "secondary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: selected ? "white" : "secondary", modifiers: "normal", children: name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", color: selected ? "white" : "secondary", children: code })
        ] })
      ]
    }
  );
  var menuItemBaseStyle = {
    width: "100%",
    padding: "var(--dropdown-item-padding-y) var(--dropdown-item-padding-x)"
  };
  var menuItemStyle = {
    ...menuItemBaseStyle,
    borderBottom: "1px solid var(--general-border-primary)"
  };
  var WithProminentBorderTemplate = (args) => {
    const [darkMode, setDarkMode] = (0, import_react.useState)(false);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          .story-popover-content--no-padding {
            padding: 0;
          }
          .story-popover-content--menu {
            padding: var(--card-padding-xxs) 0;
          }
        ` }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 3, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, withBorder: true, placement: "bottom", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Profile menu" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { width: "small", className: "story-popover-content--menu", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: menuItemStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Minu profiil" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: menuItemStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Esindatavad" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: menuItemStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Kontaktid" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: menuItemStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              toggle_default,
              {
                id: "header-popover-dark-mode",
                label: "Tume re\u017Eiim",
                checked: darkMode,
                onChange: () => setDarkMode((prev) => !prev)
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: menuItemBaseStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { icon: "logout", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Logi v\xE4lja" }) }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, withBorder: true, placement: "bottom", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Links menu" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { width: "small", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", underline: false, fullWidth: true, style: { justifyContent: "flex-start" }, children: "Minu andmed" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", underline: false, fullWidth: true, style: { justifyContent: "flex-start" }, children: "Esindatavad" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", underline: false, fullWidth: true, style: { justifyContent: "flex-start" }, children: "Kontaktid" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "horizontal" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", underline: false, fullWidth: true, style: { justifyContent: "flex-start" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "notifications", size: 16 }),
              "Riiklikud teated"
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "horizontal" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", underline: false, fullWidth: true, style: { justifyContent: "flex-start" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "logout", size: 16 }),
              "Logi v\xE4lja"
            ] }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, withBorder: true, placement: "bottom", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Representatives" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { width: "small", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-column gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(search_exports.Search, { id: "header-popover-search", label: "Otsi isikut", onSearch: () => void 0 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "horizontal" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderPopoverItem, { name: "Juulia Sarapuu", code: "62004122984", icon: "person", selected: true }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "horizontal" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderPopoverItem, { name: "Marta Sarapuu", code: "62004122984" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { axis: "horizontal" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderPopoverItem, { name: "Helgi Sarapuu", code: "62004122984" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, withBorder: true, placement: "bottom", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Empty state" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { width: "small", className: "story-popover-content--no-padding", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(empty_state_exports.EmptyState, { type: "inside", icon: "heart_check", size: "small", children: "Sul puuduvad esindatavad" }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, withBorder: true, placement: "right", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Right center" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { width: "small", title: "Pealkiri", close: true, children: POLAR_BEAR_TEXT })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 6, xxl: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, withBorder: true, placement: "top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Top center" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { width: "small", title: "Pealkiri", close: true, children: POLAR_BEAR_TEXT })
        ] }) })
      ] })
    ] });
  };
  var ScrollLockedTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: "Popover with locked scrolling" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { children: "This popover locks scroll on rest of the page. Use this when you want to focus user attention to this content." })
    ] });
  };
  var Default = {
    argTypes: {
      ...subcomponentArgTypes(popover_default.Content, {
        category: "Popover.Content",
        prefix: "content",
        exclude: ["children", "labelledBy", "describedBy", "titleProps", "closeProps"]
      })
    },
    args: {
      content__title: "Pealkiri",
      content__close: true,
      content__width: "medium"
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { ...getPrimaryComponentProps(args), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Popover Trigger" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { ...getSubcomponentProps(args, "content"), children: POLAR_BEAR_TEXT })
    ] })
  };
  var ContentExamples = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: ContentExamplesTemplate,
    args: {}
  };
  var Heading = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: HeadingTemplate,
    args: {}
  };
  var Trigger = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: TriggerTemplate,
    args: {}
  };
  var ArrowPosition = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: ArrowPositionTemplate,
    args: {}
  };
  var WithProminentBorder = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: WithProminentBorderTemplate,
    args: {}
  };
  var Size = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: SizeTemplate,
    args: {}
  };
  var ClosingButton = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: ClosingButtonTemplate,
    args: {}
  };
  var NotDismissible = {
    render: NotDismissibleTemplate,
    args: {
      dismissible: false
    },
    parameters: {
      chromatic: { disableSnapshot: true },
      docs: {
        description: {
          story: `
          Accessibility warning

          When \`dismissible=false\`:
          - A visible close button MUST be present
          - Keyboard users must have a clear exit path
          - This pattern should only be used when content does not obscure critical information
          `
        }
      }
    }
  };
  var ScrollLocked = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: ScrollLockedTemplate,
    args: {
      scrollLock: true
    }
  };
  var FocusLocked = {
    render: (args) => {
      const [open, setOpen] = (0, import_react.useState)(false);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        popover_default,
        {
          ...args,
          open,
          onToggle: setOpen,
          focusManager: {
            modal: true,
            initialFocus: 0
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Modal Popover" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { title: "Pealkiri", width: "medium", close: true, children: [
              POLAR_BEAR_TEXT,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-content-end gap-2", style: { marginTop: "var(--layout-grid-gutters-08)" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", onClick: () => setOpen(false), id: "cancelButton", children: "T\xFChista" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  button_default,
                  {
                    onClick: () => {
                      alert("Submitted!");
                      setOpen(false);
                    },
                    id: "submitButton",
                    children: "Esita"
                  }
                )
              ] })
            ] })
          ]
        }
      );
    },
    parameters: {
      chromatic: { disableSnapshot: true },
      docs: {
        description: {
          story: `
          This story demonstrates a Popover with a \u201Clocked\u201D focus behavior, where keyboard navigation (Tab) is confined
          to the Popover content until the user clicks an action like "Cancel" or "Submit".

          Key points:
          - Keyboard focus is restricted inside the Popover until it is closed.
          - \`focusManager.modal\` ensures focus stays within the Popover content.
          - \`initialFocus\` sets the first element to receive focus when opening.
          - This setup covers mostly edge cases; the default focus trap is false.
        `
        }
      }
    }
  };
  var AccessibilityBaseline = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Open popover" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { title: "Pealkiri", close: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { id: "popover-description", children: "This popover contains text, a link, and buttons. Screen readers should announce roles correctly." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", children: "Loe rohkem" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-2", style: { marginTop: "var(--layout-grid-gutters-08)" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { visualType: "secondary", children: "T\xFChista" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Kinnita" })
        ] })
      ] })
    ] }),
    parameters: {
      chromatic: { disableSnapshot: true },
      docs: {
        description: {
          story: `
          Accessibility baseline test

          Use this story to verify:
          - Dialog role is announced
          - Title is used as the accessible name
          - Buttons and links announce their roles
          - Focus moves into the popover on open
          - Escape closes the popover
          - Close button is reachable via keyboard
          `
        }
      }
    }
  };
  var NoTitleAccessibleName = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Open popover" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This popover has no title. The accessible name will fall back to the trigger label." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { style: { marginTop: "var(--layout-grid-gutters-08)" }, children: "Action" })
      ] })
    ] }),
    parameters: {
      chromatic: { disableSnapshot: true },
      docs: {
        description: {
          story: `
          No-title popover

          Expected behavior:
          - Dialog is announced
          - Accessible name is inherited from trigger
          - Roles of buttons are still announced
          `
        }
      }
    }
  };
  var ReadAllStressTest = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Read all test" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default.Content, { title: "Read all test", close: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
          "Paragraph one with ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "inline formatting" }),
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
          "Paragraph two with a ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_default, { href: "#", children: "link" }),
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { style: { marginTop: "var(--layout-grid-gutters-08)" }, children: "Primary action" })
      ] })
    ] }),
    parameters: {
      chromatic: { disableSnapshot: true },
      docs: {
        description: {
          story: `
          Use VoiceOver "Read All" inside the popover.

          Verify:
          - Content is not flattened
          - Buttons are announced as buttons
          - Links are announced as links
          - Content is not duplicated
          `
        }
      }
    }
  };
  var SHORT_TEXT = "J\xE4\xE4karu elab Arktikas.";
  var VERTICAL_PLACEMENTS = ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"];
  var HORIZONTAL_PLACEMENTS = ["left-start", "left", "left-end", "right-start", "right", "right-end"];
  var verticalSlotStyle = (placement) => ({
    height: 150,
    display: "flex",
    alignItems: placement.startsWith("top") ? "flex-end" : "flex-start"
  });
  var horizontalSlotStyle = { height: 220, display: "flex", alignItems: "center" };
  var OpenForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { defaultOpen: true, placement: "bottom", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { children: "Popover Trigger" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { title: "Pealkiri", width: "medium", close: true, children: POLAR_BEAR_TEXT })
    ] })
  };
  var OpenVerticalPlacementsForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { paddingTop: 120 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: VERTICAL_PLACEMENTS.map((placement) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: verticalSlotStyle(placement), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { defaultOpen: true, placement, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: placement }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { title: placement, width: "small", children: SHORT_TEXT })
    ] }) }) }, placement)) }) })
  };
  var OpenHorizontalPlacementsForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: HORIZONTAL_PLACEMENTS.map((placement) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: horizontalSlotStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { defaultOpen: true, placement, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: placement }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { title: placement, width: "small", children: SHORT_TEXT })
    ] }) }) }, placement)) })
  };
  var OpenWidthsForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: ["none", "small", "medium", "large"].map((width) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: 200 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { defaultOpen: true, placement: "bottom-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: width }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { title: width, width, children: POLAR_BEAR_TEXT })
    ] }) }) }, width)) })
  };
  var OpenWithBorderForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { paddingTop: 120 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: ["bottom-start", "bottom", "top-end"].map((placement) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: verticalSlotStyle(placement), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_default, { defaultOpen: true, withBorder: true, placement, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Trigger, { children: placement }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_default.Content, { title: "Pealkiri", width: "small", close: true, children: POLAR_BEAR_TEXT })
    ] }) }) }, placement)) }) })
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

  // Popover.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(popover_stories_exports, "Default", G, B);
  var ContentExamples2 = compose(popover_stories_exports, "ContentExamples", G, B);
  var Heading2 = compose(popover_stories_exports, "Heading", G, B);
  var Trigger2 = compose(popover_stories_exports, "Trigger", G, B);
  var ArrowPosition2 = compose(popover_stories_exports, "ArrowPosition", G, B);
  var WithProminentBorder2 = compose(popover_stories_exports, "WithProminentBorder", G, B);
  var Size2 = compose(popover_stories_exports, "Size", G, B);
  var ClosingButton2 = compose(popover_stories_exports, "ClosingButton", G, B);
  var NotDismissible2 = compose(popover_stories_exports, "NotDismissible", G, B);
  var ScrollLocked2 = compose(popover_stories_exports, "ScrollLocked", G, B);
  var FocusLocked2 = compose(popover_stories_exports, "FocusLocked", G, B);
  var AccessibilityBaseline2 = compose(popover_stories_exports, "AccessibilityBaseline", G, B);
  var NoTitleAccessibleName2 = compose(popover_stories_exports, "NoTitleAccessibleName", G, B);
  var ReadAllStressTest2 = compose(popover_stories_exports, "ReadAllStressTest", G, B);
  var OpenForVisualTest2 = compose(popover_stories_exports, "OpenForVisualTest", G, B);
  var OpenVerticalPlacementsForVisualTest2 = compose(popover_stories_exports, "OpenVerticalPlacementsForVisualTest", G, B);
  var OpenHorizontalPlacementsForVisualTest2 = compose(popover_stories_exports, "OpenHorizontalPlacementsForVisualTest", G, B);
  var OpenWidthsForVisualTest2 = compose(popover_stories_exports, "OpenWidthsForVisualTest", G, B);
  var OpenWithBorderForVisualTest2 = compose(popover_stories_exports, "OpenWithBorderForVisualTest", G, B);
  return __toCommonJS(Popover_preview_exports);
})();
