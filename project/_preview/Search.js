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

  // sb-inert:storybook/test
  var require_test = __commonJS({
    "sb-inert:storybook/test"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      var inert = new Proxy(function() {
      }, {
        get: function(t, k) {
          if (k === "then") return void 0;
          if (k === "prototype") return t.prototype;
          if (k === Symbol.toPrimitive || k === "toString" || k === "valueOf") return function() {
            return "";
          };
          return inert;
        },
        apply: function() {
          return inert;
        },
        construct: function() {
          return {};
        }
      });
      var named = {};
      "fn action actions expect userEvent within waitFor screen fireEvent spyOn".split(" ").forEach(function(k) {
        named[k] = inert;
      });
      var passthrough = function(p) {
        return p && p.children !== void 0 ? p.children : null;
      };
      Object.assign(passthrough, named);
      module.exports = new Proxy(passthrough, { get: function(t, k) {
        if (k === "then" || k === "__esModule") return void 0;
        if (k === "prototype") return t.prototype;
        return k in named ? named[k] : inert;
      } });
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

  // Search.preview.tsx
  var Search_preview_exports = {};
  __export(Search_preview_exports, {
    AccessibilityFocused: () => AccessibilityFocused2,
    Autocomplete: () => Autocomplete2,
    AutocompleteAsync: () => AutocompleteAsync2,
    AutocompleteCustomRow: () => AutocompleteCustomRow2,
    AutocompleteDisabledSuggestions: () => AutocompleteDisabledSuggestions2,
    AutocompleteFreeText: () => AutocompleteFreeText2,
    AutocompleteHideOnScroll: () => AutocompleteHideOnScroll2,
    AutocompleteWithFooter: () => AutocompleteWithFooter2,
    Clearable: () => Clearable2,
    ClearableWithButton: () => ClearableWithButton2,
    Default: () => Default2,
    Placeholder: () => Placeholder2,
    Sizes: () => Sizes2,
    States: () => States2,
    WithHint: () => WithHint2,
    WithResultAndActions: () => WithResultAndActions2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/search/search.stories.tsx
  var search_stories_exports = {};
  __export(search_stories_exports, {
    AccessibilityFocused: () => AccessibilityFocused,
    Autocomplete: () => Autocomplete,
    AutocompleteAsync: () => AutocompleteAsync,
    AutocompleteCustomRow: () => AutocompleteCustomRow,
    AutocompleteDisabledSuggestions: () => AutocompleteDisabledSuggestions,
    AutocompleteFreeText: () => AutocompleteFreeText,
    AutocompleteHideOnScroll: () => AutocompleteHideOnScroll,
    AutocompleteWithFooter: () => AutocompleteWithFooter,
    Clearable: () => Clearable,
    ClearableWithButton: () => ClearableWithButton,
    Default: () => Default,
    Placeholder: () => Placeholder,
    Sizes: () => Sizes,
    States: () => States,
    WithHint: () => WithHint,
    WithResultAndActions: () => WithResultAndActions,
    default: () => search_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);
  var import_test = __toESM(require_test(), 1);

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var card_default = ns3["Card"] ?? ns3;

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var vertical_spacing_default = ns6["VerticalSpacing"] ?? ns6;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/option-content/option-content.tsx
  var option_content_exports = {};
  __export(option_content_exports, {
    default: () => option_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(option_content_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var option_content_default = ns7["OptionContent"] ?? ns7;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var separator_default = ns8["Separator"] ?? ns8;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/search/search.tsx
  var search_exports = {};
  __export(search_exports, {
    default: () => search_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(search_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var search_default = ns9["Search"] ?? ns9;

  // src/tedi/components/form/search/search.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: search_exports.Search,
    title: "TEDI-Ready/Components/Form/Search",
    parameters: {
      a11y: {
        test: "todo"
      },
      status: {
        type: [{ name: "breakpointSupport", url: "?path=/docs/helpers-usebreakpointprops--usebreakpointprops" }]
      },
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=4620-82860&m=dev"
      }
    }
  };
  var search_stories_default = meta;
  var stateArray = ["Default", "Hover", "Focus", "Active", "Disabled"];
  var sizeArray = ["small", "default", "large"];
  var TemplateColumn = (args) => {
    const { array, property, id = "search", ...textFieldProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "example-list", children: array.map((value, key) => {
      const baseId = `${id}-${property}-${value}`;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { className: `${key === array.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, sm: 2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: value ? value.charAt(0).toUpperCase() + value.slice(1) : "" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: 12, sm: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            search_exports.Search,
            {
              ...textFieldProps,
              ...{ [property]: value },
              id: `${baseId}-plain`,
              ariaLabel: `Search \u2013 ${value} \u2013 plain`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            search_exports.Search,
            {
              ...textFieldProps,
              ...{ [property]: value },
              id: `${baseId}-icon`,
              ariaLabel: `Search \u2013 ${value} \u2013 icon button`,
              button: { icon: "search", size: value, "aria-label": "Otsi" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            search_exports.Search,
            {
              ...textFieldProps,
              ...{ [property]: value },
              id: `${baseId}-button`,
              ariaLabel: `Search \u2013 ${value} \u2013 button`,
              button: { iconLeft: "search", children: "Otsi", size: value }
            }
          )
        ] }) })
      ] }, key);
    }) });
  };
  var TemplateColumnWithStates = (args) => {
    const { array, id = "search", ...textFieldProps } = args;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { children: [
      array.map((state, index) => {
        const stateId = `${id}-${state.toLowerCase()}`;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: state }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            search_exports.Search,
            {
              ...textFieldProps,
              id: stateId,
              disabled: state === "Disabled",
              ariaLabel: `Search \u2013 ${state}`
            }
          ) })
        ] }, index);
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Success" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          search_exports.Search,
          {
            ...textFieldProps,
            id: `${id}-success`,
            ariaLabel: "Search \u2013 Success",
            helper: { text: "Tagasiside tekst", type: "valid" }
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { lg: 2, xs: 12, className: "flex align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: "Error" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          search_exports.Search,
          {
            ...textFieldProps,
            id: `${id}-error`,
            ariaLabel: "Search \u2013 Error",
            helper: { text: "Tagasiside tekst", type: "error" }
          }
        ) })
      ] })
    ] });
  };
  var Default = {
    args: {
      id: "search-default",
      label: "Otsing",
      placeholder: "Otsi nime v\xF5i m\xE4rks\xF5na j\xE4rgi"
    }
  };
  var Sizes = {
    render: TemplateColumn,
    args: {
      id: "search-sizes",
      label: "Otsing",
      property: "size",
      array: sizeArray
    },
    parameters: { a11y: { test: "error" } }
  };
  var States = {
    render: TemplateColumnWithStates,
    args: {
      array: stateArray,
      label: "Otsing",
      id: "search-states"
    },
    parameters: {
      a11y: { test: "error" },
      pseudo: {
        hover: "#search-states-hover",
        focus: "#search-states-focus",
        active: "#search-states-active"
      }
    }
  };
  var Placeholder = {
    args: {
      id: "search-placeholder",
      label: "Otsing",
      placeholder: "Tr\xFCki midagi\u2026"
    }
  };
  var Clearable = {
    args: {
      id: "search-clearable",
      label: "Otsing",
      isClearable: true,
      defaultValue: "Lorem ipsum"
    }
  };
  var ClearableWithButton = {
    name: "Clearable with button",
    args: {
      id: "search-clearable-button",
      label: "Otsing",
      isClearable: true,
      defaultValue: "Lorem ipsum",
      button: { iconLeft: "search", children: "Otsi" }
    }
  };
  var WithHint = {
    args: {
      id: "search-with-hint",
      label: "Otsing",
      helper: { text: "Vihjetekst" }
    }
  };
  var WithResultAndActions = {
    name: "With result and actions",
    parameters: { a11y: { test: "error" } },
    play: async ({ canvasElement }) => {
      const canvas = (0, import_test.within)(canvasElement);
      await import_test.userEvent.type(canvas.getByRole("searchbox"), "49504080254");
      await canvas.findByText("Laura Kassisaba");
    },
    render: function WithResultAndActionsExample() {
      const [value, setValue] = (0, import_react.useState)("");
      const hasQuery = value.trim().length > 0;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          search_exports.Search,
          {
            id: "search-result-actions",
            label: "Otsi",
            placeholder: "Sisesta isikukood\u2026",
            value,
            onChange: setValue
          }
        ),
        hasQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "link", onClick: () => setValue("Laura Kassisaba"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(option_content_exports.OptionContent.Label, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: "Laura Kassisaba" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                color: "secondary",
                display: "inline",
                dotSize: "small",
                element: "span",
                spacing: 0.5,
                variant: "dot-only"
              }
            ),
            "49504080254"
          ] }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, { color: "secondary" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutter: 2, justifyContent: "center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", size: "small", onClick: () => setValue(""), children: "Isik teadmata" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", size: "small", onClick: () => setValue(""), children: "Puudub Eesti isikukood" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: ["small", "center"], element: "p", children: "Rahvastikuregistri andmete p\xE4ringuks sisesta isikukood t\xE4ismahus" })
        ] }) }) })
      ] });
    }
  };
  var AccessibilityFocused = {
    name: "Accessibility: No Visible Label",
    args: {
      id: "search-accessible",
      placeholder: "Otsi tooteid v\xF5i teenuseid...",
      ariaLabel: "Otsi tooteid v\xF5i teenuseid"
    },
    parameters: {
      docs: {
        description: {
          story: `
Always prefer a native \`<label>\` element for form controls.
If the label must not be visible in the UI, hide it visually using an \`sr-only\` (or equivalent) class rather than removing it. This preserves correct semantics and provides the most reliable experience for screen reader users.
Use \`ariaLabel\` only as a fallback when a real \`<label>\` cannot be rendered. This follows WCAG 2.1 and EN 301 549 9.2.5.3.
          `
        }
      }
    }
  };
  var PEOPLE = [
    { value: "mari", label: "Mari Maasikas", description: "Tootejuht" },
    { value: "marelle", label: "Marelle Mets", description: "Disainer" },
    { value: "marjanne", label: "Marjanne Meri", description: "Arendaja" },
    { value: "mart", label: "Mart Mesi", description: "Anal\xFC\xFCtik" },
    { value: "martin", label: "Martin Saar", description: "Arendaja" },
    { value: "kalle", label: "Kalle Kask", description: "Testija" },
    { value: "kati", label: "Kati Kuusk", description: "Tootejuht" },
    { value: "tonu", label: "T\xF5nu Tamm", description: "Disainer" },
    { value: "liisa", label: "Liisa Lepp", description: "Arendaja" },
    { value: "jaan", label: "Jaan J\xE4rv", description: "Anal\xFC\xFCtik" }
  ];
  var filterPeople = (query) => PEOPLE.filter((person) => person.label.toLowerCase().includes(query.trim().toLowerCase()));
  var Autocomplete = {
    parameters: { a11y: { test: "error" } },
    render: function AutocompleteExample() {
      const [value, setValue] = (0, import_react.useState)("");
      const suggestions = value.trim() ? filterPeople(value) : [];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        search_exports.Search,
        {
          id: "search-autocomplete-default",
          label: "Otsi",
          placeholder: "Hakka nime tr\xFCkkima\u2026",
          value,
          onChange: setValue,
          suggestions,
          onSuggestionSelect: (suggestion) => setValue(suggestion.label)
        }
      );
    }
  };
  var AutocompleteCustomRow = {
    name: "Autocomplete: custom row",
    parameters: { a11y: { test: "error" } },
    render: function AutocompleteCustomRowExample() {
      const [value, setValue] = (0, import_react.useState)("");
      const suggestions = value.trim() ? filterPeople(value) : [];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        search_exports.Search,
        {
          id: "search-autocomplete-custom-row",
          label: "Otsi",
          placeholder: "Hakka nime tr\xFCkkima\u2026",
          value,
          onChange: setValue,
          suggestions,
          onSuggestionSelect: (suggestion) => setValue(suggestion.label),
          renderSuggestionContent: (suggestion) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(option_content_exports.OptionContent.Label, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "bold", children: suggestion.label }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              separator_default,
              {
                axis: "vertical",
                color: "secondary",
                display: "inline",
                dotSize: "small",
                element: "span",
                spacing: 0.5,
                variant: "dot-only"
              }
            ),
            suggestion.description
          ] }) })
        }
      );
    }
  };
  var AutocompleteAsync = {
    name: "Autocomplete: async",
    parameters: { a11y: { test: "error" } },
    render: function AutocompleteAsyncExample() {
      const [value, setValue] = (0, import_react.useState)("");
      const [loading, setLoading] = (0, import_react.useState)(false);
      const [suggestions, setSuggestions] = (0, import_react.useState)([]);
      const timer = (0, import_react.useRef)();
      (0, import_react.useEffect)(() => () => clearTimeout(timer.current), []);
      const handleChange = (next) => {
        setValue(next);
        clearTimeout(timer.current);
        if (!next.trim()) {
          setLoading(false);
          setSuggestions([]);
          return;
        }
        setLoading(true);
        timer.current = setTimeout(() => {
          setSuggestions(filterPeople(next));
          setLoading(false);
        }, 600);
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        search_exports.Search,
        {
          id: "search-autocomplete-async",
          label: "Otsi",
          placeholder: "Hakka nime tr\xFCkkima\u2026",
          value,
          onChange: handleChange,
          suggestions,
          loading,
          onSuggestionSelect: (suggestion) => {
            clearTimeout(timer.current);
            setLoading(false);
            setValue(suggestion.label);
          }
        }
      );
    }
  };
  var AutocompleteDisabledSuggestions = {
    name: "Autocomplete: disabled suggestions",
    parameters: { a11y: { test: "error" } },
    render: function AutocompleteDisabledExample() {
      const [value, setValue] = (0, import_react.useState)("");
      const suggestions = value.trim() ? filterPeople(value).map(
        (suggestion, index) => index % 3 === 0 ? { ...suggestion, disabled: true } : suggestion
      ) : [];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        search_exports.Search,
        {
          id: "search-autocomplete-disabled",
          label: "Otsi",
          placeholder: "Hakka nime tr\xFCkkima\u2026",
          value,
          onChange: setValue,
          suggestions,
          onSuggestionSelect: (suggestion) => setValue(suggestion.label),
          helper: { text: "Iga kolmas vaste on keelatud." }
        }
      );
    }
  };
  var AutocompleteFreeText = {
    name: "Autocomplete: free-text search",
    parameters: { a11y: { test: "error" } },
    render: function AutocompleteFreeTextExample() {
      const [value, setValue] = (0, import_react.useState)("");
      const [submitted, setSubmitted] = (0, import_react.useState)();
      const suggestions = value.trim() ? filterPeople(value) : [];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          search_exports.Search,
          {
            id: "search-autocomplete-free-text",
            label: "Otsi",
            placeholder: "Otsi ja vajuta Enter\u2026",
            value,
            onChange: setValue,
            suggestions,
            onSuggestionSelect: (suggestion) => setValue(suggestion.label),
            onSearch: setSubmitted
          }
        ),
        submitted !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(text_exports.Text, { color: "tertiary", modifiers: "small", children: [
          "Otsisid: \u201E",
          submitted,
          "\u201D"
        ] })
      ] });
    }
  };
  var AutocompleteWithFooter = {
    name: "Autocomplete: with footer actions",
    parameters: { a11y: { test: "error" } },
    render: function AutocompleteWithFooterExample() {
      const [value, setValue] = (0, import_react.useState)("");
      const suggestions = value.trim() ? filterPeople(value) : [];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        search_exports.Search,
        {
          id: "search-autocomplete-footer",
          label: "Otsi",
          placeholder: "Hakka nime tr\xFCkkima\u2026",
          value,
          onChange: setValue,
          suggestions,
          onSuggestionSelect: (suggestion) => setValue(suggestion.label),
          footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(grid_exports.Row, { gutter: 2, justifyContent: "center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", size: "small", onClick: () => setValue(""), children: "Isik teadmata" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { width: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", size: "small", onClick: () => setValue(""), children: "Puudub Eesti isikukood" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { color: "tertiary", modifiers: ["small", "center"], element: "p", children: "Rahvastikuregistri andmete p\xE4ringuks sisesta isikukood t\xE4ismahus" })
          ] })
        }
      );
    }
  };
  var AutocompleteHideOnScroll = {
    name: "Autocomplete: hide on scroll",
    render: function AutocompleteHideOnScrollExample() {
      const [value, setValue] = (0, import_react.useState)("");
      const suggestions = value.trim() ? filterPeople(value) : [];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            maxHeight: "16rem",
            overflowY: "auto",
            padding: "1rem",
            border: "1px solid var(--card-border-primary)",
            borderRadius: "var(--form-field-radius)"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              search_exports.Search,
              {
                id: "search-autocomplete-hide-on-scroll",
                label: "Otsi",
                placeholder: "Hakka nime tr\xFCkkima\u2026",
                value,
                onChange: setValue,
                suggestions,
                onSuggestionSelect: (suggestion) => setValue(suggestion.label),
                hideOnScroll: true
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: "24rem" }, "aria-hidden": "true" })
          ] })
        }
      );
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

  // Search.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(search_stories_exports, "Default", G, B);
  var Sizes2 = compose(search_stories_exports, "Sizes", G, B);
  var States2 = compose(search_stories_exports, "States", G, B);
  var Placeholder2 = compose(search_stories_exports, "Placeholder", G, B);
  var Clearable2 = compose(search_stories_exports, "Clearable", G, B);
  var ClearableWithButton2 = compose(search_stories_exports, "ClearableWithButton", G, B);
  var WithHint2 = compose(search_stories_exports, "WithHint", G, B);
  var WithResultAndActions2 = compose(search_stories_exports, "WithResultAndActions", G, B);
  var AccessibilityFocused2 = compose(search_stories_exports, "AccessibilityFocused", G, B);
  var Autocomplete2 = compose(search_stories_exports, "Autocomplete", G, B);
  var AutocompleteCustomRow2 = compose(search_stories_exports, "AutocompleteCustomRow", G, B);
  var AutocompleteAsync2 = compose(search_stories_exports, "AutocompleteAsync", G, B);
  var AutocompleteDisabledSuggestions2 = compose(search_stories_exports, "AutocompleteDisabledSuggestions", G, B);
  var AutocompleteFreeText2 = compose(search_stories_exports, "AutocompleteFreeText", G, B);
  var AutocompleteWithFooter2 = compose(search_stories_exports, "AutocompleteWithFooter", G, B);
  var AutocompleteHideOnScroll2 = compose(search_stories_exports, "AutocompleteHideOnScroll", G, B);
  return __toCommonJS(Search_preview_exports);
})();
