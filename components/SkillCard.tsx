interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({ title, description }: SkillCardProps) {
  return (
    <article className="rounded-xl border border-slate-700 bg-slate-900 p-5">
      <h3 className="text-lg font-semibold text-cyan-400">{title}</h3>

      <p className="mt-2 leading-7 text-slate-300">{description}</p>
    </article>
  );
}
