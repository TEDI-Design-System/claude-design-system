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

  // Slider.preview.tsx
  var Slider_preview_exports = {};
  __export(Slider_preview_exports, {
    CustomValue: () => CustomValue2,
    Default: () => Default2,
    MinAndMaxValues: () => MinAndMaxValues2,
    States: () => States2,
    WithCurrentValue: () => WithCurrentValue2,
    WithHint: () => WithHint2,
    WithInputGroup: () => WithInputGroup2,
    WithoutTooltip: () => WithoutTooltip2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/slider/slider.stories.tsx
  var slider_stories_exports = {};
  __export(slider_stories_exports, {
    CustomValue: () => CustomValue,
    Default: () => Default,
    MinAndMaxValues: () => MinAndMaxValues,
    States: () => States,
    WithCurrentValue: () => WithCurrentValue,
    WithHint: () => WithHint,
    WithInputGroup: () => WithInputGroup,
    WithoutTooltip: () => WithoutTooltip,
    default: () => slider_stories_default
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

  // tedi:src/tedi/components/form/field/field.tsx
  var field_exports = {};
  __export(field_exports, {
    default: () => field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(field_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var field_default = ns5["Field"] ?? ns5;

  // tedi:src/tedi/components/form/input-group/input-group.tsx
  var input_group_exports = {};
  __export(input_group_exports, {
    default: () => input_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(input_group_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var input_group_default = ns6["InputGroup"] ?? ns6;

  // tedi:src/tedi/components/form/number-field/number-field.tsx
  var number_field_exports = {};
  __export(number_field_exports, {
    default: () => number_field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(number_field_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var number_field_default = ns7["NumberField"] ?? ns7;

  // tedi:src/tedi/components/form/slider/slider.tsx
  var slider_exports = {};
  __export(slider_exports, {
    default: () => slider_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(slider_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var slider_default = ns8["Slider"] ?? ns8;

  // src/tedi/components/form/slider/slider.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: slider_exports.Slider,
    title: "TEDI-Ready/Components/Form/Slider",
    argTypes: {
      addonRight: { control: false }
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
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.45.70?node-id=19071-105925&m=dev"
      }
    }
  };
  var slider_stories_default = meta;
  var wrapInCol = (Story) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}) }) });
  var Default = {
    decorators: [wrapInCol],
    args: {
      id: "slider-default",
      label: "V\xE4\xE4rtus",
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 50,
      minLabel: "0%",
      maxLabel: "100%"
    }
  };
  var InputGroupTemplate = (args) => {
    const [value, setValue] = (0, import_react.useState)(20);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      slider_exports.Slider,
      {
        ...args,
        value,
        onChange: setValue,
        addonRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "100px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { id: "slider-input-group-field", label: "V\xE4\xE4rtus", hideLabel: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            field_exports.Field,
            {
              type: "number",
              value: String(value),
              onChange: (next) => {
                const parsed = Number(next);
                if (!Number.isNaN(parsed)) setValue(parsed);
              }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: "%" })
        ] }) })
      }
    ) }) });
  };
  var WithInputGroup = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupTemplate, { ...args }),
    args: {
      id: "slider-input-group",
      label: "V\xE4\xE4rtus",
      min: 0,
      max: 100,
      step: 1,
      minLabel: "0%",
      maxLabel: "100%"
    }
  };
  var MinAndMaxValues = {
    decorators: [wrapInCol],
    args: {
      id: "slider-min-max",
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 50,
      minLabel: "0%",
      maxLabel: "100%",
      "aria-label": "V\xE4\xE4rtus"
    }
  };
  var WithCurrentValue = {
    decorators: [wrapInCol],
    args: {
      id: "slider-current-value",
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 50,
      showCurrentValue: true,
      valueFormatter: (value) => `${value}%`,
      "aria-label": "Silt"
    }
  };
  var WithHint = {
    decorators: [wrapInCol],
    args: {
      id: "slider-hint",
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 50,
      showCurrentValue: true,
      valueFormatter: (value) => `${value}%`,
      helper: { text: "Liiguta nuppu, et v\xE4\xE4rtust muuta", type: "hint" },
      "aria-label": "V\xE4\xE4rtus"
    }
  };
  var CustomValueTemplate = (args) => {
    const [numberValue, setNumberValue] = (0, import_react.useState)(4);
    const [inputValue, setInputValue] = (0, import_react.useState)(50);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        slider_exports.Slider,
        {
          id: "slider-custom-value-basic",
          label: "V\xE4\xE4rtus",
          hideLabel: true,
          min: 0,
          max: 100,
          defaultValue: 50,
          minLabel: "0%",
          maxLabel: "100%"
        }
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        slider_exports.Slider,
        {
          min: 0,
          max: 100,
          minLabel: "0%",
          maxLabel: "100%",
          defaultValue: 50,
          value: inputValue,
          onChange: setInputValue,
          label: "V\xE4\xE4rtus",
          addonRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "100px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(input_group_default, { id: "slider-custom-value-input-group", label: "V\xE4\xE4rtus", hideLabel: true, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Input, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              field_exports.Field,
              {
                type: "number",
                value: String(inputValue),
                onChange: (next) => {
                  const parsed = Number(next);
                  if (!Number.isNaN(parsed)) setInputValue(parsed);
                }
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_group_default.Suffix, { children: "%" })
          ] }) })
        }
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        slider_exports.Slider,
        {
          ...args,
          value: numberValue,
          onChange: setNumberValue,
          addonRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            number_field_exports.NumberField,
            {
              id: "slider-custom-value-number",
              label: "V\xE4\xE4rtus",
              hideLabel: true,
              min: args.min,
              max: args.max,
              step: args.step,
              value: numberValue,
              onChange: setNumberValue
            }
          )
        }
      ) }) })
    ] });
  };
  var CustomValue = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomValueTemplate, { ...args }),
    args: {
      id: "slider-custom-value",
      label: "V\xE4\xE4rtus",
      min: 1,
      max: 10,
      step: 1,
      minLabel: "1",
      maxLabel: "10"
    }
  };
  var States = {
    render: () => {
      const sharedArgs = {
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 50,
        minLabel: "0%",
        maxLabel: "100%",
        valueFormatter: (value) => `${value}%`,
        "aria-label": "V\xE4\xE4rtus"
      };
      const thumbArgs = {
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 50,
        tooltip: false,
        "aria-label": "Nupp"
      };
      const thumbColStyle = { width: "1.5rem" };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 2, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Default" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 1, xs: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: thumbColStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...thumbArgs, id: "Default-thumb" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...sharedArgs, id: "Default" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Hover" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 1, xs: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: thumbColStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...thumbArgs, id: "Hover-thumb", className: "slider-state-hover" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...sharedArgs, id: "Hover", className: "slider-state-hover" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Active" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 1, xs: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: thumbColStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...thumbArgs, id: "Active-thumb", className: "slider-state-active" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...sharedArgs, id: "Active", className: "slider-state-active" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Disabled" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 1, xs: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: thumbColStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...thumbArgs, id: "Disabled-thumb", disabled: true }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...sharedArgs, id: "slider-states-disabled", disabled: true }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Focus" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 1, xs: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: thumbColStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...thumbArgs, id: "Focus-thumb", className: "slider-state-focus" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...sharedArgs, id: "Focus", className: "slider-state-focus" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Error" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 1, xs: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: thumbColStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(slider_exports.Slider, { ...thumbArgs, id: "Error-thumb", invalid: true }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, xs: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            slider_exports.Slider,
            {
              ...sharedArgs,
              id: "slider-states-error",
              invalid: true,
              helper: { id: "slider-states-error-helper", text: "See v\xE4li on kohustuslik", type: "error" }
            }
          ) })
        ] })
      ] });
    },
    parameters: {
      pseudo: {
        hover: ["#Hover", "#Hover-thumb", ".slider-state-hover"],
        focusVisible: ["#Focus", "#Focus-thumb", ".slider-state-focus"],
        active: ["#Active", "#Active-thumb", ".slider-state-active"]
      }
    }
  };
  var WithoutTooltip = {
    decorators: [wrapInCol],
    args: {
      id: "slider-no-tooltip",
      label: "V\xE4\xE4rtus",
      min: 0,
      max: 100,
      defaultValue: 40,
      minLabel: "0%",
      maxLabel: "100%",
      tooltip: false
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

  // Slider.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(slider_stories_exports, "Default", G, B);
  var WithInputGroup2 = compose(slider_stories_exports, "WithInputGroup", G, B);
  var MinAndMaxValues2 = compose(slider_stories_exports, "MinAndMaxValues", G, B);
  var WithCurrentValue2 = compose(slider_stories_exports, "WithCurrentValue", G, B);
  var WithHint2 = compose(slider_stories_exports, "WithHint", G, B);
  var CustomValue2 = compose(slider_stories_exports, "CustomValue", G, B);
  var States2 = compose(slider_stories_exports, "States", G, B);
  var WithoutTooltip2 = compose(slider_stories_exports, "WithoutTooltip", G, B);
  return __toCommonJS(Slider_preview_exports);
})();
