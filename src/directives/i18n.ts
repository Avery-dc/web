import { Directive, DirectiveBinding, computed } from "vue";

import { useStore } from "@/store";
import { Modules } from "@/store";
import { classify } from "@/utils";

const store = useStore();

export default <Directive>{
  created(a, b, vnode) {
    console.log();
    let options = vnode.dirs?.[0].instance?.$options;
    console.log(options);
  },
  mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
    let { arg, value } = binding;
    let { key, defaultTxt: txt } = <{ key?: string; defaultTxt: string }>(
      /^\/(?<key>([a-zA-Z0-9])*)\/(?<defaultTxt>)/gm.exec(value)?.groups
    ) || { key: void 0, defaultTxt: "" };

    let language = computed(() => store.state[Modules.I18N].language);
    let data = computed(() => store.state[Modules.I18N].data);

    if (key) txt = data.value[language.value]?.[key] || txt;

    el.innerText = txt;
  },
};
