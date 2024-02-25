import Collection from '@/components/shared/Collection';
import { Button } from '@/components/ui/button';
import { getEventsByUser } from '@/lib/actions/event.actions';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';

const MyProfile = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const organizedEvents = await getEventsByUser({ userId, page: 1 });
  return (
    <>
      {/* My tickets */}
      <section className={'bg-black bg-dotted-pattern bg-cover bg-center py-5 md:py-10'}>
        <div className='wrapper flex items-center justify-center sm:justify-between'>
          <h3 className={'h3-bold text-center sm:text-left text-white'}>My Tickets</h3>
          <Button asChild className={'button hidden sm:flex'}>
            <Link href={'/#events'}>Explore More Events</Link>
          </Button>
        </div>
      </section>
      {/* <section className={'wrapper my-8'}>
      <Collection
          data={relatedEvents?.data || []}
          emptyTitle={'No event ticket purchased yet'}
          emptyStateSubText={'No worries - Plenty of exiting events to explore!'}
          collectionType={'My_Tickets'}
          urlParamName={'orderPage'}
          limit={3}
          page={1}
          totalPages={2}
          />
      </section> */}
      {/* Events organized */}
      <section className={'bg-black bg-dotted-pattern bg-cover bg-center py-5 md:py-10'}>
        <div className='wrapper flex items-center justify-center sm:justify-between'>
          <h3 className={'h3-bold text-center sm:text-left text-white'}>
            Events Organized
          </h3>
          <Button asChild className={'button hidden sm:flex'}>
            <Link href={'/events/create'}>Create New Event</Link>
          </Button>
        </div>
      </section>
      <section className={'wrapper my-8'}>
        <Collection
          data={organizedEvents?.data || []}
          emptyTitle={'No events have been created yet'}
          emptyStateSubText={'Go create some now!'}
          collectionType={'Events_Organized'}
          urlParamName={'eventsPage'}
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
};

export default MyProfile;
