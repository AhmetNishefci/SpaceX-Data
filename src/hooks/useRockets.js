import { useQuery, gql } from "@apollo/client";

const GET_ROCKET = gql`
  query getRocket($id: ID!) {
    rocket(id: $id) {
      id
      name
      company
      country
      description
      first_stage {
        burn_time_sec
      }
      second_stage {
        burn_time_sec
      }
    }
  }
`;

const useRockets = (id) => {
  const { error, data, loading } = useQuery(GET_ROCKET, {
    variables: {
      id,
    },
  });

  return {
    error,
    data,
    loading,
  };
};

export default useRockets;
