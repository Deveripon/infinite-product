import { Button, Card } from "keep-react";

export const Product = ({ title, desc, thumbnail }) => {
    return (
        <Card
            className='!max-w-xs overflow-hidden rounded-md md:!max-w-[478px] bg-gray-200'
            imgSrc={thumbnail}
            imgSize='md'
            horizontal={true}>
            <Card.Container className='space-y-4 p-6'>
                <Card.Title className='flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4'>
                    <span>{title}</span>
                </Card.Title>
                <Card.Container className='flex items-center justify-between'>
                    <Card.Title className='flex items-center gap-2 !text-body-5 font-medium text-metal-500'>
                        <span>{desc}</span>
                    </Card.Title>
                </Card.Container>

                <Button
                    type='primary'
                    size='sm'>
                    Check Out
                </Button>
            </Card.Container>
        </Card>
    );
};

