<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createMap } from "./types/init";
import { Snake } from "./types/snake";
import { GameObjectType } from "./types/gameObject";

let map = ref<Array<Array<HTMLElement>>>([]);
let dot = ref(null);

onMounted(() => {
  map.value = createMap(dot.value);
  let snake = new Snake(map.value, "Snake", GameObjectType.movable);
  snake.speed = 300;
  snake.down();
});
</script>

<template>
  <div class="gluttonous-snake">
    <div ref="dot" class="dot" v-for="dot in 144" :key="dot"></div>
  </div>
</template>

<style scoped>
.gluttonous-snake {
  width: 120px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: blue;
  box-sizing: border-box;
  border: 1px solid #CCCCCC;
}
</style>