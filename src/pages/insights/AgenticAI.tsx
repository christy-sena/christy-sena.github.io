import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { christy } from "@/assets/profile";
import { ArticleContainer } from '@/components/article/ArticleContainer';
import { ArticleHeader } from '@/components/article/ArticleHeader';
import { ArticleSection } from '@/components/article/ArticleSection';
import { useArticleScroll } from '@/hooks/use-article-scroll';
import { useEffect } from 'react';
import insightsMetadata from '@/data/insightsMetadata';

const AgenticAI = () => {
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
    const articleTitle = 'Agentic AI: The next frontier for board-level attention';
    const articleDesc = 'When AI stops assisting and starts executing: the strategic shift from tools to autonomous systems.';

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

    const canonical = upsertLink('canonical', window.location.href.split('#')[0] + '#/insights/agentic-ai');

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
    document.title = "Agentic AI: The next frontier for board-level attention — Sena Strategy";
    return () => {
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <ArticleHeader
        title="Agentic AI: The next frontier for board-level attention"
        subtitle="When AI stops assisting and starts executing: the strategic shift from tools to autonomous systems."
        progress={readingProgress}
        onNavClick={scrollToSection}
        navItems={[
          { label: 'Introduction', id: 'introduction' },
          { label: 'Understanding agency', id: 'agency' },
          { label: 'Five pillars', id: 'pillars' },
          { label: 'When to use', id: 'when' },
          { label: 'Board concerns', id: 'boards' },
          { label: 'Practical approach', id: 'approach' },
          { label: 'Bottom line', id: 'bottomline' },
        ]}
      />

      <ArticleContainer className="max-w-4xl prose prose-lg mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-serif font-semibold text-primary">Agentic AI: The next frontier for board-level attention</h1>
            <p className="text-lg text-muted-foreground mt-3">When AI stops assisting and starts executing: the strategic shift from tools to autonomous systems.</p>

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
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span><b>Agentic AI represents a fundamental shift from AI-as-tool to AI-as-agent,</b> moving beyond content creation to autonomous workflow orchestration that restructures how organisations operate.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span><b>Strategic timing matters more than most boards appreciate.</b> Gartner forecasts 33% of enterprise software will embed agentic capabilities by 2028, up from &lt;1% in 2024. Unlike previous technology shifts that diffused gradually over years, agentic AI's ability to autonomously scale operations means competitive gaps could open in quarters, not years.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span><b>The value proposition differs from previous AI waves.</b> Where generative AI drives individual productivity, agentic AI enables operational transformation by removing entire layers of human coordination.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span><b>Risk profiles demand new governance frameworks.</b> Agentic systems can execute transactions and commit resources autonomously, requiring boundaries, monitoring mechanisms, and escalation protocols designed from the start.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">•</span><span><b>Board oversight matters now.</b> Organisations making strategic commitments to agentic capabilities in 2025 may establish operational advantages that become difficult to challenge.</span></li>
              </ul>
            </div>
          </header>

          <ArticleSection id="introduction" title="Introduction" className="py-4 md:py-4">
            <p className="text-muted-foreground">Technology cycles accelerate constantly, but agentic AI deserves serious attention. What makes this different is the speed at which it could create operational divergence between organisations that move strategically and those that delay.</p>
          </ArticleSection>

          <ArticleSection id="agency" title="Beyond generation: understanding agency" className="py-4 md:py-4">
            <p className="text-muted-foreground">Generative AI remains fundamentally reactive. Ask ChatGPT to write an email, it produces text. Request an image, it generates visuals. Each interaction begins and ends with a single exchange.</p>
            <p className="mt-3 text-muted-foreground">Agentic AI operates differently. These systems pursue goals autonomously over time, making decisions, taking actions, and adapting strategies based on results. Where generative AI creates content, agentic AI manages workflows. Where generative AI augments individual productivity, agentic AI automates entire processes.</p>
            <p className="mt-3 text-muted-foreground">The practical difference: A law firm using generative AI has associates draft contract clauses faster. The same firm deploying agentic AI sees systems monitor incoming contracts automatically, extract key terms, compare against firm standards, flag deviations, draft responses, route approvals, and track resolution with minimal human intervention.</p>
          </ArticleSection>

          <ArticleSection id="pillars" title="The five pillars of autonomous operation" className="py-4 md:py-4">
            <p className="text-muted-foreground">Agentic AI distinguishes itself through specific capabilities:</p>
            <div className="mt-3 space-y-4">
              <div>
                <div className="font-semibold">Goal interpretation and planning.</div>
                <p className="text-muted-foreground">These systems translate high-level objectives into executable action plans, planning dynamically based on context rather than following pre-written scripts.</p>
              </div>
              <div>
                <div className="font-semibold">Environmental awareness and adaptation.</div>
                <p className="text-muted-foreground">Agentic systems perceive changes (new data, altered conditions, unexpected obstacles) and modify their approach accordingly, handling variability that would break traditional automation.</p>
              </div>
              <div>
                <div className="font-semibold">Tool integration and execution.</div>
                <p className="text-muted-foreground">Agentic AI interacts with external systems through APIs, databases, and digital interfaces, eliminating the human bridges currently required between platforms.</p>
              </div>
              <div>
                <div className="font-semibold">Persistent memory and learning.</div>
                <p className="text-muted-foreground">Unlike generative AI, which treats each interaction independently, agentic systems maintain context across time, tracking progress and building on previous interactions.</p>
              </div>
              <div>
                <div className="font-semibold">Multi-agent coordination.</div>
                <p className="text-muted-foreground">Advanced architectures deploy multiple specialised agents that collaborate to solve complex problems.</p>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection id="when" title="Use agentic AI when" className="py-4 md:py-4">
            <p className="text-muted-foreground">Consider agentic AI for processes with these characteristics:</p>
            <div className="mt-3 space-y-3 text-muted-foreground">
              <p><b className="font-semibold">Complex, repetitive workflows spanning teams or systems.</b> Customer onboarding sequences, document processing pipelines, supply chain coordination, compliance workflows requiring data from multiple sources.</p>
              <p><b className="font-semibold">Persistent execution over time.</b> Processes requiring monitoring, follow-up, and iterative refinement across hours, days, or weeks without continuous human direction.</p>
              <p><b className="font-semibold">Flexibility and adaptation.</b> Environments where conditions change, exceptions occur, and rigid automation would break.</p>
              <p><b className="font-semibold">High coordination overhead.</b> When professionals spend substantial time coordinating workflows, tracking status, or managing handoffs between systems.</p>
            </div>
            <p className="mt-4 text-muted-foreground">The question for boards isn't whether to use agentic AI, but where it can replace or radically accelerate manual handoffs and decisions.</p>
          </ArticleSection>

          <ArticleSection id="boards" title="Why boards should care now" className="py-4 md:py-4">
            <p className="text-muted-foreground"><b>Market adoption is accelerating.</b> Gartner forecasts 33% of enterprise software will incorporate agentic capabilities by 2028, up from 1% in 2024. Microsoft's Copilot and Salesforce's Agentforce reflect vendor confidence that the technology has crossed viability thresholds.</p>
            <p className="mt-3 text-muted-foreground"><b>The value proposition differs fundamentally from previous technological waves.</b> Where generative AI makes individuals more productive, agentic AI removes entire layers of human coordination. Consider the impact: processes that previously required three people coordinating across two days could execute autonomously in hours.</p>
            <p className="mt-3 text-muted-foreground"><b>The competitive window is narrowing.</b> Unlike previous adoptions that diffused gradually, agentic AI's ability to autonomously scale operations creates potential for rapid competitive divergence. Organisations deploying agentic systems operate at digital speed while competitors manually orchestrate processes.</p>
            <p className="mt-3 text-muted-foreground"><b>Economic fundamentals make this strategic rather than experimental.</b> Labour cost inflation of 5-7% annual combined with margin pressure creates an operational leverage problem. Traditional responses (hiring freezes, efficiency programmes, process reengineering) deliver incremental improvement. Agentic AI offers something different: the ability to fundamentally decouple operational capacity from headcount growth.</p>
          </ArticleSection>

          <ArticleSection id="approach" title="A practical approach" className="py-4 md:py-4">
            <p className="text-muted-foreground"><b className="font-semibold">The technology remains nascent.</b> Early applications (software development assistance, customer service automation, business process optimisation) represent practical starting points, not the autonomous enterprise systems vendor marketing suggests.</p>
            <p className="mt-3 text-muted-foreground"><b className="font-semibold">At Sena Strategy, we help boards cut through vendor hype to focus on measurable enterprise value.</b> Our approach starts with building board-level fluency on the fundamental difference between AI that assists and AI that executes. Then we work with you to develop a strategic assessment: which 10-15 processes could benefit from agentic automation? We insist on specificity around workflows, current costs, cycle times, and what success looks like.</p>
            <p className="mt-3 text-muted-foreground"><b className="font-semibold">Before approving any pilots, verify governance frameworks are in place.</b> <b className="font-semibold">Essential elements include:</b></p>
            <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-2">
              <li>Clear definitions of which actions require human approval versus autonomous execution</li>
              <li>Real-time monitoring for anomalies and unexpected patterns</li>
              <li>Escalation paths for edge cases and situations outside operating parameters</li>
              <li>Metrics tracking end-to-end cycle time reduction and error rates versus human execution</li>
              <li>Measurement of hours reallocated to higher-value work, not just eliminated</li>
            </ul>
            <p className="mt-3 text-muted-foreground"><b className="font-semibold">Watch for vendor promises of full autonomy without oversight, vague "AI transformation" business cases without specific process targets, and deployments that skip governance development.</b> Support clearly scoped pilots with measurable workflows, governance frameworks designed before deployment, cross-functional teams including operations, IT, legal and risk, and phased approaches with defined stage gates.</p>
            <p className="mt-3 text-muted-foreground"><b className="font-semibold">Address workforce transition directly.</b> How will employees shift from performing tasks to overseeing systems? What happens to affected roles? How does this align with talent strategy?</p>
            <p className="mt-3 text-muted-foreground"><b className="font-semibold">Create board-level accountability.</b> Assign oversight responsibility for AI initiatives, whether within existing committees or as dedicated attention. Ensure regular reporting with substance, not just updates.</p>
          </ArticleSection>

          <ArticleSection id="bottomline" title="The bottom line for directors" className="py-4 md:py-4">
            <p className="text-muted-foreground">Agentic AI represents genuine discontinuous change. The shift from AI-as-tool to AI-as-agent changes how organisations structure operations, with implications for competitive dynamics.</p>
            <p className="mt-3 text-muted-foreground">This warrants active strategic engagement. Directors should ensure management has coherent perspectives on where agentic capabilities create value, disciplined approaches to experimentation, and appropriate governance for autonomous systems.</p>
            <p className="mt-3 text-muted-foreground">Organisations that successfully navigate this transition will likely be those whose boards pushed for strategic clarity, insisted on governance rigour, and supported measured risk-taking. The window for thoughtful positioning is open now but won't remain so indefinitely.</p>
            <p className="mt-3 text-muted-foreground"><b>Boards need strategic clarity before vendor selection, not afterwards.</b></p>
            <p className="mt-3 text-muted-foreground">At Sena Strategy, we address the specific challenge of moving from technology evaluation to strategic commitment: Where do autonomous agents create value that justifies new governance complexity? Which operational capabilities should remain human-led? What does responsible deployment look like when systems can act independently? We start by building board-level fluency on the distinction between AI that assists and AI that executes, then develop a strategic assessment identifying the processes where agentic automation delivers measurable value with acceptable risk. This means specific workflows, current cost baselines, cycle time targets, and governance frameworks designed from the start: <b>converting abstract AI potential into defensible P&L impact.</b></p>
          </ArticleSection>

          <ArticleSection id="references" title="Sources" className="mt-0 mb-0 py-4">
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><a className="underline" href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" target="_blank" rel="noreferrer">Gartner report</a></li>
              <li><a className="underline" href="https://www.harvey.ai/customers/a-and-o-shearman" target="_blank" rel="noreferrer">A&O Shearman contract review efficiency</a></li>
            </ul>
          </ArticleSection>

          <div>
            {(() => {
              const meta = insightsMetadata.find((i) => i.id === 'agentic-ai');
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

export default AgenticAI;