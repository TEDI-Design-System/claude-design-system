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

  // InlineEdit.preview.tsx
  var InlineEdit_preview_exports = {};
  __export(InlineEdit_preview_exports, {
    CancelEdit: () => CancelEdit3,
    Default: () => Default2,
    Disabled: () => Disabled2,
    EditIconPosition: () => EditIconPosition2,
    Invalid: () => Invalid2,
    Placeholder: () => Placeholder2,
    ReadOnly: () => ReadOnly2,
    Responsiveness: () => Responsiveness2,
    Sizes: () => Sizes2,
    States: () => States3,
    SupportedControls: () => SupportedControls2,
    Type: () => Type3,
    ValueType: () => ValueType3
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/inline-edit/inline-edit.stories.tsx
  var inline_edit_stories_exports = {};
  __export(inline_edit_stories_exports, {
    CancelEdit: () => CancelEdit,
    Default: () => Default,
    Disabled: () => Disabled,
    EditIconPosition: () => EditIconPosition,
    Invalid: () => Invalid,
    Placeholder: () => Placeholder,
    ReadOnly: () => ReadOnly,
    Responsiveness: () => Responsiveness,
    Sizes: () => Sizes,
    States: () => States,
    SupportedControls: () => SupportedControls,
    Type: () => Type,
    ValueType: () => ValueType,
    default: () => inline_edit_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // src/tedi/helpers/index.ts
  var helpers_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:src/tedi/helpers/hooks/use-is-mounted.ts
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

  // tedi:src/tedi/helpers/hooks/use-safe-id.ts
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

  // tedi:src/tedi/helpers/hooks/use-breakpoint.ts
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

  // tedi:src/tedi/helpers/hooks/use-breakpoint-props.ts
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

  // tedi:src/tedi/helpers/hooks/use-element-size.ts
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

  // tedi:src/tedi/helpers/hooks/use-scroll.ts
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

  // tedi:src/tedi/helpers/hooks/use-is-touch-device.ts
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

  // tedi:src/tedi/helpers/hooks/use-file-upload.ts
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

  // tedi:src/tedi/helpers/hooks/use-what-input.ts
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

  // tedi:src/tedi/helpers/hooks/use-scroll-fade.ts
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

  // tedi:src/tedi/helpers/polymorphic/types.ts
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

  // tedi:src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var text_default = ns12["Text"] ?? ns12;

  // tedi:src/tedi/components/content/label/label.tsx
  var label_exports = {};
  __export(label_exports, {
    default: () => label_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(label_exports, __toESM(require_tedi_namespace()));
  var ns13 = window.Tedi;
  var label_default = ns13["Label"] ?? ns13;

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
  var ns14 = window.Tedi;
  var row_default = ns14["Row"] ?? ns14;

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
  var ns15 = window.Tedi;
  var col_default = ns15["Col"] ?? ns15;

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
  var ns16 = window.Tedi;
  var vertical_spacing_default = ns16["VerticalSpacing"] ?? ns16;

  // tedi:src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns17 = window.Tedi;
  var status_badge_default = ns17["StatusBadge"] ?? ns17;

  // tedi:src/tedi/components/tags/tag/tag.tsx
  var tag_exports = {};
  __export(tag_exports, {
    default: () => tag_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tag_exports, __toESM(require_tedi_namespace()));
  var ns18 = window.Tedi;
  var tag_default = ns18["Tag"] ?? ns18;

  // tedi:src/tedi/components/form/checkbox/index.ts
  var checkbox_exports = {};
  __export(checkbox_exports, {
    default: () => checkbox_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(checkbox_exports, __toESM(require_tedi_namespace()));
  var ns19 = window.Tedi;
  var checkbox_default = ns19["Checkbox"] ?? ns19;

  // tedi:src/tedi/components/form/date-field/date-field.tsx
  var date_field_exports = {};
  __export(date_field_exports, {
    default: () => date_field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(date_field_exports, __toESM(require_tedi_namespace()));
  var ns20 = window.Tedi;
  var date_field_default = ns20["DateField"] ?? ns20;

  // tedi:src/tedi/components/form/number-field/number-field.tsx
  var number_field_exports = {};
  __export(number_field_exports, {
    default: () => number_field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(number_field_exports, __toESM(require_tedi_namespace()));
  var ns21 = window.Tedi;
  var number_field_default = ns21["NumberField"] ?? ns21;

  // tedi:src/tedi/components/form/radio/index.ts
  var radio_exports = {};
  __export(radio_exports, {
    default: () => radio_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(radio_exports, __toESM(require_tedi_namespace()));
  var ns22 = window.Tedi;
  var radio_default = ns22["Radio"] ?? ns22;

  // tedi:src/tedi/components/form/select/select.tsx
  var select_exports = {};
  __export(select_exports, {
    default: () => select_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(select_exports, __toESM(require_tedi_namespace()));
  var ns23 = window.Tedi;
  var select_default = ns23["Select"] ?? ns23;

  // tedi:src/tedi/components/form/textarea/textarea.tsx
  var textarea_exports = {};
  __export(textarea_exports, {
    default: () => textarea_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textarea_exports, __toESM(require_tedi_namespace()));
  var ns24 = window.Tedi;
  var textarea_default = ns24["Textarea"] ?? ns24;

  // tedi:src/tedi/components/form/textfield/textfield.tsx
  var textfield_exports = {};
  __export(textfield_exports, {
    default: () => textfield_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textfield_exports, __toESM(require_tedi_namespace()));
  var ns25 = window.Tedi;
  var textfield_default = ns25["TextField"] ?? ns25;

  // tedi:src/tedi/components/form/inline-edit/inline-edit.tsx
  var inline_edit_exports = {};
  __export(inline_edit_exports, {
    default: () => inline_edit_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(inline_edit_exports, __toESM(require_tedi_namespace()));
  var ns26 = window.Tedi;
  var inline_edit_default = ns26["InlineEdit"] ?? ns26;

  // src/tedi/components/form/inline-edit/inline-edit.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var countryOptions = [
    { value: "ee", label: "Eesti" },
    { value: "fi", label: "Soome" },
    { value: "se", label: "Rootsi" }
  ];
  var typeOptions = [
    { value: "prototype", label: "Protot\xFC\xFCp" },
    { value: "design", label: "Disain" },
    { value: "concept", label: "Kontseptsioon" }
  ];
  var keywordOptions = [
    { value: "prototype", label: "Protot\xFC\xFCp" },
    { value: "figma", label: "Figma" },
    { value: "design", label: "Disain" },
    { value: "ui", label: "Kasutajaliides" }
  ];
  var olekOptions = [
    { value: "done", label: "L\xF5petatud" },
    { value: "in-progress", label: "T\xF6\xF6s" },
    { value: "planned", label: "Planeeritud" }
  ];
  var olekColor = {
    done: "success",
    "in-progress": "warning",
    planned: "brand"
  };
  var addressOptions = [
    { value: "tallinn", label: "Tulbi tn 6, Tallinn" },
    { value: "tartu", label: "Riia 12, Tartu" }
  ];
  var Column = ({ width, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, md: width, children }) });
  var Fields = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { alignItems: "baseline", gutterX: 3, gutterY: 0, children });
  var FieldRow = ({ label, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(label_exports.Label, { children: label }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 8, children })
  ] });
  var NamedRow = ({ name, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: name }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 8, children })
  ] });
  var NameInline = (props) => {
    const { id, label = "Nimi", defaultValue = "Mari Maasikas", placeholder, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      inline_edit_exports.InlineEdit,
      {
        label,
        id,
        defaultValue,
        placeholder,
        renderValue: placeholder ? (v) => v : (v) => v || "\u2014",
        ...rest,
        children: ({ value, onChange, size: editorSize }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: `${id}-input`, label, hideLabel: true, value, onChange, size: editorSize })
      }
    );
  };
  var alignFields = [
    { label: "Kuup\xE4ev", value: "22.03.2026" },
    { label: "Kellaaeg", value: "08:00" },
    { label: "Kohtade arv", value: "2" },
    { label: "Aadress", value: "Tulbi tn 6, Tallinn" }
  ];
  var CountryInline = (props) => {
    const { id, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      inline_edit_exports.InlineEdit,
      {
        label: "Riik",
        id,
        defaultValue: countryOptions[0],
        renderValue: (v) => v ? v.label : "\u2014",
        ...rest,
        children: ({ value, onChange, commit }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          select_exports.Select,
          {
            id: `${id}-input`,
            label: "Riik",
            hideLabel: true,
            size: "small",
            options: countryOptions,
            value,
            onChange: (next) => {
              onChange(next);
              commit();
            }
          }
        )
      }
    );
  };
  var meta = {
    title: "TEDI-Ready/Components/Form/InlineEdit",
    component: inline_edit_exports.InlineEdit,
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.106.103?node-id=65952-130950&m=dev"
      }
    },
    argTypes: {
      label: {
        control: "text",
        description: "Accessible label for the field, announced on the read trigger.",
        table: { type: { summary: "string" } }
      },
      placeholder: {
        control: "text",
        description: "Shown in the read view when the value is empty.",
        table: { type: { summary: "ReactNode" } }
      },
      size: {
        control: "radio",
        options: ["default", "small"],
        description: "Text size and row spacing of the read trigger and editor.",
        table: { type: { summary: "default | small" }, defaultValue: { summary: "default" } }
      },
      editIconPosition: {
        control: "radio",
        options: ["end", "inline"],
        description: "Places the edit icon at the trailing edge or straight after the value; hidden while the row is invalid.",
        table: { type: { summary: "end | inline" }, defaultValue: { summary: "end" } }
      },
      readOnly: {
        control: "boolean",
        description: "Renders the value as plain text with no edit affordance, lined up with editable rows. For a block that is entirely read-only, use `TextGroup` instead.",
        table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } }
      },
      disabled: {
        control: "boolean",
        description: "Blocks editing and keeps the trigger and edit icon visible but greyed, for transient states such as saving.",
        table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } }
      },
      fitContent: {
        control: "boolean",
        description: "Sizes the row to its value instead of filling its container, so the row changes width when the editor opens.",
        table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } }
      },
      editing: {
        control: false,
        description: "Controlled edit mode; update it from `onEditStart`, `onChange` and `onEditCancel`.",
        table: { type: { summary: "boolean" } }
      },
      defaultEditing: {
        control: false,
        description: "Starts in edit mode. An editor that starts open does not take focus.",
        table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } }
      },
      onEditStart: {
        control: false,
        description: "Called when the user enters edit mode.",
        table: { type: { summary: "() => void" } }
      },
      onEditCancel: {
        control: false,
        description: "Called when the user cancels the edit.",
        table: { type: { summary: "() => void" } }
      },
      closeOnEnter: {
        control: "boolean",
        description: "Commits on Enter; turn it off when the editor uses Enter itself.",
        table: { type: { summary: "boolean" }, defaultValue: { summary: "true" } }
      },
      closeOnEscape: {
        control: "boolean",
        description: "Cancels on Escape.",
        table: { type: { summary: "boolean" }, defaultValue: { summary: "true" } }
      },
      closeOnBlur: {
        control: "boolean",
        description: "Commits when focus leaves the editor or the menus it opens.",
        table: { type: { summary: "boolean" }, defaultValue: { summary: "true" } }
      },
      value: {
        control: false,
        description: "Controlled committed value. Pair with `onChange`.",
        table: { type: { summary: "T" } }
      },
      defaultValue: {
        control: false,
        description: "Initial committed value for uncontrolled use. Ignored when `value` is set.",
        table: { type: { summary: "T" } }
      },
      onChange: {
        control: false,
        description: "Called with the draft when an edit is committed.",
        table: { type: { summary: "(value: T) => void" } }
      },
      renderValue: {
        control: false,
        description: "Renders the read view. Defaults to the value itself \u2014 use it to format a `Date` or map an option to its label.",
        table: { type: { summary: "(value: T) => ReactNode" } }
      },
      children: {
        control: false,
        description: "Renders the editor: a TEDI control wired to the render props, forwarding `size` so it matches the read view.",
        table: { type: { summary: "(editor: InlineEditEditor<T>) => ReactNode" } }
      },
      id: {
        control: false,
        description: "id applied to the root: the read trigger, the editor or the read-only text.",
        table: { type: { summary: "string" } }
      },
      className: {
        control: false,
        description: "Additional class on the root element.",
        table: { type: { summary: "string" } }
      }
    }
  };
  var inline_edit_stories_default = meta;
  var Default = {
    args: {
      label: "Nimi",
      placeholder: "Sisesta nimi",
      size: "default",
      editIconPosition: "end",
      readOnly: false,
      disabled: false,
      fitContent: false,
      closeOnEnter: true,
      closeOnEscape: true,
      closeOnBlur: true
    },
    render: function DefaultField(args) {
      const [value, setValue] = (0, import_react.useState)("Mari Maasikas");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 3, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        inline_edit_exports.InlineEdit,
        {
          label: args.label,
          placeholder: args.placeholder,
          size: args.size,
          editIconPosition: args.editIconPosition,
          readOnly: args.readOnly,
          disabled: args.disabled,
          fitContent: args.fitContent,
          closeOnEnter: args.closeOnEnter,
          closeOnEscape: args.closeOnEscape,
          closeOnBlur: args.closeOnBlur,
          value,
          onChange: setValue,
          renderValue: (v) => v,
          children: ({ value: draft, onChange, size: editorSize }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            textfield_exports.TextField,
            {
              id: "default-value",
              label: args.label,
              hideLabel: true,
              value: draft,
              onChange,
              size: editorSize
            }
          )
        }
      ) });
    }
  };
  var Type = {
    render: function Type2() {
      const [type, setType] = (0, import_react.useState)(typeOptions[0]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedRow, { name: "Text field", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: "ie-type-text" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedRow, { name: "Select", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "T\xFC\xFCp",
            value: type,
            onChange: setType,
            renderValue: (v) => v ? v.label : "\u2014",
            children: ({ value, onChange, commit }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              select_exports.Select,
              {
                id: "ie-type-select",
                size: "small",
                label: "T\xFC\xFCp",
                hideLabel: true,
                options: typeOptions,
                value,
                onChange: (next) => {
                  onChange(next);
                  commit();
                }
              }
            )
          }
        ) })
      ] }) });
    }
  };
  var sizeArray = ["default", "small"];
  var Sizes = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fields, { children: sizeArray.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedRow, { name: size === "default" ? "Default" : "Small", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: `ie-size-${size}`, label: "Kuup\xE4ev", defaultValue: "22.03.2026", size }) }, size)) }) })
  };
  var ValueType = {
    name: "Value type",
    render: function ValueType2() {
      const [type, setType] = (0, import_react.useState)(typeOptions[0]);
      const [address, setAddress] = (0, import_react.useState)(null);
      const [keywords, setKeywords] = (0, import_react.useState)(keywordOptions);
      const [olek, setOlek] = (0, import_react.useState)(olekOptions[0]);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "T\xFC\xFCp", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "T\xFC\xFCp",
            value: type,
            onChange: setType,
            renderValue: (v) => v ? v.label : "\u2014",
            children: ({ value, onChange, commit }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              select_exports.Select,
              {
                id: "type-select",
                size: "small",
                label: "T\xFC\xFCp",
                hideLabel: true,
                options: typeOptions,
                value,
                onChange: (next) => {
                  onChange(next);
                  commit();
                }
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Aadress", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "Aadress",
            value: address,
            onChange: setAddress,
            placeholder: "Sisesta aadress",
            renderValue: (v) => v ? v.label : "",
            children: ({ value, onChange, commit }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              select_exports.Select,
              {
                id: "address-select",
                size: "small",
                label: "Aadress",
                hideLabel: true,
                options: addressOptions,
                value,
                onChange: (next) => {
                  onChange(next);
                  commit();
                }
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "M\xE4rks\xF5nad", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "M\xE4rks\xF5nad",
            value: keywords,
            onChange: setKeywords,
            renderValue: (v) => v.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex flex-wrap gap-1", children: v.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tag_exports.Tag, { color: "primary", children: option.label }, option.value)) }) : "\u2014",
            children: ({ value, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              select_exports.Select,
              {
                id: "keywords-select",
                size: "small",
                label: "M\xE4rks\xF5nad",
                hideLabel: true,
                multiple: true,
                options: keywordOptions,
                value,
                onChange: (next) => onChange(next ?? [])
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Olek", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "Olek",
            value: olek,
            onChange: setOlek,
            renderValue: (v) => v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: olekColor[v.value], children: v.label }) : "\u2014",
            children: ({ value, onChange, commit }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              select_exports.Select,
              {
                id: "olek-select",
                size: "small",
                label: "Olek",
                hideLabel: true,
                options: olekOptions,
                value,
                onChange: (next) => {
                  onChange(next);
                  commit();
                }
              }
            )
          }
        ) })
      ] }) });
    }
  };
  var EditIconPosition = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 6, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { alignItems: "center", gutterX: 3, gutterY: 4, children: ["inline", "end"].map((align) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.default.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: align === "inline" ? "Inline" : "End" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fields, { children: alignFields.map((field, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: field.label, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        NameInline,
        {
          id: `ie-align-${align}-${index}`,
          label: field.label,
          defaultValue: field.value,
          editIconPosition: align
        }
      ) }, field.label)) }) })
    ] }, align)) }) })
  };
  var Responsiveness = {
    args: {
      label: "Nimi",
      placeholder: "\u2014",
      size: "default",
      editIconPosition: "end",
      readOnly: false
    },
    parameters: {
      viewport: { defaultViewport: "mobile1" }
    },
    render: function ResponsiveField(args) {
      const [name, setName] = (0, import_react.useState)("Mari Maasikas");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        inline_edit_exports.InlineEdit,
        {
          label: args.label,
          placeholder: args.placeholder,
          size: args.size,
          editIconPosition: args.editIconPosition,
          readOnly: args.readOnly,
          fitContent: args.fitContent,
          value: name,
          onChange: setName,
          renderValue: (v) => v,
          children: ({ value, onChange, size: editorSize }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: "ie-mobile", label: args.label, hideLabel: true, value, onChange, size: editorSize })
        }
      );
    }
  };
  var States = {
    parameters: {
      pseudo: {
        hover: ["#ie-state-hover-text", "#ie-state-hover-select"],
        focusVisible: ["#ie-state-focus-text", "#ie-state-focus-select"],
        focus: ["#ie-state-active-text-input", '#ie-state-active-cell [class*="select__control"]']
      }
    },
    decorators: [
      function KeyboardIntent(Story) {
        import_react.default.useEffect(() => {
          const root = document.documentElement;
          const previous = root.getAttribute("data-whatintent");
          const forceKeyboard = () => {
            if (root.getAttribute("data-whatintent") !== "keyboard") {
              root.setAttribute("data-whatintent", "keyboard");
            }
          };
          forceKeyboard();
          const observer = new MutationObserver(forceKeyboard);
          observer.observe(root, { attributes: true, attributeFilter: ["data-whatintent"] });
          return () => {
            observer.disconnect();
            if (previous === null) root.removeAttribute("data-whatintent");
            else root.setAttribute("data-whatintent", previous);
          };
        }, []);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {});
      }
    ],
    render: function States2() {
      const breakpoint = (0, helpers_exports.useBreakpoint)();
      const isMobile = (0, helpers_exports.isBreakpointBelow)(breakpoint, "md");
      const stateRows = [
        { label: "Default", key: "default" },
        { label: "Hover", key: "hover" },
        { label: "Active", key: "active", shared: { defaultEditing: true } },
        {
          label: "Error",
          key: "invalid",
          textProps: { helper: { text: "Nimi sisaldab lubamatuid m\xE4rke", type: "error" } },
          selectProps: { helper: { text: "Palun vali sobiv v\xE4\xE4rtus", type: "error" } }
        },
        { label: "Focus", key: "focus" },
        { label: "Read-only", key: "readonly", shared: { readOnly: true } },
        { label: "Disabled", key: "disabled", shared: { disabled: true } }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 8, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
        !isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 2, children: "\xA0" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Text field" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { md: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Select" }) })
        ] }),
        stateRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutterY: 2, md: { gutterY: 0 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, md: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: row.label }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, md: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: `ie-state-${row.key}-text`, ...row.shared, ...row.textProps }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, md: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: `ie-state-${row.key}-cell`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryInline, { id: `ie-state-${row.key}-select`, ...row.shared, ...row.selectProps }) }) })
        ] }, row.key))
      ] }) });
    }
  };
  var ReadOnly = {
    name: "Read-only",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Kuup\xE4ev", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: "ro-date", label: "Kuup\xE4ev", defaultValue: "22.03.2026", readOnly: true }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Kellaaeg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: "ro-time", label: "Kellaaeg", defaultValue: "08:00", readOnly: true }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Kohtade arv", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: "ro-seats", label: "Kohtade arv", defaultValue: "2", readOnly: true }) })
    ] }) })
  };
  var CancelEdit = {
    name: "Cancel edit",
    render: function CancelEdit2() {
      const [name, setName] = (0, import_react.useState)("Mari Maasikas");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fields, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Nimi", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(inline_edit_exports.InlineEdit, { label: "Nimi", value: name, onChange: setName, renderValue: (v) => v || "\u2014", children: ({ value, onChange, size }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_exports.TextField, { id: "cancel-name", label: "Nimi", hideLabel: true, value, onChange, size }) }) }) }) });
    }
  };
  var Disabled = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Kuup\xE4ev", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: "dis-date", label: "Kuup\xE4ev", defaultValue: "22.03.2026", disabled: true }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Kellaaeg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: "dis-time", label: "Kellaaeg", defaultValue: "08:00", disabled: true }) })
    ] }) })
  };
  var Invalid = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fields, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "E-post", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      NameInline,
      {
        id: "inv-email",
        label: "E-post",
        defaultValue: "mari.maasikas",
        helper: { text: "Sisesta korrektne e-posti aadress", type: "error" }
      }
    ) }) }) })
  };
  var Placeholder = {
    render: function PlaceholderFields() {
      const [address, setAddress] = (0, import_react.useState)(null);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Nimi", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameInline, { id: "ph-name", label: "Nimi", defaultValue: "", placeholder: "Sisesta nimi" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Aadress", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "Aadress",
            value: address,
            onChange: setAddress,
            placeholder: "Sisesta aadress",
            renderValue: (v) => v ? v.label : "",
            children: ({ value, onChange, commit }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              select_exports.Select,
              {
                id: "ph-address",
                size: "small",
                label: "Aadress",
                hideLabel: true,
                options: addressOptions,
                value,
                onChange: (next) => {
                  onChange(next);
                  commit();
                }
              }
            )
          }
        ) })
      ] }) });
    }
  };
  var SupportedControls = {
    name: "Supported controls",
    render: function SupportedControlsExample() {
      const [date, setDate] = (0, import_react.useState)(new Date(2026, 2, 22));
      const [seats, setSeats] = (0, import_react.useState)(2);
      const [note, setNote] = (0, import_react.useState)("Palun helista enne saabumist");
      const [transport, setTransport] = (0, import_react.useState)("bus");
      const [extras, setExtras] = (0, import_react.useState)(["breakfast"]);
      const transportLabels = { bus: "Buss", train: "Rong" };
      const extrasLabels = { breakfast: "Hommikus\xF6\xF6k", parking: "Parkimine" };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, { width: 5, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fields, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Kuup\xE4ev", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "Kuup\xE4ev",
            value: date,
            onChange: setDate,
            renderValue: (v) => v ? v.toLocaleDateString("et-EE", { day: "2-digit", month: "2-digit", year: "numeric" }) : "\u2014",
            children: ({ value, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              date_field_exports.DateField,
              {
                id: "ie-supported-date",
                label: "Kuup\xE4ev",
                inputProps: { hideLabel: true },
                selected: value,
                onSelect: (next) => onChange(next)
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Kohtade arv", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "Kohtade arv",
            value: seats,
            onChange: setSeats,
            renderValue: (v) => v === void 0 ? "\u2014" : String(v),
            children: ({ value, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              number_field_exports.NumberField,
              {
                id: "ie-supported-seats",
                label: "Kohtade arv",
                hideLabel: true,
                size: "small",
                value,
                onChange
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "M\xE4rkus", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(inline_edit_exports.InlineEdit, { label: "M\xE4rkus", value: note, onChange: setNote, renderValue: (v) => v || "\u2014", children: ({ value, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textarea_exports.Textarea, { id: "ie-supported-note", label: "M\xE4rkus", hideLabel: true, value, onChange }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Transport", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "Transport",
            value: transport,
            onChange: setTransport,
            renderValue: (v) => transportLabels[v] ?? "\u2014",
            children: ({ value, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(radio_exports.Radio.Group, { id: "ie-supported-transport", label: "Transport", hideLabel: true, value, onChange, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_exports.Radio, { value: "bus", label: "Buss" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(radio_exports.Radio, { value: "train", label: "Rong" })
            ] })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, { label: "Lisad", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          inline_edit_exports.InlineEdit,
          {
            label: "Lisad",
            value: extras,
            onChange: setExtras,
            renderValue: (v) => v.map((x) => extrasLabels[x]).join(", ") || "\u2014",
            children: ({ value, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(checkbox_exports.Checkbox.Group, { id: "ie-supported-extras", label: "Lisad", hideLabel: true, value, onChange, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_exports.Checkbox, { value: "breakfast", label: "Hommikus\xF6\xF6k" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(checkbox_exports.Checkbox, { value: "parking", label: "Parkimine" })
            ] })
          }
        ) })
      ] }) });
    }
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React2 = __toESM(require_react());
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
      if (Component) render = () => React2.createElement(Component, args);
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

  // InlineEdit.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(inline_edit_stories_exports, "Default", G, B);
  var Type3 = compose(inline_edit_stories_exports, "Type", G, B);
  var Sizes2 = compose(inline_edit_stories_exports, "Sizes", G, B);
  var ValueType3 = compose(inline_edit_stories_exports, "ValueType", G, B);
  var EditIconPosition2 = compose(inline_edit_stories_exports, "EditIconPosition", G, B);
  var Responsiveness2 = compose(inline_edit_stories_exports, "Responsiveness", G, B);
  var States3 = compose(inline_edit_stories_exports, "States", G, B);
  var ReadOnly2 = compose(inline_edit_stories_exports, "ReadOnly", G, B);
  var CancelEdit3 = compose(inline_edit_stories_exports, "CancelEdit", G, B);
  var Disabled2 = compose(inline_edit_stories_exports, "Disabled", G, B);
  var Invalid2 = compose(inline_edit_stories_exports, "Invalid", G, B);
  var Placeholder2 = compose(inline_edit_stories_exports, "Placeholder", G, B);
  var SupportedControls2 = compose(inline_edit_stories_exports, "SupportedControls", G, B);
  return __toCommonJS(InlineEdit_preview_exports);
})();
