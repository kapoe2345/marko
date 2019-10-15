"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/vdom-compiler/fixtures/no-escape/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.t("Hello ");

  out.t(name);

  out.t("! ");

  out.h(message);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);