import Link from 'next/link';
import { headers } from 'next/headers';

export default async function NotFound() {
    const headersList = headers();
    const domain = headersList.get('host');
    //const data = await getSiteData(domain);
    return (
        <div>
            <h2>Not Found:{domain} </h2>
            {/* <p>{data.name}</p> */}
            <p>Could not find requested resource</p>
            <p>
                View <Link href='/courses'>all courses</Link>
            </p>
        </div>
    );
}
