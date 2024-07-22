    
<template>
  <div class="card flex flex-column gap-1">
    <div class="flex align-items-center justify-content-between">
      <label class="font-bold">{{ label }}</label>
      <div class="flex gap-2">
        <Button label="Copy" icon="pi pi-copy" size="small" severity="secondary" rounded 
                @click="copyText"
                :disabled="charCount === 0" />
        <Button label="Paste" icon="pi pi-clipboard" size="small" severity="secondary" rounded 
                @click="pasteText"
                v-if="!isTranslated" />
      </div>
    </div>

    <div class="flex flex-column gap-1">
      <Textarea v-model="text" rows="20" autoResize
                :disabled="isTranslated"
                :invalid="text.length >= 4000"
                @input="onInput"
                />
      <small class="text-right px-1">{{ charCount }} / {{ maxChars }}</small>
    </div>
      
    
    
  </div>
</template>

  
<script lang="ts">
import { ref, computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TextareaBox',
  props: {
    isTranslated: {   // true: translated content
      type: Boolean as PropType<boolean>,
      required: false,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ['updated'],
  setup() {
    const text = ref<string>('');
    const maxChars:number = 4000;
    const charCount = computed(() => text.value.length);

    const copyText = async () => {
      try {
        await navigator.clipboard.writeText(text.value);
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

    const pasteText = async () => {
      try {
        let pastedText:string = await navigator.clipboard.readText();
        if (pastedText.length > maxChars) {
          const remainingChars = maxChars - text.value.length;
          pastedText = pastedText.slice(0, remainingChars);
        }
        text.value = pastedText;
        console.log('Text pasted from clipboard');
      } catch (err) {
        console.error('Failed to paste text: ', err);
      }
    };

    const onInput = (event: Event) => {
      const input = event.target as HTMLTextAreaElement;
      if (input.value.length > maxChars) {
        input.value = input.value.slice(0, maxChars);
        text.value = input.value;
      }
    };

    return {
      text,
      maxChars,
      charCount,
      copyText,
      pasteText,
      onInput,
    };
  },
})
</script>

<style lang="css">
.p-textarea {
  resize: none; /* 禁用調整功能 */
}
</style>