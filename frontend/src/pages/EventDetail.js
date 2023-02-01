import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading one event...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading all events...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  console.log(response);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for this event." },
      { status: 500 }
    );
  }
  const resData = await response.json();
  return resData.event;
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return { isError: true, message: "Could not fetch data." };
    //
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });

    throw json({ message: "Could not fetch events" }, { status: 500 }); // returns Response object and simplifies passing of message
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id), // with await it will wait for this response before loading a page at all
    events: loadEvents(),
  });
};

export const action = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method, // passed from EventItem by useSubmit()
  });

  if (!response.ok) {
    throw json({ message: "Could not delete this event." }, { status: 500 });
  }

  return redirect("/events");
};
