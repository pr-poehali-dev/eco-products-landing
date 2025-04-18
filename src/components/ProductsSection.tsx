import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Биоразлагаемые губки",
    description: "Экологичные губки из натуральных материалов, которые полностью разлагаются после использования.",
    price: 299,
    badge: "Хит продаж",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Моющее средство из трав",
    description: "Натуральное моющее средство, созданное на основе трав без химических добавок.",
    price: 450,
    badge: "Новинка",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Бамбуковые зубные щетки",
    description: "Зубные щетки с ручкой из экологичного бамбука и биоразлагаемой щетиной.",
    price: 199,
    badge: null,
    image: "/placeholder.svg"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Наши экологичные продукты</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
            Вся продукция изготовлена из натуральных компонентов и материалов, безопасных для вас и планеты.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{product.title}</CardTitle>
                  {product.badge && (
                    <Badge variant="secondary" className="bg-eco-tertiary text-eco-dark">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardDescription className="pt-2">{product.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="text-xl font-bold">{product.price} ₽</div>
                <Button size="sm" className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline">Посмотреть все продукты</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;