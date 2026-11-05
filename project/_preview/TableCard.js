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

  // TableCard.preview.tsx
  var TableCard_preview_exports = {};
  __export(TableCard_preview_exports, {
    Default: () => Default2,
    HasChildrenRows: () => HasChildrenRows2,
    IsAccordion: () => IsAccordion2,
    SimpleCard: () => SimpleCard2,
    WithActions: () => WithActions2,
    WithResponsiveLayout: () => WithResponsiveLayout2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/table-card/table-card.stories.tsx
  var table_card_stories_exports = {};
  __export(table_card_stories_exports, {
    Default: () => Default,
    HasChildrenRows: () => HasChildrenRows,
    IsAccordion: () => IsAccordion,
    SimpleCard: () => SimpleCard,
    WithActions: () => WithActions,
    WithResponsiveLayout: () => WithResponsiveLayout,
    default: () => table_card_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var button_default = ns["Button"] ?? ns;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/field/field.tsx
  var field_exports = {};
  __export(field_exports, {
    default: () => field_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(field_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var field_default = ns2["Field"] ?? ns2;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/form/select/select.tsx
  var select_exports = {};
  __export(select_exports, {
    default: () => select_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(select_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var select_default = ns3["Select"] ?? ns3;

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/overlays/dropdown/index.ts
  var dropdown_exports = {};
  __export(dropdown_exports, {
    default: () => dropdown_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(dropdown_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var dropdown_default = ns5["Dropdown"] ?? ns5;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/tags/status-badge/status-badge.tsx
  var status_badge_exports = {};
  __export(status_badge_exports, {
    default: () => status_badge_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(status_badge_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var status_badge_default = ns6["StatusBadge"] ?? ns6;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/card/card.tsx
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var card_default = ns7["Card"] ?? ns7;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/label/label.tsx
  var label_exports = {};
  __export(label_exports, {
    default: () => label_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(label_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var label_default = ns8["Label"] ?? ns8;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/text-group/text-group.tsx
  var text_group_exports = {};
  __export(text_group_exports, {
    default: () => text_group_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_group_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var text_group_default = ns9["TextGroup"] ?? ns9;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/content/table-card/table-card.tsx
  var table_card_exports = {};
  __export(table_card_exports, {
    default: () => table_card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(table_card_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var table_card_default = ns10["TableCard"] ?? ns10;

  // src/tedi/components/content/table-card/table-card.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: table_card_exports.TableCard,
    title: "Tedi-Ready/Content/TableCard",
    parameters: {
      controls: {
        exclude: ["sm", "md", "lg", "xl", "xxl"]
      }
    },
    argTypes: {
      // `ReactNode` props still show in the (type-derived) args table, but their control is
      // disabled: Storybook infers an "object" control that assigns `{}` when clicked, which
      // React can't render as a child ("Objects are not valid as a React child") and crashes
      // the story. They can't be meaningfully authored from a control anyway.
      title: { control: false },
      subtitle: { control: false },
      endSlot: { control: false },
      actions: { control: false },
      children: { control: false }
    },
    decorators: [
      (Story, context) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: context.parameters.fullWidth ? void 0 : 360 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}) })
    ]
  };
  var table_card_stories_default = meta;
  var benefitRows = [
    { label: "H\xFCvitise arvutamine", value: "Tervisekassa ei h\xFCvita" },
    { label: "Kogus", value: "2 p\xE4eva" },
    { label: "\xDChe p\xE4eva h\xFCvitis (\u20AC)", value: "-" },
    { label: "Summa (\u20AC)", value: "0.00 \u20AC", bold: true }
  ];
  var Default = {
    args: {
      rows: benefitRows,
      summary: { label: "\xDClekande summa", value: "0.00 \u20AC" },
      labelSize: "small"
    }
  };
  var SimpleCard = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(table_card_exports.TableCard, { rows: benefitRows, summary: { label: "\xDClekande summa", value: "0.00 \u20AC" }, labelSize: "small" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "ID kaart",
          titleElement: "h4",
          titleModifiers: "h4",
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Kehtib 13.08.2027" }),
          layout: "vertical",
          labelSize: "small",
          columns: 2,
          rows: [
            { label: "Eesnimi", value: "Mari" },
            { label: "S\xFCnniaeg", value: "15.08.1987" },
            { label: "Perenimi", value: "Maasikas" },
            { label: "Isikukood", value: "41234567891" },
            { label: "Dokumendi number", value: "AS0000226" },
            { label: "Sugu", value: "Naine" }
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "4. juuli 2026",
          layout: "vertical",
          labelSize: "small",
          rows: [
            { label: "P\xE4ringu teostaja", value: "EE4800234675" },
            { label: "P\xE4ringu nimetus", value: "Inimeste arv kohalikus omavalitsuses" },
            { label: "Infos\xFCsteem", value: "Rahvastikuregister" }
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          layout: "vertical",
          rows: [
            { label: "Periood", value: "01.02 - 14.01.2024" },
            { label: "Liik", value: "Haigusleht" },
            { label: "Pikkus", value: "14 p\xE4eva" },
            { label: "H\xFCvitis", value: "120.34 \u20AC", bold: true },
            { label: "T\xF5endi olek", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Kehtiv" }) }
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          layout: "vertical",
          columns: 2,
          rows: [
            { label: "Periood", value: "01.02 - 14.01.2024", colSpan: 2 },
            { label: "Liik", value: "Haigusleht" },
            { label: "Pikkus", value: "14 p\xE4eva" },
            { label: "H\xFCvitis", value: "120.34 \u20AC", bold: true },
            { label: "T\xF5endi olek", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Kehtiv" }) }
          ]
        }
      )
    ] })
  };
  var locationOptions = [
    { label: "Tallinn", value: "tallinn" },
    { label: "Tartu", value: "tartu" },
    { label: "P\xE4rnu", value: "parnu" }
  ];
  var EditableAppointmentCard = () => {
    const [editing, setEditing] = (0, import_react.useState)(false);
    const [values, setValues] = (0, import_react.useState)({
      date: "22.03.2029 \u2013 29.03.2029",
      time: "11:14",
      duration: "6 min",
      location: locationOptions[0]
    });
    const [draft, setDraft] = (0, import_react.useState)(values);
    const startEditing = () => {
      setDraft(values);
      setEditing(true);
    };
    const save = () => {
      setValues(draft);
      setEditing(false);
    };
    const readRows = [
      { label: "Kuup\xE4ev", value: values.date },
      { label: "Kellaaeg", value: values.time },
      { label: "Kestus", value: values.duration },
      { label: "Asukoht", value: values.location.label }
    ];
    const editRows = [
      {
        label: "Kuup\xE4ev",
        value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, { "aria-label": "Kuup\xE4ev", value: draft.date, onChange: (date) => setDraft((d) => ({ ...d, date })) })
      },
      {
        label: "Kellaaeg",
        value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(field_exports.Field, { "aria-label": "Kellaaeg", value: draft.time, onChange: (time) => setDraft((d) => ({ ...d, time })) })
      },
      {
        label: "Kestus",
        value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          field_exports.Field,
          {
            "aria-label": "Kestus",
            value: draft.duration,
            onChange: (duration) => setDraft((d) => ({ ...d, duration }))
          }
        )
      },
      {
        label: "Asukoht",
        value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          select_exports.Select,
          {
            id: "wa-edit-location",
            label: "Asukoht",
            hideLabel: true,
            options: locationOptions,
            value: draft.location,
            onChange: (next) => setDraft((d) => ({ ...d, location: next ?? d.location }))
          }
        ) })
      }
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      table_card_exports.TableCard,
      {
        layout: "vertical",
        rows: editing ? editRows : readRows,
        actions: editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, onClick: () => setEditing(false), children: "Katkesta" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { fullWidth: true, onClick: save, children: "Salvesta" })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, iconLeft: "edit", onClick: startEditing, children: "Muuda" })
      }
    );
  };
  var WithActions = () => {
    const people = [
      { name: "Meelis M\xE4gi", vanus: 23, visits: 7, status: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "warning", children: "Aegumas" }) },
      { name: "Madis Tamm", vanus: 12, visits: 14, status: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Kehtiv" }) },
      { name: "Kadi Kuusk", vanus: 43, visits: 24, status: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Kehtiv" }) }
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableAppointmentCard, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          layout: "vertical",
          rows: [
            { label: "Teenus", value: "Ortopeedia" },
            { label: "Arst", value: "Pille Paunk\xFCla" },
            { label: "Maksumus", value: "45.50 \u20AC/h" },
            {
              label: "Asukoht",
              value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", size: "small", iconRight: "expand_more", children: "Tallinn" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: "Tallinn" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: "Tartu" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 2, children: "P\xE4rnu" })
                ] })
              ] })
            }
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          layout: "vertical",
          rows: [
            { label: "Periood", value: "01.02 - 14.01.2024" },
            { label: "Liik", value: "Haigusleht" },
            { label: "Pikkus", value: "14 p\xE4eva" },
            { label: "H\xFCvitis", value: "120.34 \u20AC", bold: true }
          ],
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", icon: "edit", showTooltip: true, children: "Muuda" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", icon: "share", showTooltip: true, children: "Jaga" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", icon: "lock", showTooltip: true, children: "Lukusta" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", icon: "more_vert", showTooltip: true, children: "Rohkem" })
          ] })
        }
      ),
      people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: person.name,
          titleModifiers: "h6",
          selectable: true,
          layout: "horizontal",
          labelAlign: "left",
          valueAlign: "left",
          rows: [
            { label: "Vanus", value: String(person.vanus) },
            { label: "K\xFClastuste arv", value: String(person.visits) },
            { label: "T\xF5endi staatus", value: person.status }
          ]
        },
        person.name
      )),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          layout: "vertical",
          rows: [
            { label: "Periood", value: "01.02 - 14.01.2024" },
            { label: "Liik", value: "Haigusleht" },
            { label: "Pikkus", value: "14 p\xE4eva" },
            { label: "Staatus", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "brand", children: "\xDClekanne tehtud" }) },
            { label: "H\xFCvitis", value: "120.34 \u20AC", bold: true }
          ],
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, children: "Vaata" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, children: "Muuda" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, children: "Rohkem" })
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Pass",
          titleElement: "h4",
          titleModifiers: "h4",
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Kehtib 13.08.2027" }),
          layout: "vertical",
          columns: 2,
          rows: [
            { label: "Eesnimi", value: "Mari" },
            { label: "S\xFCnniaeg", value: "15.08.1987" },
            { label: "Perenimi", value: "Maasikas" },
            { label: "Isikukood", value: "41234567891" },
            { label: "Dokumendi number", value: "AS0000226" },
            { label: "Sugu", value: "Naine" }
          ],
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", fullWidth: true, children: "Kuva pilt" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", fullWidth: true, children: "Tegevused" })
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(label_exports.Label, { as: "span", isSmall: true, isBold: true, children: "Eesti Maksu- ja Tolliamet" }),
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "danger", children: "T\xE4itmata" }),
          layout: "vertical",
          rows: [{ label: "", value: "K\xE4ibedeklaratsiooni esitamise t\xE4htaeg on 5 p\xE4eva p\xE4rast 10.10.2025" }],
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, iconLeft: "share", children: "Jaga" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, iconLeft: "calendar_today", children: "Lisa kalendrisse" })
          ] })
        }
      )
    ] });
  };
  WithActions.parameters = {
    a11y: {
      config: {
        rules: [
          { id: "button-name", enabled: false },
          { id: "aria-allowed-attr", enabled: false },
          { id: "color-contrast", enabled: false }
        ]
      }
    }
  };
  var IsAccordion = () => {
    const rows = [
      { label: "Vanus", value: "25" },
      { label: "K\xFClastuste arv", value: "6" },
      { label: "Taotluse olek", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "brand", children: "Menetluses" }) }
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Hambaarst",
          subtitle: "14.04.2026 15:30",
          collapsible: true,
          defaultOpen: false,
          labelSize: "small",
          labelAlign: "left",
          valueAlign: "left",
          rowAlign: "center",
          rows
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Hambaarst",
          subtitle: "14.04.2026 15:30",
          collapsible: true,
          defaultOpen: false,
          labelSize: "small",
          labelAlign: "left",
          valueAlign: "left",
          rowAlign: "center",
          rows,
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, iconLeft: "edit", children: "Muuda" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, iconLeft: "close", children: "T\xFChista" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, iconLeft: "more_vert", children: "Rohkem" })
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Mari Maasikas",
          endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Verifitseeritud" }),
          subtitle: "Vanus: 25",
          collapsible: true,
          arrowType: "secondary",
          defaultOpen: false,
          layout: "horizontal",
          labelAlign: "left",
          valueAlign: "left",
          labelSize: "small",
          rows
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Kadri Kaasik",
          collapsible: true,
          layout: "horizontal",
          labelAlign: "left",
          valueAlign: "left",
          labelSize: "small",
          rows,
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, iconLeft: "edit", children: "Muuda" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Kadri Kaasik",
          collapsible: true,
          layout: "vertical",
          columns: 3,
          labelSize: "small",
          rows: [
            { label: "Vanus", value: "25" },
            { label: "K\xFClastuste arv", value: "6" },
            { label: "Olek", value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "brand", children: "Kehtiv" }) }
          ]
        }
      )
    ] });
  };
  var HasChildrenRows = () => {
    const certificates = ["Puukentsefaliidi vaktsiin", "COVID-19"];
    const validBadge = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", variant: "filled-bordered", children: "Kehtiv" });
    const editButton = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, iconLeft: "edit", children: "Muuda" });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Kadri Kaasik",
          collapsible: true,
          layout: "horizontal",
          labelAlign: "left",
          valueAlign: "left",
          labelWidth: "var(--text-group-label-width-sm)",
          rows: [
            { label: "Vanus", value: "25" },
            { label: "K\xFClastuste arv", value: "6" }
          ],
          actions: editButton,
          children: certificates.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { padding: 1, background: "tertiary", hasSeparator: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              text_group_exports.TextGroup.List,
              {
                type: "horizontal",
                labelAlign: "left",
                valueAlign: "left",
                labelWidth: "var(--text-group-label-width-sm)",
                items: [
                  { label: "T\xF5end", value: name },
                  { label: "T\xF5endi staatus", value: validBadge }
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", fullWidth: true, children: "Vaata" }) })
          ] }) }, name))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Kadri Kaasik",
          collapsible: true,
          layout: "horizontal",
          labelAlign: "left",
          valueAlign: "left",
          labelWidth: "var(--text-group-label-width-sm)",
          rows: [
            { label: "Vanus", value: "25" },
            { label: "K\xFClastuste arv", value: "6" }
          ],
          actions: editButton,
          children: certificates.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { padding: 1, background: "tertiary", hasSeparator: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            text_group_exports.TextGroup.List,
            {
              type: "horizontal",
              labelAlign: "left",
              valueAlign: "left",
              labelWidth: "var(--text-group-label-width-sm)",
              items: [
                { label: "T\xF5end", value: name },
                { label: "Olek", value: validBadge }
              ]
            }
          ) }, name))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        table_card_exports.TableCard,
        {
          title: "Kadri Kaasik",
          collapsible: true,
          layout: "vertical",
          columns: 2,
          rows: [
            { label: "Vanus", value: "25" },
            { label: "K\xFClastuste arv", value: "6" }
          ],
          actions: editButton,
          children: certificates.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { padding: 1, background: "tertiary", hasSeparator: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            text_group_exports.TextGroup.List,
            {
              type: "vertical",
              columns: 2,
              rowGap: "var(--layout-grid-gutters-16)",
              items: [
                { label: "T\xF5end", value: name },
                { label: "Olek", value: validBadge }
              ]
            }
          ) }, name))
        }
      )
    ] });
  };
  var WithResponsiveLayout = {
    args: {
      title: "ID kaart",
      titleElement: "h4",
      titleModifiers: "h4",
      endSlot: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(status_badge_exports.StatusBadge, { color: "success", children: "Kehtib 13.08.2027" }),
      layout: "vertical",
      labelSize: "small",
      columns: 1,
      md: { columns: 2 },
      rows: [
        { label: "Eesnimi", value: "Mari" },
        { label: "S\xFCnniaeg", value: "15.08.1987" },
        { label: "Perenimi", value: "Maasikas" },
        { label: "Isikukood", value: "41234567891" },
        { label: "Dokumendi number", value: "AS0000226" },
        { label: "Sugu", value: "Naine" }
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

  // TableCard.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(table_card_stories_exports, "Default", G, B);
  var SimpleCard2 = compose(table_card_stories_exports, "SimpleCard", G, B);
  var WithActions2 = compose(table_card_stories_exports, "WithActions", G, B);
  var IsAccordion2 = compose(table_card_stories_exports, "IsAccordion", G, B);
  var HasChildrenRows2 = compose(table_card_stories_exports, "HasChildrenRows", G, B);
  var WithResponsiveLayout2 = compose(table_card_stories_exports, "WithResponsiveLayout", G, B);
  return __toCommonJS(TableCard_preview_exports);
})();
