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
      function jsx4(type, props, key) {
        return R.createElement(type, key === void 0 ? props : Object.assign({}, props, { key }));
      }
      module.exports = { jsx: jsx4, jsxs: jsx4, jsxDEV: jsx4, Fragment: R.Fragment };
    }
  });

  // FileUpload.preview.tsx
  var FileUpload_preview_exports = {};
  __export(FileUpload_preview_exports, {
    ControlledClearing: () => ControlledClearing2,
    Default: () => Default2,
    Disabled: () => Disabled2,
    ExtensionAndSizeLimit: () => ExtensionAndSizeLimit2,
    LoadingState: () => LoadingState2,
    Multiple: () => Multiple2,
    MultipleHandled: () => MultipleHandled2,
    MultipleWithIndividualValidation: () => MultipleWithIndividualValidation2,
    PdfAndTxtOnly: () => PdfAndTxtOnly2,
    ReadOnlyFiles: () => ReadOnlyFiles2,
    SizeLimited: () => SizeLimited2,
    Sizes: () => Sizes2,
    ValidationFailed: () => ValidationFailed2,
    ValidationSuccess: () => ValidationSuccess2,
    WithHint: () => WithHint2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/form/file-upload/file-upload.stories.tsx
  var file_upload_stories_exports = {};
  __export(file_upload_stories_exports, {
    ControlledClearing: () => ControlledClearing,
    Default: () => Default,
    Disabled: () => Disabled,
    ExtensionAndSizeLimit: () => ExtensionAndSizeLimit,
    LoadingState: () => LoadingState,
    Multiple: () => Multiple,
    MultipleHandled: () => MultipleHandled,
    MultipleWithIndividualValidation: () => MultipleWithIndividualValidation,
    PdfAndTxtOnly: () => PdfAndTxtOnly,
    ReadOnlyFiles: () => ReadOnlyFiles,
    SizeLimited: () => SizeLimited,
    Sizes: () => Sizes,
    ValidationFailed: () => ValidationFailed,
    ValidationSuccess: () => ValidationSuccess,
    WithHint: () => WithHint,
    default: () => file_upload_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  var import_react2 = __toESM(require_react(), 1);

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
  var ns3 = window.Tedi;
  var row_default = ns3["Row"] ?? ns3;

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
  var ns4 = window.Tedi;
  var col_default = ns4["Col"] ?? ns4;

  // src/tedi/components/layout/grid/index.ts
  __reExport(grid_exports, col_exports);

  // src/tedi/components/form/file-upload/examples/multiple-handled.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var import_react = __toESM(require_react(), 1);

  // tedi:src/tedi/components/form/file-upload/file-upload.tsx
  var file_upload_exports = {};
  __export(file_upload_exports, {
    default: () => file_upload_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(file_upload_exports, __toESM(require_tedi_namespace()));
  var ns5 = window.Tedi;
  var file_upload_default = ns5["FileUpload"] ?? ns5;

  // src/tedi/components/form/file-upload/examples/multiple-handled.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var MultipleHandledTemplate = (args) => {
    const [files, setFiles] = import_react.default.useState([{ name: "avaldus.pdf" }]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(file_upload_default, { files, onChange: setFiles, ...args });
  };

  // src/tedi/components/form/file-upload/file-upload.stories.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: file_upload_default,
    title: "TEDI-Ready/Components/Form/FileUpload",
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-(work-in-progress)?node-id=4536-78765&m=dev"
      },
      a11y: {
        config: {
          rules: [{ id: "color-contrast", enabled: false }]
        }
      }
    }
  };
  var file_upload_stories_default = meta;
  var sizesArray = ["default", "small"];
  var TemplateSizes = (args) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "example-list", children: sizesArray.map((size, key) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(grid_exports.Row, { className: `${key === sizesArray.length - 1 ? "" : "border-bottom"} padding-14-16`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(text_exports.Text, { modifiers: "bold", children: size.charAt(0).toUpperCase() + size.slice(1) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(grid_exports.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(file_upload_default, { ...args, size, id: `file-upload-${key}` }) })
    ] }, key)) });
  };
  var Default = {
    args: {
      id: "file-upload",
      name: "file",
      label: "Laadi fail \xFCles"
    }
  };
  var Sizes = {
    render: TemplateSizes,
    args: {
      label: "Silt"
    }
  };
  var WithHint = {
    args: {
      id: "file-upload",
      name: "file",
      label: "Laadi fail \xFCles",
      helper: {
        text: "JPG, PNG, PDF suurusega kuni 0.001 MB."
      }
    }
  };
  var Disabled = {
    args: {
      id: "file-upload-disabled",
      name: "file-loading",
      label: "Laadi fail \xFCles",
      defaultFiles: [{ name: "report.pdf" }],
      disabled: true
    }
  };
  var ValidationFailed = {
    args: {
      id: "file-upload-validation-failed",
      name: "file-validation-failed",
      label: "Laadi fail \xFCles",
      maxSize: 1024,
      accept: ".pdf,.txt",
      multiple: true,
      keepRejectedFiles: true,
      defaultFiles: [{ name: "taotlus_scan_lk_1.pdf", isValid: false }]
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      file_upload_default,
      {
        ...args,
        helper: {
          type: "error",
          text: "Tagasiside tekst"
        }
      }
    )
  };
  var ValidationSuccess = {
    args: {
      id: "file-upload-validation-failed",
      name: "file-validation-failed",
      label: "Laadi fail \xFCles",
      maxSize: 1024,
      accept: ".pdf,.txt",
      multiple: true,
      keepRejectedFiles: true,
      defaultFiles: [{ name: "taotlus_scan_lk_1.pdf", isValid: false }]
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      file_upload_default,
      {
        ...args,
        helper: {
          type: "valid",
          text: "Tagasiside tekst"
        }
      }
    )
  };
  var MultipleWithIndividualValidation = {
    args: {
      id: "file-upload-multiple-individual-validation",
      name: "file-multiple-individual-validation",
      label: "Laadi failid \xFCles",
      multiple: true,
      maxSize: 10 * 1024,
      accept: ".pdf,.txt",
      keepRejectedFiles: true,
      hasClearButton: true,
      defaultFiles: [
        { name: "taotlus_scan_lk_1.pdf" },
        { name: "taotlus_scan_lk_2.pdf" },
        { name: "taotlus_scan_lk_3.pdf" },
        { name: "taotlus_scan_lk_4.pdf" },
        { name: "taotlus_scan_lk_5.pdf", isValid: false }
      ],
      helper: {
        text: "Lubatud on ainult .pdf ja .txt failid suurusega kuni 1 KB."
      }
    },
    render: (args) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      file_upload_default,
      {
        ...args,
        onChange: (files) => {
          console.log("Uploaded files:", files);
        },
        helper: {
          type: "error",
          text: "Sobimatu fail. Lubatud on ainult .pdf ja .txt failid suurusega kuni 1 KB."
        }
      }
    )
  };
  var LoadingState = {
    args: {
      id: "file-upload-loading",
      name: "file-loading",
      label: "Laadi fail \xFCles",
      defaultFiles: [{ name: "report.pdf", isLoading: true }, { name: "report_1.pdf" }]
    }
  };
  var Multiple = {
    args: {
      id: "file-upload-MULTIPLE",
      name: "file-multiple",
      label: "Laadi fail \xFCles",
      multiple: true,
      defaultFiles: [{ name: "report.pdf" }, { name: "report_1.pdf" }, { name: "report_2.pdf" }],
      helper: {
        text: "JPG, PNG, PDF suurusega kuni 0.001 MB."
      }
    }
  };
  var MultipleHandled = {
    render: MultipleHandledTemplate,
    args: {
      id: "file-upload-handled",
      name: "file-loading-handled",
      label: "Laadi fail \xFCles",
      multiple: true,
      onDelete: (file) => {
        console.log(`Deleted - ${file.name}`);
      }
    }
  };
  var ReadOnlyFiles = {
    args: {
      id: "file-upload-read-only",
      name: "file-loading",
      label: "Laadi fail \xFCles",
      defaultFiles: [{ name: "report.pdf" }, { name: "report_1.pdf" }, { name: "report_2.pdf" }],
      onChange: (files) => {
        console.log(files);
      },
      readOnly: true
    }
  };
  var PdfAndTxtOnly = {
    args: {
      id: "file-upload-accepts",
      name: "file-accepts",
      label: "Laadi fail \xFCles",
      accept: ".pdf,.txt"
    }
  };
  var SizeLimited = {
    args: {
      id: "file-upload-size-limited",
      name: "file-size-limited",
      label: "Laadi fail \xFCles",
      maxSize: 1024,
      multiple: true
    }
  };
  var ExtensionAndSizeLimit = {
    args: {
      id: "file-upload-size-extension-limited",
      name: "file-size-extension-limited",
      label: "Laadi fail \xFCles",
      maxSize: 1024,
      accept: ".pdf,.txt",
      multiple: true
    }
  };
  var ControlledClearing = {
    parameters: { chromatic: { disableSnapshot: true } },
    render: (args) => {
      const [files, setFiles] = import_react2.default.useState([
        { name: "report.pdf" },
        { name: "report_1.pdf" },
        { name: "report_2.pdf" }
      ]);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(file_upload_default, { ...args, files, onChange: (f) => setFiles(f), multiple: true }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginTop: "12px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(button_default, { onClick: () => setFiles([]), children: "Salvesta ja t\xFChjenda failid" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("pre", { children: [
            "Failid: ",
            JSON.stringify(files, null, 2)
          ] })
        ] })
      ] });
    },
    args: {
      id: "file-upload-clear-controlled",
      name: "file-upload-clear-controlled",
      label: "Laadi fail \xFCles",
      hasClearButton: true
    }
  };

  // tedi-compose:compose.tsx
  init_define_import_meta_env();
  init_define_process_env();
  var React3 = __toESM(require_react());
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
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
      if (Component) render = () => React3.createElement(Component, args);
    }
    if (!render) return () => null;
    const decorators = [].concat(story?.decorators ?? []).concat(meta2.decorators ?? []);
    const decorated = decorators.reduce(
      (inner, decorator) => () => decorator(inner, context) ?? inner(),
      render
    );
    const background = backgrounds[context.globals.backgrounds?.value];
    const Story = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: decorated() });
    if (!background) return Story;
    return () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { background }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Story, {}) });
  }

  // FileUpload.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(file_upload_stories_exports, "Default", G, B);
  var Sizes2 = compose(file_upload_stories_exports, "Sizes", G, B);
  var WithHint2 = compose(file_upload_stories_exports, "WithHint", G, B);
  var Disabled2 = compose(file_upload_stories_exports, "Disabled", G, B);
  var ValidationFailed2 = compose(file_upload_stories_exports, "ValidationFailed", G, B);
  var ValidationSuccess2 = compose(file_upload_stories_exports, "ValidationSuccess", G, B);
  var MultipleWithIndividualValidation2 = compose(file_upload_stories_exports, "MultipleWithIndividualValidation", G, B);
  var LoadingState2 = compose(file_upload_stories_exports, "LoadingState", G, B);
  var Multiple2 = compose(file_upload_stories_exports, "Multiple", G, B);
  var MultipleHandled2 = compose(file_upload_stories_exports, "MultipleHandled", G, B);
  var ReadOnlyFiles2 = compose(file_upload_stories_exports, "ReadOnlyFiles", G, B);
  var PdfAndTxtOnly2 = compose(file_upload_stories_exports, "PdfAndTxtOnly", G, B);
  var SizeLimited2 = compose(file_upload_stories_exports, "SizeLimited", G, B);
  var ExtensionAndSizeLimit2 = compose(file_upload_stories_exports, "ExtensionAndSizeLimit", G, B);
  var ControlledClearing2 = compose(file_upload_stories_exports, "ControlledClearing", G, B);
  return __toCommonJS(FileUpload_preview_exports);
})();
