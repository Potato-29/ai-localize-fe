import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the free tier work?",
    answer:
      "Our free tier gives you 5,000 translations per month with access to all 60+ supported languages. It's perfect for small projects, prototyping, or getting familiar with our API. No credit card required to get started.",
  },
  {
    question: "What happens if I exceed my monthly limit?",
    answer:
      "If you exceed your monthly translation limit, your API requests will return a quota exceeded error. You can upgrade your plan at any time to increase your limits, and the change takes effect immediately.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated amount for the remainder of your billing cycle. When downgrading, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer annual discounts?",
    answer:
      "Yes! Annual subscribers save 20% compared to monthly billing. You can switch to annual billing from your dashboard at any time and the discount will be applied to your next invoice.",
  },
  {
    question: "What's included in Enterprise support?",
    answer:
      "Enterprise customers get dedicated account management, priority support with guaranteed response times, custom SLA agreements, on-premise deployment options, and the ability to request custom features or integrations.",
  },
  {
    question: "How accurate are the AI translations?",
    answer:
      "Our AI models achieve industry-leading accuracy rates of 95%+ for major language pairs. We continuously improve our models and support context-aware translations for better results in specific domains.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No, there are no setup fees for any of our plans. You only pay for what you use, and you can start with our free tier to test the service before committing to a paid plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay via wire transfer or ACH with net-30 terms.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our pricing and plans
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </section>
  )
}
