import {
  Award,
  Beaker,
  BookOpen,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Droplets,
  Factory,
  FlaskConical,
  Handshake,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Truck,
  Utensils,
  Warehouse,
  Wheat,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Safety', href: '#safety' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const products = [
  {
    title: 'Industrial Chemicals',
    description:
      'Process chemicals, solvents, acids, alkalis, and specialty inputs for manufacturing and production lines.',
    icon: Factory,
    accent: 'navy',
  },
  {
    title: 'Laboratory Chemicals',
    description:
      'Reliable reagents, analytical-grade chemicals, glassware support, and consumables for quality control labs.',
    icon: Beaker,
    accent: 'gold',
  },
  {
    title: 'Agricultural Chemicals',
    description:
      'Fertilizer inputs, crop-support chemicals, soil treatment products, and farm supply coordination.',
    icon: Sprout,
    accent: 'green',
  },
  {
    title: 'Water Treatment Chemicals',
    description:
      'Coagulants, disinfectants, pH control chemicals, and treatment supplies for safe water operations.',
    icon: Droplets,
    accent: 'blue',
  },
  {
    title: 'Cleaning & Sanitizing Chemicals',
    description:
      'Commercial detergents, sanitizers, degreasers, and hygiene products for high-traffic facilities.',
    icon: Sparkles,
    accent: 'gold',
  },
  {
    title: 'Chemical Distribution & Logistics',
    description:
      'Reliable sourcing, warehousing, documentation, and coordinated delivery across Ethiopian regions.',
    icon: Truck,
    accent: 'navy',
  },
  {
    title: 'Bulk Chemical Supply',
    description:
      'Volume procurement, repeat ordering programs, and contract supply planning for business customers.',
    icon: Warehouse,
    accent: 'green',
  },
];

export const features = [
  {
    title: 'Certified Quality Products',
    description: 'Products are sourced from vetted suppliers with documentation and batch traceability.',
    icon: Award,
  },
  {
    title: 'Reliable Supply Chain',
    description: 'Procurement, storage, and dispatch planning built around dependable availability.',
    icon: PackageCheck,
  },
  {
    title: 'Competitive Pricing',
    description: 'Balanced pricing for businesses that need continuity, quality, and cost control.',
    icon: CheckCircle2,
  },
  {
    title: 'Fast Delivery',
    description: 'Responsive fulfillment for Addis Ababa and coordinated regional distribution.',
    icon: Clock3,
  },
  {
    title: 'Expert Support',
    description: 'Product guidance, documentation support, and practical application recommendations.',
    icon: ClipboardCheck,
  },
  {
    title: 'Customer-Centered Service',
    description: 'Long-term supply partnerships shaped around each client operation and schedule.',
    icon: Handshake,
  },
];

export const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Agriculture', icon: Wheat },
  { name: 'Water Treatment', icon: Droplets },
  { name: 'Laboratories', icon: FlaskConical },
  { name: 'Food Processing', icon: Utensils },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Construction', icon: Building2 },
  { name: 'Education', icon: BookOpen },
];

export const complianceItems = [
  {
    title: 'Quality Documentation',
    description: 'Supplier records, product data sheets, and batch-level checks support accountable supply.',
    icon: ClipboardCheck,
  },
  {
    title: 'Safe Handling Procedures',
    description: 'Storage guidance, labeling discipline, and handling practices are built into every order.',
    icon: ShieldCheck,
  },
  {
    title: 'Regulatory Awareness',
    description: 'Import, distribution, and customer documentation are handled with compliance in mind.',
    icon: CheckCircle2,
  },
  {
    title: 'Environmental Responsibility',
    description: 'Responsible sourcing and safer chemical-use guidance help reduce operational risk.',
    icon: Leaf,
  },
];

export const testimonials = [
  {
    name: 'Yohannes Tekle',
    role: 'Procurement Manager',
    company: 'Addis Manufacturing Co.',
    testimonial:
      'Gelagay gives us consistency, clear communication, and the product documentation our production team needs.',
    image: '/testimonial-1.png',
    rating: 5,
  },
  {
    name: 'Almaz Negussie',
    role: 'Operations Director',
    company: 'Ethiopian Agricultural Solutions',
    testimonial:
      'Their team understands seasonal demand and helps us plan chemical supply before the pressure arrives.',
    image: '/testimonial-2.png',
    rating: 5,
  },
  {
    name: 'Dawit Abate',
    role: 'Technical Lead',
    company: 'East Africa Water Treatment Ltd',
    testimonial:
      'We value their fast response, dependable stock planning, and practical technical support.',
    image: '/testimonial-3.png',
    rating: 5,
  },
];

export const stats = [
  { value: 500, label: 'Products', symbol: '+' },
  { value: 100, label: 'Business Clients', symbol: '+' },
  { value: 50, label: 'Partner Suppliers', symbol: '+' },
  { value: 10, label: 'Regions Served', symbol: '+' },
];

export const contactDetails = [
  {
    title: 'Address',
    value: ['Addis Ababa, Ethiopia', 'Industrial and commercial supply office'],
    icon: MapPin,
  },
  {
    title: 'Phone',
    value: ['+251 11 123 4567', '+251 912 345 678'],
    icon: Phone,
  },
  {
    title: 'Email',
    value: ['info@gelagay.et', 'sales@gelagay.et'],
    icon: Mail,
  },
  {
    title: 'Business Hours',
    value: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
    icon: Clock3,
  },
];

export const faqs = [
  {
    question: 'Do you supply chemicals in bulk quantities?',
    answer:
      'Yes. Gelagay supports recurring and bulk supply programs for industrial, agricultural, laboratory, and commercial customers.',
  },
  {
    question: 'Can you help identify the right product for an application?',
    answer:
      'Yes. Share the application, target volume, safety requirements, and delivery location, and our team will recommend suitable options.',
  },
  {
    question: 'Do products include documentation?',
    answer:
      'Available documentation can include product specifications, safety data sheets, supplier records, and handling guidance depending on the product.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'We serve Addis Ababa and coordinate distribution to business customers across multiple Ethiopian regions.',
  },
];

export const accentClasses = {
  navy: {
    icon: 'text-primary',
    panel: 'bg-primary/10',
    border: 'group-hover:border-primary/40',
  },
  gold: {
    icon: 'text-secondary',
    panel: 'bg-secondary/15',
    border: 'group-hover:border-secondary/60',
  },
  green: {
    icon: 'text-emerald-600 dark:text-emerald-300',
    panel: 'bg-emerald-500/10',
    border: 'group-hover:border-emerald-500/40',
  },
  blue: {
    icon: 'text-sky-600 dark:text-sky-300',
    panel: 'bg-sky-500/10',
    border: 'group-hover:border-sky-500/40',
  },
} as const;

export const heroHighlights = ['Industrial', 'Laboratory', 'Agricultural', 'Commercial'];

export const sectionEyebrows = {
  products: 'Product portfolio',
  why: 'Supply advantage',
  industries: 'Industries served',
  safety: 'Safety and compliance',
  testimonials: 'Client confidence',
  contact: 'Request a quote',
};
