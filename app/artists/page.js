'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArtistCard from '@/components/artists/ArtistCard';
import FilterSection from '@/components/artists/FilterSection';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import { mockArtists } from '@/lib/mock-data';

export default function ArtistsPage() {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
    availability: ''
  });
  const [viewMode, setViewMode] = useState('grid');

  const filteredArtists = useMemo(() => {
    return mockArtists.filter(artist => {
      if (filters.category && artist.category !== filters.category) return false;
      if (filters.location && artist.location !== filters.location) return false;
      if (filters.priceRange && artist.priceRange !== filters.priceRange) return false;
      if (filters.availability && artist.availability !== filters.availability) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Artists</h1>
            <p className="text-lg text-muted-foreground">
              Discover talented performers for your next event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <FilterSection filters={filters} onFiltersChange={setFilters} />
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredArtists.length} of {mockArtists.length} artists
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredArtists.map((artist) => (
                  <ArtistCard 
                    key={artist.id} 
                    artist={artist} 
                    viewMode={viewMode}
                  />
                ))}
              </div>

              {filteredArtists.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    No artists found matching your criteria
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setFilters({ category: '', location: '', priceRange: '', availability: '' })}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}