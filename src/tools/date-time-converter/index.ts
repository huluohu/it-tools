import { Calendar } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';
export const tool = defineTool({
  name: translate('tools.date-time-converter.title'),
  description: translate('tools.date-time-converter.description'),
  path: '/date-converter',
  keywords: ['date', 'time', 'converter', 'iso', 'utc', 'timezone', 'year', 'month', 'day', 'minute', 'second'],
  component: () => import('./date-time-converter.vue'),
  icon: Calendar,
});
