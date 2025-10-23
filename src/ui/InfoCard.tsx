type InfoCardProps = {
  icon: React.ReactNode;
  field: string;
  value: string;
};

function InfoCard({ icon, field, value }: InfoCardProps) {
  return (
    <div>
      <div className="flex items-center gap-2 rounded-lg border-l-4 border-l-cyan-500 pl-2 text-lg font-semibold text-cyan-600">
        <span>{icon}</span>
        <span>{field}</span>
      </div>
      <div className="pl-3 italic">{value}</div>
    </div>
  );
}

export default InfoCard;
