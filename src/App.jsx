import Portfolio from './components/Portfolio';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const path = window.location.pathname;
  if (path === '/trackmoto/privacy-policy' || path === '/trackmoto/privacy-policy/') {
    return <PrivacyPolicy />;
  }
  return <Portfolio />;
}
