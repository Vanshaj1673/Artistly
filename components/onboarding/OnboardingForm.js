'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { artistCategories, languages, locations, priceRanges } from '@/lib/mock-data';
import { Camera, X } from 'lucide-react';

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    categories: [],
    languages: [],
    feeRange: '',
    location: '',
    profileImage: null,
    portfolio: '',
    experience: '',
    availability: 'Available'
  });

  const [errors, setErrors] = useState({});

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
        break;
      case 2:
        if (formData.categories.length === 0) newErrors.categories = 'At least one category is required';
        if (formData.languages.length === 0) newErrors.languages = 'At least one language is required';
        break;
      case 3:
        if (!formData.feeRange) newErrors.feeRange = 'Fee range is required';
        if (!formData.location) newErrors.location = 'Location is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      console.log('Form submitted:', formData);
      toast.success('Application submitted successfully! We\'ll review your profile and get back to you within 2-3 business days.');
      // Reset form or redirect
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleArrayItem = (field, item) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const stepTitles = [
    'Personal Information',
    'Categories & Skills',
    'Pricing & Location',
    'Review & Submit'
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Enter your full name"
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="Enter your email"
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="Enter your phone number"
                className={errors.phone ? 'border-destructive' : ''}
              />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              
            </div>

            <div>
              <Label htmlFor="bio">Bio *</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => updateFormData('bio', e.target.value)}
                placeholder="Tell us about yourself and your experience"
                rows={4}
                className={errors.bio ? 'border-destructive' : ''}
              />
              {errors.bio && <p className="text-sm text-destructive mt-1">{errors.bio}</p>}
              
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">Categories *</Label>
              <p className="text-sm text-muted-foreground mb-3">Select all categories that apply</p>
              <div className="grid grid-cols-2 gap-3">
                {artistCategories.map(category => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={formData.categories.includes(category.id)}
                      onCheckedChange={() => toggleArrayItem('categories', category.id)}
                    />
                    <Label htmlFor={category.id} className="text-sm font-normal">
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.categories && <p className="text-sm text-destructive mt-1">{errors.categories}</p>}
              
            </div>

            <div>
              <Label className="text-base font-medium">Languages Spoken *</Label>
              <p className="text-sm text-muted-foreground mb-3">Select all languages you speak</p>
              <div className="grid grid-cols-2 gap-3">
                {languages.slice(0, 8).map(language => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={language}
                      checked={formData.languages.includes(language)}
                      onCheckedChange={() => toggleArrayItem('languages', language)}
                    />
                    <Label htmlFor={language} className="text-sm font-normal">
                      {language}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.languages && <p className="text-sm text-destructive mt-1">{errors.languages}</p>}
              
            </div>

            <div>
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                value={formData.experience}
                onChange={(e) => updateFormData('experience', e.target.value)}
                placeholder="e.g., 5 years"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="feeRange">Fee Range *</Label>
              <Select value={formData.feeRange} onValueChange={(value) => updateFormData('feeRange', value)}>
                <SelectTrigger className={errors.feeRange ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select your fee range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map(range => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.feeRange && <p className="text-sm text-destructive mt-1">{errors.feeRange}</p>}
              
            </div>

            <div>
              <Label htmlFor="location">Location *</Label>
              <Select value={formData.location} onValueChange={(value) => updateFormData('location', value)}>
                <SelectTrigger className={errors.location ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select your location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.location && <p className="text-sm text-destructive mt-1">{errors.location}</p>}
              
            </div>

            <div>
              <Label htmlFor="portfolio">Portfolio URL</Label>
              <Input
                id="portfolio"
                value={formData.portfolio}
                onChange={(e) => updateFormData('portfolio', e.target.value)}
                placeholder="https://your-portfolio.com"
              />
            </div>

            <div>
              <Label className="text-base font-medium">Profile Image</Label>
              <div className="mt-2 flex items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg hover:border-muted-foreground/50 transition-colors">
                <div className="text-center">
                  <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Upload a profile photo</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Review Your Information</h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Name</Label>
                  <p>{formData.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                  <p>{formData.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Categories</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {formData.categories.map(categoryId => {
                      const category = artistCategories.find(c => c.id === categoryId);
                      return (
                        <Badge key={categoryId} variant="secondary">
                          {category?.name}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Languages</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {formData.languages.map(language => (
                      <Badge key={language} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Fee Range</Label>
                  <p>{priceRanges.find(r => r.value === formData.feeRange)?.label}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                  <p>{formData.location}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Bio</Label>
                  <p className="text-sm">{formData.bio}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <div>
            <CardTitle>Step {currentStep} of {totalSteps}</CardTitle>
            <CardDescription>{stepTitles[currentStep - 1]}</CardDescription>
          </div>
          <div className="text-sm text-muted-foreground">
            {Math.round(progress)}% Complete
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button type="submit">
                Submit Application
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}