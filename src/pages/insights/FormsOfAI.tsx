import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { christy } from "@/assets/profile";
import { ArticleContainer } from '@/components/article/ArticleContainer';
import { ArticleHeader } from '@/components/article/ArticleHeader';
import { ArticleSection } from '@/components/article/ArticleSection';
import { useArticleScroll } from '@/hooks/use-article-scroll';
import { useEffect } from 'react';

const FormsOfAI = () => {
  const { readingProgress, scrollToSection } = useArticleScroll();

  // Ensure the article opens at the top when navigated to
  useEffect(() => {
    try {
      // If there's an intentional target stored (goToHomeAndScroll), don't override it
      if (!sessionStorage.getItem('sena:scrollTo')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    } catch (e) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  // Set page title and Open Graph / Twitter meta for this article while mounted.
  useEffect(() => {
    const articleTitle = 'The strategic taxonomy of AI: from rules to reasoning';
    const articleDesc = "The strategic taxonomy of AI: which forms of AI deliver value, their governance and deployment considerations.";

    const prevTitle = document.title;

    // helper to upsert meta tags and remember previous content
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

    const canonical = upsertLink('canonical', window.location.href.split('#')[0] + '#/insights/forms-of-ai');

    return () => {
      // restore title
      document.title = prevTitle;

      // restore metas
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
    // Apply global scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      html::-webkit-scrollbar { width: 12px; }
      html::-webkit-scrollbar-track { background: transparent; }
      html::-webkit-scrollbar-thumb { background: #1E1E1E; border-radius: 9999px; border: 3px solid rgba(0,0,0,0); background-clip: padding-box; }
      * { scrollbar-color: #1E1E1E transparent; scrollbar-width: thin; }
    `;
    document.head.appendChild(style);
    document.title = "The strategic taxonomy of AI — Sena Strategy";
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <ArticleHeader
        title="The strategic taxonomy of AI: from rules to reasoning"
        subtitle="Not all AI is the same: Which form delivers value the right way?"
        progress={readingProgress}
        onNavClick={scrollToSection}
        navItems={[
          { label: 'Introduction', id: 'overview' },
          { label: 'Types of AI', id: 'types-of-ai' },
          { label: 'Deployment', id: 'deploy' },
          { label: 'References', id: 'references' }
        ]}
      />
      
      <ArticleContainer className="max-w-4xl prose prose-lg mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-serif font-semibold text-primary">The strategic taxonomy of AI: From rules to reasoning</h1>
            <p className="text-lg text-muted-foreground mt-3">Not all AI is the same: Which form delivers value the right way?</p>

            <div className="mt-6 flex items-center gap-4">
              <img src={christy} alt="Author" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="text-s font-semibold">Christy Chan</div>
                <div className="text-sm text-muted-foreground">Founding Consultant - Sena Strategy</div>
              </div>
            </div>

            {/* In brief / Summary (hyphenated bullets - keep the hardcoded look) */}
            <div className="mt-6 p-4 bg-card border rounded-sm border-l-4 border-primary">
              <div className="font-semibold">In brief</div>
              <ul className="mt-2 space-y-2 list-none">
                <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-semibold">-</span><span>AI encompasses five distinct forms of intelligence, each with different governance requirements, cost structures, and value propositions.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-semibold">-</span>
                  <span>
                    <button onClick={() => scrollToSection('symbolic-ai')} className="underline text hover:text-[#004225] font-medium">Symbolic AI</button> provides complete transparency through rule-based logic, making it essential for regulated environments where every decision requires an audit trail.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-semibold">-</span>
                  <span>
                    <button onClick={() => scrollToSection('machine-learning')} className="underline text hover:text-[#004225] font-medium">Machine learning</button> and <button onClick={() => scrollToSection('deep-learning')} className="underline text hover:text-[#004225] font-medium">deep learning</button> excel at pattern recognition: the former optimises structured processes at scale, the latter transforms unstructured data like images and text into actionable insights.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-semibold">-</span>
                  <span>
                    <button onClick={() => scrollToSection('generative-ai')} className="underline text hover:text-[#004225] font-medium">Generative AI</button> accelerates content creation and knowledge work, reducing time-to-first-draft from hours to minutes, but requires human oversight and refinement.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-semibold">-</span>
                  <span>
                    <button onClick={() => scrollToSection('agentic-ai')} className="underline text hover:text-[#004225] font-medium">Agentic AI</button> represents a fundamental shift from task automation to workflow orchestration, autonomously managing multi-step processes that previously required continuous human coordination.
                  </span>
                </li>
              </ul>
            </div>
          </header>

          <ArticleSection id="overview" title="Introduction" className="py-4 md:py-4">
            <p className="text-muted-foreground">AI now spans five distinct forms of intelligence, from systems that follow rules to systems that reason and act. Understanding these isn't academic; it's essential for deciding where automation, creativity, and governance deliver the greatest value.</p>
            <p className="mt-3 text-muted-foreground">At Sena Strategy, we frame AI's evolution as a progression in decision‑making: from codified expertise, to pattern recognition, to autonomous orchestration. Each step changes what leaders can delegate to machines and what must remain human.</p>
          </ArticleSection>

          <ArticleSection id="types-of-ai" title="Types of AI" className="py-4 md:py-4">

            <h3 id="symbolic-ai" className="mt-6 text-xl font-semibold">Symbolic AI: Codified expertise</h3>
            <p className="mt-2 text-muted-foreground">Symbolic AI encodes human expertise as logical rules: if these conditions exist, then take this action. These systems dominated early AI precisely because they mirror how we naturally structure problems. Rather than learning from data, they execute explicit instructions programmed by domain experts, making every decision traceable to specific rules. Massachusetts General Hospital’s DXplain system, developed in 1984 and still operational today, helped one teaching hospital save &gt;$1000 in charges per admission in diagnostically challenging cases.</p>

            <p className="mt-2 text-muted-foreground"><strong>Symbolic AI is strongest when</strong>: Regulatory scrutiny demands full audit trails, operational risk requires complete transparency, or mistakes carry severe consequences.</p>

            <p className="mt-2 text-muted-foreground"><strong>Limitations</strong>: Fragile under real-world complexity. Only addresses problems you can anticipate and encode.</p>

            <p className="mt-2 text-muted-foreground"><strong>Best suited to</strong>: Regulated industries, safety-critical systems, compliance functions where explainability outweighs flexibility.</p>

            <h3 id="machine-learning" className="mt-6 text-xl font-semibold">Machine Learning: Predictive intelligence at scale</h3>
            <p className="mt-2 text-muted-foreground">Machine learning shifted AI from explicit programming to learning from examples. Rather than encoding rules, these systems identify patterns in data and make predictions based on statistical relationships. This fundamental change allows systems to handle complexity that would overwhelm rule-based approaches. Two approaches dominate: supervised learning trains on labelled data to classify and predict, while unsupervised learning discovers hidden patterns in unlabelled datasets for segmentation and anomaly detection. The systems improve as they process more data, continuously refining their understanding of the patterns that drive outcomes. In fraud detection, PayPal reduced transaction losses from 0.18% in 2018 to 0.12% in 2020 (~ over $½Bn) using machine learning.</p>

            <p className="mt-2 text-muted-foreground"><strong>Machine learning is strongest when</strong>: Structured data already exists, historical patterns predict future outcomes, or volume overwhelms human processing capacity.</p>

            <p className="mt-2 text-muted-foreground"><strong>Limitations</strong>: Reduced interpretability. Models generate accurate predictions without always explaining reasoning in human terms.</p>

            <p className="mt-2 text-muted-foreground"><strong>Best suited to</strong>: Fraud detection, demand forecasting, risk assessment, anomaly detection in operations where pattern recognition drives measurable efficiency gains.</p>

            <h3 id="deep-learning" className="mt-6 text-xl font-semibold">Deep Learning: Perception-based transformation</h3>
            <p className="mt-2 text-muted-foreground">Deep learning employs layered neural networks inspired by the structure of the brain, where each layer generates increasingly abstract representations of the input data. Early layers detect simple features like edges or colours, while deeper layers recognise complex patterns like faces or objects. This architecture enables systems to process unstructured data at scale, converting images, audio, and text into actionable insights. Where traditional machine learning required humans to specify which features mattered, deep learning discovers these features through training. Intel achieved 30% improvement in semiconductor output through deep learning for early defect detection in chip manufacturing, significantly reducing waste and production costs.</p>

            <p className="mt-2 text-muted-foreground"><strong>Deep learning is strongest when</strong>: Abundant unstructured data exists (e.g. images, audio), human perception represents a bottleneck, or scale justifies substantial computing investment.</p>

            <p className="mt-2 text-muted-foreground"><strong>Limitations</strong>: Requires significant data infrastructure and computing resources. Resource-intensive to train and deploy.</p>

            <p className="mt-2 text-muted-foreground"><strong>Best suited to</strong>: Quality control, medical imaging, speech recognition, natural language processing where large-scale pattern recognition creates competitive differentiation.</p>

            <h3 id="generative-ai" className="mt-6 text-xl font-semibold">Generative AI: From pattern recognition to content creation</h3>
            <p className="mt-2 text-muted-foreground">While previous approaches focused on analysis and prediction, generative AI creates new content. These models learn patterns from training data, then generate novel outputs that maintain similar characteristics. Transformer architectures, which revolutionised this field, understand context and relationships in sequences, capturing not just language structure but knowledge and reasoning patterns.</p>

            <p className="mt-2 text-muted-foreground">Critically, generative AI's breakthrough came from its ability to process and generate natural language. This made AI accessible in an unprecedented way: anyone who can describe what they want can now harness AI capabilities without coding or technical expertise. The technology excels at starting points that professionals refine, augmenting human capabilities rather than replacing them. However, it remains fundamentally reactive, responding to prompts and creating content based on patterns it has learned rather than pursuing objectives independently. In professional services, BCG improved below average consultants’ performance in creative tasks by 43% using GPT-4, with employees reinvesting approximately 70% of time saved into higher-value activities.</p>

            <p className="mt-2 text-muted-foreground"><strong>Generative AI is strongest when</strong>: Content creation represents a bottleneck, speed-to-market drives competitive advantage, or rapid iteration unlocks value.</p>

            <p className="mt-2 text-muted-foreground"><strong>Limitations</strong>: Fundamentally reactive. Responds to prompts rather than pursuing objectives autonomously. Requires human refinement.</p>

            <p className="mt-2 text-muted-foreground"><strong>Best suited to</strong>: Professional services, marketing, software development, research where accelerating first-draft production creates measurable time savings.</p>

            <h3 id="agentic-ai" className="mt-6 text-xl font-semibold">Agentic AI: Autonomous orchestration</h3>
            <p className="mt-2 text-muted-foreground">Whereas generative AI creates content reactively, agentic systems manage entire workflows proactively. They pursue goals autonomously, making decisions, taking actions, and adapting strategies based on results. These systems break complex objectives into executable steps, use tools and APIs to interact with external systems, monitor progress, and adjust approaches when circumstances change. This represents a fundamental shift from assistance to autonomous execution. Agentic AI maintains persistent focus on objectives over extended timeframes, orchestrating multiple steps without continuous human direction. Fiserv, a leading global FinTech, used agentic AI to streamline merchant category code determination and validation, saving 12,000 hours through these automations.</p>

            <p className="mt-2 text-muted-foreground"><strong>Agentic AI is strongest when</strong>: Complex workflows require coordination across systems, processes demand persistent execution over time, or manual orchestration creates bottlenecks.</p>

            <p className="mt-2 text-muted-foreground"><strong>Limitations</strong>: Requires governance frameworks and human oversight. Autonomous execution may contain errors requiring review.</p>

            <p className="mt-2 text-muted-foreground"><strong>Best suited to</strong>: Document processing, customer onboarding, workflow automation where end-to-end orchestration creates step-change improvements in capacity or speed.</p>
          </ArticleSection>

          <ArticleSection id="deploy" title="How should you deploy these?" className="py-4 md:py-4">
            <p className="text-muted-foreground">Consider how leading organisations now operate: A single fraud analyst who once reviewed 50 transactions daily now oversees systems processing 50,000. Radiologists who spent hours reviewing scans now focus on complex diagnostic decisions while AI handles initial screening. Customer service teams that managed 100 conversations now orchestrate 10,000, with AI handling routine inquiries and escalating nuanced cases to humans.</p>
            <p className="text-muted-foreground">This isn't about replacing people - it's about fundamentally expanding what's possible. These approaches aren't mutually exclusive. Leading organisations orchestrate them strategically, recognising that each carries distinct governance, cost, and value profiles.</p>

            <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Symbolic AI</strong>: remains valuable where transparency and explicit reasoning matter, e.g. regulatory compliance, safety-critical systems, or domains with clear rules.</li>
              <li><strong>Machine learning:</strong> excels at classification and prediction tasks where patterns exist in structured data, e.g. forecasting, anomaly detection, or recommendation systems.</li>
              <li><strong>Deep learning:</strong> suits perception problems with abundant unstructured data, e.g. image analysis, speech processing, or natural language understanding at scale.</li>
              <li><strong>Generative AI:</strong> accelerates content creation and knowledge work, e.g. writing, summarising, coding, or creative exploration.</li>
              <li><strong>Agentic AI:</strong> targets complex workflows requiring persistence, tool use, and autonomous decision making, orchestrating multi-step processes with minimal human intervention.</li>
            </ul>

            <p className="mt-4 text-muted-foreground">Understanding these distinctions cuts through vendor marketing to focus on measurable enterprise value. At Sena Strategy, we help boards and investors determine which form of AI aligns with their business model and risk appetite, and design adoption paths that convert technology capability into measurable results.</p>
          </ArticleSection>

          <ArticleSection id="references" title="References & Further Reading" className="mt-0 mb-0 py-4">
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><a className="underline" href="https://www.sciencedirect.com/science/article/abs/pii/S1386505610001620" target="_blank" rel="noreferrer">MassGen DXplain</a></li>
              <li><a className="underline" href="https://emerj.com/artificial-intelligence-at-paypal/" target="_blank" rel="noreferrer">PayPal fraud detection</a></li>
              <li><a className="underline" href="https://digitaldefynd.com/IQ/ai-use-in-manufacturing-case-studies/" target="_blank" rel="noreferrer">Intel semiconductor defect detection</a></li>
              <li><a className="underline" href="https://www.bcg.com/publications/2023/how-people-create-and-destroy-value-with-gen-ai" target="_blank" rel="noreferrer">BCG Gen AI performance improvement</a></li>
              <li><a className="underline" href="https://diginomica.com/uipaths-agentic-automation-strategy-moving-enterprise-ai-beyond-productivity-plateau" target="_blank" rel="noreferrer">Fiserv agentic payment automation</a></li>
            </ul>
          </ArticleSection>

          {/* About the author card (keep our styled card) */}
          <Card className="mt-0 p-6 bg-card">
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

export default FormsOfAI;
