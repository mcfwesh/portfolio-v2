import { format,parseISO } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time className="text-slate-500" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};

export default DateFormatter;
