import { mmkv } from '@/core/plugins/store.plugin';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import Reactotron, { networking } from 'reactotron-react-native';
import reactotronZustand from 'reactotron-plugin-zustand';
import dataStore from '@/core/store';

Reactotron.configure({ name: 'ClonApp' })
  .useReactNative()
  .use(networking())
  .use(mmkvPlugin({ storage: mmkv }))
  .use(
    reactotronZustand({
      stores: [
        { name: 'counter', store: dataStore.counterDataStore.useStore },
        { name: 'token', store: dataStore.tokenDataStore.useStore },
      ],
    }),
  )
  .connect();
