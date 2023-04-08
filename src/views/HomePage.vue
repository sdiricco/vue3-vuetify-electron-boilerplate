<template>
  <div class="text-h3 ma-5 text-center">Welcome to vue3 Electron template!</div>
  <div class="d-flex align-center justify-center w100 pt-4">
    <v-btn size="large" rounded="pill" color="primary" @click="onClickOpenDialog">Open dialog</v-btn>
  </div>
</template>

<script setup lang="ts">
import { showMessageBox } from "@/electronRenderer";
async function onClickOpenDialog() {
  const response = await showMessageBox({ message: "Hello, this is the message content", title: "Title", textWidth: 400, buttons: ["Ok", "Cancel"], type: "info" });
  console.log(response);
}
</script>

<style scoped></style>
