type SectionTitleProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
};

const SectionTitle = ({
  badge,
  title,
  description,
  highlight,
  className = "",
}: SectionTitleProps) => {
  return (
    <div className={className}>
      {/* Badge */}
      {badge && (
        <div className="bg-primary/10 text-primary mb-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium">
          <span className="bg-primary mr-2 h-2 w-2 animate-pulse rounded-full"></span>
          {badge}
        </div>
      )}

      {/* Title */}
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        {title}
        {highlight && <span className="text-primary block">{highlight}</span>}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-muted-foreground max-w-2xl text-lg">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
