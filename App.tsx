import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups /> : <Loading/>}
    </ThemeProvider>
  );
}
