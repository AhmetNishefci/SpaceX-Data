import { useQuery, gql } from "@apollo/client";

const GET_SPACE_MISSION = gql`
  query {
    launchesPast {
      mission_name
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
        rocket {
          id
        }
      }
      ships {
        image
      }
    }
  }
`;

const useMission = () => {
  const { error, data, loading } = useQuery(GET_SPACE_MISSION);

  return {
    error,
    data,
    loading,
  };
};

export default useMission;
