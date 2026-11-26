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

  // OptionContent.preview.tsx
  var OptionContent_preview_exports = {};
  __export(OptionContent_preview_exports, {
    Default: () => Default2,
    InsideDropdown: () => InsideDropdown2,
    InsidePopover: () => InsidePopover2,
    InsideSearch: () => InsideSearch2,
    InsideSelect: () => InsideSelect2,
    Items: () => Items2,
    States: () => States2,
    WithCheckbox: () => WithCheckbox2,
    WithDescription: () => WithDescription2,
    WithIcon: () => WithIcon2,
    WithRadio: () => WithRadio2,
    WithTree: () => WithTree2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/misc/option-content/option-content.stories.tsx
  var option_content_stories_exports = {};
  __export(option_content_stories_exports, {
    Default: () => Default,
    InsideDropdown: () => InsideDropdown,
    InsidePopover: () => InsidePopover,
    InsideSearch: () => InsideSearch,
    InsideSelect: () => InsideSelect,
    Items: () => Items,
    States: () => States,
    WithCheckbox: () => WithCheckbox,
    WithDescription: () => WithDescription,
    WithIcon: () => WithIcon,
    WithRadio: () => WithRadio,
    WithTree: () => WithTree,
    default: () => option_content_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // tedi:src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var icon_default = ns["Icon"] ?? ns;

  // tedi:src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var button_default = ns2["Button"] ?? ns2;

  // tedi:src/tedi/components/form/search/search.tsx
  var search_exports = {};
  __export(search_exports, {
    default: () => search_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(search_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var search_default = ns3["Search"] ?? ns3;

  // tedi:src/tedi/components/form/select/select.tsx
  var select_exports = {};
  __export(select_exports, {
    default: () => select_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(select_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var select_default = ns4["Select"] ?? ns4;

  // tedi:src/tedi/components/form/toggle/toggle.tsx
  var toggle_exports = {};
  __export(toggle_exports, {
    default: () => toggle_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(toggle_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var toggle_default = ns5["Toggle"] ?? ns5;

  // tedi:src/tedi/components/overlays/dropdown/dropdown.tsx
  var dropdown_exports = {};
  __export(dropdown_exports, {
    default: () => dropdown_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(dropdown_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var dropdown_default = ns6["Dropdown"] ?? ns6;

  // tedi:src/tedi/components/overlays/dropdown/dropdown-context.tsx
  var dropdown_context_exports = {};
  __export(dropdown_context_exports, {
    default: () => dropdown_context_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(dropdown_context_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var dropdown_context_default = ns7["DropdownContext"] ?? ns7;

  // tedi:src/tedi/components/overlays/dropdown/dropdown-item/dropdown-item.tsx
  var dropdown_item_exports = {};
  __export(dropdown_item_exports, {
    default: () => dropdown_item_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(dropdown_item_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var dropdown_item_default = ns8["DropdownItem"] ?? ns8;

  // tedi:src/tedi/components/overlays/popover/popover.tsx
  var popover_exports = {};
  __export(popover_exports, {
    default: () => popover_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(popover_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var popover_default = ns9["Popover"] ?? ns9;

  // tedi:src/tedi/components/misc/separator/separator.tsx
  var separator_exports = {};
  __export(separator_exports, {
    default: () => separator_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(separator_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var separator_default = ns10["Separator"] ?? ns10;

  // tedi:src/tedi/components/misc/option-content/option-content.tsx
  var option_content_exports = {};
  __export(option_content_exports, {
    default: () => option_content_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(option_content_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var option_content_default = ns11["OptionContent"] ?? ns11;

  // src/tedi/components/misc/option-content/option-content.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: option_content_exports.OptionContent,
    title: "TEDI-Ready/Components/Helpers/OptionContent",
    subcomponents: {
      "OptionContent.Label": option_content_exports.OptionContent.Label,
      "OptionContent.Meta": option_content_exports.OptionContent.Meta
    },
    parameters: {
      status: {
        type: [{ name: "devComponent" }]
      },
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.56.78?node-id=9542-70948&m=dev"
      }
    }
  };
  var option_content_stories_default = meta;
  var showcaseContext = (variant) => ({
    open: true,
    setOpen: () => void 0,
    refs: {},
    getReferenceProps: () => ({}),
    getFloatingProps: () => ({}),
    getItemProps: (props) => props ?? {},
    listItemsRef: { current: [] },
    activeIndex: null,
    setActiveIndex: () => void 0,
    content: null,
    setContent: () => void 0,
    divided: false,
    variant
  });
  var Menu = ({
    children,
    variant = "default",
    width = 280
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_context_exports.DropdownContext.Provider, { value: showcaseContext(variant), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      role: "menu",
      style: {
        display: "flex",
        flexDirection: "column",
        width,
        background: "var(--general-surface-primary)",
        border: "1px solid var(--card-border-primary)",
        borderRadius: "var(--card-radius-rounded)"
      },
      children
    }
  ) });
  var Row = ({ children, gap = 16 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap, flexWrap: "wrap", alignItems: "flex-start" }, children });
  var noop = () => void 0;
  var Default = {
    args: {
      type: "default",
      layout: "horizontal",
      selected: false,
      disabled: false
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 280 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { ...args, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Option 1" }) }) })
  };
  var Items = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { children: ["Access to health data", "Declaration of intent", "Contacts"].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: i, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: text }) }) }, text)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { children: [
        { text: "1st level" },
        { text: "2nd level", indent: 1 },
        { text: "3rd level", indent: 2 },
        { text: "3rd level", indent: 2 },
        { text: "4th level", indent: 3 }
      ].map((level, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: i, indent: level.indent, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: level.text }) }) }, i)) })
    ] })
  };
  var WithCheckbox = {
    render: function WithCheckboxExample() {
      const [checked, setChecked] = (0, import_react.useState)(["Tartu", "Locations"]);
      const toggle = (key) => setChecked((current) => current.includes(key) ? current.filter((k) => k !== key) : [...current, key]);
      const item = (text, indent, indeterminate) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        dropdown_item_exports.DropdownItem,
        {
          role: "menuitemcheckbox",
          "aria-checked": checked.includes(text),
          closeOnSelect: false,
          indent,
          onClick: () => toggle(text),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { type: "checkbox", selected: checked.includes(text), indeterminate, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: text }) })
        }
      );
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Menu, { children: [
          item("Locations", void 0, !checked.includes("Tallinn")),
          item("Tallinn", 1),
          item("Tartu", 1),
          item("Doctors"),
          item("Mari Allikas", 1),
          item("T\xF5nu Liblikas", 1)
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Menu, { children: [
          item("Hospitals"),
          item("Pharmacies"),
          item("Laboratories")
        ] })
      ] });
    }
  };
  var WithRadio = {
    render: function WithRadioExample() {
      const [selected, setSelected] = (0, import_react.useState)("Tallinn");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { children: ["Tallinn", "Tartu", "Elva", "Rakvere"].map((city, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        dropdown_item_exports.DropdownItem,
        {
          index: i,
          role: "menuitemradio",
          "aria-checked": selected === city,
          closeOnSelect: false,
          onClick: () => setSelected(city),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { type: "radio", selected: selected === city, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: city }) })
        },
        city
      )) });
    }
  };
  var WithIcon = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { children: ["Access to health data", "Declaration of intent", "Contacts"].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: i, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(option_content_exports.OptionContent, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: text }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Meta, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_forward", size: 18 }) })
      ] }) }, text)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { children: [
        ["Download", "download"],
        ["Add", "add"],
        ["Delete", "delete"]
      ].map(([text, icon], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: i, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { icon, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: text }) }) }, text)) })
    ] })
  };
  var WithDescription = {
    render: function WithDescriptionExample() {
      const [active, setActive] = (0, import_react.useState)("Access to health data");
      const access = [
        ["Access to health data", "Doctors will be able to see your health data"],
        ["Access to medications and health data", "Doctors will be able to see your medications and health data"],
        ["Access to all", "Doctors will be able to see all your information"]
      ];
      const cities = [
        ["Tallinn", "3 timeslots available"],
        ["Tartu", "4 timeslots available"],
        ["Elva", "7 timeslots available"],
        ["Rakvere", "3 timeslots available"]
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { width: 320, children: access.map(([title, desc], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          dropdown_item_exports.DropdownItem,
          {
            index: i,
            active: active === title,
            closeOnSelect: false,
            onClick: () => setActive(title),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(option_content_exports.OptionContent, { layout: "vertical", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Meta, { children: desc })
            ] })
          },
          title
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { width: 320, children: cities.map(([city, meta2], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: i, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(option_content_exports.OptionContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: city }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Meta, { children: meta2 })
        ] }) }, city)) })
      ] });
    }
  };
  var WithTree = {
    render: () => {
      const children = (start) => ["Child 1", "Child 2", "Child 3"].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: start + i, indent: 1, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: text }) }) }, text));
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Menu, { variant: "tree", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: 0, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Parent" }) }) }),
          children(1)
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Menu, { variant: "tree", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: 0, indent: 1, isParent: true, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Parent" }) }) }),
          children(1)
        ] })
      ] });
    }
  };
  var States = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: 0, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Default (hover me)" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: 1, active: true, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Active" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: 2, disabled: true, onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { disabled: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Disabled" }) }) })
    ] })
  };
  var CITIES = [
    { id: "tln", name: "Tallinn", county: "Harjumaa" },
    { id: "trt", name: "Tartu", county: "Tartumaa" },
    { id: "prn", name: "P\xE4rnu", county: "P\xE4rnumaa" },
    { id: "nrv", name: "Narva", county: "Ida-Virumaa" }
  ];
  var InsideSelect = {
    name: "Inside select (renderOption)",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      select_exports.Select,
      {
        id: "city-select",
        label: "Linn",
        placeholder: "Vali linn",
        options: CITIES.map((city) => ({ value: city.id, label: city.name, customData: city })),
        renderOption: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(option_content_exports.OptionContent, { icon: "location_on", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: props.data.label }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Meta, { children: props.data.customData.county })
        ] })
      }
    )
  };
  var InsideDropdown = {
    name: "Inside a dropdown",
    render: function InsideDropdownExample() {
      const [checked, setChecked] = (0, import_react.useState)(["Hospitals"]);
      const toggle = (key) => setChecked((current) => current.includes(key) ? current.filter((k) => k !== key) : [...current, key]);
      const options = ["Hospitals", "Pharmacies", "Laboratories", "Family doctors"];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { width: 260, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "Filter providers" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: options.map((option, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          dropdown_exports.Dropdown.Item,
          {
            index: i,
            role: "menuitemcheckbox",
            "aria-checked": checked.includes(option),
            closeOnSelect: false,
            onClick: () => toggle(option),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { type: "checkbox", selected: checked.includes(option), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: option }) })
          },
          option
        )) })
      ] });
    }
  };
  var InsideSearch = {
    name: "Inside search (in a dropdown)",
    parameters: {
      // The trigger is marked `role="combobox"` so it can legitimately carry the menu-trigger ARIA
      // (`aria-expanded` / `aria-haspopup` / `aria-controls`) that `Dropdown.Trigger` applies — a
      // search controlling a popup list is a combobox. The only remaining axe finding is
      // `aria-hidden-focus` from floating-ui's focus-trap guard elements, which appears on every open
      // overlay in the library (Dropdown/Popover/Modal) and is not an OptionContent issue. This
      // showcase opens the popup by default, so the a11y check is turned off rather than left as a
      // perpetually-failing todo.
      a11y: { test: "off" }
    },
    render: function InsideSearchExample() {
      const [value, setValue] = (0, import_react.useState)("Ta");
      const [open, setOpen] = (0, import_react.useState)(true);
      const matches = CITIES.filter((city) => city.name.toLowerCase().includes(value.toLowerCase()));
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { open: open && matches.length > 0, onOpenChange: setOpen, width: "trigger", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { role: "combobox", "aria-label": "Otsi linna", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(search_exports.Search, { id: "option-content-search", label: "Otsi linna", value, onChange: setValue }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Content, { children: matches.map((city, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: i, onClick: () => setValue(city.name), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(option_content_exports.OptionContent, { icon: "location_on", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: city.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Meta, { children: city.county })
        ] }) }, city.id)) })
      ] });
    }
  };
  var InsidePopover = {
    name: "Inside a popover",
    render: function InsidePopoverExample() {
      const [darkMode, setDarkMode] = (0, import_react.useState)(false);
      const navItems = ["Minu profiil", "Esindatavad", "Kontaktid"];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(popover_exports.Popover, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.Popover.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconRight: "keyboard_arrow_down", children: "Minu profiil" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(popover_exports.Popover.Content, { width: "none", padding: { vertical: 0, horizontal: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_context_exports.DropdownContext.Provider, { value: showcaseContext("default"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { role: "menu", style: { display: "flex", flexDirection: "column", minWidth: 220 }, children: [
          navItems.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index, role: "menuitem", onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: label }) }) }, label)),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: "var(--dropdown-item-padding-y) var(--dropdown-item-padding-x)" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(toggle_exports.Toggle, { id: "option-content-dark-mode", label: "Tume re\u017Eiim", checked: darkMode, onChange: setDarkMode }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(separator_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_item_exports.DropdownItem, { index: navItems.length, role: "menuitem", onClick: noop, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent, { icon: { name: "logout", size: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(option_content_exports.OptionContent.Label, { children: "Logi v\xE4lja" }) }) })
        ] }) }) })
      ] });
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

  // OptionContent.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(option_content_stories_exports, "Default", G, B);
  var Items2 = compose(option_content_stories_exports, "Items", G, B);
  var WithCheckbox2 = compose(option_content_stories_exports, "WithCheckbox", G, B);
  var WithRadio2 = compose(option_content_stories_exports, "WithRadio", G, B);
  var WithIcon2 = compose(option_content_stories_exports, "WithIcon", G, B);
  var WithDescription2 = compose(option_content_stories_exports, "WithDescription", G, B);
  var WithTree2 = compose(option_content_stories_exports, "WithTree", G, B);
  var States2 = compose(option_content_stories_exports, "States", G, B);
  var InsideSelect2 = compose(option_content_stories_exports, "InsideSelect", G, B);
  var InsideDropdown2 = compose(option_content_stories_exports, "InsideDropdown", G, B);
  var InsideSearch2 = compose(option_content_stories_exports, "InsideSearch", G, B);
  var InsidePopover2 = compose(option_content_stories_exports, "InsidePopover", G, B);
  return __toCommonJS(OptionContent_preview_exports);
})();
