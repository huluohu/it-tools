<script setup lang="ts">
import { compareSync, hashSync } from 'bcryptjs';
import { useThemeVars } from 'naive-ui';
import { useCopy } from '@/composable/copy';

const themeVars = useThemeVars();

const input = ref('');
const saltCount = ref(10);
const hashed = computed(() => hashSync(input.value, saltCount.value));
const { copy } = useCopy({ source: hashed, text: 'Hashed string copied to the clipboard' });
const { t } = useI18n();
const compareString = ref('');
const compareHash = ref('');
const compareMatch = computed(() => compareSync(compareString.value, compareHash.value));
</script>

<template>
  <c-card title="Hash">
    <c-input-text
      v-model:value="input"
      :placeholder="t('tools.bcrypt.function.hash.placeholder')"
      raw-text
      :label="t('tools.bcrypt.function.hash.str') "
      label-position="left"
      label-align="right"
      label-width="120px"
      mb-2
    />
    <n-form-item :label="t('tools.bcrypt.function.hash.salt') " label-placement="left" label-width="120">
      <n-input-number v-model:value="saltCount" placeholder="Salt rounds..." :max="10" :min="0" w-full />
    </n-form-item>

    <c-input-text :value="hashed" readonly text-center />

    <div mt-5 flex justify-center>
      <c-button @click="copy()">
        {{t('tools.bcrypt.function.hash.copy')}}
      </c-button>
    </div>
  </c-card>

  <c-card :title="t('tools.bcrypt.function.compare.title')">
    <n-form label-width="120">
      <n-form-item :label="t('tools.bcrypt.function.compare.str')" label-placement="left">
        <c-input-text v-model:value="compareString" :placeholder="t('tools.bcrypt.function.compare.placeholder1')" raw-text />
      </n-form-item>
      <n-form-item :label="t('tools.bcrypt.function.compare.hash') " label-placement="left">
        <c-input-text v-model:value="compareHash" :placeholder="t('tools.bcrypt.function.compare.placeholder2')" raw-text />
      </n-form-item>
      <n-form-item :label="t('tools.bcrypt.function.compare.match-text')" label-placement="left" :show-feedback="false">
        <div class="compare-result" :class="{ positive: compareMatch }">
          {{ compareMatch ? 'Yes' : 'No' }}
        </div>
      </n-form-item>
    </n-form>
  </c-card>
</template>

<style lang="less" scoped>
.compare-result {
  color: v-bind('themeVars.errorColor');

  &.positive {
    color: v-bind('themeVars.successColor');
  }
}
</style>
