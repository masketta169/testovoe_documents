<template>
  <input
    class="field"
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style lang="scss" scoped>
.field {
    height: 49px;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    border: 1.5px solid rgba(233, 236, 239, 1);
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 100%;
    outline: none;

    &:placeholder {
        color: rgba(108, 117, 125, 1);
    }
}
</style>