import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { INITIAL_SCREEN_DATA } from "../constant/queries";
import styled from "styled-components";
import BuildingCard from "../components/Card/BuildingCard";
import MeetingCard from "../components/Card/MeetingCard";
import RoomCard from "../components/Card/RoomCard";
import BlockButton from "../components/Button/BlockButton";

const HomeScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HomeScreen = () => {
  const {
    loading,
    error,
    data: trendingData,
  } = useQuery(INITIAL_SCREEN_DATA, {
    fetchPolicy: "no-cache",
  });
  console.log("rendering ...", trendingData, loading, error);

  if (loading) {
    return <h1> Loading data...</h1>;
  }

  if (error) {
    return <h1> OOPS something went wrong ......</h1>;
  }
  const { Buildings, MeetingRooms, Meetings } = trendingData;
  return (
    <>
      <HomeScreenWrapper>
        <BuildingCard data={Buildings} />
        <MeetingCard data={MeetingRooms} />
        <RoomCard data={Meetings} />
        <BlockButton>
          <Link to="/add-meeting">Add a meeting</Link>
        </BlockButton>
      </HomeScreenWrapper>
    </>
  );
};
export default HomeScreen;
