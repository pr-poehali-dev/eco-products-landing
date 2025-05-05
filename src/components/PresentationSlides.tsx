
import React from "react";
import { motion } from "framer-motion";

const Slide1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-indigo-950 p-6 md:p-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white text-center leading-tight"
          >
            ГИПОТЕЗА ПОДТВЕРЖДЕНА:
            <br />РЫНОК ГОТОВ ПЛАТИТЬ
          </motion.h1>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-1/2"
            >
              <img 
                src="https://cdn.poehali.dev/files/dc812029-b9f3-4f1d-a9d8-8a6f996727a0.jpeg" 
                alt="Молекулярная структура" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </motion.div>
            
            <div className="md:w-1/2 space-y-6">
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-indigo-950"
              >
                Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-4"
              >
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
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-indigo-950 mt-6"
              >
                Наш научный фокус — создание передовых нутрицевтиков в сфере клинического и функционального питания, не имеющих аналогов в мире.
              </motion.p>
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
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white text-center leading-tight"
          >
            РЫНОК МИКРОБИОМНЫХ
            <br />ИССЛЕДОВАНИЙ
          </motion.h1>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-white p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-1/2 relative"
            >
              <img 
                src="https://cdn.poehali.dev/files/44116d8a-796e-4b7a-8b18-3f6c7dc85c1b.jpeg" 
                alt="Чашки Петри с микробиомными культурами" 
                className="w-full h-auto max-w-md mx-auto"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-indigo-950/10 backdrop-blur-sm rounded-lg p-4 absolute top-10 left-10"
              >
                <p className="text-indigo-950 font-semibold">Глобальный - 4,5 млрд $</p>
                <p className="text-indigo-950 font-semibold">Реагенты - 1,5 млрд $</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-indigo-950/10 backdrop-blur-sm rounded-lg p-4 absolute bottom-10 left-20"
              >
                <p className="text-indigo-950 font-semibold">РФ - 45 млн $</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute bottom-0 left-0"
              >
                <p className="text-indigo-950 font-semibold">2031г</p>
              </motion.div>
            </motion.div>
            
            <div className="md:w-1/2 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg text-indigo-950">
                  Цель - занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка $150 млн.
                </p>
                
                <p className="text-lg text-indigo-950">
                  Прогнозируемая капитализация RND компании - 500+ млн $ 2031 год
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-10 bg-indigo-950/5 p-4 rounded-lg"
              >
                <p className="text-indigo-950 font-bold text-xl text-right">CAGR - 25%</p>
              </motion.div>
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
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white text-center leading-tight"
          >
            ДОРОЖНАЯ КАРТА
          </motion.h1>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="h-2 bg-indigo-300 absolute top-32 left-0 right-0 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {/* 2025 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center"
              >
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
              </motion.div>
              
              {/* 2026 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center"
              >
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
              </motion.div>
              
              {/* 2027 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col items-center"
              >
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
              </motion.div>
              
              {/* 2028 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex flex-col items-center"
              >
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
              </motion.div>
              
              {/* 2029 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
                </div>
                <div className="bg-indigo-400 text-white text-center py-2 px-4 rounded-lg w-full mb-2">
                  <p className="font-bold">2029</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-indigo-950">Укрепление позиций на мировой арене</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
