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

  // TextField.preview.tsx
  var TextField_preview_exports = {};
  __export(TextField_preview_exports, {
    ClearButtonOnInteraction: () => ClearButtonOnInteraction2,
    Default: () => Default2,
    Password: () => Password2,
    PasswordWithToggle: () => PasswordWithToggle3,
    Placeholder: () => Placeholder2,
    Sizes: () => Sizes2,
    States: () => States2,
    WithHint: () => WithHint2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/textfield/textfield.stories.tsx
  var textfield_stories_exports = {};
  __export(textfield_stories_exports, {
    ClearButtonOnInteraction: () => ClearButtonOnInteraction,
    Default: () => Default,
    Password: () => Password,
    PasswordWithToggle: () => PasswordWithToggle,
    Placeholder: () => Placeholder,
    Sizes: () => Sizes,
    States: () => States,
    WithHint: () => WithHint,
    default: () => textfield_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

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
  var ns2 = window.Tedi;
  var row_default = ns2["Row"] ?? ns2;

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
  var ns3 = window.Tedi;
  var col_default = ns3["Col"] ?? ns3;

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
  var ns4 = window.Tedi;
  var vertical_spacing_default = ns4["VerticalSpacing"] ?? ns4;

  // tedi:src/tedi/components/form/textfield/textfield.tsx
  var textfield_exports = {};
  __export(textfield_exports, {
    default: () => textfield_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textfield_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var textfield_default = ns5["TextField"] ?? ns5;

  // src/tedi/components/form/textfield/textfield.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: textfield_default,
    title: "TEDI-Ready/Components/Form/TextField",
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=3486-37649&m=dev"
      }
    }
  };
  var textfield_stories_default = meta;
  var stateArray = ["Default", "Hover", "Focus", "Active", "Disabled"];
  var sizeArray = ["default", "small"];
  var TemplateColumn = (args) => {
    const { array, property, ...textFieldProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, sm: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: value ? value.charAt(0).toUpperCase() + value.slice(1) : "" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, sm: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_default, { ...textFieldProps, id: `${textFieldProps.id}-${key}-1`, ...{ [property]: value } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          textfield_default,
          {
            icon: { name: "person" },
            ...textFieldProps,
            id: `${textFieldProps.id}-${key}-2`,
            ...{ [property]: value }
          }
        )
      ] }) })
    ] }, key)) });
  };
  var TemplateColumnWithStates = (args) => {
    const { array, ...textFieldProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      array.map((state, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: state }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_default, { disabled: state === "Disabled", ...textFieldProps, id: state }) })
      ] }, index)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Success" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          textfield_default,
          {
            ...textFieldProps,
            id: "success-textfield",
            helper: {
              text: "Feedback text",
              type: "valid"
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Error" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          textfield_default,
          {
            ...textFieldProps,
            id: "error-textfield",
            helper: {
              text: "Feedback text",
              type: "error"
            }
          }
        ) })
      ] })
    ] });
  };
  var Default = {
    args: {
      id: "example-1",
      label: "Label"
    }
  };
  var Sizes = {
    render: TemplateColumn,
    args: {
      id: "example-2",
      label: "Label",
      property: "size",
      value: "Text value",
      array: sizeArray
    }
  };
  var States = {
    render: TemplateColumnWithStates,
    args: {
      array: stateArray,
      label: "Label"
    },
    parameters: {
      pseudo: {
        hover: "#Hover",
        focus: "#Focus",
        active: "#Active"
      }
    }
  };
  var WithHint = {
    args: {
      ...Default.args,
      id: "example-3",
      helper: {
        id: "example-3",
        text: "Hint text",
        type: "hint"
      }
    }
  };
  var Password = {
    args: {
      ...Default.args,
      id: "example-4",
      input: { type: "password" },
      value: "123456789"
    }
  };
  var PasswordWithToggle = {
    render: function PasswordWithToggle2() {
      const [isVisible, setIsVisible] = (0, import_react.useState)(false);
      const [value, setValue] = (0, import_react.useState)("SuperSecret123");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        textfield_default,
        {
          id: "example-password-toggle",
          label: "Password",
          value,
          onChange: setValue,
          input: { type: isVisible ? "text" : "password", autoComplete: "current-password" },
          icon: isVisible ? "visibility_off" : "visibility",
          onIconClick: () => setIsVisible((prev) => !prev),
          iconButtonProps: {
            "aria-label": "Show password",
            "aria-pressed": isVisible
          }
        }
      );
    }
  };
  var Placeholder = {
    args: {
      ...Default.args,
      id: "example-5",
      placeholder: "Text value"
    }
  };
  var ClearButtonOnInteraction = {
    args: {
      id: "example-clear-on-interaction",
      label: "Label",
      defaultValue: "Text value",
      isClearable: true,
      showClearOnInteraction: true
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

  // TextField.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(textfield_stories_exports, "Default", G, B);
  var Sizes2 = compose(textfield_stories_exports, "Sizes", G, B);
  var States2 = compose(textfield_stories_exports, "States", G, B);
  var WithHint2 = compose(textfield_stories_exports, "WithHint", G, B);
  var Password2 = compose(textfield_stories_exports, "Password", G, B);
  var PasswordWithToggle3 = compose(textfield_stories_exports, "PasswordWithToggle", G, B);
  var Placeholder2 = compose(textfield_stories_exports, "Placeholder", G, B);
  var ClearButtonOnInteraction2 = compose(textfield_stories_exports, "ClearButtonOnInteraction", G, B);
  return __toCommonJS(TextField_preview_exports);
})();
