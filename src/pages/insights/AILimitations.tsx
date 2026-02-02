import { Card } from "@/components/ui/card";
import { christy } from "@/assets/profile";
import { ArticleContainer } from '@/components/article/ArticleContainer';
import { ArticleHeader } from '@/components/article/ArticleHeader';
import { ArticleSection } from '@/components/article/ArticleSection';
import { useArticleScroll } from '@/hooks/use-article-scroll';
import { useEffect } from 'react';
import insightsMetadata from '@/data/insightsMetadata';

const AILimitations = () => {
  const { readingProgress, scrollToSection } = useArticleScroll();

  // Ensure the article opens at the top when navigated to
  useEffect(() => {
    try {
      if (!sessionStorage.getItem('sena:scrollTo')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    } catch (e) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  // Set page title and Open Graph / Twitter meta for this article while mounted.
  useEffect(() => {
    const articleTitle = 'Where AI stops being useful: A guide to drawing the line';
    const articleDesc = 'An explanation of where AI underperforms and limitations of the technology.';

    const prevTitle = document.title;

    function upsertMeta(attrName: 'name' | 'property', key: string, value: string) {
      const selector = `meta[${attrName}="${key}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      const created = !el;
      const prev = el ? el.getAttribute('content') : null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
      return { el, prev, created };
    }

    function upsertLink(rel: string, href: string) {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      const created = !el;
      const prev = el ? el.getAttribute('href') : null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
      return { el, prev, created };
    }

    document.title = `${articleTitle} — Sena Strategy`;

    const metas: Array<ReturnType<typeof upsertMeta>> = [];
    metas.push(upsertMeta('name', 'description', articleDesc));
    metas.push(upsertMeta('property', 'og:title', `${articleTitle} — Sena Strategy`));
    metas.push(upsertMeta('property', 'og:description', articleDesc));
    metas.push(upsertMeta('property', 'og:type', 'article'));
    metas.push(upsertMeta('property', 'og:image', '/og-1200x630.png'));
    metas.push(upsertMeta('name', 'twitter:title', `${articleTitle} — Sena Strategy`));
    metas.push(upsertMeta('name', 'twitter:description', articleDesc));
    metas.push(upsertMeta('name', 'twitter:image', '/og-1200x630.png'));

    const canonical = upsertLink('canonical', window.location.href.split('#')[0] + '#/insights/ai-limitations');

    return () => {
      document.title = prevTitle;
      metas.forEach(m => {
        if (m.el) {
          if (m.created && m.el.parentNode) m.el.parentNode.removeChild(m.el);
          else if (m.prev !== null) m.el.setAttribute('content', m.prev);
        }
      });

      if (canonical.el) {
        if (canonical.created && canonical.el.parentNode) canonical.el.parentNode.removeChild(canonical.el);
        else if (canonical.prev !== null) canonical.el.setAttribute('href', canonical.prev);
      }
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html::-webkit-scrollbar { width: 12px; }
      html::-webkit-scrollbar-track { background: transparent; }
      html::-webkit-scrollbar-thumb { background: #1E1E1E; border-radius: 9999px; border: 3px solid rgba(0,0,0,0); background-clip: padding-box; }
      * { scrollbar-color: #1E1E1E transparent; scrollbar-width: thin; }
    `;
    document.head.appendChild(style);
    document.title = "Where AI stops being useful — Sena Strategy";
    return () => {
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <ArticleHeader
        title="Where AI stops being useful: A guide to drawing the line"
        subtitle="An explanation of where AI underperforms and limitations of the technology."
        progress={readingProgress}
        onNavClick={scrollToSection}
        navItems={[
          { label: 'In brief', id: 'brief' },
          { label: 'The cost of yes-to-everything', id: 'cost' },
          { label: 'Where AI struggles', id: 'struggles' },
          { label: 'Four categories', id: 'categories' },
          { label: 'Framework', id: 'framework' },
          { label: 'Disciplined strategy', id: 'strategy' },
          { label: 'Sources', id: 'sources' },
        ]}
      />

      <ArticleContainer className="max-w-4xl prose prose-lg mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-serif font-semibold text-primary">Where AI stops being useful: A guide to drawing the line</h1>
            <p className="text-lg text-muted-foreground mt-3">An explanation of where AI underperforms and limitations of the technology.</p>

            <div className="mt-6 flex items-center gap-4">
              <img src={christy} alt="Author" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="text-s font-semibold">Christy Chan</div>
                <div className="text-sm text-muted-foreground">Founding Consultant - Sena Strategy</div>
              </div>
            </div>

            <div id="brief" className="mt-6 p-4 bg-card border rounded-sm border-l-4 border-primary">
              <div className="font-semibold">In brief</div>
              <ul className="mt-2 space-y-2 list-none">
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span>80% of AI projects fail, double the rate of traditional IT initiatives. Only 5% of companies generate value at scale. The problem is rarely the technology. It is choosing the wrong problems, or asking AI to do more than it should.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span>Four categories consistently trip up AI deployments: judgment under ambiguity, relationship-dependent outcomes, novel situations without historical patterns, and work where human authorship is the value. In each, AI can support but should not execute or decide.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span>Vendor pressure creates false urgency. Most "AI opportunities" fail not because of bad implementation but because AI was doing work it should have only supported.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span>The companies pulling ahead are not deploying AI everywhere. They are pursuing transformative change in specific areas, with clear boundaries on where AI stops.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span>Disciplined AI strategy means knowing where AI executes, where it supports, and where it does not belong at all.</span></li>
              </ul>
            </div>
          </header>

          <ArticleSection id="cost" title="The cost of yes-to-everything" className="py-4 md:py-4">
            <p className="text-muted-foreground">Decision-makers face relentless pressure to "do something with AI." Vendors position every function as AI-ready. Boards ask what the AI strategy is as competitors announce initiatives. The path of least resistance is to say yes.</p>
            <p className="mt-3 text-muted-foreground">The numbers tell a different story. Only 5% of companies are generating value from AI at scale. 60% percent report little or no impact from their AI investments. The abandonment rate has surged: 42% of companies are now scrapping most of their AI initiatives, up from 17% just a year ago. Nearly half of all proof-of-concept never reach production.</p>
            <p className="mt-3 text-muted-foreground">These failures carry costs beyond wasted budget. Each abandoned pilot erodes organisational confidence. The cynicism compounds, making future adoption harder even when the use case is sound.</p>
            <p className="mt-3 text-muted-foreground">The primary constraint is not technology capability, but rather problem selection and scope. Companies are asking AI to execute where it should only support, or deploying it against problems where it has no business being deployed at all.</p>
          </ArticleSection>

          <ArticleSection id="struggles" title="Where AI genuinely struggles" className="py-4 md:py-4">
            <p className="text-muted-foreground">AI excels at specific tasks: pattern recognition across large datasets, classification based on historical examples, content generation from learned distributions, and automation of repetitive processes with clear rules. Outside these boundaries, performance degrades quickly.</p>
            <p className="mt-3 text-muted-foreground">Four categories of problems consistently defeat AI at this point in time, regardless of model sophistication or implementation quality. In each case, AI may still play a supporting role. But the further into execution it goes, the more likely it is to fail.</p>
          </ArticleSection>

          <ArticleSection id="categories" title="Four categories where AI underperforms" className="py-4 md:py-4">
            <h3 className="mt-2 text-xl font-semibold">Category 1: Judgment under ambiguity</h3>
            <p className="mt-2 text-muted-foreground">AI systems extrapolate from patterns in training data. They perform brilliantly when new situations resemble past situations. They struggle when context is novel, information is incomplete, or decisions require weighing values that cannot be quantified.</p>
            <p className="mt-2 text-muted-foreground">Consider medical diagnosis. AI can match symptoms to conditions with high accuracy when the presentation is textbook. But clinical medicine is full of ambiguous presentations, incomplete histories, and patients whose circumstances don't fit the training distribution. This is why regulators and clinicians currently treat AI as a support tool rather than a replacement for physician judgment. The liability and trust implications of "good enough" advice in high-stakes domains are severe.</p>
            <p className="mt-2 text-muted-foreground">The same logic applies to business decisions that require judgment: performance management, strategic pivots, and situations where the right answer depends on context that cannot be captured in data. AI can surface relevant precedents, stress-test your reasoning, or play devil's advocate. It cannot make the call.</p>

            <h3 className="mt-6 text-xl font-semibold">Category 2: Relationship-dependent outcomes</h3>
            <p className="mt-2 text-muted-foreground">Some outcomes depend on trust, rapport, or the ability to read unspoken dynamics. The transaction matters less than the relationship surrounding it.</p>
            <p className="mt-2 text-muted-foreground">Key client management is an example. The client's decision to renew or expand often hinges on whether they feel understood, whether they trust the account manager's judgment, whether the relationship has survived difficult moments. AI can track account health metrics and suggest talking points. It cannot build the trust that survives a service failure.</p>
            <p className="mt-2 text-muted-foreground">The same applies to board-level negotiations, employee retention conversations, and any context where human connection is the product. AI can support these interactions with preparation and follow-up. It cannot substitute for the relationship itself.</p>

            <h3 className="mt-6 text-xl font-semibold">Category 3: Novel and unprecedented situations</h3>
            <p className="mt-2 text-muted-foreground">AI models learn statistical regularities from historical data. When genuinely new situations arise, there is no pattern to match.</p>
            <p className="mt-2 text-muted-foreground">Market discontinuities, regulatory regime changes, geopolitical shocks, and unprecedented competitive moves all fall into this category. The model confidently generates outputs, but those outputs extrapolate from a world that no longer applies. AI now has a confident wrong answer based on patterns that have broken.</p>
            <p className="mt-2 text-muted-foreground">Zillow's iBuying collapse is a case study in this failure mode. The company used AI to price and purchase homes at scale. When the pandemic triggered wild price swings, the algorithm kept extrapolating from historical patterns that no longer held. Zillow lost $500 million and shut the business down entirely. It was not that the model was faulty; it was trained on a market that had ceased to exist.</p>

            <h3 className="mt-6 text-xl font-semibold">Category 4: Work where the process is the point</h3>
            <p className="mt-2 text-muted-foreground">Sometimes the value lies not in the output but in the act of producing it.</p>
            <p className="mt-2 text-muted-foreground">Creative work is one example. Research shows AI-generated content triggers a measurable trust penalty: lower engagement, weaker purchase intent, and in emotional contexts, outright rejection. McDonald's pulled an AI-generated Christmas ad after consumer backlash. Nearly 70% of consumers worry AI content is being used to deceive them. Thought leadership and high-touch client communications face the same risk. If the audience suspects the work is not human, the value collapses.</p>
            <p className="mt-2 text-muted-foreground">In these contexts, "made by a human" is part of the value proposition. Efficiency gains miss the point entirely. AI might help the author think, but it cannot replace the author.</p>
          </ArticleSection>

          <ArticleSection id="framework" title="A framework for knowing where AI stops" className="py-4 md:py-4">
            <p className="text-muted-foreground">The four categories above share a common thread: AI can support, but the final call must be human.</p>
            <p className="mt-3 text-muted-foreground">Three questions help identify where the handoff should happen:</p>
            <p className="mt-3 text-muted-foreground"><b>Does success depend on pattern-matching or judgment?</b> Pattern-matching problems suit AI execution. Judgment problems can still benefit from AI as preparation: surfacing precedents, stress-testing logic, playing devil's advocate. But the decision itself stays human.</p>
            <p className="mt-3 text-muted-foreground"><b>Is the outcome transactional or relational?</b> Transactional outcomes with clear success criteria suit AI execution. Relational outcomes require human presence. AI can help prepare: research before a negotiation, briefing materials before a client meeting, talking points before a difficult conversation. The relationship itself cannot be delegated.</p>
            <p className="mt-3 text-muted-foreground"><b>Does quality matter, or is 'good enough' fine?</b> When mistakes carry consequences, when recipients will notice and care, or when the output represents the organisation's judgment, AI should not produce the final version. But it can accelerate the path there: generating options to react to, identifying gaps in your thinking, drafting something to pull apart and rebuild.</p>
            <p className="mt-3 text-muted-foreground">The question is not whether to use AI. It is where AI stops and human judgment begins.</p>
          </ArticleSection>

          <ArticleSection id="strategy" title="What disciplined AI strategy looks like" className="py-4 md:py-4">
            <p className="text-muted-foreground">The companies generating real value from AI are not deploying it everywhere. They are deploying it in the right places, with clear boundaries.</p>
            <p className="mt-3 text-muted-foreground">McKinsey's research shows AI high performers are 3x more likely to pursue transformative change in targeted areas rather than incremental efficiency gains across the board. They redesign workflows around AI rather than bolting AI onto existing processes. They set growth and innovation goals rather than treating AI purely as a cost-reduction tool.</p>
            <p className="mt-3 text-muted-foreground">It is clear that discipline about where and how to deploy matters more than breadth of deployment.</p>
            <p className="mt-3 text-muted-foreground">A strong AI strategy defines where AI executes, where it supports, and where it stops. Vendors will not help you draw these lines. Their incentive is to expand scope, not define limits.</p>
            <p className="mt-3 text-muted-foreground">At Sena Strategy, we help boards make these distinctions. The companies that get AI right are not the ones that said yes to everything. They are the ones that knew where to stop.</p>
          </ArticleSection>

          <ArticleSection id="sources" title="Sources" className="mt-0 mb-0 py-4">
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><a className="underline" href="https://media-publications.bcg.com/The-Widening-AI-Value-Gap-Sept-2025.pdf" target="_blank" rel="noreferrer">BCG AI value gap analysis (2025)</a></li>
              <li><a className="underline" href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noreferrer">McKinsey State of AI report (2025)</a></li>
              <li><a className="underline" href="https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025" target="_blank" rel="noreferrer">Gartner GenAI project abandonment forecast</a></li>
              <li><a className="underline" href="https://www.rand.org/pubs/research_reports/RRA2680-1.html" target="_blank" rel="noreferrer">RAND AI project failure rates (2024)</a></li>
              <li><a className="underline" href="https://workos.com/blog/why-most-enterprise-ai-projects-fail-patterns-that-work" target="_blank" rel="noreferrer">S&P Global AI abandonment trends</a> (Referenced in WorkOS enterprise AI analysis)</li>
              <li><a className="underline" href="https://www.informatica.com/blogs/the-surprising-reason-most-ai-projects-fail-and-how-to-avoid-it-at-your-enterprise.html" target="_blank" rel="noreferrer">Informatica CDO Survey on AI obstacles (2025)</a></li>
              <li>Zillow iBuying collapse: <a className="underline" href="https://edition.cnn.com/2021/11/09/tech/zillow-ibuying-home-zestimate" target="_blank" rel="noreferrer">CNN Business analysis</a> and <a className="underline" href="https://www.gsb.stanford.edu/insights/flip-flop-why-zillows-algorithmic-home-buying-venture-imploded" target="_blank" rel="noreferrer">Stanford GSB research</a></li>
              <li><a className="underline" href="https://www.koinsights.com/the-authenticity-premium-why-consumers-are-rejecting-ai-generated-content/" target="_blank" rel="noreferrer">McDonald's ad backlash</a></li>
            </ul>
          </ArticleSection>

          <div>
            {(() => {
              const meta = insightsMetadata.find((i) => i.id === 'ai-limitations');
              if (meta && meta.date) {
                return <div className="text-sm text-muted-foreground mt-1"><i>Published: {meta.date}</i></div>;
              }
              return null;
            })()}
          </div>

          <Card className="mt-2 p-6 bg-card">
            <div className="flex items-center gap-4">
              <img src={christy} alt="Christy Chan" className="h-16 w-16 rounded-full object-cover" />
              <div>
                <div className="font-semibold">About the author</div>
                <div className="text-s font-semibold mt-2">Christy Chan</div>
                <div className="text-sm text-muted-foreground">Founding Consultant</div>
                <div className="text-sm text-muted-foreground mt-2">A former Bain consultant with a background in computer engineering, Christy helps boards build the technical fluency and strategic clarity needed to lead on AI. She has advised global organisations on generative AI strategic planning and cybersecurity transformation, among other projects.</div>
              </div>
            </div>
          </Card>

        </article>
      </ArticleContainer>
    </main>
  );
};

export default AILimitations;
