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

  // Tooltip.preview.tsx
  var Tooltip_preview_exports = {};
  __export(Tooltip_preview_exports, {
    ArrowPosition: () => ArrowPosition2,
    ControlledOpen: () => ControlledOpen2,
    Default: () => Default2,
    OpenHorizontalPlacementsForVisualTest: () => OpenHorizontalPlacementsForVisualTest2,
    OpenVerticalPlacementsForVisualTest: () => OpenVerticalPlacementsForVisualTest2,
    OpenWidthsForVisualTest: () => OpenWidthsForVisualTest2,
    OpenWithClick: () => OpenWithClick2,
    TooltipWidth: () => TooltipWidth2,
    Triggers: () => Triggers2,
    UncontrolledDefaultOpen: () => UncontrolledDefaultOpen2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/overlays/tooltip/tooltip.stories.tsx
  var tooltip_stories_exports = {};
  __export(tooltip_stories_exports, {
    ArrowPosition: () => ArrowPosition,
    ControlledOpen: () => ControlledOpen,
    Default: () => Default,
    OpenHorizontalPlacementsForVisualTest: () => OpenHorizontalPlacementsForVisualTest,
    OpenVerticalPlacementsForVisualTest: () => OpenVerticalPlacementsForVisualTest,
    OpenWidthsForVisualTest: () => OpenWidthsForVisualTest,
    OpenWithClick: () => OpenWithClick,
    TooltipWidth: () => TooltipWidth,
    Triggers: () => Triggers,
    UncontrolledDefaultOpen: () => UncontrolledDefaultOpen,
    default: () => tooltip_stories_default
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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/community/components/form/toggle/toggle.tsx
  var toggle_exports = {};
  __export(toggle_exports, {
    default: () => toggle_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(toggle_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var toggle_default = ns["Toggle"] ?? ns;

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/info-button/info-button.tsx
  var info_button_exports = {};
  __export(info_button_exports, {
    default: () => info_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(info_button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var info_button_default = ns3["InfoButton"] ?? ns3;

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/overlays/tooltip/tooltip.tsx
  var tooltip_exports = {};
  __export(tooltip_exports, {
    default: () => tooltip_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tooltip_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var tooltip_default = ns6["Tooltip"] ?? ns6;

  // src/tedi/components/overlays/tooltip/tooltip.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: tooltip_default,
    title: "TEDI-Ready/Components/Overlay/Tooltip",
    subcomponents: {
      "Tooltip.Trigger": tooltip_default.Trigger,
      "Tooltip.Content": tooltip_default.Content
    },
    parameters: {
      docs: {
        source: {
          transform: (code) => {
            return code.replaceAll("TooltipContent", "Tooltip.Content").replaceAll("TooltipTrigger", "Tooltip.Trigger");
          }
        }
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=5797-117363&m=dev"
      }
    }
  };
  var tooltip_stories_default = meta;
  var Template = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { children: "Info" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
    ] });
  };
  var PositionTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gap: 3, justifyContent: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "top-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Top start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "top", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Top center" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "top-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Top end" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "bottom-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Bottom start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "bottom", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Bottom center" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "bottom-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Bottom end" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "left-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Left start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "left", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Left center" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "left-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Left end" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "right-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Right start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Right center" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, lg: 3, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, placement: "right-end", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Right end" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
      ] }) })
    ] });
  };
  var WidthTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gap: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Tooltip with no width limit" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { maxWidth: "none", children: "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Small tooltip width" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { maxWidth: "small", children: "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Medium tooltip width" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Large tooltip width" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { maxWidth: "large", children: "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas." })
      ] }) })
    ] });
  };
  var TriggerTemplate = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gap: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { children: "Info" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "This tooltip trigger is Info icon." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_default, { icon: "search", children: "Search" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "This tooltip trigger is button with icon." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { ariaLabel: "Some toggle", label: "Some toggle" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "This tooltip trigger is toggle." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...args, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: "Tooltip trigger can..." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip trigger can be even text." })
      ] }) })
    ] });
  };
  var ControlledTemplate = (args) => {
    const { open, ...rest } = args;
    const [innerOpen, setInnerOpen] = (0, import_react.useState)(open);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...rest, open: innerOpen, onToggle: setInnerOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { children: "Info" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "TooltipContent" })
    ] });
  };
  var Default = {
    argTypes: {
      ...subcomponentArgTypes(tooltip_default.Content, {
        category: "Tooltip.Content",
        prefix: "content",
        exclude: ["children", "labelledBy", "describedBy"]
      })
    },
    args: {
      content__maxWidth: "medium"
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { ...getPrimaryComponentProps(args), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info_button_default, { children: "Info" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { ...getSubcomponentProps(args, "content"), children: "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas." })
    ] })
  };
  var ArrowPosition = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: PositionTemplate,
    args: {}
  };
  var TooltipWidth = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: WidthTemplate,
    args: {}
  };
  var Triggers = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: TriggerTemplate,
    args: {}
  };
  var OpenWithClick = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: Template,
    args: {
      openWith: "click"
    }
  };
  var UncontrolledDefaultOpen = {
    render: Template,
    args: {
      defaultOpen: true
    }
  };
  var ControlledOpen = {
    render: ControlledTemplate,
    args: {
      open: true
    }
  };
  var VERTICAL_PLACEMENTS = ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"];
  var HORIZONTAL_PLACEMENTS = ["left-start", "left", "left-end", "right-start", "right", "right-end"];
  var verticalSlotStyle = (placement) => ({
    height: 90,
    display: "flex",
    alignItems: placement.startsWith("top") ? "flex-end" : "flex-start"
  });
  var horizontalSlotStyle = { height: 90, display: "flex", alignItems: "center" };
  var OpenVerticalPlacementsForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { paddingTop: 80 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: VERTICAL_PLACEMENTS.map((placement) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 4, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: verticalSlotStyle(placement), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { defaultOpen: true, placement, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: placement }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
    ] }) }) }, placement)) }) })
  };
  var OpenHorizontalPlacementsForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: HORIZONTAL_PLACEMENTS.map((placement) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 6, className: "flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: horizontalSlotStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { defaultOpen: true, placement, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: placement }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { children: "Tooltip Content" })
    ] }) }) }, placement)) })
  };
  var OpenWidthsForVisualTest = {
    tags: ["!dev", "!autodocs"],
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: ["none", "small", "medium", "large"].map((maxWidth) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: 180 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_default, { defaultOpen: true, placement: "bottom-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Trigger, { children: maxWidth }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default.Content, { maxWidth, children: "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas." })
    ] }) }) }, maxWidth)) })
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

  // Tooltip.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(tooltip_stories_exports, "Default", G, B);
  var ArrowPosition2 = compose(tooltip_stories_exports, "ArrowPosition", G, B);
  var TooltipWidth2 = compose(tooltip_stories_exports, "TooltipWidth", G, B);
  var Triggers2 = compose(tooltip_stories_exports, "Triggers", G, B);
  var OpenWithClick2 = compose(tooltip_stories_exports, "OpenWithClick", G, B);
  var UncontrolledDefaultOpen2 = compose(tooltip_stories_exports, "UncontrolledDefaultOpen", G, B);
  var ControlledOpen2 = compose(tooltip_stories_exports, "ControlledOpen", G, B);
  var OpenVerticalPlacementsForVisualTest2 = compose(tooltip_stories_exports, "OpenVerticalPlacementsForVisualTest", G, B);
  var OpenHorizontalPlacementsForVisualTest2 = compose(tooltip_stories_exports, "OpenHorizontalPlacementsForVisualTest", G, B);
  var OpenWidthsForVisualTest2 = compose(tooltip_stories_exports, "OpenWidthsForVisualTest", G, B);
  return __toCommonJS(Tooltip_preview_exports);
})();
