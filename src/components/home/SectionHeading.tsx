type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  maxWidth?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  maxWidth = "max-w-3xl",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-space-xs ${maxWidth}`}>
      <div className="flex items-center gap-space-xs">
        <span className="h-[1px] w-8 bg-secondary" />
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-headline-lg text-headline-lg text-primary sm:text-[46px] sm:leading-[54px]">
        {title}
      </h2>
      <p className="mt-space-xs font-body-lg text-body-lg text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
