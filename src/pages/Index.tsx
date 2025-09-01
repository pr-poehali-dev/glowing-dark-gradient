import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-deep to-indigo-bright">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50 border-b border-blue-glow/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">WebDev Studio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-blue-glow transition-all duration-300 animate-glow">
                Главная
              </a>
              <a href="#services" className="text-white hover:text-blue-glow transition-all duration-300 animate-glow">
                Услуги
              </a>
              <a href="#advantages" className="text-white hover:text-blue-glow transition-all duration-300 animate-glow">
                Преимущества
              </a>
              <a href="#testimonials" className="text-white hover:text-blue-glow transition-all duration-300 animate-glow">
                Отзывы
              </a>
              <a href="#contacts" className="text-white hover:text-blue-glow transition-all duration-300 animate-glow">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Разработка сайтов<br />
              <span className="bg-gradient-to-r from-blue-glow to-indigo-300 bg-clip-text text-transparent">
                нового поколения
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Создаем современные веб-приложения, сайты и предоставляем экспертные консультации
              для роста вашего бизнеса в цифровой среде
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-glow text-navy-deep font-semibold px-8 py-4 text-lg hover:bg-blue-300 transition-all duration-300 animate-glow shadow-lg shadow-blue-glow/50"
              >
                Заказать проект
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-navy-deep transition-all duration-300 animate-glow"
              >
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border border-blue-glow/20 animate-glow hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Code" size={48} className="text-blue-glow mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Разработка сайтов</h3>
                <p className="text-white/70 leading-relaxed">
                  Создаем современные, быстрые и SEO-оптимизированные сайты с адаптивным дизайном
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border border-blue-glow/20 animate-glow hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Smartphone" size={48} className="text-blue-glow mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Веб-приложения</h3>
                <p className="text-white/70 leading-relaxed">
                  Разрабатываем интерактивные веб-приложения с современным интерфейсом и функционалом
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border border-blue-glow/20 animate-glow hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="MessageCircle" size={48} className="text-blue-glow mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Консультации</h3>
                <p className="text-white/70 leading-relaxed">
                  Предоставляем экспертные консультации по веб-технологиям и цифровой стратегии
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="mb-6">
                <Icon name="Zap" size={40} className="text-blue-glow mx-auto animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Быстрая разработка</h3>
              <p className="text-white/70">Используем современные технологии для ускорения процесса</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="mb-6">
                <Icon name="Shield" size={40} className="text-blue-glow mx-auto animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Надежность</h3>
              <p className="text-white/70">Гарантируем стабильную работу и безопасность</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="mb-6">
                <Icon name="Users" size={40} className="text-blue-glow mx-auto animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Опытная команда</h3>
              <p className="text-white/70">Профессиональные разработчики с многолетним опытом</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="mb-6">
                <Icon name="Headphones" size={40} className="text-blue-glow mx-auto animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Поддержка</h3>
              <p className="text-white/70">Круглосуточная техническая поддержка и консультации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border border-blue-glow/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-glow rounded-full flex items-center justify-center text-navy-deep font-bold text-lg">
                    А
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Анна Петрова</h4>
                    <p className="text-white/60 text-sm">Интернет-магазин</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  "Отличная работа! Сайт получился современным и функциональным. 
                  Продажи выросли на 40% за первый месяц."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border border-blue-glow/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-glow rounded-full flex items-center justify-center text-navy-deep font-bold text-lg">
                    И
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Игорь Сидоров</h4>
                    <p className="text-white/60 text-sm">Стартап</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  "Профессиональный подход и внимание к деталям. 
                  Веб-приложение работает быстро и без сбоев."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border border-blue-glow/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-glow rounded-full flex items-center justify-center text-navy-deep font-bold text-lg">
                    М
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Мария Иванова</h4>
                    <p className="text-white/60 text-sm">Корпоративный сайт</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  "Превзошли все ожидания! Сайт выглядит стильно, 
                  а консультации помогли оптимизировать бизнес-процессы."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Свяжитесь с нами прямо сейчас и получите бесплатную консультацию
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Icon name="Mail" size={32} className="text-blue-glow mx-auto mb-4 animate-glow" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-white/70">hello@webdevstudio.ru</p>
            </div>
            <div className="text-center">
              <Icon name="Phone" size={32} className="text-blue-glow mx-auto mb-4 animate-glow" />
              <h3 className="text-white font-semibold mb-2">Телефон</h3>
              <p className="text-white/70">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="MessageSquare" size={32} className="text-blue-glow mx-auto mb-4 animate-glow" />
              <h3 className="text-white font-semibold mb-2">Telegram</h3>
              <p className="text-white/70">@webdevstudio</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-blue-glow text-navy-deep font-semibold px-12 py-4 text-xl hover:bg-blue-300 transition-all duration-300 animate-glow shadow-lg shadow-blue-glow/50"
          >
            Связаться с нами
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-6">WebDev Studio</div>
          <p className="text-white/60 mb-8">
            Создаем цифровое будущее вместе с вами
          </p>
          <div className="flex justify-center space-x-8">
            <Icon name="Github" size={24} className="text-white/60 hover:text-blue-glow transition-colors cursor-pointer" />
            <Icon name="Twitter" size={24} className="text-white/60 hover:text-blue-glow transition-colors cursor-pointer" />
            <Icon name="Linkedin" size={24} className="text-white/60 hover:text-blue-glow transition-colors cursor-pointer" />
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © 2024 WebDev Studio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;