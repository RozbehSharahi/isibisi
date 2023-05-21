<script setup lang="ts">
import { SumGame } from "~/games/sum-game";
import TheHeadline from "~/comps/TheHeadline.vue";
import TheQuest from "~/comps/TheQuest.vue";
import TheGrid from "~/comps/TheGrid.vue";
import TheContainer from "~/comps/TheContainer.vue";
import TheCard from "~/comps/TheCard.vue";
import TheFullInput from "~/comps/TheFullInput.vue";
import TheButton from "~/comps/TheButton.vue";
import ThePoints from "~/comps/ThePoints.vue";

const sumGame = ref(new SumGame("10 + x = 13", 3));
const points = ref(0);
const input = ref<string | null>(null);

const getInput = () => input.value ?? "";

const getElement = (): HTMLInputElement => {
  const element = document.getElementsByClassName("input")[0];

  if (!(element instanceof HTMLInputElement)) {
    throw new TypeError("Could not find input");
  }

  return element;
};

const verify = () => {
  points.value = sumGame.value.verify(getInput()) ? points.value + 1 : 0;
};

const success = () => {
  alert("Jiiiihaaaaa");
};

onMounted(() => {
  getElement().focus();
});
</script>
<template>
  <the-quest>
    <the-container :tag="'form'" @submit.prevent="verify">
      <the-grid gap="2em">
        <the-headline>Ola isabella, calculate this one !</the-headline>
        <the-points :current-points="points" @success="success" />
        <the-grid>
          <div
            v-for="part in sumGame.getParts()"
            :key="part.getIdentifier()"
            class="span-2"
          >
            <the-card
              v-if="part.getType() === 'string'"
              class="text-center p-1em"
            >
              {{ part.getValue() }}
            </the-card>
            <the-full-input v-else v-model="input" class="text-center input" />
          </div>
        </the-grid>
      </the-grid>
    </the-container>
  </the-quest>
</template>
<style lang="scss" scoped>
.the-quest {
  height: 99vh;
}
</style>
