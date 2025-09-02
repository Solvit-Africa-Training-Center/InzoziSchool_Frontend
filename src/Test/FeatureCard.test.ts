// src/Test/FeatureCard.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureCard from '../Components/cards/FeatureCard';
import { FaSearch } from 'react-icons/fa';

// Basic Jest functionality test
test('Jest works', () => {
  expect(1 + 1).toBe(2);
});

describe('FeatureCard Component', () => {
  const mockProps = {
    icon: <FaSearch data-testid="search-icon" />,
    title: 'Test Feature Title',
    description: 'This is a test description for the feature card component.',
  };

  test('renders FeatureCard with all props correctly', () => {
    render(<FeatureCard {...mockProps} />);

    expect(screen.getByText('Test Feature Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test description for the feature card component.')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  test('has correct default styling classes', () => {
    const { container } = render(<FeatureCard {...mockProps} />);
    const cardElement = container.firstChild as HTMLElement;

    expect(cardElement).toHaveClass('bg-[#0A303F]');
    expect(cardElement).toHaveClass('hover:bg-[#0A303F]/90');
    expect(cardElement).toHaveClass('p-6');
    expect(cardElement).toHaveClass('rounded-lg');
    expect(cardElement).toHaveClass('flex');
    expect(cardElement).toHaveClass('items-start');
    expect(cardElement).toHaveClass('space-x-4');
    expect(cardElement).toHaveClass('max-w-2xl');
    expect(cardElement).toHaveClass('transition-colors');
    expect(cardElement).toHaveClass('duration-200');
  });

  test('icon container has correct styling and size', () => {
    render(<FeatureCard {...mockProps} />);
    const iconContainer = screen.getByTestId('search-icon').parentElement?.parentElement;

    expect(iconContainer).toHaveClass('flex-shrink-0');
    expect(iconContainer).toHaveClass('w-12');
    expect(iconContainer).toHaveClass('h-12');
    expect(iconContainer).toHaveClass('bg-white');
    expect(iconContainer).toHaveClass('rounded-lg');
    expect(iconContainer).toHaveClass('flex');
    expect(iconContainer).toHaveClass('items-center');
    expect(iconContainer).toHaveClass('justify-center');
  });

  test('icon has correct text color', () => {
    render(<FeatureCard {...mockProps} />);
    const iconWrapper = screen.getByTestId('search-icon').parentElement;

    expect(iconWrapper).toHaveClass('text-[#223D60]');
  });

  test('title has correct styling', () => {
    render(<FeatureCard {...mockProps} />);
    const titleElement = screen.getByText('Test Feature Title');

    expect(titleElement).toHaveClass('text-[#F6FCFF]');
    expect(titleElement).toHaveClass('font-semibold');
    expect(titleElement).toHaveClass('mb-2');
    expect(titleElement).toHaveClass('text-lg');
    expect(titleElement).toHaveClass('leading-tight');
  });

  test('description has correct styling', () => {
    render(<FeatureCard {...mockProps} />);
    const descriptionElement = screen.getByText('This is a test description for the feature card component.');

    expect(descriptionElement).toHaveClass('text-[#F6FCFF]');
    expect(descriptionElement).toHaveClass('text-sm');
    expect(descriptionElement).toHaveClass('opacity-90');
    expect(descriptionElement).toHaveClass('leading-relaxed');
  });

  test('renders with light variant', () => {
    const { container } = render(
      <FeatureCard {...mockProps} variant="light" />
    );
    const cardElement = container.firstChild as HTMLElement;

    expect(cardElement).toHaveClass('bg-white');
    expect(cardElement).toHaveClass('hover:bg-gray-50');
  });

  test('renders with dark variant', () => {
    const { container } = render(
      <FeatureCard {...mockProps} variant="dark" />
    );
    const cardElement = container.firstChild as HTMLElement;

    expect(cardElement).toHaveClass('bg-gray-800');
    expect(cardElement).toHaveClass('hover:bg-gray-700');
  });

  test('accepts custom colors via props', () => {
    const customProps = {
      ...mockProps,
      cardBgColor: 'bg-red-500',
      textColor: 'text-yellow-500',
      iconBgColor: 'bg-green-500',
      iconTextColor: 'text-purple-500',
    };

    const { container } = render(<FeatureCard {...customProps} />);
    const cardElement = container.firstChild as HTMLElement;

    expect(cardElement).toHaveClass('bg-red-500');
  });

  test('handles hover state', () => {
    const { container } = render(<FeatureCard {...mockProps} />);
    const cardElement = container.firstChild as HTMLElement;

    fireEvent.mouseEnter(cardElement);
    expect(cardElement).toHaveClass('hover:bg-[#0A303F]/90');
  });

  test('renders with different icon types', () => {
    const customIcon = <div data-testid="custom-icon">★</div>;
    render(<FeatureCard {...mockProps} icon={customIcon} />);

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  test('handles long content gracefully', () => {
    const longContentProps = {
      ...mockProps,
      title: 'This is a very long title that should wrap properly and maintain good visual hierarchy',
      description: 'This is a very long description that contains multiple sentences and should wrap properly while maintaining good readability and visual hierarchy within the component.',
    };

    render(<FeatureCard {...longContentProps} />);
    
    expect(screen.getByText(longContentProps.title)).toBeInTheDocument();
    expect(screen.getByText(longContentProps.description)).toBeInTheDocument();
  });
});

// src/Test/ParentSection.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ParentSection from '../Components/ParentSection';

describe('ParentSection Component', () => {
  test('renders main heading with correct colors', () => {
    render(<ParentSection />);
    
    const youAreText = screen.getByText('You Are a');
    const parentText = screen.getByText('Parent?');
    
    expect(youAreText).toBeInTheDocument();
    expect(parentText).toBeInTheDocument();
    expect(youAreText).toHaveClass('text-[#223D60]');
    expect(parentText).toHaveClass('text-[#C96134]');
  });

  test('renders subtitle with correct content and styling', () => {
    render(<ParentSection />);
    
    const subtitle = screen.getByText('Simplify your child\'s educational journey with powerful tools designed for Rwandan families.');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveClass('text-[#223D60]');
    expect(subtitle).toHaveClass('text-lg');
    expect(subtitle).toHaveClass('max-w-2xl');
    expect(subtitle).toHaveClass('mx-auto');
  });

  test('renders all three feature cards with correct titles', () => {
    render(<ParentSection />);
    
    expect(screen.getByText('Find Schools Easily')).toBeInTheDocument();
    expect(screen.getByText('Apply in Minutes')).toBeInTheDocument();
    expect(screen.getByText('Track Your Child\'s Admission')).toBeInTheDocument();
  });

  test('renders all feature card descriptions', () => {
    render(<ParentSection />);
    
    expect(screen.getByText(/Browse comprehensive school profiles with detailed information/)).toBeInTheDocument();
    expect(screen.getByText(/Complete your school applications online with our streamlined process/)).toBeInTheDocument();
    expect(screen.getByText(/Monitor application status in real-time with updates/)).toBeInTheDocument();
  });

  test('renders illustration image with correct attributes', () => {
    render(<ParentSection />);
    
    const image = screen.getByAltText('Professional consultation scene showing parents meeting with school administrators');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/student.png');
    expect(image).toHaveClass('w-full');
    expect(image).toHaveClass('h-full');
    expect(image).toHaveClass('object-cover');
    expect(image).toHaveClass('rounded-lg');
    expect(image).toHaveClass('shadow-lg');
  });

  test('renders call-to-action section with correct styling', () => {
    render(<ParentSection />);
    
    expect(screen.getByText('Join thousands of families already using Inzozi')).toBeInTheDocument();
    expect(screen.getByText(/Make informed decisions about your child's education/)).toBeInTheDocument();
    
    const ctaTitle = screen.getByText('Join thousands of families already using Inzozi');
    expect(ctaTitle).toHaveClass('text-[#223D60]');
    expect(ctaTitle).toHaveClass('text-xl');
    expect(ctaTitle).toHaveClass('font-semibold');
  });

  test('CTA button has correct styling and interactions', () => {
    render(<ParentSection />);
    
    const ctaButton = screen.getByText('Continue As a Parent');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveClass('bg-gradient-to-r');
    expect(ctaButton).toHaveClass('from-[#C35B2D]');
    expect(ctaButton).toHaveClass('to-[#E69500]');
    expect(ctaButton).toHaveClass('hover:from-[#E69500]');
    expect(ctaButton).toHaveClass('hover:to-[#E69500]');
    expect(ctaButton).toHaveClass('text-white');
    expect(ctaButton).toHaveClass('px-8');
    expect(ctaButton).toHaveClass('py-3');
    expect(ctaButton).toHaveClass('rounded-lg');
    expect(ctaButton).toHaveClass('font-semibold');
  });

  test('section has correct background color', () => {
    const { container } = render(<ParentSection />);
    const sectionElement = container.firstChild as HTMLElement;
    
    expect(sectionElement).toHaveClass('bg-[#C8C1AD]');
    expect(sectionElement).toHaveClass('py-16');
    expect(sectionElement).toHaveClass('px-4');
  });

  test('main container has correct max-width and centering', () => {
    const { container } = render(<ParentSection />);
    
    const mainContainer = container.querySelector('.max-w-7xl.mx-auto');
    expect(mainContainer).toBeInTheDocument();
  });

  test('grid layout has correct responsive classes', () => {
    const { container } = render(<ParentSection />);
    
    const gridContainer = container.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveClass('gap-12');
    expect(gridContainer).toHaveClass('items-center');
  });

  test('feature cards container has correct spacing', () => {
    const { container } = render(<ParentSection />);
    
    const featureCardsContainer = container.querySelector('.space-y-6');
    expect(featureCardsContainer).toBeInTheDocument();
  });

  test('CTA container has correct backdrop styling', () => {
    const { container } = render(<ParentSection />);
    
    const ctaContainer = container.querySelector('.bg-\\[rgb\\(212\\,209\\,200\\)\\]');
    expect(ctaContainer).toBeInTheDocument();
    expect(ctaContainer).toHaveClass('bg-opacity-70');
    expect(ctaContainer).toHaveClass('rounded-xl');
    expect(ctaContainer).toHaveClass('p-8');
    expect(ctaContainer).toHaveClass('w-full');
    expect(ctaContainer).toHaveClass('mx-auto');
    expect(ctaContainer).toHaveClass('backdrop-blur-sm');
  });

  test('button has hover and active animations', () => {
    render(<ParentSection />);
    
    const ctaButton = screen.getByText('Continue As a Parent');
    expect(ctaButton).toHaveClass('transition-all');
    expect(ctaButton).toHaveClass('duration-200');
    expect(ctaButton).toHaveClass('hover:shadow-lg');
    expect(ctaButton).toHaveClass('transform');
    expect(ctaButton).toHaveClass('hover:scale-105');
    expect(ctaButton).toHaveClass('active:scale-95');
  });

  test('header section has correct margin bottom', () => {
    const { container } = render(<ParentSection />);
    
    const headerSection = container.querySelector('.text-center.mb-12');
    expect(headerSection).toBeInTheDocument();
  });

  test('heading has correct font size and weight', () => {
    render(<ParentSection />);
    
    const heading = screen.getByText('You Are a').parentElement;
    expect(heading).toHaveClass('text-4xl');
    expect(heading).toHaveClass('font-bold');
    expect(heading).toHaveClass('mb-4');
  });
});