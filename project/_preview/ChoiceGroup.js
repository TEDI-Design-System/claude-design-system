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

  // ChoiceGroup.preview.tsx
  var ChoiceGroup_preview_exports = {};
  __export(ChoiceGroup_preview_exports, {
    Checkbox: () => Checkbox2,
    CheckboxCard: () => CheckboxCard2,
    CheckboxCardWithIcon: () => CheckboxCardWithIcon2,
    CheckboxRow: () => CheckboxRow2,
    CustomItemHTMLLabels: () => CustomItemHTMLLabels2,
    CustomItemLabels: () => CustomItemLabels2,
    CustomLabel: () => CustomLabel2,
    Radio: () => Radio2,
    RadioCardSegmented: () => RadioCardSegmented2,
    RadioCardSeparated: () => RadioCardSeparated2,
    RadioCardWithIcon: () => RadioCardWithIcon2,
    RadioRow: () => RadioRow2,
    Responsive: () => Responsive2,
    WithDefaultValue: () => WithDefaultValue2,
    WithError: () => WithError2,
    WithExtraContent: () => WithExtraContent2,
    WithIndeterminate: () => WithIndeterminate2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/choice-group/choice-group.stories.tsx
  var choice_group_stories_exports = {};
  __export(choice_group_stories_exports, {
    Checkbox: () => Checkbox,
    CheckboxCard: () => CheckboxCard,
    CheckboxCardWithIcon: () => CheckboxCardWithIcon,
    CheckboxRow: () => CheckboxRow,
    CustomItemHTMLLabels: () => CustomItemHTMLLabels,
    CustomItemLabels: () => CustomItemLabels,
    CustomLabel: () => CustomLabel,
    Radio: () => Radio,
    RadioCardSegmented: () => RadioCardSegmented,
    RadioCardSeparated: () => RadioCardSeparated,
    RadioCardWithIcon: () => RadioCardWithIcon,
    RadioRow: () => RadioRow,
    Responsive: () => Responsive,
    WithDefaultValue: () => WithDefaultValue,
    WithError: () => WithError,
    WithExtraContent: () => WithExtraContent,
    WithIndeterminate: () => WithIndeterminate,
    default: () => choice_group_stories_default
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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var separator_default = ns6["Separator"] ?? ns6;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/textfield/textfield.tsx
  var textfield_exports = {};
  __export(textfield_exports, {
    default: () => textfield_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(textfield_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var textfield_default = ns7["TextField"] ?? ns7;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/choice-group/choice-group.tsx
  var choice_group_exports = {};
  __export(choice_group_exports, {
    default: () => choice_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(choice_group_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var choice_group_default = ns8["ChoiceGroup"] ?? ns8;

  // src/tedi/components/form/choice-group/choice-group.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: choice_group_default,
    title: "TEDI-Ready/Components/Form/ChoiceGroup/ChoiceGroup",
    subcomponents: { "ChoiceGroup.Item": choice_group_default.Item },
    parameters: {
      docs: {
        source: {
          transform: (code) => {
            return code.replaceAll("ChoiceGroupItem", "ChoiceGroup.Item");
          }
        }
      },
      status: {
        type: [
          "deprecated",
          { name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }
        ]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      // ChoiceGroup is deprecated and slated for removal — skip the a11y gate for its stories.
      a11y: { test: "off" }
    }
  };
  var choice_group_stories_default = meta;
  var generateItems = ({
    index,
    inputType = "radio",
    variant = "primary",
    withHelper = false,
    withIndicator = false,
    tooltip = false,
    colProps,
    layout,
    justifyContent,
    withIcons = false
  }) => {
    const baseId = withIcons ? `icon-${inputType}-${variant}` : `${inputType}-${variant}`;
    const icons = withIcons ? ["train", "directions_walk", "directions_car"] : [];
    return [1, 2, 3].map((i) => {
      const itemIndex = index * 10 + i;
      const suffix = `${withHelper}-${withIndicator}-${layout ?? "default"}`;
      let label = "Text";
      if (withIcons) {
        label = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: icons[i - 1], color: "inherit", display: "inline" }),
          " Text"
        ] });
      }
      return {
        id: `${baseId}-value-${itemIndex}-${suffix}`,
        label,
        value: `${baseId}-value-${itemIndex}`,
        ...withHelper && {
          helper: {
            text: "Description",
            ...i === 3 && { type: "error" }
          }
        },
        disabled: i === 3,
        colProps,
        tooltip: tooltip ? "Tooltip" : void 0,
        justifyContent,
        ...withIcons && i === 1 && { defaultChecked: true }
      };
    });
  };
  var renderGroup = (inputType, variant, withHelper, withIndicator, layout, index, justifyContent = "start", withIcons = false) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      choice_group_default,
      {
        color: "primary",
        id: `${withIcons ? "icon-" : ""}${inputType}-${variant}-${layout}-no-helper-${index}`,
        inputType,
        items: generateItems({
          index,
          inputType,
          variant: "primary",
          withHelper,
          withIndicator,
          layout,
          justifyContent,
          withIcons
        }),
        label: "Filter",
        hideLabel: true,
        name: `${withIcons ? "icon-" : ""}${inputType}-${variant}-${layout}-no-helper-${index}`,
        showIndicator: withIndicator,
        variant: "card",
        layout
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      choice_group_default,
      {
        color: "secondary",
        id: `${withIcons ? "icon-" : ""}${inputType}-${variant}-${layout}-with-helper-${index}`,
        inputType,
        items: generateItems({
          index: index + 1,
          inputType,
          variant: "secondary",
          withHelper,
          withIndicator,
          layout,
          justifyContent,
          withIcons
        }),
        label: "Filter",
        hideLabel: true,
        name: `${withIcons ? "icon-" : ""}${inputType}-${variant}-${layout}-with-helper-${index}`,
        showIndicator: withIndicator,
        variant: "card",
        layout
      }
    ) })
  ] }, `${withIcons ? "icon-" : ""}${inputType}-${variant}-${layout}-${index}`);
  var renderChoiceGroups = (inputType, layout, withIcons = false) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Primary" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Secondary" }) })
    ] }),
    renderGroup(inputType, "primary", false, true, layout, 1, "start", withIcons),
    renderGroup(inputType, "primary", true, true, layout, 2, "start", withIcons),
    inputType !== "radio" || layout !== "separated" && renderGroup(inputType, "primary", false, false, layout, 3, "start", withIcons),
    inputType !== "radio" || layout !== "separated" && renderGroup(inputType, "primary", true, false, layout, 4, "start", withIcons)
  ] });
  var Radio = {
    argTypes: {
      ...subcomponentArgTypes(choice_group_default.Item, {
        category: "ChoiceGroup.Item",
        prefix: "item",
        include: ["variant", "color", "layout", "showIndicator", "disabled", "justifyContent", "direction"]
      })
    },
    args: {
      label: "ChoiceGroup with radios:",
      id: "example-1",
      defaultValue: [],
      inputType: "radio",
      name: "radio-1",
      item__variant: "card",
      item__showIndicator: true,
      item__layout: "separated"
    },
    render: (args) => {
      const itemProps = getSubcomponentProps(args, "item");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        choice_group_default,
        {
          ...getPrimaryComponentProps(args),
          items: generateItems({ index: 0 }).map((item) => ({ ...item, ...itemProps }))
        }
      );
    }
  };
  var RadioRow = {
    args: {
      label: "ChoiceGroup with radios:",
      id: "example-1.2",
      defaultValue: [],
      inputType: "radio",
      name: "radio-1.2",
      direction: "row",
      items: generateItems({ index: 1 })
    }
  };
  var Checkbox = {
    args: {
      label: "ChoiceGroup with checkboxes:",
      id: "example-2",
      defaultValue: [],
      inputType: "checkbox",
      name: "check-2",
      items: generateItems({ index: 2 })
    }
  };
  var CheckboxRow = {
    args: {
      label: "ChoiceGroup with checkboxes:",
      id: "example-2.1",
      defaultValue: [],
      inputType: "checkbox",
      name: "check-2.1",
      direction: "row",
      items: generateItems({ index: 33 })
    }
  };
  var RadioCardSegmented = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { children: renderChoiceGroups("radio", "segmented") });
  var RadioCardSeparated = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { children: renderChoiceGroups("radio", "separated") });
  var CheckboxCard = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { children: renderChoiceGroups("checkbox", "separated") });
  var RadioCardWithIcon = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Primary" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Secondary" }) })
      ] }),
      renderGroup("radio", "primary", false, true, "segmented", 1, "start", true),
      renderGroup("radio", "secondary", true, true, "segmented", 2, "start", true)
    ] })
  };
  var CheckboxCardWithIcon = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Primary" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Secondary" }) })
      ] }),
      renderGroup("checkbox", "primary", false, true, "separated", 5, "start", true),
      renderGroup("checkbox", "secondary", true, true, "separated", 6, "start", true)
    ] })
  };
  var WithError = {
    render: function Render(args) {
      const [selectedValues, setSelectedValues] = (0, import_react.useState)([]);
      const hasError = Array.isArray(selectedValues) && selectedValues.length === 0;
      const handleChange = (value) => {
        setSelectedValues(value);
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        choice_group_default,
        {
          ...args,
          value: selectedValues,
          onChange: handleChange,
          helper: hasError ? {
            text: "Please select at least one option to continue.",
            type: "error",
            id: "error-helper"
          } : void 0
        }
      );
    },
    args: {
      label: "Select at least one option:",
      id: "example-with-error",
      inputType: "checkbox",
      name: "with-error",
      items: [
        {
          id: "error-option-1",
          label: "Option 1",
          value: "option-1"
        },
        {
          id: "error-option-2",
          label: "Option 2",
          value: "option-2"
        },
        {
          id: "error-option-3",
          label: "Option 3",
          value: "option-3"
        }
      ]
    }
  };
  var WithDefaultValue = {
    args: {
      ...Checkbox.args,
      label: "I have the second item selected by default:",
      items: generateItems({ index: 13 }),
      defaultValue: ["radio-primary-value-132-false-false-undefined"]
    }
  };
  var WithIndeterminate = {
    args: {
      ...Checkbox.args,
      label: "I have an indeterminate checkbox:",
      items: generateItems({ index: 14 }),
      indeterminateCheck: (state) => state === "all" ? "Unselect all" : "Select all"
    }
  };
  var WithExtraContent = {
    args: {
      inputType: "checkbox",
      label: "I have extra content after each option:",
      id: "example-extra-content",
      name: "extra-content",
      items: [
        {
          id: "extra-content-1",
          label: "Basic plan",
          value: "basic",
          helper: { text: "Includes 5GB storage and basic support" }
        },
        {
          id: "extra-content-2",
          label: "Pro plan",
          value: "pro",
          helper: { text: "Includes 20GB storage and priority support" }
        },
        {
          id: "extra-content-3",
          label: "Enterprise plan",
          value: "enterprise",
          helper: {
            text: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_default, { id: "success-textfield-1", label: "Field 1" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(textfield_default, { id: "success-textfield-2", label: "Field 2" })
            ] }) }) })
          }
        }
      ]
    }
  };
  var Responsive = {
    args: {
      inputType: "radio",
      label: "Choose an option:",
      variant: "card",
      showIndicator: true,
      layout: "separated",
      color: "primary",
      direction: "row",
      lg: { layout: "segmented", direction: "row", color: "secondary" },
      items: [
        {
          id: "radio-card-1",
          label: "Option 1",
          value: "value-1",
          sm: { justifyContent: "start" },
          lg: { justifyContent: "center", colProps: { width: "auto", grow: 1 } }
        },
        {
          id: "radio-card-2",
          label: "Option 2",
          value: "value-2",
          defaultChecked: true,
          sm: { justifyContent: "start" },
          lg: { justifyContent: "center", colProps: { width: "auto", grow: 1 } }
        },
        {
          id: "radio-card-3",
          label: "Option 3",
          value: "value-3",
          sm: { justifyContent: "start" },
          lg: { justifyContent: "center", colProps: { width: "auto", grow: 1 } }
        }
      ]
    }
  };
  var CustomLabel = {
    args: {
      inputType: "checkbox",
      direction: "row",
      label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["bold", "italic"], color: "brand", children: "Custom label" }),
      id: "custom-label",
      name: "custom-label",
      items: generateItems({ index: 16 })
    }
  };
  var CustomItemLabels = {
    args: {
      inputType: "radio",
      label: "Custom item labels:",
      id: "custom-item-labels",
      name: "custom-item-labels",
      items: [
        {
          id: "radio-custom-item-labels-1",
          label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            "Lorem ipsum dolor sit, amet",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                element: "span",
                axis: "vertical",
                color: "secondary",
                display: "inline",
                dotSize: "small",
                spacing: 0.5,
                variant: "dot-only",
                "aria-hidden": "true"
              }
            ),
            "consectetur adipisicing elit."
          ] }),
          value: "radio-custom-item-labels-1"
        },
        {
          id: "radio-custom-item-labels-2",
          label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { display: "inline", name: "error", color: "danger", "aria-hidden": "true" }),
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          ] }),
          value: "radio-custom-item-labels-2",
          defaultChecked: true
        },
        {
          id: "radio-custom-item-labels-3",
          label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { display: "inline", name: "check", color: "success", "aria-hidden": "true" }),
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          ] }),
          value: "radio-custom-item-labels-3"
        },
        {
          id: "radio-custom-item-labels-4",
          label: "Lorem ipsum",
          value: "radio-custom-item-labels-4"
        }
      ]
    }
  };
  var CustomItemHTMLLabels = {
    args: {
      inputType: "checkbox",
      label: "Custom item HTML labels:",
      id: "custom-item-html-labels",
      name: "custom-item-html-labels",
      items: [
        {
          id: "checkbox-custom-item-labels-1",
          label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                backgroundColor: "var(--tedi-primary-600)",
                color: "var(--tedi-neutral-100)",
                padding: "0 8px",
                borderRadius: "5px"
              },
              children: "Lorem ipsum 1"
            }
          ),
          value: "checkbox-custom-item-labels-1"
        },
        {
          id: "checkbox-custom-item-labels-2",
          label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "check", color: "success", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Lorem ipsum 2" })
          ] }),
          value: "checkbox-custom-item-labels-2",
          defaultChecked: true
        },
        {
          id: "checkbox-custom-item-labels-3",
          label: "Lorem ipsum 3",
          value: "checkbox-custom-item-labels-3"
        },
        {
          id: "checkbox-custom-item-labels-4",
          label: "Lorem ipsum 4",
          value: "checkbox-custom-item-labels-4"
        }
      ]
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

  // ChoiceGroup.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Radio2 = compose(choice_group_stories_exports, "Radio", G, B);
  var RadioRow2 = compose(choice_group_stories_exports, "RadioRow", G, B);
  var Checkbox2 = compose(choice_group_stories_exports, "Checkbox", G, B);
  var CheckboxRow2 = compose(choice_group_stories_exports, "CheckboxRow", G, B);
  var RadioCardSegmented2 = compose(choice_group_stories_exports, "RadioCardSegmented", G, B);
  var RadioCardSeparated2 = compose(choice_group_stories_exports, "RadioCardSeparated", G, B);
  var CheckboxCard2 = compose(choice_group_stories_exports, "CheckboxCard", G, B);
  var RadioCardWithIcon2 = compose(choice_group_stories_exports, "RadioCardWithIcon", G, B);
  var CheckboxCardWithIcon2 = compose(choice_group_stories_exports, "CheckboxCardWithIcon", G, B);
  var WithError2 = compose(choice_group_stories_exports, "WithError", G, B);
  var WithDefaultValue2 = compose(choice_group_stories_exports, "WithDefaultValue", G, B);
  var WithIndeterminate2 = compose(choice_group_stories_exports, "WithIndeterminate", G, B);
  var WithExtraContent2 = compose(choice_group_stories_exports, "WithExtraContent", G, B);
  var Responsive2 = compose(choice_group_stories_exports, "Responsive", G, B);
  var CustomLabel2 = compose(choice_group_stories_exports, "CustomLabel", G, B);
  var CustomItemLabels2 = compose(choice_group_stories_exports, "CustomItemLabels", G, B);
  var CustomItemHTMLLabels2 = compose(choice_group_stories_exports, "CustomItemHTMLLabels", G, B);
  return __toCommonJS(ChoiceGroup_preview_exports);
})();
