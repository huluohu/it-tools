import { Certificate } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';
export const tool = defineTool({
  name: translate('tools.rsa-key-pair-generator.title'),
  description: translate('tools.rsa-key-pair-generator.description'),
  path: '/rsa-key-pair-generator',
  keywords: ['rsa', 'key', 'pair', 'generator', 'public', 'private', 'secret', 'ssh', 'pem'],
  component: () => import('./rsa-key-pair-generator.vue'),
  icon: Certificate,
});
