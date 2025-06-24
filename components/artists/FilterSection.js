import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { artistCategories, locations, priceRanges } from '@/lib/mock-data';

export default function FilterSection({ filters, onFiltersChange }) {
  const updateFilter = (key, value) => {
    onFiltersChange(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    onFiltersChange({
      category: 'all-categories',
      location: 'all-locations',
      priceRange: 'all-prices',
      availability: 'all-artists'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Category</label>
          <Select
            value={filters.category}
            onValueChange={(value) => updateFilter('category', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-categories">All Categories</SelectItem>
              {artistCategories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Location</label>
          <Select
            value={filters.location}
            onValueChange={(value) => updateFilter('location', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-locations">All Locations</SelectItem>
              {locations.map(location => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Price Range</label>
          <Select
            value={filters.priceRange}
            onValueChange={(value) => updateFilter('priceRange', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Prices" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-prices">All Prices</SelectItem>
              {priceRanges.map(range => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Availability</label>
          <Select
            value={filters.availability}
            onValueChange={(value) => updateFilter('availability', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Artists" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-artists">All Artists</SelectItem>
              <SelectItem value="Available">Available</SelectItem>
              <SelectItem value="Busy">Busy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  );
}
