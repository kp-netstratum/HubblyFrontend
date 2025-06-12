type Props = {
  title: string;
  date: string;
  description: string;
};

const EventCard = ({ title, date, description }: Props) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-sm text-gray-500">{date}</p>
    <p className="mt-2">{description}</p>
  </div>
);

export default EventCard;
