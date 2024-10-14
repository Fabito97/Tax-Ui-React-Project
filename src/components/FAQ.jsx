import './FAQ.css'

const faqs = [
  {
    id: 1,
    question: "Does TaxPal handle VAT?",
    answer: "Well no, but if you move your company offshore you can probably ignore it.",
  },
  {
    id: 2,
    question: "Can I pay for my subscription via purchase order?",
    answer: "Well no, but if you move your company offshore you can probably ignore it.",
  },
  {
    id: 3,
    question: "How do I apply for a job at TaxPal?",
    answer: "Absolutely, we are happy to take your money in all forms.",
  },
  {
    id: 4,
    question: "What was that testimonial about tax fraud all about?",
    answer: "TaxPal is just a software application, ultimately your books are your responsibility.",
  },
  {
    id: 5,
    question: "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.?",
    answer: "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
  },
  {
    id: 6,
    question: "I found other companies called TaxPal, are you sure you can use this name?",
    answer: "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
  },
  {
    id: 7,
    question: "How do you generate reports?",
    answer: "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
  },
  {
    id: 8,
    question: "Can we expect more inventory features?",
    answer: "In life it’s really better to never expect anything at all.",
  },
  {
    id: 9,
    question: "I lost my password, how do I get into my account?",
    answer: "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
  },
];
export const FAQ = () => {
  return (
    <div className='faq'>
      <div className='container'>
        <div className='faq-heading'>
          <h2 className='py-2'>Frequently asked questions</h2>
          <p>
            If you can't find what you'r looking for, email our support team and if you're lucky someone will get back to you.
          </p>
        </div>
        <div className='faq-items'>
          <div className='faq-item'>
            {faqs.map((faq) => faq.id < 4 && <FAQItem faq={faq} key={faq.id} />)}
          </div>
          <div className='faq-item'>
            {faqs.map((faq) => (faq.id > 3 && faq.id < 7) && <FAQItem faq={faq} key={faq.id} />)}
          </div>
          <div className='faq-item'>
            {faqs.map((faq) => (faq.id > 6) && <FAQItem faq={faq} key={faq.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
const FAQItem = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <div>
      <h4 className='py-1'>{question}</h4>
      <p className='pb-1'>{answer}</p>
    </div>
  );
};
