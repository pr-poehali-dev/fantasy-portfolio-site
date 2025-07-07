import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { blogPosts } from "@/data/portfolio";

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
          <Icon name="PenTool" className="inline mr-4" size={32} />
          Блог
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/50 transition-colors group"
            >
              <CardHeader>
                <CardTitle className="text-purple-300 group-hover:text-purple-200 transition-colors text-lg">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon name="Calendar" size={14} />
                  {post.date}
                  <span>•</span>
                  <Icon name="Clock" size={14} />
                  {post.readTime}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Button
                  variant="ghost"
                  className="w-full text-purple-300 hover:text-purple-200 hover:bg-purple-900/20"
                >
                  <Icon name="ArrowRight" className="mr-2" size={16} />
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
