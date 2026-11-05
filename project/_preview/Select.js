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

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.React;
    }
  });

  // react-global:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "react-global:react/jsx-runtime"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var R = window.React;
      function jsx6(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx6, jsxs: jsx6, jsxDEV: jsx6, Fragment: R.Fragment };
    }
  });

  // Select.preview.tsx
  var Select_preview_exports = {};
  __export(Select_preview_exports, {
    AsyncSelect: () => AsyncSelect2,
    ClearButtonOnInteraction: () => ClearButtonOnInteraction2,
    Default: () => Default2,
    DeferKeyboardOnTouch: () => DeferKeyboardOnTouch2,
    EditableSelect: () => EditableSelect2,
    EllipsisTags: () => EllipsisTags2,
    Examples: () => Examples2,
    MultipleHandled: () => MultipleHandled2,
    Sizes: () => Sizes2,
    States: () => States2,
    Type: () => Type2,
    ValueType: () => ValueType2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/select/select.stories.tsx
  var select_stories_exports = {};
  __export(select_stories_exports, {
    AsyncSelect: () => AsyncSelect,
    ClearButtonOnInteraction: () => ClearButtonOnInteraction,
    Default: () => Default,
    DeferKeyboardOnTouch: () => DeferKeyboardOnTouch,
    EditableSelect: () => EditableSelect,
    EllipsisTags: () => EllipsisTags,
    Examples: () => Examples,
    MultipleHandled: () => MultipleHandled,
    Sizes: () => Sizes,
    States: () => States,
    Type: () => Type,
    ValueType: () => ValueType,
    default: () => select_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var icon_default = ns["Icon"] ?? ns;

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
  var ns3 = window.Tedi;
  var row_default = ns3["Row"] ?? ns3;

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
  var ns4 = window.Tedi;
  var col_default = ns4["Col"] ?? ns4;

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
  var ns5 = window.Tedi;
  var vertical_spacing_default = ns5["VerticalSpacing"] ?? ns5;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/checkbox/checkbox.tsx
  var checkbox_exports = {};
  __export(checkbox_exports, {
    default: () => checkbox_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(checkbox_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var checkbox_default = ns6["Checkbox"] ?? ns6;

  // src/tedi/components/form/select/examples/async.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/select/select.tsx
  var select_exports = {};
  __export(select_exports, {
    default: () => select_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(select_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var select_default = ns7["Select"] ?? ns7;

  // src/tedi/components/form/select/examples/async.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var colourOptions = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue", isDisabled: true },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" }
  ];
  var filterColors = (inputValue) => {
    return colourOptions.filter((i) => {
      if (typeof i.label === "string") {
        return i.label.toLowerCase().includes(inputValue.toLowerCase());
      }
      return;
    });
  };
  var loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      console.log(inputValue);
      callback(filterColors(inputValue));
    }, 1e3);
  };
  var AsyncSelectTemplate = (args) => {
    const [inputValue, setInputValue] = import_react.default.useState("");
    const handleInputChange = (newValue) => {
      const newInputValue = newValue.replace(/\W/g, "");
      setInputValue(newInputValue);
      return newInputValue;
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
        "value: ",
        inputValue
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(select_default, { ...args, onInputChange: handleInputChange, loadOptions })
    ] });
  };

  // src/tedi/components/form/select/examples/editable.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var colourOptions2 = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue", isDisabled: true },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" }
  ];
  var EditableSelectTemplate = (args) => {
    const [inputValue, setInputValue] = import_react2.default.useState("");
    const [value, setValue] = import_react2.default.useState(null);
    const handleInputChange = (newValue, { action }) => {
      if (action === "input-change") setInputValue(newValue);
      return newValue;
    };
    const handleOnChange = (value2) => {
      setValue(value2);
      setInputValue(value2 ? value2.label : "");
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
        "value: ",
        inputValue
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        select_default,
        {
          ...args,
          value,
          inputValue,
          onInputChange: handleInputChange,
          onChange: handleOnChange,
          inputIsHidden: false,
          options: colourOptions2
        }
      )
    ] });
  };

  // src/tedi/components/form/select/examples/multiple-handled.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var import_react3 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var colourOptions3 = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue", isDisabled: true },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" }
  ];
  var defaultOptions = [colourOptions3[0], colourOptions3[2]];
  var MultipleHandledTemplate = (args) => {
    const [inputValue, setInputValue] = import_react3.default.useState(args.defaultValue ?? defaultOptions);
    const handleInputChange = (newValue) => {
      setInputValue(newValue);
      return inputValue;
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(grid_exports.Col, { lg: 4, sm: 12, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      select_default,
      {
        tagsDirection: "stack",
        options: colourOptions3,
        onChange: (value) => handleInputChange(value),
        value: inputValue,
        ...args
      }
    ) }) });
  };

  // src/tedi/components/form/select/select.stories.tsx
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: select_default,
    title: "TEDI-Ready/Components/Form/Select"
  };
  var select_stories_default = meta;
  var options = [
    { value: "tallinn", label: "Tallinn" },
    { value: "narva", label: "Narva" },
    { value: "tartu", label: "Tartu", isDisabled: true },
    { value: "elva", label: "Elva" },
    { value: "rakvere", label: "Rakvere" },
    { value: "haapsalu", label: "Haapsalu" }
  ];
  var TemplateSizes = (args) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Col, { lg: 12, xs: 12, className: "example-list", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { className: "border-bottom padding-14-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Default" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 10, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { ...args, id: "select-size-default" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { className: "padding-14-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Small" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 10, xs: 12, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { ...args, size: "small", id: "select-size-small" }) })
    ] })
  ] }) });
  var Default = {
    args: {
      id: "example-1",
      label: "Label",
      defaultValue: options[1],
      options
    }
  };
  var Sizes = {
    render: TemplateSizes,
    args: {
      label: "Label",
      options
    }
  };
  var Type = {
    args: {
      options,
      label: "Label"
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { ...args, id: "type-default", label: "Default" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          ...args,
          id: "type-hint",
          label: "With hint",
          helper: { text: "Hint text", type: "hint", position: "left" }
        }
      )
    ] })
  };
  var States = {
    args: {
      options,
      label: "Label"
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Default" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { ...args, id: "example-default" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Hover" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          select_default,
          {
            ...args,
            id: "example-hover",
            classNames: {
              control: "pseudo-hover"
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Focus" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          select_default,
          {
            ...args,
            id: "example-focus",
            classNames: {
              control: "pseudo-focus"
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Active" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          select_default,
          {
            ...args,
            id: "example-active",
            classNames: {
              control: "pseudo-active"
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Error" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { ...args, helper: { text: "Error text", type: "error" }, id: "example-error" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Success" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { ...args, helper: { text: "Valid text", type: "valid" }, id: "example-valid" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { modifiers: "bold", children: "Disabled" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { ...args, disabled: true, id: "example-disabled" }) })
      ] })
    ] })
  };
  var longTagOptions = [
    { value: "longer-text", label: "Longer text" },
    { value: "longer-text-on-one-row", label: "Longer text on one row" },
    { value: "third-option", label: "Third option" },
    { value: "fourth-option", label: "Fourth option" },
    { value: "fifth-option", label: "Fifth option" }
  ];
  var multiTagOptions = Array.from({ length: 10 }, (_, i) => ({
    value: `tag-${i + 1}`,
    label: `Tag ${i + 1}`
  }));
  var colorPickerOptions = [
    { name: "Transparent", color: "transparent" },
    { name: "White", color: "#ffffff" },
    { name: "Red", color: "#f42a25" },
    { name: "Magenta", color: "#e81e63" },
    { name: "Purple", color: "#b21f7e" },
    { name: "Violet", color: "#673ab7" },
    { name: "Indigo", color: "#3f51b5" },
    { name: "Blue", color: "#3f88c5" },
    { name: "Light blue", color: "#03a9f3" },
    { name: "Cyan", color: "#00bcd3" },
    { name: "Teal", color: "#009688" },
    { name: "Green", color: "#4caf50" },
    { name: "Light green", color: "#8bc24a" },
    { name: "Lime", color: "#ccdb39" },
    { name: "Yellow", color: "#f2d611" },
    { name: "Amber", color: "#ffc107" },
    { name: "Orange", color: "#ff9800" },
    { name: "Deep orange", color: "#ff5722" },
    { name: "Grey", color: "#9e9e9e" },
    { name: "Blue grey", color: "#607d8b" },
    { name: "Brown", color: "#795548" },
    { name: "Black", color: "#0d0d0d" }
  ].map((c, i) => ({ value: String(i + 1), label: c.name, customData: c }));
  var colorSwatchStyle = (data) => ({
    width: "100%",
    height: "100%",
    borderRadius: 4,
    background: data.color === "transparent" ? "linear-gradient(to top right, #fff calc(50% - 1px), #e53935 calc(50% - 1px), #e53935 calc(50% + 1px), #fff calc(50% + 1px))" : data.color,
    border: data.color === "transparent" || data.color === "#ffffff" ? "1px solid var(--form-input-border-default)" : "none"
  });
  var triggerSwatchStyle = (data) => ({
    ...colorSwatchStyle(data),
    width: 24,
    height: 24
  });
  var iconPickerOptions = [
    { name: "Desktop", icon: "computer" },
    { name: "Phone", icon: "smartphone" },
    { name: "Tablet", icon: "tablet_mac" },
    { name: "Watch", icon: "watch" },
    { name: "TV", icon: "tv" }
  ].map((d, i) => ({ value: String(i + 1), label: d.name, customData: d }));
  var ValueType = {
    parameters: {
      a11y: {
        options: {
          // react-select's whole control is the pointer target, so axe flagging its inner input is a false positive.
          rules: { "target-size": { enabled: false } }
        }
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { id: "value-no-value", label: "No value", options, isClearable: false }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(select_default, { id: "value-default", label: "Default", options, defaultValue: options[0], isClearable: true }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "value-placeholder",
          label: "Placeholder",
          options,
          placeholder: "Text value",
          isClearable: false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "value-multiselect",
          label: "Multiselect",
          options: multiTagOptions,
          defaultValue: multiTagOptions,
          multiple: true,
          tagsDirection: "stack",
          isTagRemovable: true,
          isClearable: true
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "value-multiselect-one-row",
          label: "Multiselect one row",
          options: longTagOptions,
          defaultValue: longTagOptions,
          multiple: true,
          tagsDirection: "row",
          isTagRemovable: true,
          isClearable: true
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { width: 100 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "value-color",
          label: "Color",
          options: colorPickerOptions,
          defaultValue: colorPickerOptions[0],
          dropdownType: "grid",
          isClearable: false,
          isSearchable: false,
          renderValue: (option) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "div",
            {
              role: "img",
              "aria-label": option.customData.name,
              style: triggerSwatchStyle(option.customData)
            }
          ),
          renderOption: (optionProps) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "div",
            {
              role: "img",
              "aria-label": optionProps.data.customData.name,
              style: colorSwatchStyle(optionProps.data.customData)
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { width: 100 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "value-icon",
          label: "Icon",
          options: iconPickerOptions,
          defaultValue: iconPickerOptions[0],
          dropdownType: "grid",
          isClearable: false,
          isSearchable: false,
          renderValue: (option) => {
            const data = option.customData;
            return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(icon_exports.Icon, { name: data.icon, size: 24, "aria-label": data.name });
          },
          renderOption: (optionProps) => {
            const data = optionProps.data.customData;
            return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(icon_exports.Icon, { name: data.icon, size: 18, "aria-label": data.name });
          }
        }
      ) })
    ] })
  };
  var EllipsisTags = {
    parameters: {
      a11y: {
        options: {
          // react-select's whole control is the pointer target, so axe flagging its inner input is a false positive.
          rules: { "target-size": { enabled: false } }
        }
      }
    },
    render: () => {
      const longOptions = [
        { value: "a", label: "A fairly long option label that does not fit" },
        { value: "b", label: "Another rather long option label" },
        { value: "c", label: "2026-06-25 quarterly financial report" }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { maxWidth: "20rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          select_default,
          {
            id: "ellipsis-tags-end",
            label: "Truncate the end",
            options: longOptions,
            defaultValue: longOptions,
            multiple: true,
            tagsEllipsis: "end",
            isTagRemovable: true,
            isClearable: true
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          select_default,
          {
            id: "ellipsis-tags-start",
            label: "Truncate the start",
            options: longOptions,
            defaultValue: longOptions,
            multiple: true,
            tagsEllipsis: "start",
            isTagRemovable: true,
            isClearable: true
          }
        )
      ] }) });
    }
  };
  var departmentOptions = [
    "Emergency department",
    "Internal medicine",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Surgery",
    "Urology",
    "Dermatology",
    "Oncology",
    "Gastroenterology",
    "Pulmonology",
    "Nephrology",
    "Endocrinology",
    "Rheumatology",
    "Infectious diseases",
    "Hematology",
    "Allergy and immunology",
    "Geriatrics",
    "Neonatology",
    "Palliative care",
    "Physical medicine",
    "Anesthesiology",
    "Pathology",
    "Nuclear medicine",
    "Ophthalmology",
    "Otolaryngology",
    "Plastic surgery"
  ].map((label) => ({ value: label.toLowerCase().replace(/\s+/g, "-"), label }));
  var groupedDepartments = [
    {
      label: "Emergency",
      options: [
        { value: "emergency-department", label: "Emergency department" },
        { value: "urgent-care", label: "Urgent care" }
      ]
    },
    {
      label: "Internal",
      options: [
        { value: "internal-medicine", label: "Internal medicine" },
        { value: "cardiology", label: "Cardiology" },
        { value: "neurology", label: "Neurology" }
      ]
    },
    {
      label: "Surgery",
      options: [
        { value: "general-surgery", label: "General surgery" },
        { value: "orthopedic-surgery", label: "Orthopedic surgery" },
        { value: "neurosurgery", label: "Neurosurgery" }
      ]
    }
  ];
  var accessOptions = [
    {
      value: "1",
      label: "Access to health data",
      customData: { title: "Access to health data", description: "Doctors will be able to see your health data" }
    },
    {
      value: "2",
      label: "Access to medications and health data",
      customData: {
        title: "Access to medications and health data",
        description: "Doctors will be able to see your medications and health data"
      }
    },
    {
      value: "3",
      label: "Access to all",
      customData: { title: "Access to all", description: "Doctors will be able to see all your information" }
    }
  ];
  var permissionOptions = [
    {
      value: "1",
      label: "Read permissions",
      customData: { title: "Read permissions", description: "Can view documents and files" }
    },
    {
      value: "2",
      label: "Write permissions",
      customData: { title: "Write permissions", description: "Can create and edit documents" }
    },
    {
      value: "3",
      label: "Admin permissions",
      customData: { title: "Admin permissions", description: "Full access to all features" }
    }
  ];
  var locationMetaOptions = [
    { value: "1", label: "Tallinn", customData: { name: "Tallinn", slots: 3 } },
    { value: "2", label: "Tartu", customData: { name: "Tartu", slots: 4 } },
    { value: "3", label: "Elva", customData: { name: "Elva", slots: 7 } },
    { value: "4", label: "P\xE4rnu", customData: { name: "P\xE4rnu", slots: 2 } },
    { value: "5", label: "Narva", customData: { name: "Narva", slots: 5 } }
  ];
  var renderDescriptionOption = (props) => {
    const { title, description } = props.data.customData;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Row, { gutterY: 2, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Col, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { color: "secondary", modifiers: "small", children: description })
    ] }) });
  };
  var renderDescriptionOptionWithCheckbox = (props) => {
    const { title, description } = props.data.customData;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { gutterY: 2, gutterX: 1, alignItems: "start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        checkbox_exports.Checkbox,
        {
          id: props.data.value,
          label: "",
          "aria-hidden": true,
          value: props.data.value,
          name: props.data.value,
          checked: props.isSelected,
          onChange: () => null,
          disabled: props.isDisabled
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Col, { width: "auto", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sr-only", children: props.label }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { color: "secondary", modifiers: "small", children: description })
      ] })
    ] });
  };
  var renderHorizontalMetaOption = (props) => {
    const { name, slots } = props.data.customData;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(grid_exports.Row, { justifyContent: "between", gutterY: 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(text_exports.Text, { children: name }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(text_exports.Text, { color: "secondary", modifiers: "small", children: [
        slots,
        " timeslots available"
      ] }) })
    ] });
  };
  var selectAllOptions = [
    { value: "1", label: "Locations" },
    { value: "2", label: "Doctors" },
    { value: "3", label: "Hospitals" }
  ];
  var Examples = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-select-all",
          label: "Multiselect with Select All",
          placeholder: "Select options...",
          options: selectAllOptions,
          multiple: true,
          showSelectAll: true,
          isClearable: false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-scrollable",
          label: "Scrollable list",
          placeholder: "Select department...",
          options: departmentOptions,
          isClearable: false,
          isSearchable: false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-searchable",
          label: "Searchable select",
          placeholder: "Search departments...",
          options: departmentOptions,
          isSearchable: true,
          isClearable: true
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-searchable-multi",
          label: "Searchable multiselect",
          placeholder: "Search and select departments...",
          options: departmentOptions,
          isSearchable: true,
          multiple: true,
          isClearable: true,
          isTagRemovable: true
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-grouped-single",
          label: "Grouped single select",
          placeholder: "Select department...",
          options: groupedDepartments,
          isClearable: false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-with-description",
          label: "Options with descriptions",
          placeholder: "Select access level...",
          options: accessOptions,
          renderOption: renderDescriptionOption,
          isClearable: false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-grouped-multi",
          label: "Grouped multiselect",
          placeholder: "Select departments...",
          options: groupedDepartments,
          multiple: true,
          isClearable: true,
          isTagRemovable: true
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-grouped-selectable",
          label: "Grouped multiselect with selectable groups",
          placeholder: "Select departments...",
          options: groupedDepartments,
          multiple: true,
          selectableGroups: true,
          isClearable: true,
          isTagRemovable: true
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-grouped-select-all",
          label: "Grouped multiselect with Select All",
          placeholder: "Select departments...",
          options: groupedDepartments,
          multiple: true,
          showSelectAll: true,
          selectableGroups: true,
          isClearable: true,
          isTagRemovable: true
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-horizontal-meta",
          label: "Options with horizontal meta",
          placeholder: "Select location...",
          options: locationMetaOptions,
          renderOption: renderHorizontalMetaOption,
          isClearable: false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-radio",
          label: "Single select with radio buttons",
          placeholder: "Select access level...",
          options: accessOptions,
          showRadioButtons: true,
          isClearable: false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        select_default,
        {
          id: "examples-multi-custom",
          label: "Multiselect with custom templates",
          placeholder: "Select permissions...",
          options: permissionOptions,
          renderOption: renderDescriptionOptionWithCheckbox,
          multiple: true,
          isClearable: true,
          isTagRemovable: true
        }
      )
    ] })
  };
  var MultipleHandled = {
    parameters: {
      a11y: {
        options: {
          // react-select's whole control is the pointer target, so axe flagging its inner input is a false positive.
          rules: { "target-size": { enabled: false } }
        }
      }
    },
    render: MultipleHandledTemplate,
    args: {
      id: "multiple-handled-example",
      label: "Multiple Select",
      multiple: true,
      isTagRemovable: true
    }
  };
  var AsyncSelect = {
    render: AsyncSelectTemplate,
    args: {
      id: "async-example",
      label: "Async label",
      async: true
    }
  };
  var EditableSelect = {
    render: EditableSelectTemplate,
    args: {
      id: "editable-example",
      label: "Editable label"
    }
  };
  var DeferKeyboardOnTouch = {
    args: {
      id: "defer-keyboard-example",
      label: "Address",
      placeholder: "Vali...",
      options,
      openKeyboardOnTouch: false,
      isSearchable: true
    }
  };
  var ClearButtonOnInteraction = {
    args: {
      id: "example-clear-on-interaction",
      label: "Label",
      defaultValue: options[1],
      options,
      isClearIndicatorVisible: true,
      showClearOnInteraction: true
    }
  };

  // .design-sync/artifact/compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React4 = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
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
      if (Component) render = () => React4.createElement(Component, args);
    }
    if (!render) return () => null;
    const decorators = [].concat(story?.decorators ?? []).concat(meta2.decorators ?? []);
    const decorated = decorators.reduce(
      (inner, decorator) => () => decorator(inner, context) ?? inner(),
      render
    );
    const background = backgrounds[context.globals.backgrounds?.value];
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Story, {}) });
  }

  // Select.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(select_stories_exports, "Default", G, B);
  var Sizes2 = compose(select_stories_exports, "Sizes", G, B);
  var Type2 = compose(select_stories_exports, "Type", G, B);
  var States2 = compose(select_stories_exports, "States", G, B);
  var ValueType2 = compose(select_stories_exports, "ValueType", G, B);
  var EllipsisTags2 = compose(select_stories_exports, "EllipsisTags", G, B);
  var Examples2 = compose(select_stories_exports, "Examples", G, B);
  var MultipleHandled2 = compose(select_stories_exports, "MultipleHandled", G, B);
  var AsyncSelect2 = compose(select_stories_exports, "AsyncSelect", G, B);
  var EditableSelect2 = compose(select_stories_exports, "EditableSelect", G, B);
  var DeferKeyboardOnTouch2 = compose(select_stories_exports, "DeferKeyboardOnTouch", G, B);
  var ClearButtonOnInteraction2 = compose(select_stories_exports, "ClearButtonOnInteraction", G, B);
  return __toCommonJS(Select_preview_exports);
})();
