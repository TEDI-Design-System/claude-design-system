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

  // CardStepper.preview.tsx
  var CardStepper_preview_exports = {};
  __export(CardStepper_preview_exports, {
    CardStepperButton: () => CardStepperButton2,
    CardStepperButtonStates: () => CardStepperButtonStates2,
    CollapsibleSubSteps: () => CollapsibleSubSteps2,
    Default: () => Default2,
    HasNavigation: () => HasNavigation2,
    Interactive: () => Interactive2,
    ManySteps: () => ManySteps2,
    WithBottomSlot: () => WithBottomSlot2,
    WithInfoBottom: () => WithInfoBottom2,
    WithInfoTop: () => WithInfoTop2,
    WithStatusIcon: () => WithStatusIcon2,
    WithoutProgressbar: () => WithoutProgressbar2,
    WithoutStepNumber: () => WithoutStepNumber2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/navigation/card-stepper/card-stepper.stories.tsx
  var card_stepper_stories_exports = {};
  __export(card_stepper_stories_exports, {
    CardStepperButton: () => CardStepperButton,
    CardStepperButtonStates: () => CardStepperButtonStates,
    CollapsibleSubSteps: () => CollapsibleSubSteps,
    Default: () => Default,
    HasNavigation: () => HasNavigation,
    Interactive: () => Interactive,
    ManySteps: () => ManySteps,
    WithBottomSlot: () => WithBottomSlot,
    WithInfoBottom: () => WithInfoBottom,
    WithInfoTop: () => WithInfoTop,
    WithStatusIcon: () => WithStatusIcon,
    WithoutProgressbar: () => WithoutProgressbar,
    WithoutStepNumber: () => WithoutStepNumber,
    default: () => card_stepper_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/icon/icon.tsx
  var icon_exports = {};
  __export(icon_exports, {
    default: () => icon_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(icon_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var icon_default = ns["Icon"] ?? ns;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/base/typography/text/text.tsx
  var text_exports = {};
  __export(text_exports, {
    default: () => text_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(text_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var text_default = ns2["Text"] ?? ns2;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var button_default = ns3["Button"] ?? ns3;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/card-button/card-button.tsx
  var card_button_exports = {};
  __export(card_button_exports, {
    default: () => card_button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_button_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var card_button_default = ns4["CardButton"] ?? ns4;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var card_default = ns5["Card"] ?? ns5;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/collapse/collapse.tsx
  var collapse_exports = {};
  __export(collapse_exports, {
    default: () => collapse_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(collapse_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var collapse_default = ns6["Collapse"] ?? ns6;

  // src/tedi/components/layout/grid/index.ts
  var grid_exports = {};
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/grid/row.tsx
  var row_exports = {};
  __export(row_exports, {
    default: () => row_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(row_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var row_default = ns7["Row"] ?? ns7;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, row_exports);

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/grid/col.tsx
  var col_exports = {};
  __export(col_exports, {
    default: () => col_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(col_exports, __toESM(require_tedi_namespace()));
  var ns8 = window.Tedi;
  var col_default = ns8["Col"] ?? ns8;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/layout/vertical-spacing/index.ts
  var vertical_spacing_exports = {};
  __export(vertical_spacing_exports, {
    default: () => vertical_spacing_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(vertical_spacing_exports, __toESM(require_tedi_namespace()));
  var ns9 = window.Tedi;
  var vertical_spacing_default = ns9["VerticalSpacing"] ?? ns9;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/notifications/alert/alert.tsx
  var alert_exports = {};
  __export(alert_exports, {
    default: () => alert_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(alert_exports, __toESM(require_tedi_namespace()));
  var ns10 = window.Tedi;
  var alert_default = ns10["Alert"] ?? ns10;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/navigation/card-stepper/card-stepper.tsx
  var card_stepper_exports = {};
  __export(card_stepper_exports, {
    default: () => card_stepper_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_stepper_exports, __toESM(require_tedi_namespace()));
  var ns11 = window.Tedi;
  var card_stepper_default = ns11["CardStepper"] ?? ns11;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/navigation/card-stepper/card-stepper-step.tsx
  var card_stepper_step_exports = {};
  __export(card_stepper_step_exports, {
    default: () => card_stepper_step_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_stepper_step_exports, __toESM(require_tedi_namespace()));
  var ns12 = window.Tedi;
  var card_stepper_step_default = ns12["CardStepperStep"] ?? ns12;

  // src/tedi/components/navigation/card-stepper/card-stepper.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: card_stepper_exports.CardStepper,
    title: "TEDI-Ready/Components/Navigation/CardStepper",
    subcomponents: { "CardStepper.Step": card_stepper_step_exports.CardStepperStep },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.59.78?node-id=51362-134115&m=dev"
      }
    },
    decorators: [
      (Story, context) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: context.parameters.fullWidth ? void 0 : 360 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}) })
    ]
  };
  var card_stepper_stories_default = meta;
  var STEPS = [
    { title: "Isikuandmed", state: "completed" },
    { title: "\xDCldandmed", state: "completed" },
    { title: "Terviseandmed", description: "Kirjeldus" },
    { title: "\xDClevaade" }
  ];
  var STEPS_NO_DESC = STEPS.map((step) => ({ title: step.title, state: step.state }));
  var ET_LABELS = {
    previous: "Eelmine samm",
    next: "J\xE4rgmine samm",
    openSteps: "Ava sammud",
    modalHeading: "Sammud"
  };
  var Default = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_stepper_exports.CardStepper, { steps: STEPS_NO_DESC, activeStep: 2, labels: ET_LABELS, "aria-label": "Taotluse sammud" })
  };
  var WithoutStepNumber = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      card_stepper_exports.CardStepper,
      {
        steps: STEPS_NO_DESC,
        activeStep: 2,
        showStepNumber: false,
        labels: ET_LABELS,
        "aria-label": "Taotluse sammud"
      }
    )
  };
  var WithStatusIcon = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        card_stepper_exports.CardStepper,
        {
          steps: [
            { title: "Isikuandmed", state: "completed" },
            { title: "\xDCldandmed", state: "completed" },
            { title: "Taotleja andmed", state: "completed" },
            { title: "\xDClevaade" }
          ],
          activeStep: 2,
          showStatusIcon: true,
          labels: ET_LABELS,
          "aria-label": "Taotluse sammud"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        card_stepper_exports.CardStepper,
        {
          steps: [
            { title: "Isikuandmed", state: "completed" },
            { title: "\xDCldandmed", state: "completed" },
            { title: "Taotleja andmed", state: "error" },
            { title: "\xDClevaade" }
          ],
          activeStep: 2,
          showStatusIcon: true,
          labels: ET_LABELS,
          "aria-label": "Taotluse sammud"
        }
      )
    ] })
  };
  var WithInfoBottom = {
    render: () => {
      const INFO_BOTTOM_STEPS = [
        { title: "Isikuandmed", description: "Taotleja v\xF5i esindatav", state: "completed" },
        { title: "\xDCldandmed", description: "Taotleja v\xF5i esindatav", state: "completed" },
        { title: "Taotleja andmed", description: "Taotleja v\xF5i esindatav" },
        { title: "\xDClevaade", description: "Taotleja v\xF5i esindatav" }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: INFO_BOTTOM_STEPS,
            activeStep: 2,
            showStepNumber: false,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: INFO_BOTTOM_STEPS,
            activeStep: 1,
            showNavigation: true,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_stepper_exports.CardStepper, { steps: INFO_BOTTOM_STEPS, activeStep: 2, labels: ET_LABELS, "aria-label": "Taotluse sammud" })
      ] });
    }
  };
  var WithInfoTop = {
    render: () => {
      const INFO_TOP_STEPS = [
        { title: "Isikuandmed", description: "Nimi ja kontakt", state: "completed" },
        { title: "Dokumendid", description: "\xDCleslaaditud failid", state: "completed" },
        { title: "Elukoht", description: "Aadress" },
        { title: "\xDClevaade", description: "Kokkuv\xF5te" }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: STEPS_NO_DESC,
            activeStep: 2,
            counterPosition: "top",
            showStepNumber: false,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: INFO_TOP_STEPS,
            activeStep: 2,
            descriptionPosition: "top",
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: INFO_TOP_STEPS,
            activeStep: 1,
            descriptionPosition: "top",
            showNavigation: true,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: INFO_TOP_STEPS,
            activeStep: 2,
            descriptionPosition: "top",
            showStepNumber: false,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        )
      ] });
    }
  };
  var HasNavigation = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      card_stepper_exports.CardStepper,
      {
        steps: STEPS_NO_DESC,
        activeStep: 1,
        showNavigation: true,
        labels: ET_LABELS,
        "aria-label": "Taotluse sammud"
      }
    ) })
  };
  var WithoutProgressbar = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        card_stepper_exports.CardStepper,
        {
          steps: STEPS,
          activeStep: 2,
          showNavigation: true,
          showProgress: false,
          labels: ET_LABELS,
          "aria-label": "Taotluse sammud"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        card_stepper_exports.CardStepper,
        {
          steps: STEPS_NO_DESC,
          activeStep: 2,
          showNavigation: true,
          showProgress: false,
          labels: ET_LABELS,
          "aria-label": "Taotluse sammud"
        }
      )
    ] })
  };
  var WithBottomSlot = {
    render: () => {
      const slotSteps = (slot) => [
        { title: "Isikuandmed", state: "completed" },
        { title: "\xDCldandmed", state: "completed" },
        { title: "Dokumendid", bottomSlot: slot },
        { title: "\xDClevaade" }
      ];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: slotSteps(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_exports.Alert, { type: "warning", children: "Andmev\xE4ljad sisaldavad ebat\xE4pseid v\xE4\xE4rtuseid" })),
            activeStep: 2,
            showProgress: false,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: slotSteps(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_exports.Alert, { type: "success", children: "Isikuandmed vastavad n\xF5uetele" })),
            activeStep: 2,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: slotSteps(
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(collapse_exports.Collapse, { id: "card-stepper-read-more", openText: "Loe l\xE4hemalt", closeText: "Sulge", "aria-label": "Loe l\xE4hemalt", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { children: "Lisainfo dokumentide kohta, mida selles sammus on vaja esitada." }) })
            ),
            activeStep: 2,
            showNavigation: true,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          card_stepper_exports.CardStepper,
          {
            steps: slotSteps(
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "secondary", iconLeft: "add", fullWidth: true, children: "Lisa dokument" })
            ),
            activeStep: 2,
            showNavigation: true,
            labels: ET_LABELS,
            "aria-label": "Taotluse sammud"
          }
        )
      ] });
    }
  };
  var MANY_STEPS = [
    { title: "Kutse", state: "completed" },
    { title: "Tahteavaldus", state: "completed" },
    { title: "Geenianal\xFC\xFCs" },
    { title: "Vastus" },
    ...Array.from({ length: 8 }, (_, i) => ({ title: `Samm ${i + 5}` }))
  ];
  var ManySteps = {
    name: "Many steps (open the list)",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_stepper_exports.CardStepper, { steps: MANY_STEPS, activeStep: 2, labels: ET_LABELS, "aria-label": "Geeniuuringu sammud" })
  };
  var SUB_STEP_FLOW = [
    { title: "Kutse", state: "completed" },
    {
      title: "Tahteavaldus",
      state: "completed",
      subSteps: [
        { title: "N\xF5usolek", state: "completed" },
        { title: "Allkiri", state: "completed" }
      ]
    },
    {
      title: "Geenianal\xFC\xFCs",
      description: "Kirjeldus",
      subSteps: [
        { title: "Proovi andmine", state: "completed" },
        { title: "Anal\xFC\xFCs", current: true },
        { title: "Tulemused" }
      ]
    },
    { title: "Vastus" }
  ];
  var CollapsibleSubSteps = {
    name: "Collapsible sub-steps (open the list)",
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_stepper_exports.CardStepper, { steps: SUB_STEP_FLOW, activeStep: 2, labels: ET_LABELS, "aria-label": "Taotluse sammud" })
  };
  var Interactive = {
    render: () => {
      const [step, setStep] = (0, import_react.useState)(2);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        card_stepper_exports.CardStepper,
        {
          activeStep: step,
          onStepChange: setStep,
          showNavigation: true,
          labels: ET_LABELS,
          "aria-label": "Taotluse sammud",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_stepper_exports.CardStepper.Step, { title: "Isikuandmed", state: "completed" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_stepper_exports.CardStepper.Step, { title: "\xDCldandmed", state: "completed" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_stepper_exports.CardStepper.Step, { title: "Terviseandmed", description: "Kirjeldus" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_stepper_exports.CardStepper.Step, { title: "\xDClevaade" })
          ]
        }
      );
    }
  };
  var stepIndicatorStyle = (state) => {
    const base = {
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "50%",
      fontSize: "var(--body-small-regular-size)",
      lineHeight: 1
    };
    if (state === "completed") {
      return {
        ...base,
        color: "var(--general-text-white)",
        backgroundColor: "var(--stepper-step-completed-bg)",
        border: "var(--tedi-borders-01) solid var(--stepper-step-completed-bg)"
      };
    }
    if (state === "current") {
      return {
        ...base,
        color: "var(--stepper-item-vertical-text-selected)",
        backgroundColor: "var(--stepper-step-selected-bg)",
        border: "var(--tedi-borders-02) solid var(--stepper-step-selected-border)"
      };
    }
    return {
      ...base,
      color: "var(--stepper-item-vertical-text-disabled)",
      backgroundColor: "var(--stepper-step-disabled-background)",
      border: "var(--tedi-borders-01) solid var(--stepper-step-disabled-border)"
    };
  };
  var BUTTON_STEPS = [
    { title: "Minu andmed" },
    { title: "Tervise ajalugu" },
    { title: "Anal\xFC\xFCside tulemused", description: "T\xE4idab meditsiini t\xF6\xF6taja", trailing: "15p" },
    { title: "Harjumused" },
    { title: "Praegune terviseseisund" },
    { title: "\xDClevaade" }
  ];
  var StepCard = ({ index, state, title, description, trailing, onClick }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { disabled: state === "upcoming", onClick, "aria-current": state === "current" ? "step" : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "var(--layout-grid-gutters-08)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", style: { ...stepIndicatorStyle(state), alignSelf: "flex-start" }, children: index }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flex: 1, flexDirection: "column", minWidth: 0 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "var(--layout-grid-gutters-04)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", children: title }),
        state === "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "check", color: "success", size: 18, display: "inline" })
      ] }),
      description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: description })
    ] }),
    trailing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", modifiers: "small", color: "tertiary", children: trailing }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "secondary" })
  ] }) }) }) });
  var CardStepperButton = {
    name: "Card stepper button",
    render: function CardStepperButtonExample() {
      const [active, setActive] = (0, import_react.useState)(2);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 420 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: BUTTON_STEPS.map((step, index) => {
        const state = index < active ? "completed" : index === active ? "current" : "upcoming";
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          StepCard,
          {
            index: index + 1,
            state,
            title: step.title,
            description: step.description,
            trailing: step.trailing,
            onClick: () => setActive(index)
          },
          step.title
        );
      }) }) });
    }
  };
  var semanticIndicatorStyle = (semantic, disabled = false) => {
    const base = {
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "50%",
      fontSize: "var(--body-small-regular-size)",
      lineHeight: 1
    };
    if (disabled) {
      return {
        ...base,
        color: "var(--stepper-item-vertical-text-disabled)",
        backgroundColor: "var(--stepper-step-disabled-background)",
        border: "var(--tedi-borders-01) solid var(--stepper-step-disabled-border)"
      };
    }
    if (semantic === "error") {
      return {
        ...base,
        color: "var(--general-text-white)",
        backgroundColor: "var(--stepper-step-danger-bg)",
        border: "var(--tedi-borders-01) solid var(--stepper-step-danger-bg)"
      };
    }
    if (semantic === "success") {
      return {
        ...base,
        color: "var(--general-text-white)",
        backgroundColor: "var(--stepper-step-completed-bg)",
        border: "var(--tedi-borders-01) solid var(--stepper-step-completed-bg)"
      };
    }
    return {
      ...base,
      color: "var(--general-text-secondary)",
      backgroundColor: "var(--stepper-step-default-bg)",
      border: "var(--tedi-borders-01) solid var(--stepper-step-default-border)"
    };
  };
  var SEMANTIC_COLUMNS = [
    { key: "default", label: "Default" },
    { key: "error", label: "Has error" },
    { key: "success", label: "Success" }
  ];
  var BUTTON_STATE_ROWS = ["Default", "Hover", "Active", "Focus", "Disabled"];
  var stateStepCard = (semantic, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_button_exports.CardButton, { "data-pseudo": row, disabled: row === "Disabled", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "var(--layout-grid-gutters-08)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", style: semanticIndicatorStyle(semantic, row === "Disabled"), children: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          display: "flex",
          flex: 1,
          alignItems: "center",
          gap: "var(--layout-grid-gutters-04)",
          minWidth: 0
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { element: "span", children: "Minu andmed" }),
          row !== "Disabled" && semantic === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "error", color: "danger", size: 18, display: "inline" }),
          row !== "Disabled" && semantic === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "check", color: "success", size: 18, display: "inline" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_exports.Icon, { name: "arrow_right_alt", color: "secondary" })
  ] }) }) }) });
  var CardStepperButtonStates = {
    name: "Card stepper button states",
    parameters: {
      fullWidth: true,
      pseudo: {
        hover: '[data-pseudo="Hover"]',
        active: '[data-pseudo="Active"]',
        focusVisible: '[data-pseudo="Focus"]'
      }
    },
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Row, { gutterY: 5, children: SEMANTIC_COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(grid_exports.Col, { xs: 12, md: 4, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 1, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: "bold", children: column.label }),
      BUTTON_STATE_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(text_exports.Text, { modifiers: ["small", "bold"], color: "secondary", children: row }),
        stateStepCard(column.key, row)
      ] }, row))
    ] }) }, column.key)) })
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

  // CardStepper.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(card_stepper_stories_exports, "Default", G, B);
  var WithoutStepNumber2 = compose(card_stepper_stories_exports, "WithoutStepNumber", G, B);
  var WithStatusIcon2 = compose(card_stepper_stories_exports, "WithStatusIcon", G, B);
  var WithInfoBottom2 = compose(card_stepper_stories_exports, "WithInfoBottom", G, B);
  var WithInfoTop2 = compose(card_stepper_stories_exports, "WithInfoTop", G, B);
  var HasNavigation2 = compose(card_stepper_stories_exports, "HasNavigation", G, B);
  var WithoutProgressbar2 = compose(card_stepper_stories_exports, "WithoutProgressbar", G, B);
  var WithBottomSlot2 = compose(card_stepper_stories_exports, "WithBottomSlot", G, B);
  var ManySteps2 = compose(card_stepper_stories_exports, "ManySteps", G, B);
  var CollapsibleSubSteps2 = compose(card_stepper_stories_exports, "CollapsibleSubSteps", G, B);
  var Interactive2 = compose(card_stepper_stories_exports, "Interactive", G, B);
  var CardStepperButton2 = compose(card_stepper_stories_exports, "CardStepperButton", G, B);
  var CardStepperButtonStates2 = compose(card_stepper_stories_exports, "CardStepperButtonStates", G, B);
  return __toCommonJS(CardStepper_preview_exports);
})();
