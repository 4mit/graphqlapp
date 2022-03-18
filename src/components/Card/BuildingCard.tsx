import { Card } from "./Style";

const BuildingCard = ({ data }: any) => {
  return (
    <Card>
      <h1>Buildings</h1>
      <h4>Total:{data.length}</h4>
    </Card>
  );
};
export default BuildingCard;
