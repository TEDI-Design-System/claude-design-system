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

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      init_define_import_meta_env();
      init_define_process_env();
      module.exports = window.React;
    }
  });

  // Attachment.preview.tsx
  var Attachment_preview_exports = {};
  __export(Attachment_preview_exports, {
    Default: () => Default2,
    LabeledActions: () => LabeledActions2,
    ReadOnly: () => ReadOnly2,
    Vertical: () => Vertical2,
    WithDifferentActions: () => WithDifferentActions2,
    WithError: () => WithError2,
    WithFileSize: () => WithFileSize2,
    WithIcon: () => WithIcon2,
    WithProgress: () => WithProgress2,
    WithoutDeleteButton: () => WithoutDeleteButton2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/misc/attachment/attachment.stories.tsx
  var attachment_stories_exports = {};
  __export(attachment_stories_exports, {
    Default: () => Default,
    LabeledActions: () => LabeledActions,
    ReadOnly: () => ReadOnly,
    Vertical: () => Vertical,
    WithDifferentActions: () => WithDifferentActions,
    WithError: () => WithError,
    WithFileSize: () => WithFileSize,
    WithIcon: () => WithIcon,
    WithProgress: () => WithProgress,
    WithoutDeleteButton: () => WithoutDeleteButton,
    default: () => attachment_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/hide-at/hide-at.tsx
  var hide_at_exports = {};
  __export(hide_at_exports, {
    default: () => hide_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(hide_at_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var hide_at_default = ns2["HideAt"] ?? ns2;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/layout/show-at/show-at.tsx
  var show_at_exports = {};
  __export(show_at_exports, {
    default: () => show_at_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(show_at_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var show_at_default = ns3["ShowAt"] ?? ns3;

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

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/overlays/tooltip/index.ts
  var tooltip_exports = {};
  __export(tooltip_exports, {
    default: () => tooltip_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(tooltip_exports, __toESM(require_tedi_namespace()));
  var ns6 = window.Tedi;
  var tooltip_default = ns6["Tooltip"] ?? ns6;

  // tedi:/Users/m2rt/Bitweb/TEHIK/TEDI/react/src/tedi/components/misc/attachment/attachment.tsx
  var attachment_exports = {};
  __export(attachment_exports, {
    default: () => attachment_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(attachment_exports, __toESM(require_tedi_namespace()));
  var ns7 = window.Tedi;
  var attachment_default = ns7["Attachment"] ?? ns7;

  // src/tedi/components/misc/attachment/attachment.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: attachment_exports.Attachment,
    title: "TEDI-Ready/Components/Helpers/Attachment",
    args: {
      name: "Koduk\xFClastusakt_Triin.pdf"
    },
    argTypes: {
      icon: { control: "text" }
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.59.78?node-id=30427-154342&m=dev"
      }
    }
  };
  var attachment_stories_default = meta;
  var action = (icon, label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(tooltip_exports.Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_exports.Tooltip.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", icon: { name: icon, size: 18 }, children: label }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_exports.Tooltip.Content, { children: label })
  ] });
  var deleteAction = action("delete", "Kustuta");
  var downloadAction = action("download", "Laadi alla");
  var renderWithDelete = (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { ...args, actions: deleteAction }) });
  var Default = {
    render: renderWithDelete
  };
  var ReadOnly = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", actions: downloadAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Lisa_5.pdf", actions: downloadAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Graafik_2025.pdf", actions: downloadAction })
  ] }) });
  var WithProgress = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        name: "Koduk\xFClastusakt_Triin.pdf",
        isLoading: true,
        progress: 34,
        progressLabel: "\xDCleslaadimine",
        actions: deleteAction
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", fileSize: "0,9 MB", isLoading: true, progress: 34, actions: deleteAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        name: "Koduk\xFClastusakt_Triin.pdf",
        fileSize: "0,9 MB",
        isLoading: true,
        progress: 34,
        progressLabel: "\xDCleslaadimine",
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          downloadAction,
          deleteAction
        ] })
      }
    )
  ] }) });
  var WithFileSize = {
    render: renderWithDelete,
    args: {
      fileSize: "0,9 MB"
    }
  };
  var WithIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", fileSize: "0,9 MB", icon: "description", actions: deleteAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", fileSize: "0,9 MB", icon: "imagesmode", actions: deleteAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", fileSize: "0,9 MB", icon: "audio_file", actions: deleteAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", fileSize: "0,9 MB", icon: "picture_as_pdf", actions: deleteAction })
  ] }) });
  var WithoutDeleteButton = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", fileSize: "0,9 MB" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", fileSize: "0,9 MB" })
  ] }) });
  var WithDifferentActions = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.5, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        name: "Koduk\xFClastusakt_Triin.pdf",
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          action("visibility", "Vaata"),
          downloadAction,
          deleteAction
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        name: "Koduk\xFClastusakt_Triin.pdf",
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          downloadAction,
          deleteAction
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", actions: downloadAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", fileSize: "0,9 MB", actions: deleteAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        name: "Koduk\xFClastusakt_Triin.pdf",
        fileSize: "0,9 MB",
        isLoading: true,
        progress: 34,
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          downloadAction,
          deleteAction
        ] })
      }
    )
  ] }) });
  var Vertical = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 350 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.75, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        direction: "vertical",
        name: "Koduk\xFClastusakt_Triin_natuke_pikema_pealkirjaga.pdf",
        fileSize: "0,9 MB",
        isLoading: true,
        progress: 34,
        actions: deleteAction
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        direction: "vertical",
        name: "Koduk\xFClastusakt_Triin_natuke_pikema_pealkirjaga.pdf",
        fileSize: "0,9 MB",
        actions: deleteAction
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { direction: "vertical", name: "Koduk\xFClastusakt.pdf", fileSize: "0,9 MB", actions: downloadAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        direction: "vertical",
        name: "Koduk\xFClastusakt.pdf",
        fileSize: "0,9 MB",
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          downloadAction,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", icon: { name: "more_vert", size: 18 }, children: "Rohkem valikuid" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dropdown_exports.Dropdown.Content, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 0, children: "Nimeta \xFCmber" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dropdown_exports.Dropdown.Item, { index: 1, children: "Kustuta" })
            ] })
          ] })
        ] })
      }
    )
  ] }) });
  var WithError = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(vertical_spacing_exports.VerticalSpacing, { size: 0.75, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(attachment_exports.Attachment, { name: "Koduk\xFClastusakt_Triin.pdf", actions: deleteAction }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      attachment_exports.Attachment,
      {
        name: "Koduk\xFClastusakt_Triin.pdf",
        isValid: false,
        feedback: { text: "Tagasiside tekst", type: "error" },
        actions: deleteAction
      }
    )
  ] }) });
  var LabeledActions = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { maxWidth: 480 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    attachment_exports.Attachment,
    {
      name: "Koduk\xFClastusakt_Triin.pdf",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(show_at_exports.ShowAt, { sm: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", gap: "0.5rem", paddingInline: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", iconLeft: { name: "download", size: 18 }, children: "Laadi alla" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { visualType: "neutral", iconLeft: { name: "delete", size: 18 }, children: "Kustuta" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(hide_at_exports.HideAt, { sm: true, children: [
          downloadAction,
          deleteAction
        ] })
      ] })
    }
  ) });

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

  // Attachment.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(attachment_stories_exports, "Default", G, B);
  var ReadOnly2 = compose(attachment_stories_exports, "ReadOnly", G, B);
  var WithProgress2 = compose(attachment_stories_exports, "WithProgress", G, B);
  var WithFileSize2 = compose(attachment_stories_exports, "WithFileSize", G, B);
  var WithIcon2 = compose(attachment_stories_exports, "WithIcon", G, B);
  var WithoutDeleteButton2 = compose(attachment_stories_exports, "WithoutDeleteButton", G, B);
  var WithDifferentActions2 = compose(attachment_stories_exports, "WithDifferentActions", G, B);
  var Vertical2 = compose(attachment_stories_exports, "Vertical", G, B);
  var WithError2 = compose(attachment_stories_exports, "WithError", G, B);
  var LabeledActions2 = compose(attachment_stories_exports, "LabeledActions", G, B);
  return __toCommonJS(Attachment_preview_exports);
})();
