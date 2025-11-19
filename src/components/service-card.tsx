import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 hover:transform hover:scale-105 transition-all duration-300">
      {/* Icon Circle */}
      <div className="w-[88px] h-[88px] rounded-full bg-white shadow-medium flex items-center justify-center mb-6 group-hover:shadow-large transition-shadow">
        <Icon size={40} className="text-[var(--gold-accent)]" strokeWidth={2} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-[var(--navy-primary)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--gray-medium)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
