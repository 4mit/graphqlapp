import { Card } from "./Style";

const RoomCard = ({ data }: any) => {
  return (
    <Card>
      <h1>Rooms</h1>
      <h4>Total:{data.length}</h4>
    </Card>
  );
};
export default RoomCard;
