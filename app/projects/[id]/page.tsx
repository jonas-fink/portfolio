import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'detail',
};

const Page = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    const id = params.id;

    return <div>Detail</div>;
};

export default Page;
