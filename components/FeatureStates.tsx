import { Banknote, Clock, Map, Award } from "lucide-react";
interface FeatureItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const FeatureStats: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      icon: <Banknote strokeWidth={1.25} className="w-8 h-8 text-primary" />,
      title: "No Hidden Charges",
      description:
        "Transparent pricing from the first quote to the final move.",
    },
    {
      id: 2,
      icon: <Clock strokeWidth={1.25} className="w-8 h-8 text-primary" />,
      title: "7 Days a Week",
      description:
        "Flexible scheduling to fit your busy life, any day of the week.",
    },
    {
      id: 3,
      icon: <Map strokeWidth={1.25} className="w-8 h-8 text-primary" />,
      title: "All UAE Emirates",
      description: "Seamless relocation services across the entire country.",
    },
    {
      id: 4,
      icon: <Award strokeWidth={1.25} className="w-8 h-8 text-primary" />,
      title: "Trained Crews",
      description:
        "Expert professionals dedicated to handling your belongings safely.",
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col border-t border-gray-200 dark:border-gray-800 pt-8"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-lg  tracking-tight text-foreground mb-3">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
