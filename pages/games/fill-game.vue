<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
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
import { randomSample } from "~/utils/random";
import TheSadFace from "~/comps/TheSadFace.vue";

const route = useRoute();
const router = useRouter();
const videoCollection = computed(() =>
  route.query.hard ? "short-videos" : "song-videos"
);
const videoTimeout = computed(() => (route.query.hard ? 60 * 10 : 60 * 3));
const neededPoints = computed(() => (route.query.hard ? 20 : 12));
const createNewQuest = (): FillQuest => {
  const possibleQuests: (() => FillQuest)[] = [
    () => FillQuest.createTensSumQuest(),
    () => FillQuest.createTensMinusQuest(),
    () => FillQuest.create3PartSumWithXInBetweenQuest(),
    () => FillQuest.createSumQuest(),
    () => FillQuest.create3PartSumQuest(),
    () => FillQuest.createMinusQuest(),
    () => FillQuest.createBigNumberMinusQuest(),
  ];
  return randomSample(possibleQuests)();
};

const quest = ref(createNewQuest());
const points = ref(0);
const error = ref(false);

const input = ref<string | null>(null);

const getInput = () => input.value || "";

const getInputElement = (): HTMLInputElement => {
  const element = document.getElementsByClassName("input")[0];

  if (!(element instanceof HTMLInputElement)) {
    throw new TypeError("Could not find input");
  }

  return element;
};

const focusInput = async () => {
  await timeout(1);
  getInputElement().focus();
};

const verify = () => {
  if (quest.value.verify(getInput())) {
    input.value = null;
    points.value++;
    quest.value = createNewQuest();
    focusInput();
    return;
  }

  error.value = true;
  points.value = 0;
};

const success = () => {
  router.push({
    path: "/video/select",
    query: {
      timeout: videoTimeout.value,
      collection: videoCollection.value,
    },
  });
};

const restart = () => {
  input.value = null;
  points.value = 0;
  quest.value = createNewQuest();
  error.value = false;
  focusInput();
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
      <the-container :tag="'form'" @submit.prevent="verify">
        <the-grid gap="2em">
          <the-headline v-if="!error">
            Ola isabella, faz as contas !
          </the-headline>
          <template v-else>
            <the-headline>Tenta de novo</the-headline>
            <the-sad-face />
          </template>
          <the-points
            :current-points="points"
            :max="neededPoints"
            @success="success"
          />
          <the-grid :key="quest.getCalculation()" :columns="14" class="quest">
            <div
              v-for="part in quest.getParts()"
              :key="part.getIdentifier()"
              class="span-2"
            >
              <the-card
                v-if="part.getType() === 'string'"
                class="text-center h-4em"
              >
                <span
                  :class="part.isSymbol() ? 'bigger' : ''"
                  v-html="part.getValue()"
                />
              </the-card>
              <the-full-input
                v-else
                v-model="input"
                class="text-center input"
                :error="error"
                :disabled="error"
              />
            </div>
          </the-grid>
          <the-button v-if="error" class="span-6" @click="restart">
            De novo
          </the-button>
        </the-grid>
      </the-container>
    </the-quest>
  </client-only>
</template>
<style lang="scss" scoped>
.the-quest {
  height: 80vh;
}

.bigger {
  font-weight: bold;
  font-size: 1.4em;
}

.quest {
  font-size: 1.5em;
}
</style>
