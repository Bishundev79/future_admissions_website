interface SectionHeaderProps {
  title: string | JSX.Element;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-3xl min-[480px]:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
        {title}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
