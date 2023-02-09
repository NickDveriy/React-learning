import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  const { image, title, address, description } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
}

export async function getStaticProps(context) {
  // fetch data from API

  const { meetupId } = context.params;

  const mongoClient = await MongoClient.connect(
    "mongodb+srv://nickDV:HnOr1kCdek0oXavM@cluster0.hywt40l.mongodb.net/reactDb?retryWrites=true&w=majority"
  );
  const db = mongoClient.db();

  console.log("meetupId", meetupId);

  const meetupsCollection = db.collection("meetups");

  const { title, image, address, description } =
    await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

  mongoClient.close();

  return {
    props: {
      title,
      image,
      address,
      description,
    }, // props object passed into page component
    revalidate: 60, // number of seconds NextJS will wait until it regenerates this page (for incremental static generation)
  };
}

// to specify all possible param values (meetupId in this case) for dynamic pages
export async function getStaticPaths() {
  const mongoClient = await MongoClient.connect(
    "mongodb+srv://nickDV:HnOr1kCdek0oXavM@cluster0.hywt40l.mongodb.net/reactDb?retryWrites=true&w=majority"
  );
  const db = mongoClient.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  const supportPathes = meetups.map((meetup) => {
    return {
      params: {
        meetupId: meetup._id.toString(),
      },
    };
  });

  return {
    fallback: false, // indicate that all supported paths for this page are defined here in paths array
    paths: supportPathes,
  };
}

export default MeetupDetails;
