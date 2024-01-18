<template>
  <button class="w-button" :class="buttonStyle"><slot /></button>
</template>
<script lang="ts" setup>
import './style/index.less'
import { computed } from "vue";
defineOptions({ name: "w-button" });

type ButtonProps = {
  type?: string;
};

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`w-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
