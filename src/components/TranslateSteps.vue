    
<template>
  <Stepper value="1">
    <StepItem value="1">
      <Step><h2>Select Translate Type</h2></Step>
      <StepPanel>
        <ButtonList @updated="onUpdateSelect" />
      </StepPanel>
    </StepItem>
  </Stepper>
  <Stepper value="2">
    <StepItem value="2">
      <Step label="Step 2"><h2>Select Translate Model</h2></Step>
      <StepPanel>
        <div class="flex flex-col h-48">
          <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
        </div>
        <div class="flex py-6 gap-2">
          <Button label="Back" severity="secondary" />
          <Button label="Next" />
        </div>
      </StepPanel>
    </StepItem>
  </Stepper>
  <Stepper value="3">
    <StepItem value="3">
      <Step><h2>Enter / Upload the Content You Want to Translate: </h2></Step>
      <StepPanel>
        <div class="flex flex-col h-48">
          <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
        </div>
        <div class="py-6">
          <Button label="Back" severity="secondary" />
        </div>
      </StepPanel>
    </StepItem>
  </Stepper>
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