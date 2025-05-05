
import React from "react";

const Slide1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-indigo-950 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
            ГИПОТЕЗА ПОДТВЕРЖДЕНА:
            <br />РЫНОК ГОТОВ ПЛАТИТЬ
          </h1>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://cdn.poehali.dev/files/dc812029-b9f3-4f1d-a9d8-8a6f996727a0.jpeg" 
                alt="Молекулярная структура" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <p className="text-lg text-indigo-950">
                Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0 mt-1"></div>
                  <p className="text-indigo-950">подтверждённый product-market fit.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0 mt-1"></div>
                  <p className="text-indigo-950">soft-коммитменты от лабораторий на закупку реагентов</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0 mt-1"></div>
                  <p className="text-indigo-950">предзаказ на разработку уникального нутрицевтика для онкологии, стоимость одной рецептуры 20 млн рублей.</p>
                </div>
              </div>
              
              <p className="text-indigo-950 mt-6">
                Наш научный фокус — создание передовых нутрицевтиков в сфере клинического и функционального питания, не имеющих аналогов в мире.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-indigo-950 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
            РЫНОК МИКРОБИОМНЫХ
            <br />ИССЛЕДОВАНИЙ
          </h1>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-white p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 relative">
              <img 
                src="https://cdn.poehali.dev/files/44116d8a-796e-4b7a-8b18-3f6c7dc85c1b.jpeg" 
                alt="Чашки Петри с микробиомными культурами" 
                className="w-full h-auto max-w-md mx-auto"
              />
              
              <div className="bg-indigo-950/10 backdrop-blur-sm rounded-lg p-4 absolute top-10 left-10">
                <p className="text-indigo-950 font-semibold">Глобальный - 4,5 млрд $</p>
                <p className="text-indigo-950 font-semibold">Реагенты - 1,5 млрд $</p>
              </div>
              
              <div className="bg-indigo-950/10 backdrop-blur-sm rounded-lg p-4 absolute bottom-10 left-20">
                <p className="text-indigo-950 font-semibold">РФ - 45 млн $</p>
              </div>
              
              <div className="absolute bottom-0 left-0">
                <p className="text-indigo-950 font-semibold">2031г</p>
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-indigo-950">
                  Цель - занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка $150 млн.
                </p>
                
                <p className="text-lg text-indigo-950">
                  Прогнозируемая капитализация RND компании - 500+ млн $ 2031 год
                </p>
              </div>
              
              <div className="mt-10 bg-indigo-950/5 p-4 rounded-lg">
                <p className="text-indigo-950 font-bold text-xl text-right">CAGR - 25%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-indigo-950 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
            ДОРОЖНАЯ КАРТА
          </h1>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-10">
          <div className="relative">
            <div className="h-2 bg-indigo-300 absolute top-32 left-0 right-0 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {/* 2025 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
                </div>
                <div className="bg-indigo-400 text-white text-center py-2 px-4 rounded-lg w-full mb-2">
                  <p className="font-bold">2025</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-indigo-950">Масштабирование производства</h3>
                  <p className="text-sm text-indigo-800">Доработка линейки реагентов</p>
                </div>
              </div>
              
              {/* 2026 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
                </div>
                <div className="bg-indigo-950 text-white text-center py-2 px-4 rounded-lg w-full mb-2">
                  <p className="font-bold">2026</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-indigo-950">Расширение продуктовой линейки</h3>
                  <p className="text-sm text-indigo-800">Разработка и патентование рецептур нутрицевтиков</p>
                </div>
              </div>
              
              {/* 2027 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
                </div>
                <div className="bg-indigo-400 text-white text-center py-2 px-4 rounded-lg w-full mb-2">
                  <p className="font-bold">2027</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-indigo-950">Глобализация</h3>
                  <p className="text-sm text-indigo-800">Создание научных хабов в странах БРИКС</p>
                </div>
              </div>
              
              {/* 2028 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
                </div>
                <div className="bg-indigo-950 text-white text-center py-2 px-4 rounded-lg w-full mb-2">
                  <p className="font-bold">2028</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-indigo-950">Расширение сети дистрибуции</h3>
                  <p className="text-sm text-indigo-800">Выход на рынки: США,Канада</p>
                </div>
              </div>
              
              {/* 2029 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
                </div>
                <div className="bg-indigo-400 text-white text-center py-2 px-4 rounded-lg w-full mb-2">
                  <p className="font-bold">2029</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-indigo-950">Укрепление позиций на мировой арене</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PresentationSlides = () => {
  return (
    <div className="space-y-12">
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </div>
  );
};

export default PresentationSlides;
