import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);

    const response = await fetch("/api/new-meetup", {
      body: JSON.stringify(enteredMeetupData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("data", data);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add you new cool meetup here" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
