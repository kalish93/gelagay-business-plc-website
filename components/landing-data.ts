import {
  Award,
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
  Lightbulb,
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Target,
  Truck,
  Utensils,
  Warehouse,
  Wheat,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#products' },
  { label: 'Safety', href: '#safety' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const products = [
  {
    title: 'Chemical Supply & Distribution',
    description:
      'Industrial, laboratory, agricultural, water treatment, cleaning, and commercial chemicals supplied with dependable coordination.',
    icon: Factory,
    accent: 'navy',
  },
  {
    title: 'Chemical Use Advisory & Consultation',
    description:
      'Practical guidance for product selection, safe use, storage, handling, application planning, and documentation needs.',
    icon: Lightbulb,
    accent: 'gold',
  },
  {
    title: 'Import, Sourcing & Procurement',
    description:
      'Supplier coordination, sourcing support, import planning, and procurement assistance for specialized business inputs.',
    icon: PackageCheck,
    accent: 'green',
  },
  {
    title: 'Technical Documentation Support',
    description:
      'Support with specifications, safety data sheets, handling guidance, batch records, and compliance-minded documentation.',
    icon: ClipboardCheck,
    accent: 'blue',
  },
  {
    title: 'Logistics & Business Support',
    description:
      'Warehousing coordination, delivery planning, repeat-order scheduling, and distribution support across Ethiopian regions.',
    icon: Truck,
    accent: 'gold',
  },
  {
    title: 'Bulk Supply Programs',
    description:
      'Volume supply, contract planning, packaging coordination, and predictable replenishment for business customers.',
    icon: Warehouse,
    accent: 'navy',
  },
  {
    title: 'Future Sector Partnerships',
    description:
      'A flexible platform for adding new supply, advisory, distribution, and commercial support services as Gelagay expands.',
    icon: Target,
    accent: 'green',
  },
];

export const chemicalCategories = [
  'Industrial chemicals',
  'Laboratory chemicals',
  'Agricultural chemicals',
  'Water treatment chemicals',
  'Cleaning and sanitizing chemicals',
  'Commercial chemical inputs',
  'Bulk chemical supply',
];

export const features = [
  {
    title: 'Quality-Assured Supply',
    description: 'Products and services are supported by vetted suppliers, clear documentation, and traceability.',
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
    description: 'Chemical-use consultation, product guidance, documentation support, and practical application recommendations.',
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
    description: 'Storage guidance, labeling discipline, consultation, and handling practices are built into every order.',
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
  { value: 500, label: 'Products & Inputs', symbol: '+' },
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
    question: 'Is Gelagay only a chemical supplier?',
    answer:
      'Chemicals are the current core specialization, but Gelagay is structured as a business supply, distribution, sourcing, and advisory company that can expand into additional sectors.',
  },
  {
    question: 'Do you provide consultation for chemical use?',
    answer:
      'Yes. Gelagay can advise on product selection, safe handling, storage, application planning, documentation needs, and practical use considerations.',
  },
  {
    question: 'Can you help identify the right product for an application?',
    answer:
      'Yes. Share the application, target volume, safety requirements, and delivery location, and our team will recommend suitable products or advisory next steps.',
  },
  {
    question: 'Do products and services include documentation?',
    answer:
      'Available documentation can include specifications, safety data sheets, supplier records, handling guidance, and consultation notes depending on the request.',
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
  products: 'Business solutions',
  why: 'Partner advantage',
  industries: 'Industries served',
  safety: 'Advisory, safety and compliance',
  testimonials: 'Client confidence',
  contact: 'Contact Gelagay',
};
