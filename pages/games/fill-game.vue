<script setup lang="ts">
import { useRouter } from "vue-router";
import { FillQuest } from "~/quests/fill-quest";
import TheHeadline from "~/comps/TheHeadline.vue";
import TheQuest from "~/comps/TheQuest.vue";
import TheGrid from "~/comps/TheGrid.vue";
import TheContainer from "~/comps/TheContainer.vue";
import TheCard from "~/comps/TheCard.vue";
import TheFullInput from "~/comps/TheFullInput.vue";
import ThePoints from "~/comps/ThePoints.vue";
import TheButton from "~/comps/TheButton.vue";
import { randomSample } from "~/utils/random";
import TheSadFace from "~/comps/TheSadFace.vue";
import { useRoute } from "~/composables/use-route";
import { useDom } from "~/composables/use-dom";
import { MEDIUM_VIDEOS, SHORT_VIDEOS } from "~/video-collections";

type ConfigType = {
  collection: string;
  timeout: number;
  neededPoints: number;
};

const configs: Record<string, ConfigType> = {
  default: {
    timeout: 60 * 3,
    neededPoints: 12,
    collection: SHORT_VIDEOS,
  },
  media: {
    timeout: 60 * 9,
    neededPoints: 16,
    collection: MEDIUM_VIDEOS,
  },
};

const { focusInputElement } = useDom();
const { getStringQueryParameter } = useRoute();
const router = useRouter();

const config = computed((): ConfigType => {
  return configs[getStringQueryParameter("level")] || configs.default;
});

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

const fillGameInputSelector = ".fill-game-input";
const quest = ref(createNewQuest());
const points = ref(0);
const error = ref(false);
const input = ref<string | null>(null);
const inputValue = computed(() => input.value || null);

const focus = () => focusInputElement(fillGameInputSelector);

const verify = () => {
  return quest.value.verify(inputValue.value) ? success() : fail();
};

const success = () => {
  points.value++;

  if (points.value >= config.value.neededPoints) return won();

  input.value = null;
  quest.value = createNewQuest();
  focus();
};

const fail = () => {
  error.value = true;
  points.value = Math.max(0, points.value - 3);
};

const won = () => {
  router.push({
    path: "/video/select",
    query: {
      timeout: config.value.timeout,
      collection: config.value.collection,
    },
  });
};

const restart = () => {
  quest.value = createNewQuest();
  input.value = null;
  error.value = false;
  focus();
};

onMounted(() => focus());
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
            <the-headline>Ai Ai Ai Isabella</the-headline>
            <the-sad-face />
          </template>
          <the-points :current-points="points" :max="config.neededPoints" />
          <the-grid
            v-if="error"
            :key="quest.getCalculation()"
            :columns="14"
            class="quest"
          >
            <div
              v-for="part in quest.getParts()"
              :key="part.getIdentifier()"
              class="span-2"
            >
              <the-card
                class="text-center h-4em"
                :class="part.isFixed() ? 'opacity-0' : undefined"
                :color="part.isVariable() ? 'green' : undefined"
              >
                <span
                  :class="part.isSymbol() ? 'bigger' : ''"
                  v-html="part.getValue() || quest.getSolution()"
                />
              </the-card>
            </div>
          </the-grid>
          <the-grid :key="quest.getCalculation()" :columns="14" class="quest">
            <div
              v-for="part in quest.getParts()"
              :key="part.getIdentifier()"
              class="span-2"
            >
              <the-card v-if="part.isFixed()" class="text-center h-4em">
                <span
                  :class="part.isSymbol() ? 'bigger' : ''"
                  v-html="part.getValue()"
                />
              </the-card>
              <the-full-input
                v-else
                v-model="input"
                class="text-center fill-game-input"
                :error="error"
                :disabled="error"
              />
            </div>
          </the-grid>
          <the-button v-if="error" class="span-6" @click="restart">
            Continuar
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
