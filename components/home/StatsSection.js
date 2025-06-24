import { Users, Calendar, Star, Award } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Professional Artists',
      description: 'Vetted performers across all categories'
    },
    {
      icon: Calendar,
      value: '1,200+',
      label: 'Successful Events',
      description: 'Memorable experiences created'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Average Rating',
      description: 'Customer satisfaction score'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      description: 'Events delivered on time'
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Event Planners Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied clients who have made their events unforgettable with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}