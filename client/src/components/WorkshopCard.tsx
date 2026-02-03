import { Card } from '@/components/ui/card';

interface WorkshopCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function WorkshopCard({ title, description, icon }: WorkshopCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border bg-card">
      {icon && (
        <div className="mb-4 text-accent text-3xl">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}
