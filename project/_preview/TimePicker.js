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

  // TimePicker.preview.tsx
  var TimePicker_preview_exports = {};
  __export(TimePicker_preview_exports, {
    ControlledExample: () => ControlledExample2,
    Default: () => Default2,
    PredefinedSlots: () => PredefinedSlots2,
    WithInitialValue: () => WithInitialValue2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/time-picker/time-picker.stories.tsx
  var time_picker_stories_exports = {};
  __export(time_picker_stories_exports, {
    ControlledExample: () => ControlledExample,
    Default: () => Default,
    PredefinedSlots: () => PredefinedSlots,
    WithInitialValue: () => WithInitialValue,
    default: () => time_picker_stories_default
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

  // tedi:src/tedi/components/form/time-picker/time-picker.tsx
  var time_picker_exports = {};
  __export(time_picker_exports, {
    default: () => time_picker_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(time_picker_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var time_picker_default = ns5["TimePicker"] ?? ns5;

  // src/tedi/components/form/time-picker/time-picker.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var time_picker_stories_default = {
    title: "Tedi-Ready/Components/Form/TimePicker",
    component: time_picker_exports.TimePicker
  };
  var Template = (args) => {
    const [time, setTime] = (0, import_react.useState)(args.value);
    (0, import_react.useEffect)(() => {
      setTime(args.value);
    }, [args.value]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_picker_exports.TimePicker, { ...args, value: time, onChange: (val) => setTime(val) });
  };
  var Default = {
    render: Template,
    args: {
      stepMinutes: 1
    }
  };
  var WithInitialValue = {
    render: Template,
    args: {
      value: "12:30"
    }
  };
  var PredefinedSlots = {
    render: () => {
      const [timeButton, setTimeButton] = (0, import_react.useState)();
      const [timeRadio, setTimeRadio] = (0, import_react.useState)();
      const availableTimes = ["08:00", "08:30", "09:00", "09:15", "09:30", "10:00", "10:30", "11:00", "12:00"];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { width: 5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "gridVariant = button" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_picker_exports.TimePicker, { value: timeButton, availableTimes, onChange: setTimeButton })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Col, { width: 5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "gridVariant = radio" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_picker_exports.TimePicker, { gridVariant: "radio", value: timeRadio, availableTimes, onChange: setTimeRadio })
        ] })
      ] }) });
    }
  };
  var ControlledExample = () => {
    const [time, setTime] = (0, import_react.useState)("09:00");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 4, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(time_picker_exports.TimePicker, { value: time, onChange: setTime }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 8, sm: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
        "Selected time: ",
        time
      ] }) })
    ] });
  };
  ControlledExample.parameters = { chromatic: { disableSnapshot: true } };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React = __toESM(require_react());
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
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

  // TimePicker.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(time_picker_stories_exports, "Default", G, B);
  var WithInitialValue2 = compose(time_picker_stories_exports, "WithInitialValue", G, B);
  var PredefinedSlots2 = compose(time_picker_stories_exports, "PredefinedSlots", G, B);
  var ControlledExample2 = compose(time_picker_stories_exports, "ControlledExample", G, B);
  return __toCommonJS(TimePicker_preview_exports);
})();
