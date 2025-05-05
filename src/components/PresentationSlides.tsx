
import React from "react";

// Общие компоненты
const SlideContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
    <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      {children}
    </div>
  </div>
);

const SlideHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="bg-indigo-950 p-6 md:p-10">
    <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
      {title}
      {subtitle && <br />}
      {subtitle}
    </h1>
  </div>
);

const SlideContent = ({ bgColor = "from-blue-50", children }: { bgColor?: string, children: React.ReactNode }) => (
  <div className={`bg-gradient-to-br ${bgColor} to-white p-6 md:p-10`}>
    {children}
  </div>
);

const BulletPoint = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0 mt-1"></div>
    <p className="text-indigo-950">{text}</p>
  </div>
);

const InfoOverlay = ({ top, left, children, className = "" }: { 
  top?: string, 
  left?: string, 
  children: React.ReactNode,
  className?: string
}) => (
  <div className={`bg-indigo-950/10 backdrop-blur-sm rounded-lg p-4 absolute ${top} ${left} ${className}`}>
    {children}
  </div>
);

const TimelineNode = ({ 
  year, 
  title, 
  description, 
  variant = "light" 
}: { 
  year: string, 
  title: string, 
  description?: string, 
  variant?: "light" | "dark" 
}) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
      <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
    </div>
    <div className={`${variant === "dark" ? "bg-indigo-950" : "bg-indigo-400"} text-white text-center py-2 px-4 rounded-lg w-full mb-2`}>
      <p className="font-bold">{year}</p>
    </div>
    <div className="text-center">
      <h3 className="font-bold text-indigo-950">{title}</h3>
      {description && <p className="text-sm text-indigo-800">{description}</p>}
    </div>
  </div>
);

// Компоненты слайдов
const Slide1 = () => {
  const bulletPoints = [
    "подтверждённый product-market fit.",
    "soft-коммитменты от лабораторий на закупку реагентов",
    "предзаказ на разработку уникального нутрицевтика для онкологии, стоимость одной рецептуры 20 млн рублей."
  ];

  return (
    <SlideContainer>
      <SlideHeader 
        title="ГИПОТЕЗА ПОДТВЕРЖДЕНА:" 
        subtitle="РЫНОК ГОТОВ ПЛАТИТЬ" 
      />
      
      <SlideContent>
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
              {bulletPoints.map((point, index) => (
                <BulletPoint key={index} text={point} />
              ))}
            </div>
            
            <p className="text-indigo-950 mt-6">
              Наш научный фокус — создание передовых нутрицевтиков в сфере клинического и 
              функционального питания, не имеющих аналогов в мире.
            </p>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  );
};

const Slide2 = () => {
  return (
    <SlideContainer>
      <SlideHeader 
        title="РЫНОК МИКРОБИОМНЫХ" 
        subtitle="ИССЛЕДОВАНИЙ" 
      />
      
      <SlideContent bgColor="from-pink-50">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 relative">
            <img 
              src="https://cdn.poehali.dev/files/44116d8a-796e-4b7a-8b18-3f6c7dc85c1b.jpeg" 
              alt="Чашки Петри с микробиомными культурами" 
              className="w-full h-auto max-w-md mx-auto"
            />
            
            <InfoOverlay top="top-10" left="left-10">
              <p className="text-indigo-950 font-semibold">Глобальный - 4,5 млрд $</p>
              <p className="text-indigo-950 font-semibold">Реагенты - 1,5 млрд $</p>
            </InfoOverlay>
            
            <InfoOverlay top="bottom-10" left="left-20">
              <p className="text-indigo-950 font-semibold">РФ - 45 млн $</p>
            </InfoOverlay>
            
            <div className="absolute bottom-0 left-0">
              <p className="text-indigo-950 font-semibold">2031г</p>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-indigo-950">
                Цель - занять 10% сегмента рынка реагентов в течение 5 лет, что 
                эквивалентно выручке порядка $150 млн.
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
      </SlideContent>
    </SlideContainer>
  );
};

const Slide3 = () => {
  const timelineData = [
    {
      year: "2025",
      title: "Масштабирование производства",
      description: "Доработка линейки реагентов",
      variant: "light" as const
    },
    {
      year: "2026",
      title: "Расширение продуктовой линейки",
      description: "Разработка и патентование рецептур нутрицевтиков",
      variant: "dark" as const
    },
    {
      year: "2027",
      title: "Глобализация",
      description: "Создание научных хабов в странах БРИКС",
      variant: "light" as const
    },
    {
      year: "2028",
      title: "Расширение сети дистрибуции",
      description: "Выход на рынки: США,Канада",
      variant: "dark" as const
    },
    {
      year: "2029",
      title: "Укрепление позиций на мировой арене",
      variant: "light" as const
    }
  ];

  return (
    <SlideContainer>
      <SlideHeader title="ДОРОЖНАЯ КАРТА" />
      
      <SlideContent>
        <div className="relative">
          <div className="h-2 bg-indigo-300 absolute top-32 left-0 right-0 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {timelineData.map((item, index) => (
              <TimelineNode 
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                variant={item.variant}
              />
            ))}
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
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
