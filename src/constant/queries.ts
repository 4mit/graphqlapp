import { gql } from "@apollo/client";

export const SAVE_MEETING = gql`
  mutation (
    $id: Int!
    $title: String!
    $date: String!
    $startTime: String!
    $endTime: String!
    $meetingRoomId: Int!
  ) {
    Meeting(
      id: $id
      title: $title
      date: $date
      startTime: $startTime
      endTime: $endTime
      meetingRoomId: $meetingRoomId
    ) {
      id
      title
    }
  }
`;

export const GET_ALL_BUILDINGS = gql`
  query {
    Buildings {
      id
      name
      meetingRooms {
        id
        name
        floor
        meetings {
          id
          title
          date
          startTime
          endTime
        }
      }
    }
  }
`;
export const INITIAL_SCREEN_DATA = gql`
  query {
    Buildings {
      id
      name
      meetingRooms {
        name
        meetings {
          title
          date
          startTime
          endTime
        }
      }
    }
    MeetingRooms {
      id
      name
      floor
      building {
        name
      }
      meetings {
        id
        title
        date
        startTime
        endTime
      }
    }
    Meetings {
      id
      title
      date
      startTime
      endTime
    }
  }
`;
export const MEETINGS_BY_BUILDING_ID = gql`
  query ($id: Int!) {
    Building(id: $id) {
      id
      name
      meetingRooms {
        id
        name
        floor
      }
    }
  }
`;

export const MEETINGS_ON_BUILDING = gql`
  query ($id: Int!) {
    Building(id: $id) {
      id
      name
      meetingRooms {
        id
        name
        floor
        meetings {
          id
          title
          date
          startTime
          endTime
        }
      }
    }
  }
`;
