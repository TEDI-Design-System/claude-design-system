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

  // Toggle.preview.tsx
  var Toggle_preview_exports = {};
  __export(Toggle_preview_exports, {
    Colored: () => Colored2,
    ColoredOutlined: () => ColoredOutlined2,
    Default: () => Default2,
    LabelPosition: () => LabelPosition2,
    Primary: () => Primary2,
    PrimaryOutlined: () => PrimaryOutlined2,
    Size: () => Size2,
    States: () => States2,
    Type: () => Type2,
    WithFeedbackText: () => WithFeedbackText2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/toggle/toggle.stories.tsx
  var toggle_stories_exports = {};
  __export(toggle_stories_exports, {
    Colored: () => Colored,
    ColoredOutlined: () => ColoredOutlined,
    Default: () => Default,
    LabelPosition: () => LabelPosition,
    Primary: () => Primary,
    PrimaryOutlined: () => PrimaryOutlined,
    Size: () => Size,
    States: () => States,
    Type: () => Type,
    WithFeedbackText: () => WithFeedbackText,
    default: () => toggle_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var text_default = ns["Text"] ?? ns;

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
  var ns2 = window.Tedi;
  var row_default = ns2["Row"] ?? ns2;

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
  var ns3 = window.Tedi;
  var col_default = ns3["Col"] ?? ns3;

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
  var ns4 = window.Tedi;
  var vertical_spacing_default = ns4["VerticalSpacing"] ?? ns4;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/toggle/toggle.tsx
  var toggle_exports = {};
  __export(toggle_exports, {
    default: () => toggle_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(toggle_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var toggle_default = ns5["Toggle"] ?? ns5;

  // src/tedi/components/form/toggle/toggle.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: toggle_default,
    title: "TEDI-Ready/Components/Form/Toggle",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.45.68?node-id=4536-77367&m=dev"
      }
    }
  };
  var toggle_stories_default = meta;
  var sizeArray = ["default", "large"];
  var stateArray = ["Default", "Hover", "Active", "Focus", "Disabled", "Loading"];
  var TemplateColumn = (args) => {
    const { array } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, sm: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: value ? value.charAt(0).toUpperCase() + value.slice(1) : "" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, sm: 10, className: "d-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-column-1", label: "Toggle", size: value, hideLabel: true }) })
    ] }, key)) });
  };
  var TemplateStates = (args) => {
    const { array, titleColor, ...toggleProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 1, md: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: titleColor, modifiers: "bold", children: value }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { width: "auto", className: "flex align-items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          toggle_default,
          {
            ...toggleProps,
            label: "Toggle",
            disabled: value === "Disabled",
            isLoading: value === "Loading",
            id: value
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          toggle_default,
          {
            ...toggleProps,
            label: "Toggle",
            defaultChecked: true,
            disabled: value === "Disabled",
            isLoading: value === "Loading",
            id: value
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { width: "auto", className: "flex align-items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          toggle_default,
          {
            ...toggleProps,
            label: "Toggle",
            size: "large",
            disabled: value === "Disabled",
            isLoading: value === "Loading",
            id: value
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          toggle_default,
          {
            ...toggleProps,
            label: "Toggle",
            defaultChecked: true,
            size: "large",
            disabled: value === "Disabled",
            isLoading: value === "Loading",
            id: value
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { width: "auto", className: "flex align-items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          toggle_default,
          {
            ...toggleProps,
            label: "Toggle",
            size: "large",
            disabled: value === "Disabled",
            isLoading: value === "Loading",
            id: value,
            icon: true
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          toggle_default,
          {
            ...toggleProps,
            label: "Toggle",
            defaultChecked: true,
            size: "large",
            disabled: value === "Disabled",
            isLoading: value === "Loading",
            id: value,
            icon: true
          }
        )
      ] })
    ] }, key)) }) });
  };
  var Default = {
    args: {
      label: "Toggle"
    }
  };
  var Size = {
    render: TemplateColumn,
    args: {
      array: sizeArray
    }
  };
  var Type = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-1", defaultChecked: true, label: "Toggle button" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-2", defaultChecked: true, label: "Toggle button", tooltip: "Tooltip content" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-3", defaultChecked: true, label: "Toggle button", size: "large" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-4", defaultChecked: true, label: "Toggle button", size: "large", icon: true }) })
    ] });
  };
  var LabelPosition = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-label-1", defaultChecked: true, label: "Toggle button", labelPosition: "left" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-label-2", defaultChecked: true, label: "Toggle button", labelPosition: "right" })
    ] }) }) });
  };
  var States = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-states-1", defaultChecked: true, label: "Open my personal data to doctors" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-states-2", label: "Open my personal data to doctors" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-states-3", defaultChecked: true, label: "Open my personal data to doctors", type: "outlined" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-states-4", label: "Open my personal data to doctors", type: "outlined" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-states-5", defaultChecked: true, label: "Open my personal data to doctors", color: "colored" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-states-6", label: "Open my personal data to doctors", color: "colored" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          toggle_default,
          {
            id: "toggle-states-7",
            defaultChecked: true,
            label: "Open my personal data to doctors",
            color: "colored",
            type: "outlined"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_default, { id: "toggle-states-8", label: "Open my personal data to doctors", color: "colored", type: "outlined" }) })
      ] })
    ] });
  };
  var Primary = {
    render: TemplateStates,
    args: {
      array: stateArray,
      hideLabel: true
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var PrimaryOutlined = {
    render: TemplateStates,
    args: {
      array: stateArray,
      type: "outlined",
      hideLabel: true
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var Colored = {
    render: TemplateStates,
    args: {
      array: stateArray,
      color: "colored",
      hideLabel: true
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var ColoredOutlined = {
    render: TemplateStates,
    args: {
      array: stateArray,
      color: "colored",
      type: "outlined",
      hideLabel: true
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        active: "#Active",
        focusVisible: "#Focus"
      }
    }
  };
  var WithFeedbackText = {
    args: {
      label: "Label",
      helper: {
        text: "Something went wrong",
        type: "error"
      }
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

  // Toggle.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(toggle_stories_exports, "Default", G, B);
  var Size2 = compose(toggle_stories_exports, "Size", G, B);
  var Type2 = compose(toggle_stories_exports, "Type", G, B);
  var LabelPosition2 = compose(toggle_stories_exports, "LabelPosition", G, B);
  var States2 = compose(toggle_stories_exports, "States", G, B);
  var Primary2 = compose(toggle_stories_exports, "Primary", G, B);
  var PrimaryOutlined2 = compose(toggle_stories_exports, "PrimaryOutlined", G, B);
  var Colored2 = compose(toggle_stories_exports, "Colored", G, B);
  var ColoredOutlined2 = compose(toggle_stories_exports, "ColoredOutlined", G, B);
  var WithFeedbackText2 = compose(toggle_stories_exports, "WithFeedbackText", G, B);
  return __toCommonJS(Toggle_preview_exports);
})();
