import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import insightsMetadata from '@/data/insightsMetadata';

const insights = insightsMetadata;

const getAnimationDelayStyle = (index: number) => ({
  animationDelay: `${index * 0.15}s`,
});

// Returns true when the date string is a parseable date that is on-or-before today
const isPublished = (dateStr: string) => {
  const parsed = Date.parse(dateStr);
  if (isNaN(parsed)) return false; // non-parseable strings like "Coming Soon" are not published
  const d = new Date(parsed);
  const dateOnly = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const today = new Date();
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return dateOnly <= todayOnly;
};

const Insights = () => {
  return (
    <section id="insights" className="py-section bg-background relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 strategy-grid-pattern opacity-5" />

      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <TrendingUp className="h-10 w-10 text-primary" aria-hidden />
          </div>
        </div>
        <h2 className="text-display font-serif font-semibold text-primary mb-4 transition-all duration-300 hover:text-primary-hover">
          Insights
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Strategic perspectives on AI governance and implementation
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {insights.map((insight, index) => {
          const to = insight.id === "forms-of-ai" ? "/insights/forms-of-ai" : `/insights/${insight.id}`;
          const linkable = isPublished(insight.date);

          const card = (
            <Card
              className="group border-border bg-card hover:bg-card-hover rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden hover:border-primary/30 hover:-translate-y-1 opacity-0 animate-slide-in"
              style={getAnimationDelayStyle(index)}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500" />
              <CardHeader>
                <CardTitle className="text-xl font-serif font-semibold text-primary mb-2 group-hover:text-primary transition-colors">
                  {insight.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground text-left">
                  <span className="uppercase tracking-wide text-sm font-medium text-muted-foreground/85">{insight.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{insight.description}</p>
                {linkable && <div className="mt-4 text-primary-hover">Read the full article →</div>}
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          );

          return linkable ? (
            <Link key={insight.id} to={to} className="block group">
              {card}
            </Link>
          ) : (
            <div key={insight.id} className="block group">
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Insights;
