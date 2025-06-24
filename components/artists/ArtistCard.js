import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, MessageCircle } from 'lucide-react';

export default function ArtistCard({ artist, viewMode = 'grid' }) {
  const isListView = viewMode === 'list';

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className={`${isListView ? 'flex' : ''}`}>
          <div className={`${isListView ? 'w-48 flex-shrink-0' : 'aspect-square'} overflow-hidden ${isListView ? 'rounded-l-lg' : 'rounded-t-lg'}`}>
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
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
            
            <p className="text-sm mb-4 text-muted-foreground">{artist.bio}</p>
            
            <div className="flex items-center space-x-2 mb-4">
              {artist.languages.map((lang, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
            
            <div className={`${isListView ? 'flex items-center justify-between' : 'space-y-3'}`}>
              <div className="font-semibold text-primary">
                ${artist.priceRange.split('-')[0]}+ per event
              </div>
              <div className={`${isListView ? 'flex space-x-2' : 'flex space-x-2'}`}>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Message
                </Button>
                <Button size="sm">
                  Ask for Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}