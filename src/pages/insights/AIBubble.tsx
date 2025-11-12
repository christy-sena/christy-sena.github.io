import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { christy } from "@/assets/profile";
import { ArticleContainer } from '@/components/article/ArticleContainer';
import { ArticleHeader } from '@/components/article/ArticleHeader';
import { ArticleSection } from '@/components/article/ArticleSection';
import { useArticleScroll } from '@/hooks/use-article-scroll';
import { useEffect } from 'react';
import insightsMetadata from '@/data/insightsMetadata';

const AIBubble = () => {
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
    const articleTitle = 'Are we in an AI bubble?';
    const articleDesc = 'An assessment of hype versus fundamentals: investment trends, technical progress, and where economic value is being created or overpromised in AI today.';

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

    const canonical = upsertLink('canonical', window.location.href.split('#')[0] + '#/insights/ai-bubble');

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
    document.title = "Are we in an AI bubble? — Sena Strategy";
    return () => {
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <ArticleHeader
        title="Are we in an AI bubble? A reality check for business leaders"
        subtitle="Assessing hype versus fundamentals through technology adoption, financial dynamics, and what remains when bubbles burst."
        progress={readingProgress}
        onNavClick={scrollToSection}
        navItems={[
          { label: 'Introduction', id: 'introduction' },
          { label: 'Technology adoption', id: 'force1' },
          { label: 'Financial dynamics', id: 'force2' },
          { label: 'Residual infrastructure', id: 'force3' },
          { label: 'What to monitor', id: 'monitor' },
          { label: 'Bottom line', id: 'bottomline' },
        ]}
      />

      <ArticleContainer className="max-w-4xl prose prose-lg mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-serif font-semibold text-primary">Are we in an AI bubble? A reality check for business leaders</h1>
            <p className="text-lg text-muted-foreground mt-3">Assessing hype versus fundamentals through technology adoption, financial dynamics, and what remains when bubbles burst.</p>


            <div className="mt-6 flex items-center gap-4">
              <img src={christy} alt="Author" className="h-12 w-12 rounded-full object-cover" />
              <div>

                <div className="text-s font-semibold">Christy Chan</div>
                <div className="text-sm text-muted-foreground">Founding Consultant - Sena Strategy</div>

              </div>
            </div>

            <div className="mt-6 p-4 bg-card border rounded-sm border-l-4 border-primary">
              <div className="font-semibold">In brief</div>
              <ul className="mt-2 space-y-2 list-none">
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">-</span><span><b>Three forces are operating simultaneously.</b> The technology adoption curve follows its own trajectory regardless of financial markets. Financial bubbles inflate and deflate based on valuation dynamics. Residual infrastructure remains after market corrections, becoming the foundation for the next cycle.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">-</span><span><b>These forces operate on different timelines.</b> Technology adoption takes 10-20 years to mature. Financial bubbles peak and burst within 3-7 years. Residual assets depreciate and get refinanced over 5-15 years.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">-</span><span><b>We are in a bubble by financial metrics while experiencing genuine technological progress.</b> The critical question is whether your organisation positions for value creation across all three dynamics, not just one.</span></li>
              </ul>
            </div>
          </header>

          <ArticleSection id="introduction" title="Introduction" className="py-4 md:py-4">
            <p className="text-muted-foreground">We are witnessing classic bubble dynamics. AI valuations have detached from fundamentals, tech giants are deploying hundreds of billions in infrastructure spending, and market sentiment mirrors 1999's dot-com fever. OpenAI's $500 billion valuation despite burning $8 billion annually exemplifies the disconnect.</p>
            <p className="mt-3 text-muted-foreground">Yet AI is also delivering measurable value. Enterprise adoption rose from 55% in 2023 to 75% in 2024. Companies report 3.7x average returns, with productivity gains of 10-55% in customer service and 26-56% faster software development. Data centers reach full utilisation immediately upon opening.</p>
            <p className="mt-3 text-muted-foreground">The complexity emerges because three distinct forces are operating simultaneously, each on different timelines, affecting different stakeholders differently. Most analyses collapse these forces together, creating confusion. Understanding which force drives your specific decisions determines whether your AI strategy creates value or destroys it.</p>
            <p className="mt-3 text-muted-foreground">At Sena Strategy, we help boards separate these dynamics to make clear-headed investment decisions regardless of market sentiment.</p>
          </ArticleSection>

          <ArticleSection id="force1" title="Force 1: The Technology Adoption Curve" className="py-4 md:py-4">
            <p className="text-muted-foreground"><b>Technology adoption follows predictable patterns, largely independent of financial market dynamics.</b></p>
            <p className="mt-2 text-muted-foreground">AI capabilities expand at measurable rates. The scope of tasks AI can perform doubles approximately every seven months. Enterprise adoption validates genuine demand—AI usage rose from 55% in 2023 to 75% in 2024, with companies reporting 3.7x average returns.</p>
            <p className="mt-2 text-muted-foreground">Real economic value concentrates in four areas capturing 75% of generative AI's current impact: customer operations, marketing and sales, software engineering, and research and development. Productivity gains are measurable: 10-55% improvements in customer service, 26-56% faster software development, 40% speed increases in professional writing.</p>
            <p className="mt-2 text-muted-foreground">Yet implementation barriers are real. Fewer than 30% of AI pilot projects will scale to production in the next six months. Large enterprise adoption among companies with over 250 employees dropped from nearly 14% in June to under 12% in August.</p>
            <p className="mt-2 text-muted-foreground">The technology curve moves through predictable phases: hype peak, trough of disillusionment, slope of enlightenment, plateau of productivity. We're transitioning from peak hype toward the trough. This is normal, not catastrophic. The underlying technology continues advancing whether or not investors remain excited.</p>
          </ArticleSection>

          <ArticleSection id="force2" title="Force 2: Financial Bubble Dynamics" className="py-4 md:py-4">
            <p className="text-muted-foreground"><b>Financial markets operate on different timelines than technology adoption, creating periods where valuations disconnect from fundamentals.</b></p>
            <p className="mt-2 text-muted-foreground">Global AI investment reached $252 billion in 2024, representing thirteen-fold growth since 2014. The eight largest hyperscalers will spend $371 billion on AI infrastructure in 2025 alone. Meta has committed $600 billion through 2028. OpenAI's valuation jumped from $29 billion in early 2023 to $500 billion by August 2025.</p>
            <p className="mt-2 text-muted-foreground">The startup ecosystem shows similar excess. Over 1,300 AI startups carry valuations exceeding $100 million, including 498 unicorns. This represents classic bubble indicators: rapid price appreciation, investment justified by transformative potential rather than current profitability, valuations requiring implausible growth rates.</p>
            <p className="mt-2 text-muted-foreground">The concentration of spending creates systemic risk. These companies trade with each other—OpenAI buying Nvidia chips, Microsoft providing OpenAI's cloud infrastructure—creating circular capital flows that ultimately require end-customer revenue to sustain.</p>
            <p className="mt-2 text-muted-foreground">Funding quality is deteriorating. Morgan Stanley identifies a $1.5 trillion gap between what hyperscalers can fund internally and total infrastructure needs through 2028. This gap requires private credit and securitised finance with weaker underwriting standards. CoreWeave exemplifies the risk: $8 billion in debt, technical default status, revenue concentrated in two customers, economics dependent on renting rapidly depreciating GPUs.</p>
          </ArticleSection>

          <ArticleSection id="force3" title="Force 3: Residual Technology and Infrastructure" className="py-4 md:py-4">
            <p className="text-muted-foreground"><b>When bubbles burst, something always remains. Understanding what survives determines the next cycle's starting conditions.</b></p>
            <p className="mt-2 text-muted-foreground">The dot-com bubble burst dramatically in 2000, wiping out trillions in market value. But the internet infrastructure remained: fiber optic networks, data centers, software platforms, trained technical talent. Companies like Amazon and Google built trillion-dollar enterprises on this foundation, acquiring assets at deeply discounted prices during the bust.</p>
            <p className="mt-2 text-muted-foreground"><b>AI's residual infrastructure has unique characteristics:</b></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><b>Physical assets depreciate rapidly.</b> GPUs have a three-year useful life for frontier applications before being relegated to lower-intensity tasks. Railway tracks lasted decades. Telecom fiber from the 1990s carries traffic today. AI infrastructure must generate returns within a handful of years, creating compressed payback windows that will surface problems quickly.</li>
              <li><b>Intellectual property persists indefinitely.</b> Trained models, datasets, and architectural innovations don't depreciate. If companies face financial trouble, their model weights and training methodologies remain valuable. This IP gets acquired, open-sourced, or refinanced—it doesn't disappear.</li>
              <li><b>Talent remains in the market.</b> AI researchers, engineers, and product specialists don't vanish when startups fail. They join other companies, carrying expertise forward.</li>
              <li><b>Infrastructure becomes cheaper.</b> When excess capacity floods the market, prices drop dramatically. During the dot-com bust, data center space and bandwidth costs plummeted, enabling startups to build services that would have been economically impossible at peak bubble prices.</li>
              <li><b>What gets refinanced:</b> Hyperscalers like Microsoft, Amazon, and Google fund AI buildout from operating cash flow, giving them staying power. Debt-heavy operators will either refinance at worse terms, get acquired, or enter bankruptcy. Their physical assets get sold to stronger operators at discounts.</li>
            </ul>
          </ArticleSection>
            <ArticleSection id="diverge" title="When Financial and Technology Cycles Diverge" className="py-4 md:py-4">
            <p className="text-muted-foreground"><b>These three forces can, and often do, operate independently.</b></p>

            <p className="mt-2 text-muted-foreground">History shows technology cycles persist through financial disruptions. The internet continued advancing through the dot-com crash. Cloud computing grew through the 2008 financial crisis. Technology adoption curves don't respect financial market timelines.</p>
            <p className="mt-2 text-muted-foreground"><i>Scenario: The bubble deflates but technology remains</i></p>
            <p className="mt-2 text-muted-foreground">Imagine hyperscalers cut AI capex by 50%. Public market AI valuations drop 60%. Leading AI companies face down rounds or acquisitions. What happens to an enterprise deploying AI?</p>
            <p className="mt-2 text-muted-foreground">Compute costs drop as excess capacity floods the market. Distressed companies open-source models to maintain relevance. Engineers from failed startups join enterprises, improving implementation quality. Data centers get acquired by operators with stronger balance sheets, maintaining supply. Lower costs enable mid-market companies to deploy AI economically.</p>
            <p className="mt-2 text-muted-foreground">The technology curve continues—potentially at lower cost. Financial pain concentrates among investors and highly leveraged operators, not end users.</p>
            </ArticleSection>
            <ArticleSection id="monitor" title="What to Monitor" className="py-4 md:py-4">
            <p className="mt-2 text-muted-foreground">Watch for divergence between forces. Healthy innovation shows all three aligned. Danger emerges when they disconnect.</p>

            <div className="mt-3">
              <div className="font-semibold">Green signals:</div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
              <li>Sustained enterprise adoption growth with high deployment success rates</li>
              <li>Revenue growth closing the gap with capital spending</li>
              <li>Hyperscalers funding capex from operating cash flow</li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="font-semibold">Red signals:</div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
              <li>Adoption stalling while valuations rise (Forces 1 and 2 diverging)</li>
              <li>Increasing reliance on debt without revenue growth (Forces 2 and 3 misaligned)</li>
              <li>Technical progress slowing while spending accelerates</li>
              <li>Major hyperscalers cutting capex by &gt;20% simultaneously</li>
              <li>Enterprise pilots failing to reach production at scale</li>
              </ul>
            </div>

            <div className="mt-4">
              <div className="font-semibold">Critical red flags by force:</div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
              <li><strong>Technology Adoption:</strong> Sustained decline in enterprise adoption, pilot programs consistently failing to reach production</li>
              <li><strong>Financial Bubble:</strong> Leading AI companies unable to demonstrate paths to profitability despite scale, major hyperscaler capital expenditure pullbacks, infrastructure increasingly funded by debt rather than cash flow</li>
              <li><strong>Residual Infrastructure:</strong> Secondary markets for AI hardware collapsing, widespread underutilisation of data centers, asset values falling below outstanding debt</li>
              </ul>
            </div>
          </ArticleSection>
        
          <ArticleSection id="bottomline" title="The Bottom Line for Board Leaders" className="py-4 md:py-4">
            <p className="mt-2 text-muted-foreground">We are in a bubble by conventional financial metrics while experiencing genuine technological progress. Both statements are true. Your strategic challenge is ensuring your organisation captures AI's value while managing bubble risk.</p>

            <div className="mt-3">
              <div className="font-semibold">What boards should do:</div>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 mt-2">
              <li><strong>Distinguish which force drives each decision. </strong>Technology adoption decisions (building AI capabilities to solve business problems) deserve aggressive investment. Financial bubble considerations (vendor selection, capital deployment timing) require caution and optionality.</li>
              <li><strong>Demand demonstrated value, not potential. </strong>Measure actual productivity improvements and cost reductions, not projected benefits.</li>
              <li><strong>Focus on implementation capability, not technology access. </strong>Only 30% of pilots reach production. Integration complexity, change management, and organisational readiness are the constraints, not model availability.</li>
              <li><strong>Maintain strategic flexibility. </strong>Avoid lock-in to single vendors or proprietary platforms. The competitive landscape will shift dramatically as markets correct.</li>
              </ol>
            </div>

            <p className="mt-4 text-muted-foreground">The dot-com parallel matters. The bubble burst in 2000, wiping out trillions. But the internet transformed business—just slower than projected. Companies that built disciplined strategies during the bust created more value than those that overpaid during the boom. Amazon, Google, and Salesforce focused on fundamentals while competitors chased valuations. The pattern will repeat.</p>

            <p className="mt-3 text-muted-foreground">At Sena Strategy, we help boards build AI strategies resilient across all three forces, grounding decisions in where technology creates measurable value today while managing financial and infrastructure risks.</p>
            </ArticleSection>
            <ArticleSection id="references" title="References & Further Reading" className="mt-0 mb-0 py-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><a className="underline" href="https://www.cnbc.com/2025/10/21/are-we-in-an-ai-bubble.html" target="_blank" rel="noreferrer">CNBC — Are we in an AI bubble?</a></li>
                <li><a className="underline" href="https://fortune.com/2025/09/28/ai-dot-com-bubble-parallels-history-explained-companies-revenue-infrastructure/" target="_blank" rel="noreferrer">Fortune — AI dot-com bubble parallels</a></li>
                <li><a className="underline" href="https://sacra.com/c/openai/" target="_blank" rel="noreferrer">OpenAI valuation trajectory (Sacra)</a></li>
                <li><a className="underline" href="https://www.deloitte.com/us/en/insights/industry/power-and-utilities/data-center-infrastructure-artificial-intelligence.html" target="_blank" rel="noreferrer">Deloitte — AI infrastructure analysis</a></li>
                <li><a className="underline" href="https://news.microsoft.com/en-xm/2025/01/14/generative-ai-delivering-substantial-roi-to-businesses-integrating-the-technology-across-operations-microsoft-sponsored-idc-report/" target="_blank" rel="noreferrer">Microsoft / IDC — Generative AI ROI report</a></li>
                <li><a className="underline" href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" target="_blank" rel="noreferrer">McKinsey — Economic potential of generative AI</a></li>
                <li><a className="underline" href="https://mitsloan.mit.edu/ideas-made-to-matter/a-new-look-economics-ai" target="_blank" rel="noreferrer">MIT Sloan — A new look at the economics of AI (Acemoglu)</a></li>
                <li><a className="underline" href="https://www.pragmaticcoders.com/blog/gartner-ai-hype-cycle" target="_blank" rel="noreferrer">Gartner — AI adoption / hype cycle (summary)</a></li>
                <li><a className="underline" href="https://futurism.com/ai-hype-automation-decline" target="_blank" rel="noreferrer">Census Bureau / Futurism — Enterprise adoption data</a></li>
                <li><a className="underline" href="https://www.exponentialview.co/p/is-ai-a-bubble" target="_blank" rel="noreferrer">Azeem Azhar — Is AI a bubble?</a></li>
                <li><a className="underline" href="https://www.morganstanley.com/insights/podcasts/thoughts-on-the-market/credit-markets-ai-financing-gap-vishy-tirupattur-vishwas-patkar" target="_blank" rel="noreferrer">Morgan Stanley — AI financing analysis</a></li>
              </ul>
            </ArticleSection>

            <div>
              {(() => {
                const meta = insightsMetadata.find((i) => i.id === 'ai-bubble');
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
                <div className="text-sm text-muted-foreground mt-2">A former Bain consultant with a background in computer engineering from Imperial College, Christy helps boards build the technical fluency and strategic clarity needed to lead on AI. She has advised global organisations on generative AI strategic planning and cybersecurity transformation, among other projects.</div>
              </div>
            </div>
          </Card>

        </article>
      </ArticleContainer>
    </main>
  );
};

export default AIBubble;
