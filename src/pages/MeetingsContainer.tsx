import { useState } from "react";
import { Formik } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_BUILDINGS, SAVE_MEETING } from "../constant/queries";
import styled from "styled-components";
import BlockButton from "../components/Button/BlockButton";
import { buttonStyle } from "../components/Button/Style";

const FullWidthInput = styled.input`
  width: 100%;
  margin: 0.21rem 0px;
  padding: 0.51rem 0rem;
`;

const FullWidthCard = styled.div`
  display: flex;
  border: 1px solid #d9c0c0;
  margin: 1rem 0px;
  padding: 0.3rem;
`;

const MeetingsContainer = () => {
  const [bid, setBid] = useState(1);
  const [meetingRoom, setmeetingRoom] = useState<any>([]);
  const [toggleMeetingRoom, setToggle] = useState(false);

  const [addTodo, { data, loading: loadinMeetSave, error: errMeetSave }] =
    useMutation(SAVE_MEETING);

  const { loading, data: buildings } = useQuery(GET_ALL_BUILDINGS, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return <h1> Loading data...</h1>;
  }

  const setBuildingId = (e: any) => {
    let id = e.target.value;
    setBid(Number(id));
    let filteredBuilding = buildings.Buildings.filter((b: { id: any }) => {
      return b.id == id;
    })[0];
    const FILTERED = filteredBuilding.meetingRooms || [];
    setmeetingRoom([...FILTERED]);
  };

  console.log("meetingRooms>>>", buildings);

  const toggleMeetRoomChooser = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("hey");
    setToggle(!toggleMeetingRoom);
  };
  return (
    <div>
      <h1>Add a new Meeting</h1>

      <Formik
        initialValues={{
          date: "",
          startTime: "",
          endTime: "",
          building: "",
          meetingRoomId: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.date) {
            errors.date = true;
          }
          if (!values.startTime) {
            errors.startTime = true;
          }
          if (!values.endTime) {
            errors.endTime = true;
          }
          if (!values.building) {
            errors.building = true;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          let body = {
            id: Number(values.building),
            title: "Booked",
            date: values.date,
            startTime: values.startTime,
            endTime: values.endTime,
            meetingRoomId: Number(values.meetingRoomId),
          };
          addTodo({ variables: { ...body } });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <FullWidthInput
              type="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
            <FullWidthInput
              type="time"
              name="startTime"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.startTime}
            />

            <FullWidthInput
              type="time"
              name="endTime"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.endTime}
            />

            <select
              style={{ padding: "1rem 0px" }}
              name="building"
              value={values.building}
              onChange={(e) => {
                setBuildingId(e);
                return handleChange(e);
              }}
              onBlur={handleBlur}
            >
              <option value="" label="Select a color" />
              {buildings.Buildings.map((b: any, i: any) => {
                return (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                );
              })}
            </select>
            <p>{Object.keys(errors).length ? "There are errors " : null}</p>
            <button
              type="button"
              onClick={toggleMeetRoomChooser}
              disabled={Object.keys(touched).length == 0}
              style={buttonStyle}
            >
              Next
            </button>
            {toggleMeetingRoom && meetingRoom && (
              <div>
                <h2>Please select one of the room</h2>
                {meetingRoom.map((mr: any, i: any) => {
                  return (
                    <FullWidthCard
                      role="group"
                      aria-labelledby="my-radio-group"
                    >
                      <label
                        key={i}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <input
                          type="radio"
                          name="meetingRoomId"
                          value={mr.id}
                          onChange={handleChange}
                        />

                        <div>
                          {/* meeting room name */}
                          <b>{mr.name}</b>
                          {/* building name */}
                          <div>Building ID - {values.building}</div>
                          {/* no of floors  */}
                          <div>Floor - {mr.floor}</div>
                        </div>
                      </label>
                    </FullWidthCard>
                  );
                })}

                <BlockButton
                  disabled={isSubmitting || Object.keys(errors).length}
                >
                  Save
                </BlockButton>
                {loadinMeetSave && <h1>Adding a new meeting </h1>}
              </div>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};
export default MeetingsContainer;
