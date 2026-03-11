// Brand Colors
export const COLORS = {
  gold: '#F2C811',
  goldDark: '#D4A800',
  charcoal: '#1A1A1A',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  mediumGray: '#666666',
} as const;

// Company Info
export const COMPANY = {
  name: 'SG Group',
  tagline: 'Legacy of Excellence, Empire of Vision',
  phone: '9637261513',
  email: 'connect.sggroup@gmail.com',
  website: 'www.sggroup.info',
  address: '201, Gurukul Apartment, Aaple Ghar Society, Pune city, State Maharashtra 411014',
  contactPerson: 'Prathamesh Gaikwad',
} as const;

// SG Infraastructure
export const INFRASTRUCTURE = {
  name: 'SG Infraastructure',
  tagline: 'Shaping Tomorrow\'s Skyline',
  email: 'sg.infraastructure@gmail.com',
  services: [
    {
      title: 'Construction',
      description: 'End-to-end construction services delivering world-class residential, commercial, and industrial structures with precision and excellence.',
      icon: 'building',
    },
    {
      title: 'Builders & Developers',
      description: 'Full-cycle real estate development from land acquisition and planning to design, construction, and delivery of residential and commercial properties.',
      icon: 'landmark',
    },
    {
      title: 'Earth Movers',
      description: 'Heavy earthmoving and excavation services including grading, trenching, land clearing, and site preparation for projects of any scale.',
      icon: 'truck',
    },
    {
      title: 'Civil Works',
      description: 'Comprehensive civil engineering solutions including roads, bridges, drainage systems, and structural foundations built to last.',
      icon: 'hard-hat',
    },
    {
      title: 'Electric Works',
      description: 'Professional electrical installations, wiring, panel setups, and power management systems for all types of infraastructure projects.',
      icon: 'zap',
    },
    {
      title: 'Mechanical Works',
      description: 'Expert mechanical engineering services covering HVAC systems, piping, equipment installations, and maintenance for large-scale projects.',
      icon: 'settings',
    },
  ],
} as const;

// SG Enterprises
export const ENTERPRISES = {
  name: 'SG Enterprises',
  tagline: 'Where Quality Reigns Supreme',
  email: 'sg.enterprises1513@gmail.com',
  services: [
    {
      title: 'MRO Supplies',
      description: 'Maintenance, Repair & Operations supplies sourced from leading manufacturers ensuring quality and timely delivery for industrial needs.',
      icon: 'wrench',
    },
    {
      title: 'Packaging Material',
      description: 'Premium packaging solutions including industrial-grade materials for secure transportation and storage of goods across industries.',
      icon: 'package',
    },
    {
      title: 'Safety Gear & PPE',
      description: 'Certified personal protective equipment and safety gear meeting international standards to keep your workforce safe on every job site.',
      icon: 'shield',
    },
    {
      title: 'ESD and Non-ESD Products',
      description: 'Electrostatic discharge protection and non-ESD products for electronics manufacturing and sensitive equipment handling environments.',
      icon: 'cpu',
    },
  ],
} as const;

// Stats
export const STATS = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '+', label: 'Team Members' },
] as const;

// Why Choose Us
export const FEATURES = [
  {
    title: 'Quality Assurance',
    description: 'We adhere to the highest quality standards across all our services, ensuring every project meets international benchmarks.',
    icon: 'check-circle',
  },
  {
    title: 'Timely Delivery',
    description: 'We value your time and consistently deliver projects on schedule without compromising on quality or safety.',
    icon: 'clock',
  },
  {
    title: 'Expert Team',
    description: 'Our experienced professionals bring deep domain knowledge and expertise to every project we undertake.',
    icon: 'users',
  },
  {
    title: 'Competitive Pricing',
    description: 'We offer the best value for your investment with transparent pricing and no hidden costs.',
    icon: 'tag',
  },
  {
    title: 'Customer Focus',
    description: 'Our clients are at the heart of everything we do. We listen, adapt, and deliver solutions tailored to your needs.',
    icon: 'heart',
  },
  {
    title: 'Innovation',
    description: 'We continuously embrace new technologies and methods to deliver innovative solutions that shape the future.',
    icon: 'lightbulb',
  },
] as const;
