<script setup lang="ts">
import { cloneDeep } from './code/CloneDeep'
const a = { name: 'xxm' }
// ;(a as any).self = a
console.log(cloneDeep(a))

const b = { name: 'yyds' }
// ;(a as any).self = a
console.log(cloneDeep(b))
</script>

<template>
  <h1>手写系列</h1>
</template>

<style></style>
