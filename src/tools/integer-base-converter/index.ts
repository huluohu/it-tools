import { ArrowsLeftRight } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';
export const tool = defineTool({
  name: translate('tools.integer-base-converter.title'),
  description: translate('tools.integer-base-converter.description'),
  path: '/base-converter',
  keywords: ['integer', 'number', 'base', 'conversion', 'decimal', 'hexadecimal', 'binary', 'octal', 'base64'],
  component: () => import('./integer-base-converter.vue'),
  icon: ArrowsLeftRight,
});
