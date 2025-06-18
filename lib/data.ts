import { IUserInput, Data } from "@/types";
import bcrypt from "bcryptjs";
const users: IUserInput[] = [
  {
    name: "John",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "Admin",
    emailVerified: false,
  },
  {
    name: "Jane",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Jack",
    email: "jack@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Sarah",
    email: "sarah@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Michael",
    email: "michael@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Emily",
    email: "emily@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Alice",
    email: "alice@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Tom",
    email: "tom@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",

    emailVerified: false,
  },
  {
    name: "Linda",
    email: "linda@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",

    emailVerified: false,
  },
  {
    name: "George",
    email: "george@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",

    emailVerified: false,
  },
  {
    name: "Jessica",
    email: "jessica@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Chris",
    email: "chris@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Samantha",
    email: "samantha@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "David",
    email: "david@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
  {
    name: "Anna",
    email: "anna@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    emailVerified: false,
  },
];

const data: Data = {
  users,
  
webPages: [
  
    {
      title: 'Contact Us',
      slug: 'contact-us',
      content: `We’re here to help! If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. Our team is ready to assist you and ensure you have the best shopping experience.

**Customer Support**
For inquiries about orders, products, or account-related issues, contact our customer support team:
- **Email:** support@example.com
- **Phone:** +1 (123) 456-7890
- **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).

**Head Office**
For corporate or business-related inquiries, reach out to our headquarters:
- **Address:** 1234 E-Commerce St, Suite 567, Business City, BC 12345
- **Phone:** +1 (987) 654-3210

We look forward to assisting you! Your satisfaction is our priority.
`,
      isPublished: true,
    },
    {
      title: 'Help',
      slug: 'help',
      content: `Welcome to our Help Center! We're here to assist you with any questions or concerns you may have while shopping with us. Whether you need help with orders, account management, or product inquiries, this page provides all the information you need to navigate our platform with ease.

**Placing and Managing Orders**
Placing an order is simple and secure. Browse our product categories, add items to your cart, and proceed to checkout. Once your order is placed, you can track its status through your account under the "My Orders" section. If you need to modify or cancel your order, please contact us as soon as possible for assistance.

**Shipping and Returns**
We offer a variety of shipping options to suit your needs, including standard and express delivery. For detailed shipping costs and delivery timelines, visit our Shipping Policy page. If you're not satisfied with your purchase, our hassle-free return process allows you to initiate a return within the specified timeframe. Check our Returns Policy for more details.

**Account and Support**
Managing your account is easy. Log in to update your personal information, payment methods, and saved addresses. If you encounter any issues or need further assistance, our customer support team is available via email, live chat, or phone. Visit our Contact Us page for support hours and contact details.`,
      isPublished: true,
    },
    {
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      content: `We value your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and share your data when you interact with our services. By using our platform, you consent to the practices described herein.

We collect data such as your name, email address, and payment details to provide you with tailored services and improve your experience. This information may also be used for marketing purposes, but only with your consent. Additionally, we may share your data with trusted third-party providers to facilitate transactions or deliver products.

Your data is safeguarded through robust security measures to prevent unauthorized access. However, you have the right to access, correct, or delete your personal information at any time. For inquiries or concerns regarding your privacy, please contact our support team.`,
      isPublished: true,
    },
    {
      title: 'Conditions of Use',
      slug: 'conditions-of-use',
      content: `Welcome to Deshen Tech. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our platform, including browsing, purchasing products, and interacting with any content or services provided. You must be at least 18 years old or have the consent of a parent or guardian to use this website. Any breach of these terms may result in the termination of your access to our platform.

We strive to ensure all product descriptions, pricing, and availability information on our website are accurate. However, errors may occur, and we reserve the right to correct them without prior notice. All purchases are subject to our return and refund policy. By using our site, you acknowledge that your personal information will be processed according to our privacy policy, ensuring your data is handled securely and responsibly. Please review these terms carefully before proceeding with any transactions.
`,
      isPublished: true,
    },
    {
      title: 'Customer Service',
      slug: 'customer-service',
      content: `At [Your Store Name], our customer service team is here to ensure you have the best shopping experience. Whether you need assistance with orders, product details, or returns, we are committed to providing prompt and helpful support.

If you have questions or concerns, please reach out to us through our multiple contact options:
- **Email:** ngozifavournwachukwu@gmail.ocm
- **Phone:** +234 7062540783
- **Live Chat:** Available on our website for instant assistance

We also provide helpful resources such as order tracking, product guides, and FAQs to assist you with common inquiries. Your satisfaction is our priority, and we’re here to resolve any issues quickly and efficiently. Thank you for choosing us!`,
      isPublished: true,
    },
    {
      title: 'Returns Policy',
      slug: 'returns-policy',
      content: 'Returns Policy Content',
      isPublished: true,
    },
    {
      title: 'Careers',
      slug: 'careers',
      content: 'careers Content',
      isPublished: true,
    },
    {
      title: 'Blog',
      slug: 'blog',
      content: 'Blog Content',
      isPublished: true,
    },
    {
      title: 'Sell Products',
      slug: 'sell',
      content: `Sell Products Content`,
      isPublished: true,
    },
    {
      title: 'Become Affiliate',
      slug: 'become-affiliate',
      content: 'Become Affiliate Content',
      isPublished: true,
    },
    {
      title: 'Advertise Your Products',
      slug: 'advertise',
      content: 'Advertise Your Products',
      isPublished: true,
    },
    {
      title: 'Shipping Rates & Policies',
      slug: 'shipping',
      content: 'Shipping Rates & Policies',
      isPublished: true,
    },
  ],
};
export default data;
