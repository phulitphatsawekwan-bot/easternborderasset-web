
import AppRoutes from './routes/AppRoutes'
import { Toaster } from "@/components/ui/toaster"
import './i18n';
import { LanguageProvider } from './components/LanguageProvider';
import headerlogo from "@/assets/final-outline-logo-east.png";



function App() {

  return (
    <>
      <LanguageProvider>
        <AppRoutes />
        <Toaster />
      </LanguageProvider>
    </>

  );
}

export default App
