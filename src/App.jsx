import Header from './components/Header';
import TeachingSection from './components/Button/teachingSection';
import DifferencesSection from './components/Button/DifferencesSection';
import IntroSection from './components/Button/IntroSection';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  )
}
  


