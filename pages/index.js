import { MongoClient } from "mongodb";
import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="List of all amazing meetups available"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// runs for every incoming server request (better for frequently changed data)
// export async function getServerSideProps(context) {
//   // const req = context.req;
//   // const res = context.res;

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

//executed on build phase only before page is even prerendered
export async function getStaticProps() {
  // fetch data from API

  const mongoClient = await MongoClient.connect(
    "mongodb+srv://nickDV:HnOr1kCdek0oXavM@cluster0.hywt40l.mongodb.net/reactDb?retryWrites=true&w=majority"
  );
  const db = mongoClient.db();
  console.log("afawef");

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}).toArray();

  console.log("dddd", meetups);

  mongoClient.close();

  return {
    props: {
      meetups: meetups.map((item) => {
        return { ...item, _id: null, id: item._id.toString() };
      }),
    }, // props object passed into page component
    revalidate: 60, // number of seconds NextJS will wait until it regenerates this page (for incremental static generation)
  };
}

export default HomePage;
