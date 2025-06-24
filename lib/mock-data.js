export const artistCategories = [
  {
    id: 'singers',
    name: 'Singers',
    description: 'Professional vocalists for all occasions',
    icon: 'Mic',
    count: 45,
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 'dancers',
    name: 'Dancers',
    description: 'Choreographed performances and dance acts',
    icon: 'Music',
    count: 38,
    image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 'speakers',
    name: 'Speakers',
    description: 'Motivational and keynote speakers',
    icon: 'MessageCircle',
    count: 22,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 'djs',
    name: 'DJs',
    description: 'Professional DJs and music producers',
    icon: 'Headphones',
    count: 31,
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

export const mockArtists = [
  {
    id: 1,
    name: 'Sarah Johnson',
    category: 'singers',
    categoryLabel: 'Singer',
    priceRange: '1000-2500',
    location: 'New York, NY',
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Professional jazz and pop vocalist with 10+ years experience',
    languages: ['English', 'Spanish'],
    rating: 4.9,
    reviews: 28,
    availability: 'Available'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    category: 'dancers',
    categoryLabel: 'Dancer',
    priceRange: '800-1800',
    location: 'Los Angeles, CA',
    image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Contemporary and hip-hop dancer, choreographer',
    languages: ['English', 'Mandarin'],
    rating: 4.8,
    reviews: 22,
    availability: 'Available'
  },
  {
    id: 3,
    name: 'Dr. Amanda Torres',
    category: 'speakers',
    categoryLabel: 'Speaker',
    priceRange: '2500-5000',
    location: 'Chicago, IL',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Motivational speaker and business consultant',
    languages: ['English', 'Spanish', 'French'],
    rating: 4.9,
    reviews: 45,
    availability: 'Available'
  },
  {
    id: 4,
    name: 'DJ Phoenix',
    category: 'djs',
    categoryLabel: 'DJ',
    priceRange: '1200-3000',
    location: 'Miami, FL',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Electronic music producer and club DJ',
    languages: ['English', 'Portuguese'],
    rating: 4.7,
    reviews: 33,
    availability: 'Busy'
  },
  {
    id: 5,
    name: 'Isabella Rodriguez',
    category: 'singers',
    categoryLabel: 'Singer',
    priceRange: '1500-3500',
    location: 'Austin, TX',
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Country and folk singer-songwriter',
    languages: ['English', 'Spanish'],
    rating: 4.8,
    reviews: 19,
    availability: 'Available'
  },
  {
    id: 6,
    name: 'Jake Morrison',
    category: 'dancers',
    categoryLabel: 'Dancer',
    priceRange: '900-2200',
    location: 'Seattle, WA',
    image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Ballroom and Latin dance instructor',
    languages: ['English'],
    rating: 4.6,
    reviews: 16,
    availability: 'Available'
  }
];

export const locations = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Miami, FL',
  'Austin, TX',
  'Seattle, WA',
  'Denver, CO',
  'Atlanta, GA',
  'Boston, MA',
  'Las Vegas, NV'
];

export const priceRanges = [
  { label: '$500 - $1,000', value: '500-1000' },
  { label: '$1,000 - $2,500', value: '1000-2500' },
  { label: '$2,500 - $5,000', value: '2500-5000' },
  { label: '$5,000+', value: '5000+' }
];

export const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Mandarin',
  'Japanese',
  'Korean',
  'Arabic'
];

export const mockBookings = [
  {
    id: 1,
    artistName: 'Sarah Johnson',
    category: 'Singer',
    city: 'New York, NY',
    fee: '$2,000',
    status: 'Pending',
    submittedAt: '2024-01-15',
    eventType: 'Wedding',
    eventDate: '2024-03-15'
  },
  {
    id: 2,
    artistName: 'Marcus Chen',
    category: 'Dancer',
    city: 'Los Angeles, CA',
    fee: '$1,500',
    status: 'Approved',
    submittedAt: '2024-01-12',
    eventType: 'Corporate Event',
    eventDate: '2024-02-28'
  },
  {
    id: 3,
    artistName: 'Dr. Amanda Torres',
    category: 'Speaker',
    city: 'Chicago, IL',
    fee: '$3,500',
    status: 'Declined',
    submittedAt: '2024-01-10',
    eventType: 'Conference',
    eventDate: '2024-04-10'
  }
];