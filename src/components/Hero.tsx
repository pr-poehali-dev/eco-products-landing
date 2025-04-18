import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-eco-light to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Экологичные продукты для вашего дома
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Заботьтесь о планете и своём здоровье с нашими экологически чистыми товарами для дома. Натуральный состав, биоразлагаемая упаковка и никакой химии.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="gap-2">
                Смотреть каталог <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">Узнать больше</Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full bg-muted overflow-hidden border-2 border-background">
                    <span className="flex h-full w-full items-center justify-center text-xs">👤</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">1000+</span> довольных клиентов
              </div>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto">
            <div className="aspect-video overflow-hidden rounded-xl border bg-muted flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="Экологичные продукты для дома"
                className="object-cover w-full h-full"
                width={550}
                height={310}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;