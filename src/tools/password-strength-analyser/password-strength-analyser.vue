<script setup lang="ts">
import { getPasswordCrackTimeEstimation } from './password-strength-analyser.service';
const { t } = useI18n();
const password = ref('');
const crackTimeEstimation = computed(() => getPasswordCrackTimeEstimation({ password: password.value }));

const details = computed(() => [
  {
    label: 'Password length:',
    value: crackTimeEstimation.value.passwordLength,
  },
  {
    label: 'Entropy:',
    value: Math.round(crackTimeEstimation.value.entropy * 100) / 100,
  },
  {
    label: 'Character set size:',
    value: crackTimeEstimation.value.charsetLength,
  },
  {
    label: 'Score:',
    value: `${Math.round(crackTimeEstimation.value.score * 100)} / 100`,
  },
]);
</script>

<template>
  <div flex flex-col gap-3>
    <c-input-text
      v-model:value="password"
      type="password"
      :placeholder="t('tools.password-strength-analyser.function.passwd-placeholder')"
      clearable
      autofocus
      raw-text
      test-id="password-input"
    />

    <c-card text-center>
      <div op-60>
        {{ t('tools.password-strength-analyser.function.summary.title') }}
      </div>
      <div text-2xl data-test-id="crack-duration">
        {{ crackTimeEstimation.crackDurationFormatted }}
      </div>
    </c-card>
    <c-card>
      <div v-for="({ label, value }) of details" :key="label" flex gap-3>
        <div flex-1 text-right op-60>
          {{ label }}
        </div>
        <div flex-1 text-left>
          {{ value }}
        </div>
      </div>
    </c-card>
    <div op-70>
      <span font-bold>{{ t('tools.password-strength-analyser.function.note.title') }}</span>
      {{ t('tools.password-strength-analyser.function.note.detail') }}
    </div>
  </div>
</template>
