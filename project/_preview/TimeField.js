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

  // TimeField.preview.tsx
  var TimeField_preview_exports = {};
  __export(TimeField_preview_exports, {
    CustomStep: () => CustomStep2,
    Default: () => Default2,
    Dropdown: () => Dropdown2,
    FieldOptions: () => FieldOptions2,
    FieldWithoutPicker: () => FieldWithoutPicker2,
    ManualTyping: () => ManualTyping2,
    ModalPicker: () => ModalPicker2,
    NativePicker: () => NativePicker2,
    OnClickType: () => OnClickType2,
    PredefinedTimeSlots: () => PredefinedTimeSlots2,
    ResponsiveModalPicker: () => ResponsiveModalPicker2,
    Sizes: () => Sizes2,
    States: () => States2,
    ValueType: () => ValueType2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/time-field/time-field.stories.tsx
  var time_field_stories_exports = {};
  __export(time_field_stories_exports, {
    CustomStep: () => CustomStep,
    Default: () => Default,
    Dropdown: () => Dropdown,
    FieldOptions: () => FieldOptions,
    FieldWithoutPicker: () => FieldWithoutPicker,
    ManualTyping: () => ManualTyping,
    ModalPicker: () => ModalPicker,
    NativePicker: () => NativePicker,
    OnClickType: () => OnClickType,
    PredefinedTimeSlots: () => PredefinedTimeSlots,
    ResponsiveModalPicker: () => ResponsiveModalPicker,
    Sizes: () => Sizes,
    States: () => States,
    ValueType: () => ValueType,
    default: () => time_field_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/time-field/time-field.tsx
  var time_field_exports = {};
  __export(time_field_exports, {
    default: () => time_field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(time_field_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var time_field_default = ns5["TimeField"] ?? ns5;

  // src/tedi/components/form/time-field/time-field.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var time_field_stories_default = {
    title: "Tedi-Ready/Components/Form/TimeField",
    component: time_field_exports.TimeField,
    parameters: {
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.38.59?node-id=4662-91741&m=dev"
      }
    }
  };
  var Template = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 3, md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { ...args }) }) });
  var sizeArray = ["default", "small"];
  var sizeLabels = { default: "Default", small: "Small" };
  var TemplateColumn = (args) => {
    const { array, property } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: array.map((value, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 2, sm: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: value ? sizeLabels[value] ?? value : "" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 3, md: 6, className: "d-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { label: "Aeg", id: `time-field-size--${value}`, inputProps: { [property]: value } }) })
    ] }, key)) });
  };
  var Default = {
    render: Template,
    args: {
      label: "Aeg",
      required: true,
      stepMinutes: 1
    }
  };
  var Sizes = {
    render: TemplateColumn,
    args: {
      array: sizeArray,
      property: "size"
    }
  };
  var stateArray = ["Default", "Hover", "Focus", "Active", "Disabled"];
  var States = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "state-example", children: [
      stateArray.map((state) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: "padding-14-16", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: state }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 4, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: state, label: "Aeg", inputProps: { disabled: state === "Disabled" } }) })
      ] }, state)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: "padding-14-16", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Success" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 4, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          time_field_exports.TimeField,
          {
            id: "success-timefield",
            label: "Aeg",
            inputProps: { helper: { text: "Vihjetekst", type: "valid" } }
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: "padding-14-16", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Error" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 4, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: "error-timefield", label: "Aeg", inputProps: { helper: { text: "Vihjetekst", type: "error" } } }) })
      ] })
    ] }),
    parameters: {
      pseudo: {
        hover: "#Hover",
        focus: "#Focus",
        active: "#Active"
      }
    }
  };
  var FieldOptions = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 3, md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-4 flex-column", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: "time-field-default", label: "Aeg" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: "time-field-with-hint", label: "Aeg", inputProps: { helper: { text: "Vihjetekst" } } })
    ] }) }) });
  };
  var ValueType = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 3, md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-3 flex-column", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: "time-default", label: "Aeg" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: "time-with-placeholder", label: "Aeg", placeholder: "tt:mm" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: "time-with-default-value", label: "Aeg", defaultValue: "13:00" })
    ] }) }) });
  };
  var OnClickType = {
    render: () => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 3, md: 6, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", children: "Clock button is clickable" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { label: "Aeg", id: "time-button-trigger", timePickerTrigger: "button" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 3, md: 6, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "small", children: "Input is clickable" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { label: "Aeg", id: "time-input-trigger", timePickerTrigger: "input" })
        ] }) })
      ] });
    },
    parameters: {
      docs: {
        description: {
          story: "timePickerTrigger prop allows you to open time picker either on input click or clock icon"
        }
      }
    }
  };
  var PredefinedTimeSlots = {
    render: () => {
      const [times, setTimes] = (0, import_react.useState)({
        input: "11:30",
        radio: "11:30",
        button: "11:30"
      });
      const availableTimes = ["09:30", "10:00", "11:30", "15:30", "18:30", "20:30"];
      const handleChange = (key) => (newTime) => {
        setTimes((prev) => ({ ...prev, [key]: newTime }));
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 4, md: 6, xs: 12, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["small"], children: "Input trigger (recommended)" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            time_field_exports.TimeField,
            {
              id: "slots-input",
              label: "Aeg",
              value: times.input,
              onChange: handleChange("input"),
              placeholder: "Vali aeg",
              availableTimes,
              timePickerTrigger: "input"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 4, md: 6, xs: 12, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["small"], children: "Radio buttons" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            time_field_exports.TimeField,
            {
              id: "slots-radio",
              label: "Aeg",
              value: times.radio,
              onChange: handleChange("radio"),
              placeholder: "Vali aeg",
              availableTimes,
              availableTimesVariant: "grid-radio",
              timePickerTrigger: "input"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 4, md: 6, xs: 12, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["small"], children: "Button trigger" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            time_field_exports.TimeField,
            {
              id: "slots-button",
              label: "Aeg",
              value: times.button,
              onChange: handleChange("button"),
              placeholder: "Vali aeg",
              availableTimes,
              timePickerTrigger: "button"
            }
          )
        ] })
      ] });
    }
  };
  var Dropdown = {
    render: () => {
      const [times, setTimes] = (0, import_react.useState)({
        empty: void 0,
        preselected: "13:30"
      });
      const availableTimes = ["12:30", "13:00", "13:30", "14:00", "14:30"];
      const handleChange = (key) => (newTime) => {
        setTimes((prev) => ({ ...prev, [key]: newTime }));
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 6, md: 12, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["small"], children: "Button trigger" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            time_field_exports.TimeField,
            {
              id: "dropdown-empty",
              label: "Aeg",
              value: times.empty,
              onChange: handleChange("empty"),
              placeholder: "Vali aeg",
              availableTimes,
              availableTimesVariant: "dropdown",
              timePickerTrigger: "button"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 6, md: 12, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["small"], children: "Input trigger" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            time_field_exports.TimeField,
            {
              id: "dropdown-preselected",
              label: "Aeg",
              value: times.preselected,
              onChange: handleChange("preselected"),
              placeholder: "Vali aeg",
              availableTimes,
              availableTimesVariant: "dropdown",
              timePickerTrigger: "input"
            }
          )
        ] })
      ] });
    }
  };
  var FieldWithoutPicker = {
    render: Template,
    args: {
      label: "Aeg",
      placeholder: "tt:mm",
      showPicker: false
    },
    parameters: {
      docs: {
        description: {
          story: "You can set showPicker=false if you only need to use the input and not the picker"
        }
      }
    }
  };
  var CustomStep = {
    render: Template,
    args: {
      label: "Aeg 15-minutiliste sammudega",
      stepMinutes: 15,
      placeholder: "tt:mm",
      defaultValue: "12:30"
    }
  };
  var ManualTyping = (args) => {
    const [time, setTime] = (0, import_react.useState)("08:00");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 3, md: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { ...args, value: time, onChange: (val) => setTime(val), label: "Aeg", placeholder: "tt:mm" }) }) });
  };
  var ModalPicker = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Template, { ...args }),
    args: {
      id: "time-modal",
      label: "Aeg",
      placeholder: "tt:mm",
      modal: true,
      timePickerTrigger: "input"
    }
  };
  var ResponsiveModalPicker = {
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Template, { ...args }),
    args: {
      id: "time-modal-responsive",
      label: "Aeg",
      placeholder: "tt:mm",
      modal: "md",
      timePickerTrigger: "input"
    }
  };
  var NativePicker = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 6, md: 12, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["small"], children: "Always native (useNativePicker=true)" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_field_exports.TimeField, { id: "native-always", label: "Aeg", defaultValue: "09:30", useNativePicker: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { lg: 6, md: 12, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["small"], children: "Responsive" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          time_field_exports.TimeField,
          {
            id: "native-responsive",
            label: "Aeg",
            defaultValue: "09:30",
            useNativePicker: true,
            md: { useNativePicker: false }
          }
        )
      ] })
    ] }),
    parameters: {
      docs: {
        description: {
          story: 'Native time picker uses the browser\u2019s built-in input[type="time"] UI instead of the custom TimePicker. Prefer this on mobile devices for better native UX, improved accessibility, and reduced UI complexity. It is also useful when you want to minimize bundle/UI overhead or align with platform conventions. Note: when enabled, availableTimes is ignored because native inputs do not support restricting selectable values.'
        }
      }
    }
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function compose(stories, key, globalDefaults, backgrounds) {
    const meta = stories.default ?? {};
    const story = stories[key];
    const args = { ...meta.args ?? {}, ...story?.args ?? {} };
    const argTypes = { ...meta.argTypes ?? {}, ...story?.argTypes ?? {} };
    for (const name of Object.keys(args)) {
      const mapping = argTypes[name]?.mapping;
      if (mapping && typeof mapping === "object" && args[name] in mapping) args[name] = mapping[args[name]];
    }
    const title = typeof meta.title === "string" ? meta.title : "";
    const context = {
      args,
      name: key,
      title,
      kind: title,
      id: "",
      componentId: "",
      globals: { ...globalDefaults, ...meta.globals ?? {}, ...story?.globals ?? {} },
      viewMode: "story",
      parameters: { ...meta.parameters ?? {}, ...story?.parameters ?? {} }
    };
    let render = null;
    if (typeof story?.render === "function") render = () => story.render(args, context);
    else if (typeof story === "function") render = () => story(args, context);
    else if (typeof meta.render === "function") render = () => meta.render(args, context);
    else {
      const Component = story?.component ?? meta.component;
      if (Component) render = () => React.createElement(Component, args);
    }
    if (!render) return () => null;
    const decorators = [].concat(story?.decorators ?? []).concat(meta.decorators ?? []);
    const decorated = decorators.reduce(
      (inner, decorator) => () => decorator(inner, context) ?? inner(),
      render
    );
    const background = backgrounds[context.globals.backgrounds?.value];
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Story, {}) });
  }

  // TimeField.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(time_field_stories_exports, "Default", G, B);
  var Sizes2 = compose(time_field_stories_exports, "Sizes", G, B);
  var States2 = compose(time_field_stories_exports, "States", G, B);
  var FieldOptions2 = compose(time_field_stories_exports, "FieldOptions", G, B);
  var ValueType2 = compose(time_field_stories_exports, "ValueType", G, B);
  var OnClickType2 = compose(time_field_stories_exports, "OnClickType", G, B);
  var PredefinedTimeSlots2 = compose(time_field_stories_exports, "PredefinedTimeSlots", G, B);
  var Dropdown2 = compose(time_field_stories_exports, "Dropdown", G, B);
  var FieldWithoutPicker2 = compose(time_field_stories_exports, "FieldWithoutPicker", G, B);
  var CustomStep2 = compose(time_field_stories_exports, "CustomStep", G, B);
  var ManualTyping2 = compose(time_field_stories_exports, "ManualTyping", G, B);
  var ModalPicker2 = compose(time_field_stories_exports, "ModalPicker", G, B);
  var ResponsiveModalPicker2 = compose(time_field_stories_exports, "ResponsiveModalPicker", G, B);
  var NativePicker2 = compose(time_field_stories_exports, "NativePicker", G, B);
  return __toCommonJS(TimeField_preview_exports);
})();
