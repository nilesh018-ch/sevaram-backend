import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 hover:bg-cyan-100"
      data-testid="button-language-switcher"
    >
      <Globe className="w-4 h-4" />
      <span>{i18n.language === 'en' ? 'हिंदी' : 'English'}</span>
    </Button>
  );
}
