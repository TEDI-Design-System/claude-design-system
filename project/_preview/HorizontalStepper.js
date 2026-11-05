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

  // HorizontalStepper.preview.tsx
  var HorizontalStepper_preview_exports = {};
  __export(HorizontalStepper_preview_exports, {
    ClickToNavigate: () => ClickToNavigate2,
    Compact: () => Compact2,
    CompactStates: () => CompactStates2,
    Default: () => Default2,
    ExternalNavigation: () => ExternalNavigation2,
    SecondStep: () => SecondStep2,
    States: () => States2,
    ThirdStep: () => ThirdStep2,
    TransparentBackground: () => TransparentBackground2,
    WithDescriptions: () => WithDescriptions2,
    WithErrors: () => WithErrors2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/navigation/horizontal-stepper/horizontal-stepper.stories.tsx
  var horizontal_stepper_stories_exports = {};
  __export(horizontal_stepper_stories_exports, {
    ClickToNavigate: () => ClickToNavigate,
    Compact: () => Compact,
    CompactStates: () => CompactStates,
    Default: () => Default,
    ExternalNavigation: () => ExternalNavigation,
    SecondStep: () => SecondStep,
    States: () => States,
    ThirdStep: () => ThirdStep,
    TransparentBackground: () => TransparentBackground,
    WithDescriptions: () => WithDescriptions,
    WithErrors: () => WithErrors,
    default: () => horizontal_stepper_stories_default
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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns14 = window.Tedi;
  var vertical_spacing_default = ns14["VerticalSpacing"] ?? ns14;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/horizontal-stepper/horizontal-stepper.tsx
  var horizontal_stepper_exports = {};
  __export(horizontal_stepper_exports, {
    default: () => horizontal_stepper_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(horizontal_stepper_exports, __toESM(require_tedi_namespace()));
  var ns15 = window.Tedi;
  var horizontal_stepper_default = ns15["HorizontalStepper"] ?? ns15;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/navigation/horizontal-stepper/horizontal-stepper-item.tsx
  var horizontal_stepper_item_exports = {};
  __export(horizontal_stepper_item_exports, {
    default: () => horizontal_stepper_item_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(horizontal_stepper_item_exports, __toESM(require_tedi_namespace()));
  var ns16 = window.Tedi;
  var horizontal_stepper_item_default = ns16["HorizontalStepperItem"] ?? ns16;

  // src/tedi/components/navigation/horizontal-stepper/horizontal-stepper.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var STEPS = ["Kutse", "Tahteavaldus", "Geenianal\xFC\xFCs", "Vastus"];
  var meta = {
    component: horizontal_stepper_exports.HorizontalStepper,
    subcomponents: {
      "HorizontalStepper.Item": horizontal_stepper_item_exports.HorizontalStepperItem
    },
    title: "TEDI-Ready/Components/Navigation/HorizontalStepper",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.51.75?node-id=11201-120696&m=dev"
      }
    }
  };
  var horizontal_stepper_stories_default = meta;
  var Default = {
    argTypes: {
      ...subcomponentArgTypes(horizontal_stepper_exports.HorizontalStepper.Item, {
        category: "HorizontalStepper.Item",
        prefix: "item",
        exclude: ["label", "onSelect"]
      })
    },
    args: {
      "aria-label": "Form progress",
      background: "default",
      compact: "sm",
      item__selected: true
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { ...getPrimaryComponentProps(args), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { ...getSubcomponentProps(args, "item"), label: "Kutse" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus" })
    ] })
  };
  var STATE_ROWS = [
    { key: "default", label: "Default" },
    { key: "hover", label: "Hover" },
    { key: "active", label: "Active" },
    { key: "focus", label: "Focus" }
  ];
  var TYPE_COLS = [
    { key: "completed", label: "Completed", props: { completed: true }, rows: ["default", "hover", "active", "focus"] },
    { key: "error", label: "Has error", props: { error: true }, rows: ["default", "hover", "active", "focus"] },
    { key: "default", label: "Default", props: {}, rows: ["default", "hover", "active"] },
    { key: "selected", label: "Selected", props: { selected: true }, rows: ["default"] }
  ];
  var StatesMatrix = ({ compact }) => {
    const breakpoint = (0, helpers_exports.useBreakpoint)();
    const isMobile = (0, helpers_exports.isBreakpointBelow)(breakpoint, "md");
    if (isMobile) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1.5, children: TYPE_COLS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: col.label }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }, children: STATE_ROWS.filter((row) => col.rows.includes(row.key)).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            "data-stepper-state": row.key,
            style: { display: "flex", alignItems: "center", gap: "1rem" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { minWidth: "4rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", color: "secondary", element: "span", children: row.label }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "fit-content", maxWidth: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                horizontal_stepper_exports.HorizontalStepper,
                {
                  "aria-label": `${col.label} \u2013 ${row.label}`,
                  background: "transparent",
                  compact,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Step", ...col.props })
                }
              ) })
            ]
          },
          row.key
        )) })
      ] }, col.key)) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "auto repeat(4, max-content)",
          gap: "1rem 2rem",
          alignItems: "center",
          justifyContent: "start"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
          TYPE_COLS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: col.label }, col.key)),
          STATE_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: row.label }),
            TYPE_COLS.map(
              (col) => col.rows.includes(row.key) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-stepper-state": row.key, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                horizontal_stepper_exports.HorizontalStepper,
                {
                  "aria-label": `${col.label} \u2013 ${row.label}`,
                  background: "transparent",
                  compact,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Step", ...col.props })
                }
              ) }, col.key) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}, col.key)
            )
          ] }, row.key))
        ]
      }
    );
  };
  var statesPseudo = {
    pseudo: {
      hover: '[data-stepper-state="hover"] button',
      active: '[data-stepper-state="active"] button',
      focusVisible: '[data-stepper-state="focus"] button'
    }
  };
  var SecondStep = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Protsessi sammud", compact: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", completed: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus", selected: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus" })
    ] })
  };
  var ThirdStep = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Protsessi sammud", compact: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", completed: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus", completed: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs", selected: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus" })
    ] })
  };
  var WithErrors = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Vorm vigadega", compact: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", error: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus", selected: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Vorm vea kirjeldusega", compact: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", completed: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus", error: true, description: "Sammus esinevad vead" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs", selected: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus" })
      ] })
    ] })
  };
  var WithDescriptions = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Sammud kirjeldustega \u2013 Kutse aktiivne", compact: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", selected: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs", description: "Ametnik t\xE4idab" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus", description: "Ametnik t\xE4idab" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Sammud kirjeldustega \u2013 Tahteavaldus aktiivne", compact: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", completed: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus", selected: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs", description: "Ametnik t\xE4idab" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus", description: "Ametnik t\xE4idab" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Sammud kirjeldustega \u2013 Geenianal\xFC\xFCs aktiivne", compact: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", completed: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus", completed: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs", selected: true, description: "Ametnik t\xE4idab" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus", description: "Ametnik t\xE4idab" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Sammud kirjeldustega \u2013 Vastus aktiivne", compact: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", completed: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus", completed: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs", completed: true, description: "Ametnik t\xE4idab" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus", selected: true, description: "Ametnik t\xE4idab" })
      ] })
    ] })
  };
  var TransparentBackground = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Protsessi sammud", background: "transparent", compact: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Kutse", completed: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Tahteavaldus", selected: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Geenianal\xFC\xFCs" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper.Item, { label: "Vastus" })
    ] })
  };
  var Compact = {
    render: () => {
      const Demo = () => {
        const [current, setCurrent] = (0, import_react.useState)(1);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Protsessi sammud", compact: true, children: STEPS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          horizontal_stepper_exports.HorizontalStepper.Item,
          {
            label,
            description: "Ametnik t\xE4idab",
            completed: index < current,
            selected: index === current,
            onSelect: () => setCurrent(index)
          },
          label
        )) }) });
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demo, {});
    }
  };
  var ClickToNavigate = {
    render: () => {
      const Demo = () => {
        const [current, setCurrent] = (0, import_react.useState)(1);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Protsessi sammud", compact: "lg", children: STEPS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          horizontal_stepper_exports.HorizontalStepper.Item,
          {
            label,
            completed: index < current,
            selected: index === current,
            onSelect: () => setCurrent(index)
          },
          label
        )) });
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demo, {});
    }
  };
  var ExternalNavigation = {
    render: () => {
      const Demo = () => {
        const [current, setCurrent] = (0, import_react.useState)(0);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1.5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(horizontal_stepper_exports.HorizontalStepper, { "aria-label": "Protsessi sammud", compact: "lg", children: STEPS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            horizontal_stepper_exports.HorizontalStepper.Item,
            {
              label,
              completed: index < current,
              selected: index === current,
              disabled: index > current,
              onSelect: () => setCurrent(index)
            },
            label
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "0.5rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              button_exports.Button,
              {
                visualType: "secondary",
                disabled: current === 0,
                onClick: () => setCurrent((step) => Math.max(0, step - 1)),
                children: "Tagasi"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              button_exports.Button,
              {
                disabled: current === STEPS.length - 1,
                onClick: () => setCurrent((step) => Math.min(STEPS.length - 1, step + 1)),
                children: "Edasi"
              }
            )
          ] })
        ] });
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demo, {});
    }
  };
  var States = {
    parameters: statesPseudo,
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatesMatrix, { compact: false })
  };
  var CompactStates = {
    parameters: statesPseudo,
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatesMatrix, { compact: true })
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

  // HorizontalStepper.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(horizontal_stepper_stories_exports, "Default", G, B);
  var SecondStep2 = compose(horizontal_stepper_stories_exports, "SecondStep", G, B);
  var ThirdStep2 = compose(horizontal_stepper_stories_exports, "ThirdStep", G, B);
  var WithErrors2 = compose(horizontal_stepper_stories_exports, "WithErrors", G, B);
  var WithDescriptions2 = compose(horizontal_stepper_stories_exports, "WithDescriptions", G, B);
  var TransparentBackground2 = compose(horizontal_stepper_stories_exports, "TransparentBackground", G, B);
  var Compact2 = compose(horizontal_stepper_stories_exports, "Compact", G, B);
  var ClickToNavigate2 = compose(horizontal_stepper_stories_exports, "ClickToNavigate", G, B);
  var ExternalNavigation2 = compose(horizontal_stepper_stories_exports, "ExternalNavigation", G, B);
  var States2 = compose(horizontal_stepper_stories_exports, "States", G, B);
  var CompactStates2 = compose(horizontal_stepper_stories_exports, "CompactStates", G, B);
  return __toCommonJS(HorizontalStepper_preview_exports);
})();
