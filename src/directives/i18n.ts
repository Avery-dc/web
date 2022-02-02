import { Directive, DirectiveBinding, computed } from "vue";

import { useStore } from "@/store";
import { Modules } from "@/store";

const store = useStore();

export default <Directive>{
  mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
    let { arg, value } = binding;
    let { key, txt } = <{ key: string; txt: string }>(
      /(^\/(?<key>([a-zA-Z0-9])*)\/)?(?<txt>.*)/gm.exec(value)?.groups
    ) || { key: void 0, txt: "" };

    let language = computed(() => store.state[Modules.I18N].language);
    let data = computed(() => store.state[Modules.I18N].data);

    key && (txt = data.value[language.value]?.[`${arg}-${key}`] || txt);

    el.innerText = txt;
  },
};
