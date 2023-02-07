import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg",
    address: "Some address",
    description: "Some first description",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://www.meetup.com/blog/wp-content/uploads/2022/01/pexels-matheus-bertelli-3856033-945x630.jpg",
    address: "Some second address",
    description: "Some second description",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    }, // props object passed into page component
    revalidate: 10, // number of seconds NextJS will wait until it regenerates this page (for incremental static generation)
  };
}

export default HomePage;
