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
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Target,
  Utensils,
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
    title: 'Water Testing & Analysis',
    description:
      'On-site and laboratory-supported testing for boiler, cooling tower, softener, RO, and wastewater systems.',
    icon: Droplets,
    accent: 'blue',
  },
  {
    title: 'Lab Equipment & Reagents',
    description:
      'Laboratory equipment, reagents, consumables, and support inputs for testing, research, and quality control work.',
    icon: FlaskConical,
    accent: 'gold',
  },
  {
    title: 'Technical Training & Services',
    description:
      'Practical training and technical guidance for operators, lab teams, maintenance teams, and facility managers.',
    icon: BookOpen,
    accent: 'green',
  },
  {
    title: 'Water Testing Kits',
    description:
      'Testing kits and field-ready tools for routine water quality checks and operational monitoring.',
    icon: ClipboardCheck,
    accent: 'blue',
  },
  {
    title: 'Boiler, Cooling & Softener Support',
    description:
      'Technical support for boiler water, cooling towers, water softeners, scale control, and system performance.',
    icon: Factory,
    accent: 'gold',
  },
  {
    title: 'RO & Wastewater Support',
    description:
      'Service guidance for reverse osmosis, pretreatment, wastewater testing, troubleshooting, and monitoring.',
    icon: ShieldCheck,
    accent: 'navy',
  },
  {
    title: 'Specialty Treatment Inputs',
    description:
      'Discreet support for sourcing water treatment inputs and other technical materials when projects require them.',
    icon: PackageCheck,
    accent: 'green',
  },
];

export const focusAreas = [
  'Boiler water',
  'Cooling towers',
  'Water softeners',
  'Reverse osmosis',
  'Wastewater',
  'Testing kits',
  'Lab equipment',
  'Laboratory reagents',
  'Quality control labs',
];

export const features = [
  {
    title: 'Reliable Technical Service',
    description: 'Water testing, lab support, guidance, and follow-up are delivered with clear documentation.',
    icon: Award,
  },
  {
    title: 'Water & Laboratory Know-How',
    description: 'Focused support for utility water systems, testing routines, lab equipment, and reagents.',
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
    description: 'Technical consultation, test interpretation, product guidance, and practical application recommendations.',
    icon: ClipboardCheck,
  },
  {
    title: 'Customer-Centered Service',
    description: 'Long-term service relationships shaped around each client operation and schedule.',
    icon: Handshake,
  },
];

export const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Other Sectors', icon: Target },
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
    description: 'Test records, service notes, supplier records, and product data sheets support accountable work.',
    icon: ClipboardCheck,
  },
  {
    title: 'Safe Handling Guidance',
    description: 'Storage guidance, labeling discipline, consultation, and handling practices are included where materials are involved.',
    icon: ShieldCheck,
  },
  {
    title: 'Regulatory Awareness',
    description: 'Import, distribution, and customer documentation are handled with compliance in mind.',
    icon: CheckCircle2,
  },
  {
    title: 'Environmental Responsibility',
    description: 'Responsible testing, treatment guidance, and safer material-use practices help reduce operational risk.',
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
    company: 'Addis Food Processing Group',
    testimonial:
      'Their team helped us understand our water testing routine and improve monitoring for our utility systems.',
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
    value: ['Addis Ababa, Ethiopia', 'Shiro Meda, Gelagay Business PLC'],
    icon: MapPin,
  },
  {
    title: 'Phone',
    value: ['+251 94 030 1838', '+251 961 063 629'],
    icon: Phone,
  },
  {
    title: 'Email',
    value: ['info@gelagay.com', 'sales@gelagay.com'],
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
    question: 'What does Gelagay currently focus on?',
    answer:
      'Gelagay currently focuses on two connected areas: industrial water testing and technical services, plus laboratory equipment, reagents, and testing kits.',
  },
  {
    question: 'Do you provide training and technical support?',
    answer:
      'Yes. Gelagay can support teams working with boiler water, cooling towers, softeners, RO systems, wastewater, lab testing routines, reagents, and safe material use.',
  },
  {
    question: 'Can you help identify the right test kit or reagent?',
    answer:
      'Yes. Share the system type, test parameters, operating conditions, and usage frequency, and the team can recommend suitable testing kits, reagents, or service next steps.',
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

export const heroHighlights = ['Water Testing', 'Training', 'Technical Services', 'Lab Support'];

export const sectionEyebrows = {
  products: 'Technical solutions',
  why: 'Partner advantage',
  industries: 'Industries served',
  safety: 'Testing, safety and compliance',
  testimonials: 'Client confidence',
  contact: 'Contact Gelagay',
};
