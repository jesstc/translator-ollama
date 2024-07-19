    
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
        <div class="grid grid-nogutter mt-2 align-items-center">
          <TextareaBox class="col" label="Original Content" />
          <div class="col-1 text-center">
            <i class="pi pi-arrow-right" style="color: 'var(--p-primary-color)'"></i>
          </div>
          <TextareaBox class="col" label="Translated Content" />
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
import TextareaBox from './TextareaBox.vue';

export default defineComponent({
  name: 'TranslateSteps',
  components: {
    ButtonList,
    Selection,
    TextareaBox,
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