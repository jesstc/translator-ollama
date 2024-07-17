    
<template>
  <ButtonList @updated="onUpdateSelect" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonList from './ButtonList.vue';

export default defineComponent({
  name: 'TranslateSteps',
  components: {
    ButtonList,
  },
  setup() {
    function onUpdateSelect(selectedVal: string):void {
      console.log("father: ", selectedVal);
    }

    return {
      onUpdateSelect,
    };
  }
});
</script>

  