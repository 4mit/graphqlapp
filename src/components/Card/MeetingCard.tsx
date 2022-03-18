import { Card } from "./Style";

const MeetingCard = ({ data }: any) => {
  return (
    <Card>
      <h1>Meetings</h1>
      <h4>Total:{data.length}</h4>
    </Card>
  );
};
export default MeetingCard;
