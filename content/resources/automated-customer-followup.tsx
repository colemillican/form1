// content/resources/automate-customer-followup.tsx
import type { ArticleMeta } from "./index";

export const meta: ArticleMeta = {
  slug: "automate-customer-followup",
  title: "How to Automate Customer Follow-Up for Service Businesses",
  description:
    "Most service businesses lose thousands per month by not following up on quotes. Here's how to automate it with systems and AI.",
  date: "2025-12-01",
  readingTime: "6 min read",
  tags: ["follow-up", "CRM", "automation", "retention"],
};

export default function AutomateFollowupArticle() {
  return (
    <article className="prose prose-invert max-w-3xl">
      <p>
        Every quote you send is a pile of money sitting on the table — yet most
        service businesses never follow up consistently.
      </p>

      <h2>Why follow-up is the lowest-hanging fruit</h2>

      <p>
        If you close even <strong>10% more</strong> of the quotes you already
        send, you grow revenue without spending more on ads or leads.
      </p>

      <h2>The structure of an automated follow-up system</h2>

      <ul>
        <li>All estimates tracked in one system (CRM or even a spreadsheet)</li>
        <li>Clear timing rules: 1 day, 3 days, 7 days, etc.</li>
        <li>Personalized texts or emails</li>
        <li>A link to book or request quote updates</li>
      </ul>

      <h2>Adding AI to the process</h2>

      <p>An AI agent can:</p>
      <ul>
        <li>Detect high-interest customers</li>
        <li>Send tailored follow-ups</li>
        <li>Answer common questions</li>
        <li>Push hot leads to your team</li>
      </ul>

      <h2>Why businesses fail to automate this</h2>

      <p>
        Quotes get lost in inboxes, paper notes, and the owner’s brain. No
        system = no follow-up.
      </p>

      <h2>Where Local Link Studio fits</h2>

      <p>
        We build follow-up systems that plug directly into your tools — or help
        you choose better ones — so you capture value from the leads you already
        have.
      </p>
    </article>
  );
}
