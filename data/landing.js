import {
  BarChart3,
  PieChart,
  CreditCard,
} from "lucide-react";

export const featuresData = [
  {
    title: "Add & Track Transactions Easily",
    description:
      "Record every income and expense in seconds and keep your finances organized.",
    image: "/feature_1.png",
  },
  {
    title: "Smart Insights with Graphs",
    description:
      "Visualize your spending patterns with clean, easy-to-read charts.",
    image: "/feature_2.png",
  },
];


// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Riya Sharma, Delhi",
    role: "Small Business Owner",
    image: "/testimonials/man1.jpeg",
    quote:
      "Helps me budget my salary and avoid end-of-month money stress. I can finally plan ahead and save for bigger goals without worrying about overspending.",
  },
  {
    name: "Amit Patel, Ahmedabad",
    role: "Financial Advisor",
    image: "/testimonials/woman2.jpeg",
    quote:
      "Finally saving from my pocket money! Super easy to track expenses and monitor where every rupee goes, which makes managing finances much simpler.",
  },
  {
    name: "Sneha Nair, Bangalore",
    role: "Freelancer",
    image: "/testimonials/woman1.jpeg",
    quote:
      "No more paper registers — Khatabook handles all my daily accounts. It’s intuitive, fast, and keeps my finances organized even during busy workdays.",
  },
  {
    name: "Rohit Verma, Mumbai",
    role: "Startup Founder",
    image: "/testimonials/man2.jpeg",
    quote:
        "Khatabook has transformed the way I manage my startup’s finances. Tracking expenses, generating reports, and planning budgets has never been easier. Highly recommended!",
    },
];
