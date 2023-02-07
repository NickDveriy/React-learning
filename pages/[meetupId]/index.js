import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  const { image, title, address, description } = props;
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}

export async function getStaticProps(context) {
  //fetch a data for a single meetup

  const { meetupId } = context.params;

  return {
    props: {
      id: meetupId,
      image:
        "https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg",
      title: "A first meetup",
      address: "Some address",
      description: "Meetup description",
    },
  };
}

// to specify all possible param values (meetupId in this case) for dynamic pages
export function getStaticPaths() {
  return {
    fallback: false, // indicate that all supported paths for this page are defined here in paths array
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export default MeetupDetails;
