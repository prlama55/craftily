import { App } from 'vue';
import Tabs from './Tabs.vue';
import TabsList from './TabsList.vue';
import TabsTrigger from './TabsTrigger.vue';
import TabsContent from './TabsContent.vue';

export default {
  install(app: App) {
    app.component('CraftilyTabs', Tabs);
    app.component('CraftilyTabsList', TabsList);
    app.component('CraftilyTabsTrigger', TabsTrigger);
    app.component('CraftilyTabsContent', TabsContent);
  },
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
