import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Экологичное моющее средство",
    description: "Натуральное средство для посуды без химических добавок",
    price: 350,
    image: "/placeholder.svg",
    badge: "Популярное"
  },
  {
    id: 2,
    name: "Бамбуковые зубные щетки",
    description: "Набор из 4 щеток с биоразлагаемой ручкой",
    price: 590,
    image: "/placeholder.svg",
    badge: "Новинка"
  },
  {
    id: 3,
    name: "Многоразовые мешочки",
    description: "Экологичная альтернатива пластиковым пакетам",
    price: 450,
    image: "/placeholder.svg",
    badge: null
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши эко-продукты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Каждый продукт создан с заботой о природе и вашем здоровье. 
            Мы используем только натуральные ингредиенты и экологичную упаковку.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                {product.badge && (
                  <Badge className="absolute top-3 right-3 bg-eco-primary text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <p className="text-muted-foreground">{product.description}</p>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.price} ₽</span>
                <Button size="sm" className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Смотреть все продукты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;