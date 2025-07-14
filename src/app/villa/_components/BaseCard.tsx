import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  data: {
    icon: React.JSX.Element;
    images: string[];
    title: string;
    color: string;
    items: string[];
  };
};

export const BaseCard = ({ data }: Props) => {
  return (
    <Card className="overflow-hidden shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-full ${data.color} flex items-center justify-center`}
          >
            {data.icon}
          </div>
          <CardTitle className="text-lg font-semibold text-gray-900">
            {data.title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pb-6">
        <Carousel className="w-full">
          <CarouselContent className="-ml-0">
            {data.images.map((image, imageIndex) => (
              <CarouselItem key={imageIndex} className="pl-0 p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${data.title} - Image ${imageIndex + 1}`}
                    width={800}
                    height={500}
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105 rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious overlay />
          <CarouselNext overlay />
        </Carousel>
        <ul className="space-y-3 text-sm text-gray-600 mt-6 px-0">
          {data.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-2">
              <div
                className={`w-1.5 h-1.5 ${data.color} rounded-full mt-2 flex-shrink-0`}
              ></div>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
