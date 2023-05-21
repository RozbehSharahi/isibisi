<script setup lang="ts">
import { FillQuest } from "~/quests/fill-quest";
import TheHeadline from "~/comps/TheHeadline.vue";
import TheQuest from "~/comps/TheQuest.vue";
import TheGrid from "~/comps/TheGrid.vue";
import TheContainer from "~/comps/TheContainer.vue";
import TheCard from "~/comps/TheCard.vue";
import TheFullInput from "~/comps/TheFullInput.vue";
import ThePoints from "~/comps/ThePoints.vue";
import { timeout } from "~/utils/timeout";
import TheButton from "~/comps/TheButton.vue";
import TheRandomVideo from "~/comps/TheRandomVideo.vue";
import { randomSample } from "~/utils/random";

const createNewQuest = (): FillQuest => {
  const possibleQuests: (() => FillQuest)[] = [
    () => FillQuest.create3PartSumQuestWithXInBetween(),
    () => FillQuest.createSumQuest(),
    () => FillQuest.create3PartSumQuest(),
    () => FillQuest.createSubtraction(),
  ];
  return randomSample(possibleQuests)();
};

const quest = ref(createNewQuest());
const points = ref(0);
const showVideo = ref(false);

const input = ref<string | null>(null);

const getInput = () => input.value || "";

const getInputElement = (): HTMLInputElement => {
  const element = document.getElementsByClassName("input")[0];

  if (!(element instanceof HTMLInputElement)) {
    throw new TypeError("Could not find input");
  }

  return element;
};

const verify = () => {
  points.value = quest.value.verify(getInput()) ? points.value + 1 : 0;
};

const newGame = async () => {
  input.value = null;
  quest.value = createNewQuest();
  await timeout(1);
  getInputElement().focus();
};

const success = () => {
  showVideo.value = true;
};

const restart = () => {
  input.value = null;
  showVideo.value = false;
  points.value = 0;
  newGame();
};

onMounted(async () => {
  await timeout(1);
  if (process.client) {
    getInputElement().focus();
  }
});
</script>
<template>
  <client-only>
    <the-quest>
      <the-container v-if="!showVideo" :tag="'form'" @submit.prevent="verify">
        <the-grid gap="2em">
          <the-headline>Ola isabella, faz as contas !</the-headline>
          <the-points
            :current-points="points"
            :max="15"
            @success="success"
            @change="newGame"
          />
          <the-grid :key="quest.getCalculation()">
            <div
              v-for="part in quest.getParts()"
              :key="part.getIdentifier()"
              class="span-1"
            >
              <the-card
                v-if="part.getType() === 'string'"
                class="text-center p-1em"
              >
                {{ part.getValue() }}
              </the-card>
              <the-full-input
                v-else
                v-model="input"
                class="text-center input"
              />
            </div>
          </the-grid>
        </the-grid>
      </the-container>
      <the-container v-else tag="div" class="video">
        <the-grid>
          <the-headline>Bravo Isabella</the-headline>
          <the-random-video />
          <the-button @click="restart">Outra Vez</the-button>
        </the-grid>
      </the-container>
    </the-quest>
  </client-only>
</template>
<style lang="scss" scoped>
.the-quest {
  height: 99vh;
}
</style>
