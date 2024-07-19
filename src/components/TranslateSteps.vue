    
<template>

<div class="mt-3">
  <Stepper value="1">
    <StepItem value="1">
      <Step><b class="text-lg">Translate Type</b></Step>
      <StepPanel>
        <ButtonList @updated="onUpdateSelect" />
      </StepPanel>
    </StepItem>
  </Stepper>
</div>

<div class="mt-3">
  <Stepper value="2" >
    <StepItem value="2">
      <Step><b class="text-lg">Select Translate Model</b></Step>
      <StepPanel>
        <Selection @updated="onUpdateModel" />
      </StepPanel>
    </StepItem>
  </Stepper>
</div>

<div class="mt-3">
  <Stepper value="3">
    <StepItem value="3">
      <Step><b class="text-lg">Enter / Upload the Content You Want to Translate: </b></Step>
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
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonList from './ButtonList.vue';
import Selection from './Selection.vue';

export default defineComponent({
  name: 'TranslateSteps',
  components: {
    ButtonList,
    Selection
  },
  setup() {
    function onUpdateSelect(selectedVal: string):void {
      console.log("father(type): ", selectedVal);
    }

    function onUpdateModel(selectedVal: string):void {
      console.log("father(model): ", selectedVal);
    }

    return {
      onUpdateSelect,
      onUpdateModel,
    };
  }
});
</script>