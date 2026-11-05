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

  // EmptyState.preview.tsx
  var EmptyState_preview_exports = {};
  __export(EmptyState_preview_exports, {
    AttachedToComponent: () => AttachedToComponent2,
    CustomIcon: () => CustomIcon2,
    Default: () => Default2,
    DifferentIconColor: () => DifferentIconColor2,
    InsideComponent: () => InsideComponent2,
    Minimal: () => Minimal2,
    Separate: () => Separate2,
    SmallPadding: () => SmallPadding2,
    WithHeading: () => WithHeading2,
    WithLink: () => WithLink2,
    WithPrimaryAction: () => WithPrimaryAction2,
    WithSecondaryAction: () => WithSecondaryAction2
  });
  init_define_import_meta_env();
  init_define_process_env();

  // src/tedi/components/content/empty-state/empty-state.stories.tsx
  var empty_state_stories_exports = {};
  __export(empty_state_stories_exports, {
    AttachedToComponent: () => AttachedToComponent,
    CustomIcon: () => CustomIcon,
    Default: () => Default,
    DifferentIconColor: () => DifferentIconColor,
    InsideComponent: () => InsideComponent,
    Minimal: () => Minimal,
    Separate: () => Separate,
    SmallPadding: () => SmallPadding,
    WithHeading: () => WithHeading,
    WithLink: () => WithLink,
    WithPrimaryAction: () => WithPrimaryAction,
    WithSecondaryAction: () => WithSecondaryAction,
    default: () => empty_state_stories_default
  });
  init_define_import_meta_env();
  init_define_process_env();

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/buttons/button/button.tsx
  var button_exports = {};
  __export(button_exports, {
    default: () => button_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(button_exports, __toESM(require_tedi_namespace()));
  var ns = window.Tedi;
  var button_default = ns["Button"] ?? ns;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/card/index.ts
  var card_exports = {};
  __export(card_exports, {
    default: () => card_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(card_exports, __toESM(require_tedi_namespace()));
  var ns2 = window.Tedi;
  var card_default = ns2["Card"] ?? ns2;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/navigation/link/link.tsx
  var link_exports = {};
  __export(link_exports, {
    default: () => link_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(link_exports, __toESM(require_tedi_namespace()));
  var ns3 = window.Tedi;
  var link_default = ns3["Link"] ?? ns3;

  // tedi:/home/runner/work/claude-design-system/claude-design-system/react/src/tedi/components/content/empty-state/empty-state.tsx
  var empty_state_exports = {};
  __export(empty_state_exports, {
    default: () => empty_state_default
  });
  init_define_import_meta_env();
  init_define_process_env();
  __reExport(empty_state_exports, __toESM(require_tedi_namespace()));
  var ns4 = window.Tedi;
  var empty_state_default = ns4["EmptyState"] ?? ns4;

  // src/tedi/components/content/empty-state/empty-state.stories.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var meta = {
    component: empty_state_exports.EmptyState,
    title: "TEDI-Ready/Content/EmptyState",
    argTypes: {
      heading: { control: false },
      actions: { control: false }
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/design/jWiRIXhHRxwVdMSimKX2FF/TEDI-READY-2.65.81?node-id=2413-40492&m=dev"
      }
    }
  };
  var empty_state_stories_default = meta;
  var Default = {
    args: {
      children: "Andmed puuduvad"
    }
  };
  var WithPrimaryAction = {
    args: {
      children: "Andmed puuduvad",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { type: "button", iconLeft: "add", children: "Loo uus" })
    }
  };
  var WithSecondaryAction = {
    args: {
      children: "Andmed puuduvad",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { type: "button", visualType: "secondary", iconLeft: "add", children: "Loo uus" })
    }
  };
  var WithLink = {
    args: {
      children: "Andmed puuduvad",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link_exports.Link, { href: "#", iconRight: "arrow_forward", children: "Loe rohkem" })
    }
  };
  var WithHeading = {
    args: {
      icon: "event_busy",
      heading: "Broneeri aeg",
      children: "Andmed puuduvad",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { type: "button", children: "Vali aeg" })
    }
  };
  var Minimal = {
    args: {
      icon: null,
      children: "Andmed puuduvad"
    }
  };
  var SmallPadding = {
    args: {
      children: "Andmed puuduvad",
      size: "small",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { type: "button", iconLeft: "add", children: "Loo uus" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(button_exports.Button, { type: "button", visualType: "secondary", iconRight: "arrow_forward", children: "Loe rohkem" })
      ] })
    }
  };
  var Separate = {
    args: {
      children: "Andmed puuduvad",
      type: "separate"
    }
  };
  var AttachedToComponent = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { borderRadius: { bottomLeft: false, bottomRight: false }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.CardContent, { children: "Previous content" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(empty_state_exports.EmptyState, { type: "attached", children: "Andmed puuduvad" })
    ] })
  };
  var InsideComponent = {
    render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card_exports.CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(empty_state_exports.EmptyState, { type: "inside", children: "Andmed puuduvad" }) }) })
  };
  var CustomIcon = {
    args: {
      children: "Ostukorvis pole tooteid",
      icon: { name: "shopping_cart_off" }
    }
  };
  var DifferentIconColor = {
    args: {
      children: "Andmed puuduvad",
      icon: { name: "spa", color: "tertiary" }
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

  // EmptyState.preview.tsx
  var G = { "theme": "default" };
  var B = { "default": "var(--general-surface-primary)", "inverted": "var(--general-surface-inverted-primary)", "brand": "var(--general-surface-brand-primary)" };
  var Default2 = compose(empty_state_stories_exports, "Default", G, B);
  var WithPrimaryAction2 = compose(empty_state_stories_exports, "WithPrimaryAction", G, B);
  var WithSecondaryAction2 = compose(empty_state_stories_exports, "WithSecondaryAction", G, B);
  var WithLink2 = compose(empty_state_stories_exports, "WithLink", G, B);
  var WithHeading2 = compose(empty_state_stories_exports, "WithHeading", G, B);
  var Minimal2 = compose(empty_state_stories_exports, "Minimal", G, B);
  var SmallPadding2 = compose(empty_state_stories_exports, "SmallPadding", G, B);
  var Separate2 = compose(empty_state_stories_exports, "Separate", G, B);
  var AttachedToComponent2 = compose(empty_state_stories_exports, "AttachedToComponent", G, B);
  var InsideComponent2 = compose(empty_state_stories_exports, "InsideComponent", G, B);
  var CustomIcon2 = compose(empty_state_stories_exports, "CustomIcon", G, B);
  var DifferentIconColor2 = compose(empty_state_stories_exports, "DifferentIconColor", G, B);
  return __toCommonJS(EmptyState_preview_exports);
})();
