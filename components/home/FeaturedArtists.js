import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';
import { mockArtists } from '@/lib/mock-data';

export default function FeaturedArtists() {
  const featuredArtists = mockArtists.slice(0, 3);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Artists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet some of our top-rated performers who consistently deliver exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist) => (
            <Card key={artist.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{artist.name}</h3>
                    <Badge variant={artist.availability === 'Available' ? 'default' : 'secondary'}>
                      {artist.availability}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{artist.categoryLabel}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                      {artist.rating} ({artist.reviews})
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {artist.location}
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4">{artist.bio}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">
                      ${artist.priceRange.split('-')[0]}+ per event
                    </span>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/artists">
              View All Artists
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}